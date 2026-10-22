import { CURRICULUM, VECTORS, COMPETENCIES_CLAU, ODS } from "./curriculum.js";
import { THEMES } from "./themes.js";
import { THEME_META } from "./meta.js";
import { UI, OPTIONS, T } from "./i18n.js";
import { P } from "./i18n-prog.js";
import { buildSA, buildPrompt, toMarkdown, esc } from "./generator.js";
import { KEY, store, newId, getItems, setItems, attachToProg } from "./store.js";
import { saCoherence } from "./coverage.js";
import { initProgram, renderProgram, reviewHtml } from "./program.js";
import { AI_MODELS, getAI, setAI, aiEnabled, testKey, aiRubric, aiActivities, aiReview, AIError } from "./ai.js";

// Fusiona els textos de la programació i la IA amb els de la interfície
Object.assign(UI.ca, P.ca);
Object.assign(UI.es, P.es);

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const defaults = () => ({
  subject: "tid", curs: "1", themeId: "tid-pont",
  custom: { title: "", context: "", repte: "", producte: "" },
  ces: [], criteris: [], sabers: [], ods: [], cc: [],
  vectors: VECTORS.map((v) => v.id),
  sessions: 12, sessionMin: 55, grouping: "coop", methodology: "abp",
  dua: OPTIONS.dua.map((d) => d.id), extra: ""
});

let lang = store.get(KEY.lang, null) || (navigator.language?.startsWith("es") ? "es" : "ca");
let state = Object.assign(defaults(), store.get(KEY.draft, {}));
let current = null; // { id, title, params, lang, progId, trim } del document obert
if (!state.ces.length) applyTheme();

const u = () => UI[lang];
const L = (o) => o[lang];

function applyTheme() {
  const th = THEMES.find((x) => x.id === state.themeId);
  if (th) {
    state.ces = [...th.ces]; state.criteris = [...th.criteris]; state.sabers = [...th.sabers];
    state.ods = [...th.ods]; state.cc = [...th.cc];
    if (THEME_META[th.id]) state.sessions = THEME_META[th.id].sessions;
  } else {
    state.ces = []; state.criteris = []; state.sabers = []; state.ods = []; state.cc = ["STEM", "CD"];
  }
}

function saveDraft() { store.set(KEY.draft, state); }

// ── Interfície estàtica ──
function renderStatic() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = u()[el.dataset.i18n]; });
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  const acts = { save: "save", print: "print", html: "downloadHtml", md: "copyMd", prompt: "aiPrompt", new: "newSA" };
  $$("#toolbar [data-act]").forEach((b) => { b.textContent = u()[acts[b.dataset.act]]; });
  $$("#aiTools [data-ai]").forEach((b) => { b.textContent = "✨ " + u().ai[b.dataset.ai]; });
  $("#editHint").textContent = u().editHint;
  $("#about").innerHTML = u().aboutHtml;
  $("#aiBtn").classList.toggle("on", aiEnabled());
  $("#aiBtn").title = aiEnabled() ? u().ai.enabled : u().ai.disabled;
  document.title = u().appTitle;
}

// ── Formulari ──
const chk = (name, value, checked, label, extra = "") =>
  `<label class="chk ${extra}"><input type="checkbox" name="${name}" value="${esc(value)}" ${checked ? "checked" : ""}><span>${label}</span></label>`;

function renderForm() {
  const subj = CURRICULUM[state.subject];
  const theme = THEMES.find((x) => x.id === state.themeId);
  const themes = THEMES.filter((x) => x.subject === state.subject);
  const sug = (arr, id) => (theme && arr.includes(id) ? ` <em class="sug">${u().suggested}</em>` : "");

  $("#form").innerHTML = `
  <fieldset><legend>${u().step1}</legend>
    <div class="seg" role="radiogroup" aria-label="${u().subject}">
      ${Object.entries(CURRICULUM).map(([k, s]) => `<label class="seg-opt"><input type="radio" name="subject" value="${k}" ${k === state.subject ? "checked" : ""}><span>${esc(L(s.name))}</span></label>`).join("")}
    </div>
    <label class="field inline"><span>${u().course}</span>
      <select name="curs">${subj.cursos.map((c) => `<option value="${c}" ${c === state.curs ? "selected" : ""}>${u().courseN(c)}</option>`).join("")}</select>
    </label>
  </fieldset>

  <fieldset><legend>${u().step2}</legend>
    <p class="help">${u().chooseContext}</p>
    <div class="cards">
      ${themes.map((th) => `<label class="card ${th.id === state.themeId ? "on" : ""}"><input type="radio" name="themeId" value="${th.id}" ${th.id === state.themeId ? "checked" : ""}>
        <strong>${esc(L(th.title))}</strong><span>${esc(L(th.repte))}</span></label>`).join("")}
      <label class="card custom ${state.themeId === "custom" ? "on" : ""}"><input type="radio" name="themeId" value="custom" ${state.themeId === "custom" ? "checked" : ""}>
        <strong>＋ ${u().customContext}</strong><span>${u().customHint}</span></label>
    </div>
    ${state.themeId === "custom" ? `
      <label class="field"><span>${u().fTitle}</span><input name="c-title" value="${esc(state.custom.title)}"></label>
      <label class="field"><span>${u().fContext}</span><textarea name="c-context" rows="3">${esc(state.custom.context)}</textarea></label>
      <label class="field"><span>${u().fRepte}</span><input name="c-repte" value="${esc(state.custom.repte)}"></label>
      <label class="field"><span>${u().fProducte}</span><input name="c-producte" value="${esc(state.custom.producte)}"></label>` : ""}
  </fieldset>

  <fieldset><legend>${u().step3}</legend>
    <details open><summary>${u().ces}</summary>
      ${subj.ces.map((ce) => `<div class="ce">
        ${chk("ces", ce.id, state.ces.includes(ce.id), `<strong>CE${ce.id}</strong> ${esc(ce.text[lang])}${sug(theme?.ces || [], ce.id)}`, "ce-chk")}
        <div class="crits" ${state.ces.includes(ce.id) ? "" : "hidden"}>
          ${ce.criteris.map((c) => chk("criteris", c.id, state.criteris.includes(c.id), `<strong>${c.id}</strong> ${esc(c[lang])}`)).join("")}
        </div></div>`).join("")}
    </details>
    <details><summary>${u().sabers} <span class="count">(${state.sabers.length})</span></summary>
      ${subj.sabers.map((b) => `<p class="block-title">${esc(b.title[lang])}</p>${b.items.map((i) => chk("sabers", i.id, state.sabers.includes(i.id), esc(i[lang]) + sug(theme?.sabers || [], i.id))).join("")}`).join("")}
    </details>
    <details><summary>${u().cc}</summary>
      ${COMPETENCIES_CLAU.map((c) => chk("cc", c.id, state.cc.includes(c.id), `<strong>${c.id}</strong> ${esc(c[lang])}`)).join("")}
    </details>
    <details><summary>${u().vectors}</summary>
      ${VECTORS.map((v) => chk("vectors", v.id, state.vectors.includes(v.id), esc(v[lang]))).join("")}
    </details>
    <details><summary>${u().ods}</summary>
      <div class="grid2">${Object.entries(ODS).map(([n, o]) => chk("ods", n, state.ods.includes(Number(n)), `<strong>${n}</strong> ${esc(o[lang])}`)).join("")}</div>
    </details>
  </fieldset>

  <fieldset><legend>${u().step4}</legend>
    <div class="grid2">
      <label class="field"><span>${u().sessions}</span><input type="number" name="sessions" min="3" max="40" value="${state.sessions}"></label>
      <label class="field"><span>${u().sessionMin}</span><input type="number" name="sessionMin" min="30" max="120" step="5" value="${state.sessionMin}"></label>
    </div>
    <label class="field"><span>${u().grouping}</span><select name="grouping">${OPTIONS.grouping.map((o) => `<option value="${o.id}" ${o.id === state.grouping ? "selected" : ""}>${esc(L(o))}</option>`).join("")}</select></label>
    <label class="field"><span>${u().methodology}</span><select name="methodology">${OPTIONS.methodology.map((o) => `<option value="${o.id}" ${o.id === state.methodology ? "selected" : ""}>${esc(L(o))}</option>`).join("")}</select></label>
    <details><summary>${u().dua}</summary>
      ${["imp", "rep", "acc"].map((pr) => `<p class="block-title">${esc(L(OPTIONS.duaPrinciples[pr]))}</p>${OPTIONS.dua.filter((d) => d.p === pr).map((d) => chk("dua", d.id, state.dua.includes(d.id), esc(L(d)))).join("")}`).join("")}
    </details>
    <label class="field"><span>${u().extraSupports}</span><textarea name="extra" rows="3" placeholder="${esc(u().extraPlaceholder)}">${esc(state.extra)}</textarea></label>
  </fieldset>

  <p class="error" id="formError" role="alert"></p>
  <button type="submit" class="primary big">${u().generate}</button>`;
}

function readCheckboxes(name) { return $$(`#form input[name="${name}"]:checked`).map((i) => i.value); }

function onFormChange(e) {
  const el = e.target;
  const n = el.name;
  if (n === "subject") {
    state.subject = el.value;
    state.link = null;
    state.curs = CURRICULUM[el.value].cursos[0];
    state.themeId = THEMES.find((x) => x.subject === el.value)?.id || "custom";
    applyTheme(); renderForm();
  } else if (n === "themeId") {
    state.themeId = el.value; applyTheme(); renderForm();
  } else if (n === "curs") state.curs = el.value;
  else if (n?.startsWith("c-")) state.custom[n.slice(2)] = el.value;
  else if (n === "ces") {
    state.ces = readCheckboxes("ces");
    const ce = CURRICULUM[state.subject].ces.find((c) => c.id === el.value);
    const ids = ce.criteris.map((c) => c.id);
    state.criteris = el.checked ? [...new Set([...state.criteris, ...ids])] : state.criteris.filter((id) => !ids.includes(id));
    renderForm();
  } else if (["criteris", "sabers", "cc", "vectors", "dua"].includes(n)) {
    state[n] = readCheckboxes(n);
    if (n === "sabers") $("#form .count").textContent = `(${state.sabers.length})`;
  } else if (n === "ods") state.ods = readCheckboxes("ods").map(Number);
  else if (n === "sessions" || n === "sessionMin") state[n] = Math.max(1, parseInt(el.value, 10) || 1);
  else if (n === "grouping" || n === "methodology" || n === "extra") state[n] = el.value;
  saveDraft();
}

function generateFrom(params, link = {}) {
  const full = { ...params, cursLabel: u().courseN(params.curs) };
  const { title, html } = buildSA(full, lang);
  current = { id: null, title, params: full, lang, progId: link.progId || null, trim: link.trim || 1 };
  showDoc(html);
  renderCoherence();
}

function generate(e) {
  e.preventDefault();
  const err = $("#formError");
  if (state.themeId === "custom" && (!state.custom.title.trim() || !state.custom.repte.trim())) { err.textContent = u().needContext; return; }
  if (!state.ces.length) { err.textContent = u().needCe; return; }
  err.textContent = "";
  const link = current && !current.id && current.progId ? { progId: current.progId, trim: current.trim } : (state.link || {});
  generateFrom(structuredClone(state), link);
  $("#doc").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Document ──
function showDoc(html) {
  const doc = $("#doc");
  $("#aiOut").innerHTML = "";
  if (!html) {
    doc.className = "sa-doc empty";
    doc.removeAttribute("contenteditable");
    doc.innerHTML = `<p>${u().emptyDoc}</p>`;
    $("#toolbar").hidden = true; $("#editHint").hidden = true; $("#aiTools").hidden = true; $("#coherence").hidden = true;
    return;
  }
  doc.className = "sa-doc";
  doc.innerHTML = html;
  doc.setAttribute("contenteditable", "true");
  doc.spellcheck = true;
  $("#toolbar").hidden = false; $("#editHint").hidden = false; $("#aiTools").hidden = false;
  setStatus("");
}

function renderCoherence() {
  const box = $("#coherence");
  if (!current?.params?.ces) { box.hidden = true; return; }
  const p = { custom: { title: "", context: "", repte: "", producte: "" }, ...current.params };
  const list = saCoherence(p);
  box.hidden = false;
  box.innerHTML = `<details ${list.some((a) => a.sev !== "info") ? "open" : ""}><summary>${u().coherenceTitle} ${list.length ? `<span class="count">(${list.length})</span>` : "✔"}</summary>
    ${list.length ? `<ul class="alerts">${list.map((a) => `<li class="sev-${a.sev}">${esc(u().coh[a.key](...(a.args || [])))}</li>`).join("")}</ul>` : `<p class="ok">${u().coherenceOk}</p>`}</details>`;
}

function setStatus(msg) {
  const s = $("#status");
  s.textContent = msg;
  if (msg) setTimeout(() => { if (s.textContent === msg) s.textContent = ""; }, 3000);
}

async function copy(text) {
  try { await navigator.clipboard.writeText(text); }
  catch {
    const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  setStatus(u().copied);
}

function download(name, content, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "situacio";

async function downloadDocHtml(title, inner, docLang = lang) {
  let css = "";
  try { css = await (await fetch("css/doc.css")).text(); } catch { /* sense estils */ }
  const page = `<!doctype html><html lang="${docLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><style>body{margin:0;background:#fff;font-family:system-ui,sans-serif}${css}</style></head><body><article class="sa-doc">${inner}</article></body></html>`;
  download(`${slug(title)}.html`, page, "text/html");
}

async function toolbarAction(act) {
  const doc = $("#doc");
  const title = doc.querySelector("h1")?.innerText.trim() || current?.title || "SA";
  if (act === "save") {
    const items = getItems();
    const now = new Date().toISOString();
    const it = current.id && items.find((x) => x.id === current.id);
    if (it) Object.assign(it, { title, html: doc.innerHTML, updatedAt: now });
    else {
      current.id ||= newId();
      items.unshift({ id: current.id, title, html: doc.innerHTML, params: current.params, lang: current.lang, createdAt: now, updatedAt: now });
    }
    setItems(items);
    if (current.progId) attachToProg(current.progId, current.id, current.trim);
    setStatus(u().saved);
  } else if (act === "print") {
    window.print();
  } else if (act === "html") {
    downloadDocHtml(title, doc.innerHTML, current?.lang);
  } else if (act === "md") {
    copy(toMarkdown(doc));
  } else if (act === "prompt") {
    copy(buildPrompt(toMarkdown(doc), current?.lang || lang));
  } else if (act === "new") {
    current = null; state.link = null; showDoc(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ── IA sobre el document ──
function aiError(err) {
  const code = err instanceof AIError ? err.code : "network";
  return u().ai.errors[code] || String(err?.message || err);
}

async function aiDocAction(kind) {
  const out = $("#aiOut");
  if (!aiEnabled()) { out.innerHTML = `<p class="error">${u().ai.needKey}</p>`; return; }
  const doc = $("#doc");
  const docLang = current?.lang || lang;
  const docMd = toMarkdown(doc);
  out.innerHTML = `<p class="working"><span class="spinner"></span>${u().ai.working}</p>`;
  $$("#aiTools button").forEach((b) => { b.disabled = true; });
  try {
    if (kind === "rubric") {
      const criteris = current?.params?.criteris?.length ? current.params.criteris : [...doc.querySelectorAll(".rubric tbody td:first-child strong")].map((s) => s.innerText.trim());
      const r = await aiRubric({ docMd, criteris, lang: docLang });
      const tbody = doc.querySelector(".rubric tbody");
      const labels = Object.fromEntries([...tbody.querySelectorAll("tr")].map((tr) => [tr.querySelector("strong")?.innerText.trim(), tr.children[0].innerHTML]));
      tbody.innerHTML = r.rows.map((row) => `<tr><td>${labels[row.id] || `<strong>${esc(row.id)}</strong>`}</td><td>${esc(row.NA)}</td><td>${esc(row.AS)}</td><td>${esc(row.AN)}</td><td>${esc(row.AE)}</td></tr>`).join("");
      out.innerHTML = `<p class="ok">${u().ai.replaced}</p>`;
    } else if (kind === "activities") {
      const r = await aiActivities({ docMd, sessions: current?.params?.sessions || 12, lang: docLang });
      const phases = ["inici", "desenvolupament", "estructuracio", "aplicacio"];
      const blocks = doc.querySelectorAll(".phase");
      let start = 1;
      phases.forEach((ph, i) => {
        const acts = r[ph] || [];
        const n = acts.reduce((s, a) => s + (Number(a.sessions) || 0), 0);
        const block = blocks[i]; if (!block) return;
        const small = block.querySelector("h3 small");
        if (small && n) small.textContent = `(${T[docLang].sessionsRange(start, start + Math.round(n) - 1)})`;
        start += Math.round(n);
        block.querySelector("ul").innerHTML = acts.map((a) => `<li><strong>${esc(a.titol)}</strong> <em>(${esc(String(a.sessions))} ${u().ai.sessionsShort} · ${esc(a.agrupament)})</em>. ${esc(a.descripcio)} <span class="evid">${u().ai.evidence}: ${esc(a.evidencia)}</span></li>`).join("");
      });
      out.innerHTML = `<p class="ok">${u().ai.replaced}</p>`;
    } else if (kind === "review") {
      const r = await aiReview({ text: docMd, kind: "sa", lang: docLang });
      out.innerHTML = reviewHtml(r, u());
    }
  } catch (err) {
    out.innerHTML = `<p class="error">${esc(aiError(err))}</p>`;
  } finally {
    $$("#aiTools button").forEach((b) => { b.disabled = false; });
  }
}

// ── Configuració de la IA ──
function openAIDialog() {
  const cfg = getAI(); const t = u().ai;
  const dlg = $("#aiDialog");
  dlg.innerHTML = `<form method="dialog" class="ai-form">
    <h2>✨ ${t.title}</h2>
    <p>${t.intro}</p>
    <p class="help">${t.privacy}</p>
    <label class="field"><span>${t.key}</span><input type="password" name="key" autocomplete="off" placeholder="${t.keyPh}" value="${esc(cfg.key)}"></label>
    <div class="grid2">
      <label class="field"><span>${t.model}</span><select name="model">${AI_MODELS.map((m) => `<option value="${m.id}" ${m.id === cfg.model ? "selected" : ""}>${m.label}</option>`).join("")}</select></label>
      <label class="field"><span>${t.effort}</span><select name="effort">${Object.entries(t.efforts).map(([k, v]) => `<option value="${k}" ${k === cfg.effort ? "selected" : ""}>${v}</option>`).join("")}</select></label>
    </div>
    <p class="status" id="aiStatus" aria-live="polite"></p>
    <div class="row-btns">
      <button type="button" class="primary" data-ai-act="save">${t.save}</button>
      <button type="button" data-ai-act="test">${t.test}</button>
      <button type="button" class="danger" data-ai-act="forget">${t.forget}</button>
      <button type="button" data-ai-act="close">${t.close}</button>
    </div></form>`;
  dlg.showModal();
}

async function aiDialogAction(act) {
  const dlg = $("#aiDialog"); const t = u().ai; const st = $("#aiStatus");
  const read = () => ({ key: dlg.querySelector("[name=key]").value.trim(), model: dlg.querySelector("[name=model]").value, effort: dlg.querySelector("[name=effort]").value });
  if (act === "save") { setAI(read()); st.textContent = t.saved; renderStatic(); }
  else if (act === "forget") { setAI({ ...read(), key: "" }); dlg.querySelector("[name=key]").value = ""; st.textContent = t.saved; renderStatic(); }
  else if (act === "close") dlg.close();
  else if (act === "test") {
    setAI(read()); renderStatic();
    st.innerHTML = `<span class="spinner"></span>${t.working}`;
    try { await testKey(); st.textContent = t.ok; } catch (err) { st.textContent = aiError(err); }
  }
}

// ── Desades ──
function renderSaved() {
  const items = getItems();
  const list = $("#savedList");
  if (!items.length) { list.innerHTML = `<li class="empty-msg">${u().savedEmpty}</li>`; return; }
  const fmt = new Intl.DateTimeFormat(lang === "ca" ? "ca-ES" : "es-ES", { dateStyle: "medium", timeStyle: "short" });
  list.innerHTML = items.map((it) => `
    <li data-id="${esc(it.id)}">
      <div class="saved-info">
        <strong>${esc(it.title)}</strong>
        <span>${esc(CURRICULUM[it.params?.subject]?.name[lang] || "")} · ${esc(it.params?.cursLabel || "")} · ${(it.lang || "ca").toUpperCase()} · ${u().updated}: ${fmt.format(new Date(it.updatedAt))}</span>
      </div>
      <div class="saved-btns">
        <button type="button" class="primary" data-sact="open">${u().open}</button>
        <button type="button" data-sact="dup">${u().duplicate}</button>
        <button type="button" class="danger" data-sact="del">${u().del}</button>
      </div>
    </li>`).join("");
}

function openSaved(id) {
  const it = getItems().find((x) => x.id === id);
  if (!it) return;
  current = { id: it.id, title: it.title, params: it.params, lang: it.lang, progId: null, trim: 1 };
  switchTab("generate"); showDoc(it.html); renderCoherence();
}

function savedAction(act, id) {
  const items = getItems();
  const it = items.find((x) => x.id === id);
  if (!it) return;
  if (act === "open") openSaved(id);
  else if (act === "dup") {
    const now = new Date().toISOString();
    items.unshift({ ...it, id: newId(), title: it.title + u().copySuffix, createdAt: now, updatedAt: now });
    setItems(items); renderSaved();
  } else if (act === "del") {
    if (!confirm(u().confirmDelete)) return;
    setItems(items.filter((x) => x.id !== id));
    if (current?.id === id) current.id = null;
    renderSaved();
  }
}

function importFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const incoming = (Array.isArray(data) ? data : data.items).filter((x) => x && x.id && x.html);
      const items = getItems();
      const ids = new Set(items.map((x) => x.id));
      const fresh = incoming.filter((x) => !ids.has(x.id));
      setItems([...fresh, ...items]);
      if (Array.isArray(data.progs)) {
        const progs = store.get(KEY.progs, []);
        const pids = new Set(progs.map((p) => p.id));
        store.set(KEY.progs, [...data.progs.filter((p) => p && p.id && !pids.has(p.id)), ...progs]);
      }
      renderSaved(); alert(u().importOk(fresh.length));
    } catch { alert(u().importErr); }
  };
  reader.readAsText(file);
}

// ── Integració amb la programació ──
const programCtx = {
  lang: () => lang,
  u,
  aiError,
  download: (name, inner) => downloadDocHtml(name, inner),
  onOpenSA: (id) => openSaved(id),
  onCreateFromTheme(prog, themeId, trim) {
    state = { ...defaults(), ...state, subject: prog.subject, curs: prog.curs, themeId, custom: state.custom };
    applyTheme(); saveDraft();
    state.link = { progId: prog.id, trim };
    renderForm(); switchTab("generate");
    generateFrom(structuredClone(state), state.link);
  },
  onCreateNew(prog, trim) {
    state = { ...state, subject: prog.subject, curs: prog.curs, themeId: "custom" };
    applyTheme(); saveDraft();
    state.link = { progId: prog.id, trim };
    current = null; showDoc(null);
    renderForm(); switchTab("generate");
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  onAIProposal(prog, r, trim, sessions) {
    const w = (s) => ({ ca: s, es: s });
    const aiTheme = {
      id: "ai", subject: prog.subject, cursos: [prog.curs],
      title: w(r.title), context: w(r.context), repte: w(r.repte), producte: w(r.producte),
      ces: r.ces, criteris: r.criteris, sabers: r.sabers, ods: r.ods, cc: ["STEM", "CD", "CE", "CPSAA"],
      objectius: r.objectius.map(w),
      activitats: Object.fromEntries(["inici", "desenvolupament", "estructuracio", "aplicacio"].map((k) => [k, (r.activitats[k] || []).map(w)])),
      connexions: w(r.connexions), recursos: w(r.recursos)
    };
    const params = {
      ...defaults(), subject: prog.subject, curs: prog.curs, themeId: "ai", aiTheme,
      ces: r.ces, criteris: r.criteris, sabers: r.sabers, ods: r.ods, cc: aiTheme.cc, sessions
    };
    switchTab("generate");
    generateFrom(params, { progId: prog.id, trim });
    $("#aiOut").innerHTML = `<p class="ok">✨ ${u().ai.replaced}</p>`;
  }
};

// ── Pestanyes ──
function switchTab(tab) {
  $$(".tabs [data-tab]").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
  ["generate", "prog", "saved", "about"].forEach((v) => { $(`#view-${v}`).hidden = v !== tab; });
  if (tab === "saved") renderSaved();
  if (tab === "prog") renderProgram();
  try { sessionStorage.setItem("sa-eso:tab", tab); } catch { /* no-op */ }
}

// ── Inicialització ──
function init() {
  renderStatic(); renderForm(); showDoc(null);
  initProgram(programCtx);
  $("#form").addEventListener("change", onFormChange);
  $("#form").addEventListener("input", (e) => { if (e.target.tagName === "TEXTAREA" || e.target.name?.startsWith("c-")) onFormChange(e); });
  $("#form").addEventListener("submit", generate);
  $("#toolbar").addEventListener("click", (e) => { const a = e.target.closest("[data-act]"); if (a) toolbarAction(a.dataset.act); });
  $("#aiTools").addEventListener("click", (e) => { const a = e.target.closest("[data-ai]"); if (a) aiDocAction(a.dataset.ai); });
  $("#aiBtn").addEventListener("click", openAIDialog);
  $("#aiDialog").addEventListener("click", (e) => { const a = e.target.closest("[data-ai-act]"); if (a) aiDialogAction(a.dataset.aiAct); });
  $("#savedList").addEventListener("click", (e) => { const b = e.target.closest("[data-sact]"); if (b) savedAction(b.dataset.sact, b.closest("li").dataset.id); });
  $("#exportAll").addEventListener("click", () => download(`situacions-aprenentatge-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify({ app: "sa-eso", version: 2, items: getItems(), progs: store.get(KEY.progs, []) }, null, 2), "application/json"));
  $("#importFile").addEventListener("change", (e) => { if (e.target.files[0]) importFile(e.target.files[0]); e.target.value = ""; });
  $$(".tabs [data-tab]").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang; store.set(KEY.lang, lang);
    renderStatic(); renderForm();
    if (!current) showDoc(null); else renderCoherence();
    if (!$("#view-saved").hidden) renderSaved();
    if (!$("#view-prog").hidden) renderProgram();
  }));
  let tab = "generate";
  try { tab = sessionStorage.getItem("sa-eso:tab") || "generate"; } catch { /* no-op */ }
  switchTab(tab);
}

init();
