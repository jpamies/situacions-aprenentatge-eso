// Capa opcional d'IA generativa amb clau pròpia (BYOK). La clau es desa només en aquest navegador
// i les peticions van directament del navegador a l'API de Claude (sense servidor intermedi).
import { KEY, store } from "./store.js";
import { CURRICULUM, ODS } from "./curriculum.js";

const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm";

export const AI_MODELS = [
  { id: "claude-opus-5-5", label: "Claude Opus 5.5" },
  { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5" },
  { id: "claude-haiku-5-5", label: "Claude Haiku 5.5" }
];

export const getAI = () => store.get(KEY.ai, { key: "", model: "claude-opus-5-5", effort: "medium" });
export const setAI = (cfg) => store.set(KEY.ai, cfg);
export const aiEnabled = () => Boolean(getAI().key);

export class AIError extends Error {
  constructor(code, detail) { super(detail || code); this.code = code; }
}

let sdkPromise = null;
async function getClient() {
  const cfg = getAI();
  if (!cfg.key) throw new AIError("noKey");
  sdkPromise ||= import(SDK_URL);
  const { default: Anthropic } = await sdkPromise;
  return { client: new Anthropic({ apiKey: cfg.key, dangerouslyAllowBrowser: true, maxRetries: 2 }), cfg };
}

// Petició amb sortida estructurada (JSON Schema). Fa servir streaming per evitar talls en respostes llargues.
async function askJSON({ system, user, schema }) {
  const { client, cfg } = await getClient();
  const params = {
    model: cfg.model,
    max_tokens: 32000,
    system,
    messages: [{ role: "user", content: user }],
    output_config: { effort: cfg.effort || "medium", format: { type: "json_schema", schema } }
  };
  // Haiku no admet el mode de reserva al servidor; als models Opus/Sonnet s'activa per si hi ha un rebuig.
  if (cfg.model !== "claude-haiku-5-5") { params.betas = ["server-side-fallback-2026-07-01"]; params.fallbacks = "default"; }
  let msg;
  try {
    msg = await client.beta.messages.stream(params).finalMessage();
  } catch (err) {
    const status = err?.status;
    if (status === 401) throw new AIError("auth");
    if (status === 429) throw new AIError("rate");
    if (status === 400) throw new AIError("bad", err?.message);
    if (status >= 500) throw new AIError("server");
    throw new AIError("network", err?.message);
  }
  if (msg.stop_reason === "refusal") throw new AIError("refusal");
  if (msg.stop_reason === "max_tokens") throw new AIError("truncated");
  const text = msg.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  try { return JSON.parse(text); } catch { throw new AIError("parse"); }
}

export async function testKey() {
  return askJSON({ system: "Respon només amb JSON.", user: "Digues ok.", schema: obj({ ok: { type: "boolean" } }) });
}

// ── Utilitats d'esquema ──
const str = { type: "string" };
const arr = (items) => ({ type: "array", items });
const obj = (properties) => ({ type: "object", properties, required: Object.keys(properties), additionalProperties: false });

const SYSTEM = {
  ca: "Ets un/a docent expert/a de Tecnologia i Digitalització de l'ESO a Catalunya. Coneixes el Decret 175/2022 i les orientacions del Departament d'Educació per programar situacions d'aprenentatge (context real, repte, producte final, avaluació formativa i formadora, DUA, vectors). Escrius en català, amb concreció i realisme per a un institut públic. No inventes competències, criteris ni sabers: només fas servir els identificadors oficials que se't donen. No incloguis mai dades personals d'alumnes.",
  es: "Eres un/a docente experto/a de Tecnología y Digitalización de la ESO en Cataluña. Conoces el Decreto 175/2022 y las orientaciones del Departament d'Educació para programar situaciones de aprendizaje (contexto real, reto, producto final, evaluación formativa y formadora, DUA, vectores). Escribes en castellano, con concreción y realismo para un instituto público. No inventas competencias, criterios ni saberes: solo usas los identificadores oficiales que se te dan. No incluyas nunca datos personales de alumnos."
};

const lead = (lang, ca, es) => (lang === "es" ? es : ca);

// 1. Rúbrica específica per als criteris de la SA
export async function aiRubric({ docMd, criteris, lang }) {
  const schema = obj({
    rows: arr(obj({ id: { type: "string", enum: criteris }, NA: str, AS: str, AN: str, AE: str }))
  });
  const user = lead(lang,
    `Redacta descriptors específics de rúbrica (NA, AS, AN, AE) per a cada criteri d'avaluació d'aquesta situació d'aprenentatge (${criteris.join(", ")}). Cada descriptor ha de ser observable, referit al producte i a les activitats concretes del repte, i progressiu entre nivells (1-2 frases).\n\nSITUACIÓ D'APRENENTATGE:\n${docMd}`,
    `Redacta descriptores específicos de rúbrica (NA, AS, AN, AE) para cada criterio de evaluación de esta situación de aprendizaje (${criteris.join(", ")}). Cada descriptor debe ser observable, referido al producto y a las actividades concretas del reto, y progresivo entre niveles (1-2 frases).\n\nSITUACIÓN DE APRENDIZAJE:\n${docMd}`);
  return askJSON({ system: SYSTEM[lang], user, schema });
}

// 2. Concretar la seqüència d'activitats
export async function aiActivities({ docMd, sessions, lang }) {
  const act = obj({ titol: str, descripcio: str, sessions: { type: "number" }, agrupament: str, evidencia: str });
  const schema = obj({ inici: arr(act), desenvolupament: arr(act), estructuracio: arr(act), aplicacio: arr(act) });
  const user = lead(lang,
    `Concreta la seqüència d'activitats d'aquesta situació d'aprenentatge en les quatre fases (inici/exploració, desenvolupament, estructuració, aplicació). Per a cada activitat indica títol, descripció breu del que fa l'alumnat, sessions, agrupament i evidència d'aprenentatge que genera. El total de sessions ha de sumar ${sessions}. Mantén la coherència amb els criteris d'avaluació.\n\nSITUACIÓ D'APRENENTATGE:\n${docMd}`,
    `Concreta la secuencia de actividades de esta situación de aprendizaje en las cuatro fases (inicio/exploración, desarrollo, estructuración, aplicación). Para cada actividad indica título, descripción breve de lo que hace el alumnado, sesiones, agrupamiento y evidencia de aprendizaje que genera. El total de sesiones debe sumar ${sessions}. Mantén la coherencia con los criterios de evaluación.\n\nSITUACIÓN DE APRENDIZAJE:\n${docMd}`);
  return askJSON({ system: SYSTEM[lang], user, schema });
}

// 3. Revisió crítica d'una SA o d'una programació
export async function aiReview({ text, kind, lang }) {
  const schema = obj({ valoracio: str, punts_forts: arr(str), millores: arr(str) });
  const what = kind === "prog" ? lead(lang, "programació de curs", "programación de curso") : lead(lang, "situació d'aprenentatge", "situación de aprendizaje");
  const user = lead(lang,
    `Revisa aquesta ${what} segons el Decret 175/2022 i les orientacions del Departament: alineació entre repte, activitats, criteris i instruments; progressió; inclusió (DUA); vectors; viabilitat. Dona una valoració breu, punts forts i millores concretes i accionables.\n\n${text}`,
    `Revisa esta ${what} según el Decreto 175/2022 y las orientaciones del Departament: alineación entre reto, actividades, criterios e instrumentos; progresión; inclusión (DUA); vectores; viabilidad. Da una valoración breve, puntos fuertes y mejoras concretas y accionables.\n\n${text}`);
  return askJSON({ system: SYSTEM[lang], user, schema });
}

// 4. Proposar una SA nova que cobreixi els buits d'una programació
export async function aiProposeSA({ subject, cursLabel, missingCrit, missingSab, existingTitles, sessions, resources, lang }) {
  const subj = CURRICULUM[subject];
  const critIds = subj.ces.flatMap((ce) => ce.criteris.map((c) => c.id));
  const sabIds = subj.sabers.flatMap((b) => b.items.map((i) => i.id));
  const curriculum = subj.ces.map((ce) => `CE${ce.id}: ${ce.text[lang]}\n${ce.criteris.map((c) => `  ${c.id} ${c[lang]}`).join("\n")}`).join("\n")
    + "\n\n" + subj.sabers.map((b) => `${b.title[lang]}\n${b.items.map((i) => `  ${i.id} ${i[lang]}`).join("\n")}`).join("\n");
  const schema = obj({
    title: str, context: str, repte: str, producte: str,
    objectius: arr(str),
    criteris: arr({ type: "string", enum: critIds }),
    sabers: arr({ type: "string", enum: sabIds }),
    ods: arr({ type: "integer", enum: Object.keys(ODS).map(Number) }),
    activitats: obj({ inici: arr(str), desenvolupament: arr(str), estructuracio: arr(str), aplicacio: arr(str) }),
    connexions: str, recursos: str
  });
  const user = lead(lang,
    `Proposa una situació d'aprenentatge nova per a ${subj.name.ca}, ${cursLabel}, d'unes ${sessions} sessions, amb un context real i proper a l'alumnat d'un institut català.
Ha de cobrir prioritàriament aquests criteris encara no treballats: ${missingCrit.join(", ") || "(cap)"}; i, si és possible, aquests sabers: ${missingSab.join(", ") || "(cap)"}.
No repeteixis aquests contextos ja programats: ${existingTitles.join("; ") || "(cap)"}.
Recursos disponibles al centre: ${resources.join(", ") || "ordinadors"}.
Selecciona entre 4 i 8 criteris i entre 4 i 10 sabers. Escriu 3-4 objectius d'aprenentatge (capacitat + saber + finalitat) i 2-3 activitats per fase.

CURRÍCULUM OFICIAL:
${curriculum}`,
    `Propón una situación de aprendizaje nueva para ${subj.name.es}, ${cursLabel}, de unas ${sessions} sesiones, con un contexto real y cercano al alumnado de un instituto catalán.
Debe cubrir prioritariamente estos criterios aún no trabajados: ${missingCrit.join(", ") || "(ninguno)"}; y, si es posible, estos saberes: ${missingSab.join(", ") || "(ninguno)"}.
No repitas estos contextos ya programados: ${existingTitles.join("; ") || "(ninguno)"}.
Recursos disponibles en el centro: ${resources.join(", ") || "ordenadores"}.
Selecciona entre 4 y 8 criterios y entre 4 y 10 saberes. Escribe 3-4 objetivos de aprendizaje (capacidad + saber + finalidad) y 2-3 actividades por fase.

CURRÍCULO OFICIAL:
${curriculum}`);
  const r = await askJSON({ system: SYSTEM[lang], user, schema });
  // Validació defensiva dels identificadors
  r.criteris = [...new Set(r.criteris.filter((id) => critIds.includes(id)))];
  r.sabers = [...new Set(r.sabers.filter((id) => sabIds.includes(id)))];
  r.ces = [...new Set(r.criteris.map((id) => id.split(".")[0]))];
  if (!r.criteris.length) throw new AIError("parse");
  return r;
}
