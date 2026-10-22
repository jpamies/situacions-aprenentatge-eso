// Metadades dels contextos per al recomanador: recursos necessaris i durada orientativa (sessions).

export const RESOURCES = [
  { id: "taller", ca: "Aula taller i eines manuals", es: "Aula taller y herramientas manuales" },
  { id: "electronica", ca: "Components elèctrics i polímetres", es: "Componentes eléctricos y polímetros" },
  { id: "placa", ca: "Plaques programables i sensors (micro:bit, Arduino, ESP32)", es: "Placas programables y sensores (micro:bit, Arduino, ESP32)" },
  { id: "robot", ca: "Kits de robòtica educativa", es: "Kits de robótica educativa" },
  { id: "3d", ca: "Impressora 3D", es: "Impresora 3D" },
  { id: "maquinari", ca: "Ordinadors en desús per desmuntar", es: "Ordenadores en desuso para desmontar" }
];

export const THEME_META = {
  "tid-pont": { needs: ["taller"], sessions: 12 },
  "tid-casa": { needs: ["taller", "electronica"], sessions: 12 },
  "tid-joguina": { needs: ["taller"], sessions: 10 },
  "tid-hort": { needs: ["placa"], sessions: 12 },
  "tid-robot": { needs: ["robot"], sessions: 10 },
  "tid-app": { needs: [], sessions: 10 },
  "tid-ciber": { needs: [], sessions: 8 },
  "tid-adapta": { needs: ["3d"], sessions: 12 },
  "tec-bioclima": { needs: ["placa"], sessions: 14 },
  "tec-iot": { needs: ["placa", "3d"], sessions: 14 },
  "tec-robot": { needs: ["placa", "3d"], sessions: 16 },
  "tec-mobilitat": { needs: ["placa"], sessions: 12 },
  "tec-aps": { needs: ["taller", "electronica", "3d"], sessions: 12 },
  "dig-segona-vida": { needs: ["maquinari"], sessions: 12 },
  "dig-fake": { needs: [], sessions: 10 },
  "dig-identitat": { needs: [], sessions: 8 },
  "dig-web": { needs: [], sessions: 12 },
  "dig-ia": { needs: [], sessions: 10 },
  "dig-tramits": { needs: [], sessions: 8 }
};
