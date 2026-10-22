// Generador: a partir dels paràmetres del formulari construeix l'HTML de la situació d'aprenentatge.
import { CURRICULUM, VECTORS, COMPETENCIES_CLAU, ODS } from "./curriculum.js";
import { THEMES } from "./themes.js";
import { T, OPTIONS } from "./i18n.js";

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Escurça un criteri a la seva primera clàusula per fer-lo servir com a objectiu o etiqueta.
function shortCriterion(text) {
  const cut = text.search(/,? (tot |fent |mitjançant|emprant|utilitzant|aplicant|analitzant|avaluant|configurant|tenint|valorant|treballant|identificant|seguint|posant|haciendo|mediante|empleando|utilizando|aplicando|analizando|evaluando|configurando|teniendo|valorando|trabajando|identificando|siguiendo|poniendo)/);
  const s = cut > 25 ? text.slice(0, cut) : text.replace(/\.$/, "");
  return s.replace(/\.$/, "");
}

function splitSessions(n) {
  const ini = Math.max(1, Math.round(n * 0.15));
  const est = Math.max(1, Math.round(n * 0.15));
  const apl = Math.max(1, Math.round(n * 0.3));
  const dev = Math.max(1, n - ini - est - apl);
  const parts = [ini, dev, est, apl];
  let start = 1;
  return parts.map((len) => { const r = [start, start + len - 1]; start += len; return r; });
}

export function buildSA(p, lang) {
  const t = T[lang];
  const subj = CURRICULUM[p.subject];
  const theme = p.aiTheme || THEMES.find((x) => x.id === p.themeId);
  const L = (o) => (o ? o[lang] : "");

  const title = theme ? L(theme.title) : p.custom.title;
  const context = theme ? L(theme.context) : p.custom.context;
  const repte = theme ? L(theme.repte) : p.custom.repte;
  const producte = theme ? L(theme.producte) : p.custom.producte;

  // Selecció curricular
  const ces = subj.ces.filter((ce) => p.ces.includes(ce.id)).map((ce) => ({
    ...ce, crit: ce.criteris.filter((c) => p.criteris.includes(c.id))
  }));
  const allCrit = ces.flatMap((ce) => ce.crit);
  const sabers = subj.sabers.map((b) => ({ ...b, items: b.items.filter((i) => p.sabers.includes(i.id)) })).filter((b) => b.items.length);

  // Objectius
  const objectius = theme
    ? theme.objectius.map(L)
    : allCrit.slice(0, 5).map((c) => t.customObj(shortCriterion(c[lang]), title));

  // Activitats
  const extraCes = theme ? p.ces.filter((id) => !theme.ces.includes(id)) : p.ces;
  const ceActs = extraCes.map((id) => t.ceActivities[p.subject][id]).filter(Boolean);
  const acts = {
    inici: [t.shareCriteria, ...(theme ? theme.activitats.inici.map(L) : t.customInici(repte))],
    desenvolupament: [...(theme ? theme.activitats.desenvolupament.map(L) : []), ...ceActs.map((a) => (theme ? `${t.extraActivity}: ${a}` : a))],
    estructuracio: theme ? theme.activitats.estructuracio.map(L) : t.customEstr,
    aplicacio: [...(theme ? theme.activitats.aplicacio.map(L) : t.customApl(producte)), t.finalSelf]
  };
  const ranges = splitSessions(p.sessions);

  // Instruments
  const instruments = ces.map((ce) => {
    const [name, agent] = t.ceInstruments[p.subject][ce.id];
    return { name, agent, crit: ce.crit.map((c) => c.id).join(", ") || ce.id };
  });
  t.commonInstruments.forEach(([name, agent]) => instruments.push({ name, agent, crit: allCrit.map((c) => c.id).join(", ") }));

  const opt = (list, id) => L(OPTIONS[list].find((o) => o.id === id));
  const today = new Date().toLocaleDateString(lang === "ca" ? "ca-ES" : "es-ES");

  // ── HTML ──
  const h = [];
  h.push(`<header class="sa-head"><p class="kicker">${esc(t.docKicker)}</p><h1>${esc(title)}</h1>
    <dl class="meta">
      <div><dt>${t.subject}</dt><dd>${esc(L(subj.name))}</dd></div>
      <div><dt>${t.course}</dt><dd>${esc(p.cursLabel)}</dd></div>
      <div><dt>${t.duration}</dt><dd>${esc(t.sessions(p.sessions, p.sessionMin))}</dd></div>
      <div><dt>${t.grouping}</dt><dd>${esc(opt("grouping", p.grouping))}</dd></div>
      <div><dt>${t.methodology}</dt><dd>${esc(opt("methodology", p.methodology))}</dd></div>
    </dl></header>`);

  h.push(`<section><h2>${t.sDesc}</h2>
    ${context.trim() ? `<h3>${t.context}</h3><p>${esc(context)}</p>` : ""}
    <div class="callout"><h3>${t.repte}</h3><p class="repte">${esc(repte)}</p></div>
    <h3>${t.producte}</h3><p>${esc(producte)}</p></section>`);

  h.push(`<section><h2>${t.sObj}</h2><ol>${objectius.map((o) => `<li>${esc(o)}</li>`).join("")}</ol></section>`);

  h.push(`<section><h2>${t.sCurr}</h2>
    <table class="curr"><thead><tr><th>${t.ceHead}</th><th>${t.critHead}</th></tr></thead><tbody>
    ${ces.map((ce) => `<tr><td><strong>CE${ce.id}.</strong> ${esc(ce.text[lang])}</td><td>${ce.crit.map((c) => `<p><strong>${c.id}</strong> ${esc(c[lang])}</p>`).join("")}</td></tr>`).join("")}
    </tbody></table>
    <h3>${t.sabers}</h3>
    ${sabers.map((b) => `<p class="block-title">${esc(b.title[lang])}</p><ul>${b.items.map((i) => `<li>${esc(i[lang])}</li>`).join("")}</ul>`).join("")}
    <h3>${t.cc}</h3><p>${COMPETENCIES_CLAU.filter((c) => p.cc.includes(c.id)).map((c) => `<span class="tag">${c.id}</span> ${esc(c[lang])}`).join("<br>")}</p>
    <h3>${t.vectors}</h3>
    <ul>${VECTORS.filter((v) => p.vectors.includes(v.id)).map((v) => `<li><strong>${esc(v[lang])}.</strong> ${esc(t.vectorActions[v.id])}</li>`).join("")}</ul>
    ${p.ods.length ? `<h3>${t.ods}</h3><p>${p.ods.map((n) => `<span class="tag ods">ODS ${n}</span> ${esc(ODS[n][lang])}`).join(" · ")}</p>` : ""}
    </section>`);

  h.push(`<section><h2>${t.sSeq}</h2>
    ${["inici", "desenvolupament", "estructuracio", "aplicacio"].map((ph, i) => `
      <div class="phase phase-${i + 1}"><h3><span class="phase-n">${i + 1}</span>${t.phases[ph]} <small>(${t.sessionsRange(...ranges[i])})</small></h3>
      <ul>${acts[ph].map((a) => `<li>${esc(a)}</li>`).join("")}</ul></div>`).join("")}
    <h3>${t.sGrad}</h3><p>${esc(t.grad[p.curs])}</p>
    </section>`);

  h.push(`<section><h2>${t.sAval}</h2><p>${t.avalIntro}</p>
    <h3>${t.instruments}</h3>
    <table><thead><tr><th>${t.instrument}</th><th>${t.criteria}</th><th>${t.agent}</th></tr></thead><tbody>
    ${instruments.map((x) => `<tr><td>${esc(x.name)}</td><td>${esc(x.crit)}</td><td>${t.agents[x.agent]}</td></tr>`).join("")}
    </tbody></table>
    <h3>${t.rubric}</h3>
    <div class="table-wrap"><table class="rubric"><thead><tr><th>${t.critHead}</th><th>NA</th><th>AS</th><th>AN</th><th>AE</th></tr></thead><tbody>
    ${allCrit.map((c) => `<tr><td><strong>${c.id}</strong> ${esc(shortCriterion(c[lang]))}</td><td>${t.levels.NA}</td><td>${t.levels.AS}</td><td>${t.levels.AN}</td><td>${t.levels.AE}</td></tr>`).join("")}
    </tbody></table></div></section>`);

  const duaSel = OPTIONS.dua.filter((d) => p.dua.includes(d.id));
  h.push(`<section><h2>${t.sDua}</h2>
    ${["imp", "rep", "acc"].map((pr) => {
      const items = duaSel.filter((d) => d.p === pr);
      return items.length ? `<p class="block-title">${esc(OPTIONS.duaPrinciples[pr][lang])}</p><ul>${items.map((d) => `<li>${esc(d[lang])}</li>`).join("")}</ul>` : "";
    }).join("")}
    ${p.extra.trim() ? `<h3>${t.extraSupports}</h3><p>${esc(p.extra).replace(/\n/g, "<br>")}</p>` : ""}
    </section>`);

  if (theme) {
    h.push(`<section><h2>${t.sConn}</h2><p>${esc(L(theme.connexions))}</p><h2>${t.sRes}</h2><p>${esc(L(theme.recursos))}</p></section>`);
  }
  h.push(`<footer class="sa-foot"><p>${esc(t.footer(today))}</p></footer>`);

  return { title, html: h.join("\n") };
}

// Prompt per enriquir la SA amb un assistent d'IA extern
export function buildPrompt(docText, lang) {
  if (lang === "es") {
    return `Actúa como docente experto/a de Tecnología de ESO en Cataluña y conocedor/a del Decreto 175/2022 y de las orientaciones del Departament d'Educació para programar situaciones de aprendizaje.

A continuación tienes el borrador de una situación de aprendizaje. Mejóralo sin cambiar las competencias específicas, los criterios de evaluación ni los saberes oficiales:
1. Concreta cada actividad (duración, agrupamiento, materiales y producción que genera el alumnado).
2. Redacta descriptores específicos de la rúbrica (NA, AS, AN, AE) para cada criterio, adaptados al reto.
3. Propón una base de orientación y un KPSI inicial/final.
4. Añade medidas DUA concretas para este reto.

BORRADOR:
${docText}`;
  }
  return `Actua com a docent expert/a de Tecnologia d'ESO a Catalunya i coneixedor/a del Decret 175/2022 i de les orientacions del Departament d'Educació per programar situacions d'aprenentatge.

A continuació tens l'esborrany d'una situació d'aprenentatge. Millora'l sense canviar les competències específiques, els criteris d'avaluació ni els sabers oficials:
1. Concreta cada activitat (durada, agrupament, materials i producció que genera l'alumnat).
2. Redacta descriptors específics de la rúbrica (NA, AS, AN, AE) per a cada criteri, adaptats al repte.
3. Proposa una base d'orientació i un KPSI inicial/final.
4. Afegeix mesures DUA concretes per a aquest repte.

ESBORRANY:
${docText}`;
}

// Converteix el document (possiblement editat) a Markdown
export function toMarkdown(root) {
  const out = [];
  const walk = (el) => {
    for (const n of el.children) {
      const tag = n.tagName.toLowerCase();
      const txt = () => n.innerText.replace(/\s+\n/g, "\n").trim();
      if (tag === "h1") out.push(`# ${txt()}`, "");
      else if (tag === "h2") out.push(`## ${txt()}`, "");
      else if (tag === "h3") out.push(`### ${txt()}`, "");
      else if (tag === "p") { if (txt()) out.push(n.classList.contains("block-title") ? `**${txt()}**` : txt(), ""); }
      else if (tag === "ul" || tag === "ol") { [...n.children].forEach((li, i) => out.push(`${tag === "ol" ? i + 1 + "." : "-"} ${li.innerText.trim()}`)); out.push(""); }
      else if (tag === "dl") { n.querySelectorAll("div").forEach((d) => out.push(`- **${d.querySelector("dt").innerText}:** ${d.querySelector("dd").innerText}`)); out.push(""); }
      else if (tag === "table") {
        const rows = [...n.querySelectorAll("tr")].map((tr) => [...tr.children].map((c) => c.innerText.replace(/\s*\n\s*/g, " ").replace(/\|/g, "/").trim()));
        if (rows.length) {
          out.push(`| ${rows[0].join(" | ")} |`, `| ${rows[0].map(() => "---").join(" | ")} |`);
          rows.slice(1).forEach((r) => out.push(`| ${r.join(" | ")} |`));
          out.push("");
        }
      } else walk(n);
    }
  };
  walk(root);
  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}
