// Emmagatzematge local (localStorage) amb tolerància a errors.
export const KEY = {
  items: "sa-eso:v1:items",
  draft: "sa-eso:v1:draft",
  lang: "sa-eso:lang",
  progs: "sa-eso:v1:progs",
  activeProg: "sa-eso:v1:activeProg",
  ai: "sa-eso:v1:ai"
};

export const store = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch { /* no-op */ } }
};

export const newId = () => (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`);

export const getItems = () => store.get(KEY.items, []);
export const setItems = (items) => store.set(KEY.items, items);
export const getProgs = () => store.get(KEY.progs, []);
export const setProgs = (progs) => store.set(KEY.progs, progs);

// Afegeix una SA desada a una programació (si encara no hi és).
export function attachToProg(progId, saId, trim) {
  const progs = getProgs();
  const p = progs.find((x) => x.id === progId);
  if (!p) return false;
  if (!p.items.some((i) => i.saId === saId)) p.items.push({ saId, trim: trim || 1 });
  p.updatedAt = new Date().toISOString();
  setProgs(progs);
  return true;
}
