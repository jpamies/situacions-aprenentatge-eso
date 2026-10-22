// Vista "Programació": programació de curs, mapa de cobertura, alertes i recomanacions.
import { CURRICULUM } from "./curriculum.js";
import { RESOURCES } from "./meta.js";
import { KEY, store, newId, getItems, getProgs, setProgs } from "./store.js";
import { computeCoverage, programAlerts, recommend, allCriteria, availableSessions } from "./coverage.js";
import { aiEnabled, aiProposeSA, aiReview } from "./ai.js";
import { esc } from "./generator.js";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

let ctx; // { lang(), u(), onCreateFromTheme, onCreateNew, onOpenSA, onAIProposal, aiError, download }

export function initProgram(context) {
  ctx = context;
  $("#view-prog").addEventListener("change", onChange);
  $("#view-prog").addEventListener("input", (e) => { if (e.target.name === "name") onChange(e); });
  $("#view-prog").addEventListener("click", onClick);
  window.addEventListener("afterprint", () => document.body.classList.remove("print-prog"));
}

const activeId = () => store.get(KEY.activeProg, null);
function activeProg() {
  const progs = getProgs();
  return progs.find((p) => p.id === activeId()) || progs[0] || null;
}
function saveProg(prog) {
  const progs = getProgs();
  const i = progs.findIndex((p) => p.id === prog.id);
  prog.updatedAt = new Date().toISOString();
  if (i >= 0) progs[i] = prog; else progs.unshift(prog);
  setProgs(progs);
}

export function createProg(subject = "tid", curs) {
  const u = ctx.u();
  const s = CURRICULUM[subject];
  const c = curs || s.cursos[0];
  const prog = {
    id: newId(), name: u.progDefaultName(s.name[ctx.lang()], u.courseN(c)), subject, curs: c,
    hours: subject === "tid" ? 2 : 3, weeks: [11, 11, 11], resources: ["taller"], prioritized: [], scope: "course",
    items: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  };
  saveProg(prog);
  store.set(KEY.activeProg, prog.id);
  return prog;
}

function entriesFor(prog) {
  const items = getItems();
  if (prog.scope === "cycle" && prog.subject === "tid") {
    const byCurs = {};
    getProgs().filter((p) => p.subject === "tid" && ["1", "2", "3"].includes(p.curs))
      .forEach((p) => { if (!byCurs[p.curs] || byCurs[p.curs].updatedAt < p.updatedAt) byCurs[p.curs] = p; });
    return Object.values(byCurs).flatMap((p) => p.items.map((it) => ({ sa: items.find((x) => x.id === it.saId), trim: it.trim, curs: p.curs })).filter((e) => e.sa));
  }
  return prog.items.map((it) => ({ sa: items.find((x) => x.id === it.saId), trim: it.trim, curs: prog.curs })).filter((e) => e.sa);
}

function bestTrim(prog, cov) {
  let best = 1, bestFree = -Infinity;
  prog.weeks.forEach((w, i) => { const free = w * prog.hours - cov.trimSessions[i]; if (free > bestFree) { bestFree = free; best = i + 1; } });
  return best;
}

// ── Render ──
export function renderProgram() {
  const u = ctx.u(); const lang = ctx.lang();
  const prog = activeProg();
  const progs = getProgs();
  const side = $("#progSettings"); const main = $("#progMain");
  if (!prog) {
    side.innerHTML = `<h2>${u.progTitle}</h2><p class="help">${u.progIntro}</p><button type="button" class="primary big" data-pact="new">${u.progNew}</button>`;
    main.innerHTML = `<div class="panel empty-msg">${u.emptyProg}</div>`;
    return;
  }
  const subj = CURRICULUM[prog.subject];
  const crit = allCriteria(prog.subject);
  const isCycle = prog.scope === "cycle" && prog.subject === "tid";

  side.innerHTML = `
    <h2>${u.progTitle}</h2>
    <p class="help">${u.progIntro}</p>
    <label class="field"><span>${u.progSelect}</span>
      <select name="active">${progs.map((p) => `<option value="${p.id}" ${p.id === prog.id ? "selected" : ""}>${esc(p.name)}</option>`).join("")}</select></label>
    <div class="row-btns"><button type="button" data-pact="new">＋ ${u.progNew}</button><button type="button" class="danger" data-pact="delete">${u.progDelete}</button></div>
    <hr>
    <label class="field"><span>${u.progName}</span><input name="name" value="${esc(prog.name)}"></label>
    <label class="field"><span>${u.subject}</span><select name="subject">${Object.entries(CURRICULUM).map(([k, s]) => `<option value="${k}" ${k === prog.subject ? "selected" : ""}>${esc(s.name[lang])}</option>`).join("")}</select></label>
    <div class="grid2">
      <label class="field"><span>${u.course}</span><select name="curs">${subj.cursos.map((c) => `<option value="${c}" ${c === prog.curs ? "selected" : ""}>${u.courseN(c)}</option>`).join("")}</select></label>
      <label class="field"><span>${u.hours}</span><input type="number" name="hours" min="1" max="8" value="${prog.hours}"></label>
    </div>
    <span class="field-label">${u.weeks}</span>
    <div class="grid3">${prog.weeks.map((w, i) => `<label class="field"><span>${u.trimN(i + 1)}</span><input type="number" name="week${i}" min="0" max="20" value="${w}"></label>`).join("")}</div>
    ${prog.subject === "tid" ? `<div class="seg two">
      <label class="seg-opt"><input type="radio" name="scope" value="course" ${!isCycle ? "checked" : ""}><span>${u.scopeCourse}</span></label>
      <label class="seg-opt"><input type="radio" name="scope" value="cycle" ${isCycle ? "checked" : ""}><span>${u.scopeCycle}</span></label></div>` : ""}
    <details><summary>${u.resources}</summary>
      ${RESOURCES.map((r) => `<label class="chk"><input type="checkbox" name="resources" value="${r.id}" ${prog.resources.includes(r.id) ? "checked" : ""}><span>${esc(r[lang])}</span></label>`).join("")}
    </details>
    <details><summary>${u.prioritized} <span class="count">(${prog.prioritized.length || crit.length}/${crit.length})</span></summary>
      ${prog.subject === "tid" ? `<p class="help">${u.prioritizedHelp}</p>` : ""}
      ${subj.ces.map((ce) => `<p class="block-title">CE${ce.id}</p>${ce.criteris.map((c) => `<label class="chk"><input type="checkbox" name="prio" value="${c.id}" ${!prog.prioritized.length || prog.prioritized.includes(c.id) ? "checked" : ""}><span><strong>${c.id}</strong> ${esc(c[lang])}</span></label>`).join("")}`).join("")}
    </details>`;

  const entries = entriesFor(prog);
  const prio = isCycle ? [] : prog.prioritized;
  const cov = computeCoverage(prog.subject, entries, prio);
  const alerts = programAlerts(prog, cov, entries, { cycle: isCycle });
  const used = new Set(entries.map((e) => e.sa.params?.themeId).filter(Boolean));
  const recos = recommend(prog, cov, used, { lang }).slice(0, 5);
  const avail = availableSessions(prog);
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const savedForSubject = getItems().filter((x) => x.params?.subject === prog.subject && !prog.items.some((i) => i.saId === x.id));
  const vecName = (v) => u.vectorsShort[v] || v;
  const alertText = (a) => {
    const args = a.key === "vectorMissing" ? [vecName(a.args[0])] : (a.args || []);
    return u.alert[a.key](...args);
  };
  const numbered = entries.map((e, i) => ({ ...e, n: i + 1 }));

  main.innerHTML = `
    <div class="panel">
      <div class="prog-head">
        <div><p class="kicker">${esc(subj.name[lang])} · ${isCycle ? u.scopeCycle : u.courseN(prog.curs)}</p><h2>${esc(prog.name)}</h2></div>
        <div class="row-btns">
          <button type="button" data-pact="print">${u.printProg}</button>
          <button type="button" data-pact="html">${u.downloadHtml}</button>
        </div>
      </div>
      ${isCycle ? `<p class="help">${u.cycleNote}</p>` : ""}
      <div class="stats">
        ${isCycle ? "" : `<div class="stat"><span>${u.sessionsBar(cov.planned, avail)}</span><div class="bar ${cov.planned > avail ? "over" : ""}"><i style="width:${Math.min(100, pct(cov.planned, avail))}%"></i></div></div>`}
        <div class="stat"><span>${u.critCov}: <strong>${cov.critCovered}/${cov.critTotal}</strong></span><div class="bar"><i style="width:${pct(cov.critCovered, cov.critTotal)}%"></i></div></div>
        <div class="stat"><span>${u.sabCov}: <strong>${cov.sabCovered}/${cov.sabTotal}</strong></span><div class="bar"><i style="width:${pct(cov.sabCovered, cov.sabTotal)}%"></i></div></div>
        <div class="stat"><span>${u.saCount}: <strong>${entries.length}</strong></span></div>
      </div>
    </div>

    ${isCycle ? "" : `<div class="panel">
      <h3>${u.trimesters}</h3>
      <div class="trims">
        ${prog.weeks.map((w, i) => `<div class="trim"><h4>${u.trimN(i + 1)} <small>${cov.trimSessions[i]}/${w * prog.hours}</small></h4>
          ${numbered.filter((e) => e.trim === i + 1).map((e) => `<div class="sa-card" data-said="${esc(e.sa.id)}">
            <strong><span class="num">S${e.n}</span> ${esc(e.sa.title)}</strong>
            <span class="muted">${e.sa.params?.sessions || "?"} ${u.ai.sessionsShort} · ${(e.sa.params?.criteris || []).join(", ")}</span>
            <div class="row-btns small">
              <select name="trim" aria-label="${u.moveTo}">${[1, 2, 3].map((t) => `<option value="${t}" ${t === e.trim ? "selected" : ""}>${u.trimN(t)}</option>`).join("")}</select>
              <button type="button" data-pact="open">${u.openSA}</button>
              <button type="button" class="danger" data-pact="remove" title="${u.remove}">✕</button>
            </div></div>`).join("")}
        </div>`).join("")}
      </div>
      <div class="row-btns">
        <select name="addSaved"><option value="">${savedForSubject.length ? u.addSaved : u.noSavedForSubject}</option>${savedForSubject.map((x) => `<option value="${esc(x.id)}">${esc(x.title)}</option>`).join("")}</select>
        <button type="button" data-pact="createNew">＋ ${u.addNew}</button>
        <button type="button" class="ai-btn" data-pact="aiPropose">✨ ${u.ai.proposeSA}</button>
        <button type="button" class="ai-btn" data-pact="aiReview">✨ ${u.ai.reviewProg}</button>
      </div>
      <div id="progAiOut" aria-live="polite"></div>
    </div>`}

    <div class="panel">
      <h3>${u.alerts}</h3>
      ${alerts.length ? `<ul class="alerts">${alerts.map((a) => `<li class="sev-${a.sev}">${esc(alertText(a))}</li>`).join("")}</ul>` : `<p class="ok">${u.noAlerts}</p>`}
    </div>

    ${isCycle ? "" : `<div class="panel">
      <h3>${u.recos}</h3><p class="help">${u.recosIntro}</p>
      <div class="recos">${recos.map((r) => `<div class="reco">
        <strong>${esc(r.title)}</strong>
        <span class="muted">${esc(r.theme.repte[lang])}</span>
        <ul class="reco-why">
          <li class="${r.newCrit.length ? "good" : ""}">${esc(u.recoCovers(r.newCrit.length, r.newCrit))}</li>
          ${r.newSab.length ? `<li>${u.recoSabers(r.newSab.length)}</li>` : ""}
          <li>${u.recoSessions(r.meta.sessions)}${r.fitsCourse ? ` · ${u.recoCourse}` : ""}</li>
          ${r.missingRes.length ? `<li class="bad">${esc(u.recoNeeds(r.missingRes.map((id) => RESOURCES.find((x) => x.id === id)[lang]).join(", ")))}</li>` : ""}
        </ul>
        <button type="button" class="primary" data-pact="reco" data-theme="${r.theme.id}">${u.recoCreate}</button>
      </div>`).join("")}</div>
    </div>`}

    <div class="panel">
      <details ${entries.length ? "open" : ""}><summary>${u.matrixCrit}</summary>
        <p class="help">${u.matrixNote}</p>
        ${matrix(subj.ces.flatMap((ce) => ce.criteris.map((c) => ({ id: c.id, label: c[lang], group: `CE${ce.id}`, prio: cov.prio.has(c.id) }))), cov.critCount, numbered)}
      </details>
      <details><summary>${u.matrixSab}</summary>
        ${matrix(subj.sabers.flatMap((b) => b.items.map((i) => ({ id: i.id, label: i[lang], group: b.title[lang], prio: true }))), cov.sabCount, numbered)}
      </details>
      ${numbered.length ? `<ol class="legend">${numbered.map((e) => `<li value="${e.n}"><strong>S${e.n}</strong> ${esc(e.sa.title)}${isCycle ? ` (${u.courseN(e.curs)})` : ` · ${u.trimN(e.trim)}`}</li>`).join("")}</ol>` : ""}
    </div>
    <article id="progDoc" class="sa-doc prog-doc"></article>`;

  function matrix(rows, counts, cols) {
    let lastGroup = null;
    return `<div class="table-wrap"><table class="matrix"><thead><tr><th></th>${cols.map((e) => `<th title="${esc(e.sa.title)}">S${e.n}</th>`).join("")}<th>${u.matrixTotal}</th></tr></thead><tbody>
      ${rows.map((r) => {
        const n = counts[r.id].length;
        const head = r.group !== lastGroup ? `<tr class="grp"><td colspan="${cols.length + 2}">${esc(r.group)}</td></tr>` : "";
        lastGroup = r.group;
        const have = new Set(counts[r.id].map((e) => e.sa.id + "|" + e.curs));
        return `${head}<tr class="${r.prio ? "" : "noprio"}"><td title="${esc(r.label)}"><strong>${r.id}</strong> <span class="lbl">${esc(r.label)}</span></td>
          ${cols.map((e) => `<td class="cell">${have.has(e.sa.id + "|" + e.curs) ? "●" : ""}</td>`).join("")}
          <td class="tot c${Math.min(n, 2)}">${n}</td></tr>`;
      }).join("")}</tbody></table></div>`;
  }
}

// ── Document imprimible ──
function progDocHtml(prog) {
  const u = ctx.u(); const lang = ctx.lang();
  const subj = CURRICULUM[prog.subject];
  const entries = entriesFor({ ...prog, scope: "course" }).sort((a, b) => a.trim - b.trim);
  const cov = computeCoverage(prog.subject, entries, prog.prioritized);
  return `<header class="sa-head"><p class="kicker">${u.progDocTitle}</p><h1>${esc(prog.name)}</h1>
    <dl class="meta"><div><dt>${u.subject}</dt><dd>${esc(subj.name[lang])}</dd></div><div><dt>${u.course}</dt><dd>${u.courseN(prog.curs)}</dd></div>
    <div><dt>${u.hours}</dt><dd>${prog.hours}</dd></div><div><dt>${u.critCov}</dt><dd>${cov.critCovered}/${cov.critTotal}</dd></div><div><dt>${u.sabCov}</dt><dd>${cov.sabCovered}/${cov.sabTotal}</dd></div></dl></header>
    <section><h2>${u.progDocSAs}</h2><table><thead><tr>${u.progDocCols.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>
    ${entries.map((e) => `<tr><td>${e.trim}</td><td>${esc(e.sa.title)}</td><td>${e.sa.params?.sessions || ""}</td><td>${(e.sa.params?.ces || []).map((c) => "CE" + c).join(", ")}</td><td>${(e.sa.params?.criteris || []).join(", ")}</td></tr>`).join("")}
    <tr><td></td><td><strong>${u.matrixTotal}</strong></td><td><strong>${cov.planned}/${availableSessions(prog)}</strong></td><td></td><td></td></tr>
    </tbody></table></section>
    <section><h2>${u.ces}</h2><table><thead><tr><th>${u.ces}</th><th>SA</th></tr></thead><tbody>
    ${subj.ces.map((ce) => `<tr><td><strong>CE${ce.id}.</strong> ${esc(ce.text[lang])}${ce.criteris.map((c) => `<p><strong>${c.id}</strong> ${esc(c[lang])}</p>`).join("")}</td>
      <td>${ce.criteris.map((c) => `<p><strong>${c.id}:</strong> ${cov.critCount[c.id].map((e) => esc(e.sa.title)).join("; ") || "—"}</p>`).join("")}</td></tr>`).join("")}
    </tbody></table></section>
    <section><h2>${u.progDocEval}</h2><p>${u.progDocEvalText}</p><h2>${u.progDocInclusion}</h2><p>${u.progDocInclusionText}</p></section>`;
}

// ── Esdeveniments ──
function onChange(e) {
  const el = e.target; const n = el.name;
  const prog = activeProg(); if (!prog && n !== "active") return;
  if (n === "active") { store.set(KEY.activeProg, el.value); return renderProgram(); }
  if (n === "name") { prog.name = el.value; saveProg(prog); return; }
  if (n === "subject") { prog.subject = el.value; prog.curs = CURRICULUM[el.value].cursos[0]; prog.prioritized = []; prog.scope = "course"; }
  else if (n === "curs") prog.curs = el.value;
  else if (n === "hours") prog.hours = Math.max(1, parseInt(el.value, 10) || 1);
  else if (n?.startsWith("week")) prog.weeks[Number(n.slice(4))] = Math.max(0, parseInt(el.value, 10) || 0);
  else if (n === "scope") prog.scope = el.value;
  else if (n === "resources") prog.resources = $$('#progSettings input[name="resources"]:checked').map((i) => i.value);
  else if (n === "prio") {
    const all = $$('#progSettings input[name="prio"]');
    const sel = all.filter((i) => i.checked).map((i) => i.value);
    prog.prioritized = sel.length === all.length ? [] : sel;
  } else if (n === "trim") {
    const id = el.closest("[data-said]").dataset.said;
    prog.items.find((i) => i.saId === id).trim = Number(el.value);
  } else if (n === "addSaved") {
    if (!el.value) return;
    const cov = computeCoverage(prog.subject, entriesFor(prog), prog.prioritized);
    prog.items.push({ saId: el.value, trim: bestTrim(prog, cov) });
  } else return;
  saveProg(prog);
  renderProgram();
}

async function onClick(e) {
  const b = e.target.closest("[data-pact]"); if (!b) return;
  const act = b.dataset.pact; const u = ctx.u();
  const prog = activeProg();
  if (act === "new") { createProg(prog?.subject, prog?.curs); return renderProgram(); }
  if (!prog) return;
  const cov = computeCoverage(prog.subject, entriesFor(prog), prog.prioritized);
  if (act === "delete") {
    if (!confirm(u.progConfirmDelete)) return;
    setProgs(getProgs().filter((p) => p.id !== prog.id)); store.del(KEY.activeProg); return renderProgram();
  }
  if (act === "remove") {
    const id = b.closest("[data-said]").dataset.said;
    prog.items = prog.items.filter((i) => i.saId !== id); saveProg(prog); return renderProgram();
  }
  if (act === "open") return ctx.onOpenSA(b.closest("[data-said]").dataset.said, prog.id);
  if (act === "reco") return ctx.onCreateFromTheme(prog, b.dataset.theme, bestTrim(prog, cov));
  if (act === "createNew") return ctx.onCreateNew(prog, bestTrim(prog, cov));
  if (act === "print" || act === "html") {
    const doc = $("#progDoc");
    doc.innerHTML = progDocHtml(prog);
    if (act === "print") { document.body.classList.add("print-prog"); window.print(); }
    else ctx.download(prog.name, doc.innerHTML);
    return;
  }
  if (act === "aiPropose" || act === "aiReview") {
    const out = $("#progAiOut");
    if (!aiEnabled()) { out.innerHTML = `<p class="error">${u.ai.needKey}</p>`; return; }
    const lang = ctx.lang();
    out.innerHTML = `<p class="working"><span class="spinner"></span>${u.ai.working}</p>`;
    $$("#view-prog .ai-btn").forEach((x) => { x.disabled = true; });
    try {
      if (act === "aiPropose") {
        const free = availableSessions(prog) - cov.planned;
        const r = await aiProposeSA({
          subject: prog.subject, cursLabel: u.courseN(prog.curs), lang,
          missingCrit: cov.crit.filter((c) => cov.prio.has(c.id) && !cov.critCount[c.id].length).map((c) => c.id),
          missingSab: cov.sab.filter((s) => !cov.sabCount[s.id].length).map((s) => s.id),
          existingTitles: entriesFor(prog).map((x) => x.sa.title),
          sessions: Math.max(6, Math.min(14, free > 0 ? free : 10)),
          resources: prog.resources.map((id) => RESOURCES.find((x) => x.id === id)?.[lang]).filter(Boolean)
        });
        out.innerHTML = "";
        ctx.onAIProposal(prog, r, bestTrim(prog, cov), Math.max(6, Math.min(14, free > 0 ? free : 10)));
      } else {
        const text = progDocHtmlText(prog);
        const r = await aiReview({ text, kind: "prog", lang });
        out.innerHTML = reviewHtml(r, u);
      }
    } catch (err) {
      out.innerHTML = `<p class="error">${esc(ctx.aiError(err))}</p>`;
    } finally {
      $$("#view-prog .ai-btn").forEach((x) => { x.disabled = false; });
    }
  }
}

function progDocHtmlText(prog) {
  const tmp = document.createElement("div");
  tmp.innerHTML = progDocHtml(prog);
  const alerts = $$("#view-prog .alerts li").map((li) => "- " + li.innerText).join("\n");
  return tmp.innerText + (alerts ? `\n\nALERTES / ALERTAS:\n${alerts}` : "");
}

export function reviewHtml(r, u) {
  return `<div class="ai-review"><h4>✨ ${u.ai.reviewTitle}</h4><p>${esc(r.valoracio)}</p>
    <p class="block-title">${u.ai.strengths}</p><ul>${r.punts_forts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <p class="block-title">${u.ai.improvements}</p><ul>${r.millores.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
}

