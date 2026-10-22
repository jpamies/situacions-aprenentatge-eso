// Càlcul de cobertura curricular, alertes, recomanacions i revisió de coherència (sense IA).
import { CURRICULUM, VECTORS } from "./curriculum.js";
import { THEMES } from "./themes.js";
import { THEME_META } from "./meta.js";

export const allCriteria = (subject) => CURRICULUM[subject].ces.flatMap((ce) => ce.criteris.map((c) => ({ ...c, ce: ce.id })));
export const allSabers = (subject) => CURRICULUM[subject].sabers.flatMap((b) => b.items.map((i) => ({ ...i, block: b.id })));

export const availableSessions = (prog) => prog.hours * prog.weeks.reduce((a, b) => a + b, 0);

// entries: [{ sa, trim, curs }] amb sa = element desat (amb params)
export function computeCoverage(subject, entries, prioritized) {
  const crit = allCriteria(subject);
  const sab = allSabers(subject);
  const prio = new Set(prioritized?.length ? prioritized : crit.map((c) => c.id));
  const critCount = Object.fromEntries(crit.map((c) => [c.id, []]));
  const sabCount = Object.fromEntries(sab.map((s) => [s.id, []]));
  const vecCount = Object.fromEntries(VECTORS.map((v) => [v.id, 0]));
  const ceTrims = Object.fromEntries(CURRICULUM[subject].ces.map((ce) => [ce.id, new Set()]));
  const trimSessions = [0, 0, 0];
  let planned = 0;
  for (const e of entries) {
    const p = e.sa.params || {};
    planned += p.sessions || 0;
    trimSessions[(e.trim || 1) - 1] += p.sessions || 0;
    (p.criteris || []).forEach((id) => { if (critCount[id]) { critCount[id].push(e); ceTrims[id.split(".")[0]]?.add(e.trim); } });
    (p.sabers || []).forEach((id) => sabCount[id]?.push(e));
    (p.vectors || []).forEach((id) => { if (id in vecCount) vecCount[id]++; });
  }
  const prioCrit = crit.filter((c) => prio.has(c.id));
  return {
    crit, sab, prio, critCount, sabCount, vecCount, ceTrims, trimSessions, planned,
    critCovered: prioCrit.filter((c) => critCount[c.id].length).length, critTotal: prioCrit.length,
    sabCovered: sab.filter((s) => sabCount[s.id].length).length, sabTotal: sab.length
  };
}

// Alertes: { sev: "error"|"warn"|"info", key, args }
export function programAlerts(prog, cov, entries, { cycle = false } = {}) {
  const a = [];
  const subj = CURRICULUM[prog.subject];
  if (!entries.length) { a.push({ sev: "info", key: "noSA" }); return a; }

  const missing = cov.crit.filter((c) => cov.prio.has(c.id) && !cov.critCount[c.id].length);
  subj.ces.forEach((ce) => {
    const ids = ce.criteris.map((c) => c.id).filter((id) => cov.prio.has(id));
    if (ids.length && ids.every((id) => !cov.critCount[id].length)) a.push({ sev: "error", key: "ceMissing", args: [ce.id] });
  });
  const missingLoose = missing.filter((c) => !subj.ces.find((ce) => ce.id === c.ce).criteris.filter((x) => cov.prio.has(x.id)).every((x) => !cov.critCount[x.id].length));
  if (missingLoose.length) a.push({ sev: "error", key: "critMissing", args: [missingLoose.map((c) => c.id)] });

  const once = cov.crit.filter((c) => cov.prio.has(c.id) && cov.critCount[c.id].length === 1);
  if (once.length && entries.length >= 3) a.push({ sev: "info", key: "critOnce", args: [once.map((c) => c.id)] });

  const sabMissing = cov.sab.filter((s) => !cov.sabCount[s.id].length);
  if (sabMissing.length) a.push({ sev: "warn", key: "sabMissing", args: [sabMissing.length, sabMissing.map((s) => s.id)] });

  if (!cycle) {
    const avail = availableSessions(prog);
    if (cov.planned > avail) a.push({ sev: "error", key: "overSessions", args: [cov.planned, avail] });
    else if (cov.planned < avail * 0.8) a.push({ sev: "info", key: "freeSessions", args: [avail - cov.planned, avail] });
    prog.weeks.forEach((w, i) => {
      const t = entries.filter((e) => e.trim === i + 1);
      if (!t.length) a.push({ sev: "warn", key: "emptyTrim", args: [i + 1] });
      else if (cov.trimSessions[i] > w * prog.hours) a.push({ sev: "warn", key: "overTrim", args: [i + 1, cov.trimSessions[i], w * prog.hours] });
    });
    if (entries.length >= 3) {
      Object.entries(cov.ceTrims).forEach(([ce, trims]) => {
        if (trims.size === 1) a.push({ sev: "info", key: "ceOneTrim", args: [ce, [...trims][0]] });
      });
    }
  }
  Object.entries(cov.vecCount).forEach(([v, n]) => { if (!n) a.push({ sev: "warn", key: "vectorMissing", args: [v] }); });

  entries.forEach((e) => {
    const p = e.sa.params || {};
    if ((p.criteris || []).length > Math.max(8, (p.sessions || 0) * 0.75)) a.push({ sev: "warn", key: "saOverloaded", args: [e.sa.title, (p.criteris || []).length, p.sessions] });
  });
  return a;
}

// Recomanacions de contextos per cobrir buits
export function recommend(prog, cov, usedThemeIds, { lang }) {
  const res = new Set(prog.resources || []);
  return THEMES.filter((t) => t.subject === prog.subject && !usedThemeIds.has(t.id)).map((t) => {
    const meta = THEME_META[t.id] || { needs: [], sessions: 10 };
    const newCrit = t.criteris.filter((id) => cov.prio.has(id) && !cov.critCount[id]?.length);
    const newSab = t.sabers.filter((id) => !cov.sabCount[id]?.length);
    const missingRes = meta.needs.filter((n) => !res.has(n));
    const fitsCourse = t.cursos.includes(prog.curs);
    let score = newCrit.length * 3 + newSab.length + (fitsCourse ? 2 : 0) - missingRes.length * 4;
    return { theme: t, meta, newCrit, newSab, missingRes, fitsCourse, score, title: t.title[lang] };
  }).sort((x, y) => y.score - x.score);
}

// Revisió de coherència d'una SA concreta
export function saCoherence(p) {
  const a = [];
  const subj = CURRICULUM[p.subject];
  const nCrit = p.criteris.length;
  p.ces.forEach((id) => {
    const ids = subj.ces.find((c) => c.id === id).criteris.map((c) => c.id);
    if (!ids.some((x) => p.criteris.includes(x))) a.push({ sev: "error", key: "ceNoCrit", args: [id] });
  });
  if (nCrit > Math.max(8, p.sessions * 0.75)) a.push({ sev: "warn", key: "tooManyCrit", args: [nCrit, p.sessions] });
  if (!p.sabers.length) a.push({ sev: "warn", key: "noSabers" });
  else if (p.sabers.length > 12) a.push({ sev: "info", key: "manySabers", args: [p.sabers.length] });
  if (p.sessions < 4) a.push({ sev: "info", key: "short" });
  if (p.sessions > 20) a.push({ sev: "info", key: "long" });
  if (!p.vectors.includes("genere")) a.push({ sev: "warn", key: "noGenere" });
  if (!p.vectors.includes("universalitat")) a.push({ sev: "warn", key: "noUniversal" });
  if (!p.dua.includes("a1")) a.push({ sev: "info", key: "noFormats" });
  if (!p.dua.some((d) => d.startsWith("r"))) a.push({ sev: "warn", key: "noRepresentation" });
  if (!p.cc.length) a.push({ sev: "info", key: "noCC" });
  if (p.themeId === "custom" && !p.aiTheme) {
    if (!p.custom.context.trim()) a.push({ sev: "warn", key: "noContext" });
    if (!p.custom.producte.trim()) a.push({ sev: "warn", key: "noProduct" });
  }
  if (p.grouping === "indiv" && p.methodology !== "gam") a.push({ sev: "info", key: "indiv" });
  return a;
}
