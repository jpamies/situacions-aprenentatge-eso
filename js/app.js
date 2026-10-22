import { CURRICULUM, VECTORS, COMPETENCIES_CLAU, ODS } from "./curriculum.js";
import { THEMES } from "./themes.js";
import { UI, OPTIONS } from "./i18n.js";
import { buildSA, buildPrompt, toMarkdown, esc } from "./generator.js";

// ── Emmagatzematge (localStorage, amb tolerància a errors) ──
const KEY = { items: "sa-eso:v1:items", draft: "sa-eso:v1:draft", lang: "sa-eso:lang" };
const store = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } }
};

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
let current = null; // { id, title, html, params } del document obert
if (!state.ces.length) applyTheme();

const u = () => UI[lang];
const L = (o) => o[lang];

function applyTheme() {
  const th = THEMES.find((x) => x.id === state.themeId);
  if (th) {
    state.ces = [...th.ces]; state.criteris = [...th.criteris]; state.sabers = [...th.sabers];
    state.ods = [...th.ods]; state.cc = [...th.cc];
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
  $("#editHint").textContent = u().editHint;
  $("#about").innerHTML = u().aboutHtml;
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

function generate(e) {
  e.preventDefault();
  const err = $("#formError");
  if (state.themeId === "custom" && (!state.custom.title.trim() || !state.custom.repte.trim())) { err.textContent = u().needContext; return; }
  if (!state.ces.length) { err.textContent = u().needCe; return; }
  err.textContent = "";
  const params = { ...state, cursLabel: u().courseN(state.curs) };
  const { title, html } = buildSA(params, lang);
  current = { id: null, title, html, params, lang };
  showDoc(html);
  $("#doc").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Document ──
function showDoc(html) {
  const doc = $("#doc");
  if (!html) {
    doc.className = "sa-doc empty";
    doc.removeAttribute("contenteditable");
    doc.innerHTML = `<p>${u().emptyDoc}</p>`;
    $("#toolbar").hidden = true; $("#editHint").hidden = true;
    return;
  }
  doc.className = "sa-doc";
  doc.innerHTML = html;
  doc.setAttribute("contenteditable", "true");
  doc.spellcheck = true;
  $("#toolbar").hidden = false; $("#editHint").hidden = false;
  setStatus("");
}

function setStatus(msg) {
  const s = $("#status");
  s.textContent = msg;
  if (msg) setTimeout(() => { if (s.textContent === msg) s.textContent = ""; }, 2500);
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

async function toolbarAction(act) {
  const doc = $("#doc");
  const title = doc.querySelector("h1")?.innerText.trim() || current?.title || "SA";
  if (act === "save") {
    const items = store.get(KEY.items, []);
    const now = new Date().toISOString();
    if (current.id) {
      const it = items.find((x) => x.id === current.id);
      if (it) Object.assign(it, { title, html: doc.innerHTML, updatedAt: now });
      else items.unshift({ id: current.id, title, html: doc.innerHTML, params: current.params, lang: current.lang, createdAt: now, updatedAt: now });
    } else {
      current.id = (crypto.randomUUID?.() || String(Date.now()));
      items.unshift({ id: current.id, title, html: doc.innerHTML, params: current.params, lang: current.lang, createdAt: now, updatedAt: now });
    }
    store.set(KEY.items, items);
    setStatus(u().saved);
  } else if (act === "print") {
    window.print();
  } else if (act === "html") {
    let css = "";
    try { css = await (await fetch("css/doc.css")).text(); } catch { /* sense estils */ }
    const page = `<!doctype html><html lang="${current?.lang || lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><style>body{margin:0;background:#fff;font-family:system-ui,sans-serif}${css}</style></head><body><article class="sa-doc">${doc.innerHTML}</article></body></html>`;
    download(`${slug(title)}.html`, page, "text/html");
  } else if (act === "md") {
    copy(toMarkdown(doc));
  } else if (act === "prompt") {
    copy(buildPrompt(toMarkdown(doc), current?.lang || lang));
  } else if (act === "new") {
    current = null; showDoc(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ── Desades ──
function renderSaved() {
  const items = store.get(KEY.items, []);
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

function savedAction(act, id) {
  const items = store.get(KEY.items, []);
  const it = items.find((x) => x.id === id);
  if (!it) return;
  if (act === "open") {
    current = { id: it.id, title: it.title, html: it.html, params: it.params, lang: it.lang };
    switchTab("generate"); showDoc(it.html);
  } else if (act === "dup") {
    const now = new Date().toISOString();
    items.unshift({ ...it, id: crypto.randomUUID?.() || String(Date.now()), title: it.title + u().copySuffix, createdAt: now, updatedAt: now });
    store.set(KEY.items, items); renderSaved();
  } else if (act === "del") {
    if (!confirm(u().confirmDelete)) return;
    store.set(KEY.items, items.filter((x) => x.id !== id));
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
      const items = store.get(KEY.items, []);
      const ids = new Set(items.map((x) => x.id));
      const fresh = incoming.filter((x) => !ids.has(x.id));
      store.set(KEY.items, [...fresh, ...items]);
      renderSaved(); alert(u().importOk(fresh.length));
    } catch { alert(u().importErr); }
  };
  reader.readAsText(file);
}

// ── Pestanyes ──
function switchTab(tab) {
  $$(".tabs [data-tab]").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
  ["generate", "saved", "about"].forEach((v) => { $(`#view-${v}`).hidden = v !== tab; });
  if (tab === "saved") renderSaved();
  try { sessionStorage.setItem("sa-eso:tab", tab); } catch { /* no-op */ }
}

// ── Inicialització ──
function init() {
  renderStatic(); renderForm(); showDoc(null);
  $("#form").addEventListener("change", onFormChange);
  $("#form").addEventListener("input", (e) => { if (["text", "textarea"].includes(e.target.type) || e.target.tagName === "TEXTAREA" || e.target.name?.startsWith("c-")) onFormChange(e); });
  $("#form").addEventListener("submit", generate);
  $("#toolbar").addEventListener("click", (e) => { const a = e.target.closest("[data-act]"); if (a) toolbarAction(a.dataset.act); });
  $("#savedList").addEventListener("click", (e) => { const b = e.target.closest("[data-sact]"); if (b) savedAction(b.dataset.sact, b.closest("li").dataset.id); });
  $("#exportAll").addEventListener("click", () => download(`situacions-aprenentatge-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify({ app: "sa-eso", version: 1, items: store.get(KEY.items, []) }, null, 2), "application/json"));
  $("#importFile").addEventListener("change", (e) => { if (e.target.files[0]) importFile(e.target.files[0]); e.target.value = ""; });
  $$(".tabs [data-tab]").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang; store.set(KEY.lang, lang);
    renderStatic(); renderForm();
    if (!current) showDoc(null);
    if (!$("#view-saved").hidden) renderSaved();
  }));
  let tab = "generate";
  try { tab = sessionStorage.getItem("sa-eso:tab") || "generate"; } catch { /* no-op */ }
  switchTab(tab);
}

init();
