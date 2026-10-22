// Textos de la interfície i plantilles de contingut (català / castellà)

export const UI = {
  ca: {
    appTitle: "Generador de situacions d'aprenentatge",
    appSubtitle: "ESO · Tecnologia i Digitalització (1r-3r) · Tecnologia (4t) · Digitalització (4t) · Decret 175/2022",
    tabGenerate: "Generar", tabSaved: "Les meves SA", tabAbout: "Quant a",
    step1: "1. Matèria i curs", step2: "2. Context i repte", step3: "3. Vinculació curricular", step4: "4. Organització i inclusió",
    subject: "Matèria", course: "Curs", courseN: (n) => `${n}r ESO`.replace("2r", "2n").replace("3r", "3r").replace("4r", "4t"),
    chooseContext: "Tria un context proper a l'alumnat o escriu-ne un de propi.",
    customContext: "Context propi", customHint: "Escriu el teu propi context i repte.",
    fTitle: "Títol de la situació", fContext: "Descripció del context", fRepte: "Repte o pregunta guia", fProducte: "Producte final",
    ces: "Competències específiques i criteris d'avaluació", sabers: "Sabers", vectors: "Vectors", ods: "Objectius de desenvolupament sostenible (ODS)",
    cc: "Competències clau prioritzades",
    sessions: "Nombre de sessions", sessionMin: "Minuts per sessió", grouping: "Agrupament principal", methodology: "Metodologia",
    dua: "Mesures i suports universals (DUA)", extraSupports: "Mesures addicionals o intensives (opcional)",
    extraPlaceholder: "Ex.: alumnat nouvingut — glossari bilingüe i suport visual; alumna amb TDAH — tasques fragmentades i checklist...",
    generate: "Generar situació d'aprenentatge", selectAll: "Tots", selectNone: "Cap", suggested: "suggerit",
    emptyDoc: "Tria la matèria, el curs i un context, i prem «Generar». Podràs editar el resultat directament, desar-lo i exportar-lo.",
    save: "Desar", saved: "Desada ✔", print: "Imprimir / PDF", downloadHtml: "Descarregar HTML", copyMd: "Copiar Markdown",
    aiPrompt: "Prompt per a IA", copied: "Copiat al porta-retalls ✔", newSA: "Nova",
    editHint: "Pots editar qualsevol text del document fent-hi clic.",
    savedTitle: "Situacions d'aprenentatge desades", savedEmpty: "Encara no has desat cap situació d'aprenentatge. Es guarden només en aquest navegador (localStorage).",
    open: "Obrir", duplicate: "Duplicar", del: "Esborrar", confirmDelete: "Segur que vols esborrar aquesta situació d'aprenentatge?",
    exportAll: "Exportar còpia (JSON)", importAll: "Importar còpia (JSON)", importOk: (n) => `${n} situacions importades.`, importErr: "El fitxer no és vàlid.",
    updated: "Actualitzada", copySuffix: " (còpia)",
    needCe: "Selecciona com a mínim una competència específica.",
    needContext: "Escriu almenys el títol i el repte del context propi.",
    aboutHtml: `
      <h2>Quant a aquesta eina</h2>
      <p>Aquesta webapp genera esborranys de <strong>situacions d'aprenentatge</strong> per a l'ESO a Catalunya a partir del currículum oficial del <strong>Decret 175/2022, de 27 de setembre</strong>, d'ordenació dels ensenyaments de l'educació bàsica (DOGC núm. 8762, de 29.9.2022, annex 3).</p>
      <p>De moment inclou les matèries de <strong>Tecnologia i Digitalització</strong> (1r a 3r d'ESO), <strong>Tecnologia</strong> (4t) i <strong>Digitalització</strong> (4t), amb les seves competències específiques, criteris d'avaluació i sabers literals.</p>
      <h3>Com s'estructura cada situació</h3>
      <p>Segueix les orientacions del Departament d'Educació per programar situacions d'aprenentatge: context proper i repte amb sentit, objectius d'aprenentatge, vinculació amb competències específiques, criteris i sabers, els sis <em>vectors</em> del currículum, seqüència d'activitats en quatre fases (inici/exploració, desenvolupament, estructuració i aplicació/transferència), avaluació formativa i formadora amb instruments i rúbrica (NA, AS, AN, AE) i mesures i suports universals segons el Disseny Universal per a l'Aprenentatge.</p>
      <h3>Privadesa</h3>
      <p>No hi ha servidor: tot funciona al navegador i les situacions desades es guarden al <code>localStorage</code> del teu dispositiu. Fes còpies amb «Exportar còpia (JSON)».</p>
      <h3>Avís</h3>
      <p>El resultat és un punt de partida que cal revisar i adaptar al grup classe. El text oficial del currículum és el català; la versió en castellà és una traducció de treball. Consulteu sempre el <a href="https://dogc.gencat.cat/ca/" target="_blank" rel="noopener">DOGC</a> (núm. 8762, CVE-DOGC-A-22270097-2022) i el portal <a href="https://projectes.xtec.cat/nou-curriculum/" target="_blank" rel="noopener">Currículum (XTEC)</a>.</p>`
  },
  es: {
    appTitle: "Generador de situaciones de aprendizaje",
    appSubtitle: "ESO · Tecnología y Digitalización (1.º-3.º) · Tecnología (4.º) · Digitalización (4.º) · Decreto 175/2022 (Cataluña)",
    tabGenerate: "Generar", tabSaved: "Mis SA", tabAbout: "Acerca de",
    step1: "1. Materia y curso", step2: "2. Contexto y reto", step3: "3. Vinculación curricular", step4: "4. Organización e inclusión",
    subject: "Materia", course: "Curso", courseN: (n) => `${n}.º ESO`,
    chooseContext: "Elige un contexto cercano al alumnado o escribe uno propio.",
    customContext: "Contexto propio", customHint: "Escribe tu propio contexto y reto.",
    fTitle: "Título de la situación", fContext: "Descripción del contexto", fRepte: "Reto o pregunta guía", fProducte: "Producto final",
    ces: "Competencias específicas y criterios de evaluación", sabers: "Saberes", vectors: "Vectores", ods: "Objetivos de desarrollo sostenible (ODS)",
    cc: "Competencias clave priorizadas",
    sessions: "Número de sesiones", sessionMin: "Minutos por sesión", grouping: "Agrupamiento principal", methodology: "Metodología",
    dua: "Medidas y apoyos universales (DUA)", extraSupports: "Medidas adicionales o intensivas (opcional)",
    extraPlaceholder: "Ej.: alumnado recién llegado — glosario bilingüe y apoyo visual; alumna con TDAH — tareas fragmentadas y checklist...",
    generate: "Generar situación de aprendizaje", selectAll: "Todos", selectNone: "Ninguno", suggested: "sugerido",
    emptyDoc: "Elige la materia, el curso y un contexto, y pulsa «Generar». Podrás editar el resultado directamente, guardarlo y exportarlo.",
    save: "Guardar", saved: "Guardada ✔", print: "Imprimir / PDF", downloadHtml: "Descargar HTML", copyMd: "Copiar Markdown",
    aiPrompt: "Prompt para IA", copied: "Copiado al portapapeles ✔", newSA: "Nueva",
    editHint: "Puedes editar cualquier texto del documento haciendo clic en él.",
    savedTitle: "Situaciones de aprendizaje guardadas", savedEmpty: "Todavía no has guardado ninguna situación de aprendizaje. Se guardan solo en este navegador (localStorage).",
    open: "Abrir", duplicate: "Duplicar", del: "Borrar", confirmDelete: "¿Seguro que quieres borrar esta situación de aprendizaje?",
    exportAll: "Exportar copia (JSON)", importAll: "Importar copia (JSON)", importOk: (n) => `${n} situaciones importadas.`, importErr: "El archivo no es válido.",
    updated: "Actualizada", copySuffix: " (copia)",
    needCe: "Selecciona al menos una competencia específica.",
    needContext: "Escribe al menos el título y el reto del contexto propio.",
    aboutHtml: `
      <h2>Acerca de esta herramienta</h2>
      <p>Esta webapp genera borradores de <strong>situaciones de aprendizaje</strong> para la ESO en Cataluña a partir del currículo oficial del <strong>Decreto 175/2022, de 27 de septiembre</strong>, de ordenación de las enseñanzas de la educación básica (DOGC núm. 8762, de 29.9.2022, anexo 3).</p>
      <p>Por ahora incluye las materias de <strong>Tecnología y Digitalización</strong> (1.º a 3.º de ESO), <strong>Tecnología</strong> (4.º) y <strong>Digitalización</strong> (4.º), con sus competencias específicas, criterios de evaluación y saberes.</p>
      <h3>Cómo se estructura cada situación</h3>
      <p>Sigue las orientaciones del Departament d'Educació para programar situaciones de aprendizaje: contexto cercano y reto con sentido, objetivos de aprendizaje, vinculación con competencias específicas, criterios y saberes, los seis <em>vectores</em> del currículo, secuencia de actividades en cuatro fases (inicio/exploración, desarrollo, estructuración y aplicación/transferencia), evaluación formativa y formadora con instrumentos y rúbrica (NA, AS, AN, AE) y medidas y apoyos universales según el Diseño Universal para el Aprendizaje.</p>
      <h3>Privacidad</h3>
      <p>No hay servidor: todo funciona en el navegador y las situaciones guardadas se almacenan en el <code>localStorage</code> de tu dispositivo. Haz copias con «Exportar copia (JSON)».</p>
      <h3>Aviso</h3>
      <p>El resultado es un punto de partida que hay que revisar y adaptar al grupo clase. El texto oficial del currículo es el catalán; la versión en castellano es una traducción de trabajo. Consultad siempre el <a href="https://dogc.gencat.cat/es/" target="_blank" rel="noopener">DOGC</a> (núm. 8762, CVE-DOGC-A-22270097-2022) y el portal <a href="https://projectes.xtec.cat/nou-curriculum/" target="_blank" rel="noopener">Currículum (XTEC)</a>.</p>`
  }
};

export const OPTIONS = {
  grouping: [
    { id: "coop", ca: "Grups cooperatius (3-4) amb rols", es: "Grupos cooperativos (3-4) con roles" },
    { id: "pairs", ca: "Parelles", es: "Parejas" },
    { id: "mixed", ca: "Mixt (individual, parelles i grups)", es: "Mixto (individual, parejas y grupos)" },
    { id: "indiv", ca: "Individual", es: "Individual" }
  ],
  methodology: [
    { id: "abp", ca: "Aprenentatge basat en projectes", es: "Aprendizaje basado en proyectos" },
    { id: "repte", ca: "Aprenentatge basat en reptes", es: "Aprendizaje basado en retos" },
    { id: "aps", ca: "Aprenentatge servei", es: "Aprendizaje-servicio" },
    { id: "dt", ca: "Pensament de disseny (design thinking)", es: "Pensamiento de diseño (design thinking)" },
    { id: "gam", ca: "Gamificació", es: "Gamificación" }
  ],
  dua: [
    { id: "i1", p: "imp", ca: "Possibilitat d'escollir entre diferents opcions de repte, rol o format.", es: "Posibilidad de elegir entre diferentes opciones de reto, rol o formato." },
    { id: "i2", p: "imp", ca: "Rols cooperatius rotatius i normes d'equip consensuades.", es: "Roles cooperativos rotativos y normas de equipo consensuadas." },
    { id: "i3", p: "imp", ca: "Retroacció freqüent orientada a la millora i celebració dels progressos.", es: "Retroalimentación frecuente orientada a la mejora y celebración de los progresos." },
    { id: "r1", p: "rep", ca: "Informació en diversos formats (vídeo, text, esquemes, models físics, simuladors).", es: "Información en diversos formatos (vídeo, texto, esquemas, modelos físicos, simuladores)." },
    { id: "r2", p: "rep", ca: "Glossari visual i bilingüe del vocabulari tècnic.", es: "Glosario visual y bilingüe del vocabulario técnico." },
    { id: "r3", p: "rep", ca: "Exemples resolts, models i bases d'orientació a l'abast de tothom.", es: "Ejemplos resueltos, modelos y bases de orientación al alcance de todos." },
    { id: "a1", p: "acc", ca: "Diversos formats per presentar el producte final (oral, escrit, audiovisual, prototip).", es: "Diversos formatos para presentar el producto final (oral, escrito, audiovisual, prototipo)." },
    { id: "a2", p: "acc", ca: "Bastides i plantilles per planificar i autoregular el procés (checklists, calendari).", es: "Andamiajes y plantillas para planificar y autorregular el proceso (checklists, calendario)." },
    { id: "a3", p: "acc", ca: "Tecnologies de suport (lectors de pantalla, dictat per veu, subtítols, ampliació).", es: "Tecnologías de apoyo (lectores de pantalla, dictado por voz, subtítulos, ampliación)." }
  ],
  duaPrinciples: {
    imp: { ca: "Múltiples formes d'implicació", es: "Múltiples formas de implicación" },
    rep: { ca: "Múltiples formes de representació", es: "Múltiples formas de representación" },
    acc: { ca: "Múltiples formes d'acció i expressió", es: "Múltiples formas de acción y expresión" }
  }
};

// Plantilles de contingut del document generat
export const T = {
  ca: {
    docKicker: "Situació d'aprenentatge",
    subject: "Matèria", course: "Curs", duration: "Durada", sessions: (n, m) => `${n} sessions de ${m} min`,
    grouping: "Agrupament", methodology: "Metodologia",
    sDesc: "Descripció de la situació", context: "Context", repte: "Repte", producte: "Producte final",
    sObj: "Objectius d'aprenentatge",
    sCurr: "Vinculació curricular", ceHead: "Competència específica", critHead: "Criteris d'avaluació",
    sabers: "Sabers", cc: "Competències clau", vectors: "Vectors del currículum", ods: "ODS",
    sSeq: "Seqüència d'activitats",
    phases: {
      inici: "Activitats d'inici i exploració",
      desenvolupament: "Activitats de desenvolupament (introducció de nous coneixements)",
      estructuracio: "Activitats d'estructuració i síntesi",
      aplicacio: "Activitats d'aplicació i transferència"
    },
    sessionsRange: (a, b) => (a === b ? `sessió ${a}` : `sessions ${a}–${b}`),
    sAval: "Avaluació",
    avalIntro: "L'avaluació és formativa i formadora: es comparteixen els objectius i els criteris d'èxit des de l'inici, es fa retroacció contínua i l'alumnat s'autoavalua i coavalua. La qualificació s'expressa en graus d'assoliment: No assoliment (NA), Assoliment satisfactori (AS), Assoliment notable (AN) i Assoliment excel·lent (AE).",
    instruments: "Instruments i agents d'avaluació", instrument: "Instrument", criteria: "Criteris", agent: "Agent",
    agents: { hetero: "Heteroavaluació", co: "Coavaluació", auto: "Autoavaluació" },
    rubric: "Rúbrica analítica",
    levels: {
      NA: "Ho fa de manera incompleta o amb errors importants, fins i tot amb ajuda.",
      AS: "Ho fa de manera bàsica, amb ajuda puntual, i el resultat compleix els requisits mínims.",
      AN: "Ho fa de manera autònoma i correcta, i justifica les decisions preses.",
      AE: "Ho fa de manera autònoma, precisa i creativa, justifica les decisions i transfereix l'aprenentatge a altres contextos."
    },
    sDua: "Mesures i suports universals (DUA)", extraSupports: "Mesures i suports addicionals o intensius",
    sGrad: "Gradació segons el curs",
    grad: {
      "1": "Acompanyament proper del docent, models resolts i bastides; reptes més tancats i passos guiats.",
      "2": "Autonomia progressiva: les bastides es retiren gradualment i els reptes són semioberts.",
      "3": "Alta autonomia: reptes oberts amb presa de decisions justificada i més rigor tècnic.",
      "4": "Autonomia plena: reptes oberts connectats amb l'entorn comunitari i professional, i gestió del projecte per part de l'alumnat."
    },
    sConn: "Connexions amb altres matèries", sRes: "Recursos",
    footer: (d) => `Referència normativa: Decret 175/2022, de 27 de setembre, d'ordenació dels ensenyaments de l'educació bàsica (DOGC núm. 8762), annex 3. Esborrany generat el ${d}; cal revisar-lo i adaptar-lo al grup.`,
    shareCriteria: "Presentació del repte i del producte final. Es comparteixen els objectius d'aprenentatge i els criteris d'èxit; KPSI inicial per explicitar els coneixements previs.",
    finalSelf: "Autoavaluació final (diana o rúbrica) i reflexió metacognitiva comparant-la amb el KPSI inicial: què he après, com ho he après i què milloraria.",
    customInici: (r) => [`Presentació del context i plantejament del repte: «${r}». Pluja d'idees i registre de preguntes de l'alumnat.`, "Formació d'equips, assignació de rols i acord de normes de treball."],
    customEstr: ["Elaboració d'una base d'orientació o mapa conceptual dels aprenentatges clau.", "Coavaluació del progrés entre equips amb la rúbrica i ajust del pla de treball."],
    customApl: (p) => [`Elaboració del producte final: ${p}.`, "Presentació pública i difusió del producte a un públic real (comunitat educativa, famílies, entitats)."],
    customObj: (crit, t) => `${crit} en el marc del repte «${t}».`,
    vectorActions: {
      competencial: "El repte parteix d'un context real i proper i mobilitza sabers de diferents àmbits per elaborar un producte amb sentit.",
      genere: "Rols rotatius dins dels equips, referents femenins de la tecnologia i llenguatge inclusiu en els materials i les presentacions.",
      universalitat: "Disseny segons el DUA amb múltiples formes de representació, d'acció i expressió i d'implicació, i opcions de format per al producte final.",
      llengua: "Ús del vocabulari tècnic, glossari col·laboratiu i producció de textos tècnics i orals (memòria, presentació, defensa).",
      ciutadania: "El producte té una finalitat social vinculada als ODS i es fomenta la presa de decisions democràtica dins dels equips.",
      benestar: "L'error es gestiona com a oportunitat d'aprenentatge; es cuida la cohesió del grup i es reconeix l'esforç i el progrés."
    },
    extraActivity: "Activitat complementària",
    ceActivities: {
      tid: {
        "1": "Cerca i contrast d'informació en almenys tres fonts, valorant-ne la fiabilitat amb una fitxa de fonts; anàlisi d'un objecte o sistema relacionat.",
        "2": "Planificació del projecte: repartiment de rols, calendari (diagrama de Gantt senzill), llista de materials i pressupost.",
        "3": "Pràctica de taller guiada amb fitxa de seguretat i ús correcte d'eines, màquines i instruments de mesura.",
        "4": "Elaboració de la documentació tècnica (esbossos, plànols acotats, esquemes) amb eines digitals col·laboratives.",
        "5": "Reptes de programació graduats (seqüències, bucles, condicionals) amb depuració en parella.",
        "6": "Configuració de l'entorn digital de treball: carpetes compartides, permisos, llicències dels recursos i còpia de seguretat.",
        "7": "Anàlisi de l'impacte social i ambiental de la solució al llarg del seu cicle de vida i propostes de millora."
      },
      tec: {
        "1": "Aplicació d'una tècnica d'ideació (SCAMPER, Crazy 8, brainstorming) i selecció de la millor idea amb criteris consensuats.",
        "2": "Anàlisi del cicle de vida del producte i selecció justificada de materials i tècniques de fabricació.",
        "3": "Reunions d'equip amb acta digital, rols rotatius i eines col·laboratives al núvol.",
        "4": "Disseny i simulació del sistema de control (sensors, controlador, actuadors) abans del muntatge físic.",
        "5": "Modelatge 3D i simulació de la solució; configuració de les eines de fabricació digital.",
        "6": "Avaluació de l'impacte ambiental i social de la solució (consum energètic, materials, petjada de carboni)."
      },
      dig: {
        "1": "Configuració pràctica de dispositius, sistemes operatius i xarxa amb resolució d'incidències simulades.",
        "2": "Creació de continguts digitals i organització a l'entorn personal d'aprenentatge (portafoli digital).",
        "3": "Revisió i millora de la configuració de seguretat i privadesa de dispositius i comptes.",
        "4": "Anàlisi crítica de missatges i fonts, i reflexió sobre drets d'autoria i llicències d'ús.",
        "5": "Anàlisi de l'impacte de la tecnologia en relació amb els ODS i aplicació d'una tecnologia emergent (IA, IoT)."
      }
    },
    ceInstruments: {
      tid: {
        "1": ["Fitxa de fonts i d'anàlisi d'objectes", "hetero"], "2": ["Memòria de projecte i diari d'equip", "co"],
        "3": ["Llista de control de taller i assaig del prototip", "hetero"], "4": ["Rúbrica de documentació tècnica i presentació oral", "co"],
        "5": ["Reptes de programació i diari de depuració", "hetero"], "6": ["Llista de control de configuració i seguretat", "auto"],
        "7": ["Text argumentatiu o debat amb rúbrica", "hetero"]
      },
      tec: {
        "1": ["Pla de projecte (canvas) i registre d'iteracions", "hetero"], "2": ["Llista de control de fabricació i informe de viabilitat", "hetero"],
        "3": ["Rúbrica de presentació i de treball en equip", "co"], "4": ["Prova funcional del sistema i codi comentat", "hetero"],
        "5": ["Portafoli digital de dissenys i simulacions", "auto"], "6": ["Informe de sostenibilitat i cicle de vida", "hetero"]
      },
      dig: {
        "1": ["Pràctica de configuració amb llista de control", "hetero"], "2": ["Portafoli digital de produccions (EPA)", "auto"],
        "3": ["Checklist de seguretat i autoavaluació de benestar digital", "auto"], "4": ["Rúbrica de participació i producció a la xarxa", "co"],
        "5": ["Informe d'impacte i prototip amb tecnologia emergent", "hetero"]
      }
    },
    commonInstruments: [["KPSI inicial i final", "auto"], ["Diana d'autoavaluació i coavaluació del treball en equip", "co"], ["Observació sistemàtica amb registre del docent", "hetero"]]
  },
  es: {
    docKicker: "Situación de aprendizaje",
    subject: "Materia", course: "Curso", duration: "Duración", sessions: (n, m) => `${n} sesiones de ${m} min`,
    grouping: "Agrupamiento", methodology: "Metodología",
    sDesc: "Descripción de la situación", context: "Contexto", repte: "Reto", producte: "Producto final",
    sObj: "Objetivos de aprendizaje",
    sCurr: "Vinculación curricular", ceHead: "Competencia específica", critHead: "Criterios de evaluación",
    sabers: "Saberes", cc: "Competencias clave", vectors: "Vectores del currículo", ods: "ODS",
    sSeq: "Secuencia de actividades",
    phases: {
      inici: "Actividades de inicio y exploración",
      desenvolupament: "Actividades de desarrollo (introducción de nuevos conocimientos)",
      estructuracio: "Actividades de estructuración y síntesis",
      aplicacio: "Actividades de aplicación y transferencia"
    },
    sessionsRange: (a, b) => (a === b ? `sesión ${a}` : `sesiones ${a}–${b}`),
    sAval: "Evaluación",
    avalIntro: "La evaluación es formativa y formadora: se comparten los objetivos y los criterios de éxito desde el inicio, se da retroalimentación continua y el alumnado se autoevalúa y coevalúa. La calificación se expresa en grados de logro: No logro (NA), Logro satisfactorio (AS), Logro notable (AN) y Logro excelente (AE).",
    instruments: "Instrumentos y agentes de evaluación", instrument: "Instrumento", criteria: "Criterios", agent: "Agente",
    agents: { hetero: "Heteroevaluación", co: "Coevaluación", auto: "Autoevaluación" },
    rubric: "Rúbrica analítica",
    levels: {
      NA: "Lo hace de manera incompleta o con errores importantes, incluso con ayuda.",
      AS: "Lo hace de manera básica, con ayuda puntual, y el resultado cumple los requisitos mínimos.",
      AN: "Lo hace de manera autónoma y correcta, y justifica las decisiones tomadas.",
      AE: "Lo hace de manera autónoma, precisa y creativa, justifica las decisiones y transfiere el aprendizaje a otros contextos."
    },
    sDua: "Medidas y apoyos universales (DUA)", extraSupports: "Medidas y apoyos adicionales o intensivos",
    sGrad: "Gradación según el curso",
    grad: {
      "1": "Acompañamiento cercano del docente, modelos resueltos y andamiajes; retos más cerrados y pasos guiados.",
      "2": "Autonomía progresiva: los andamiajes se retiran gradualmente y los retos son semiabiertos.",
      "3": "Alta autonomía: retos abiertos con toma de decisiones justificada y mayor rigor técnico.",
      "4": "Autonomía plena: retos abiertos conectados con el entorno comunitario y profesional, y gestión del proyecto por parte del alumnado."
    },
    sConn: "Conexiones con otras materias", sRes: "Recursos",
    footer: (d) => `Referencia normativa: Decreto 175/2022, de 27 de septiembre, de ordenación de las enseñanzas de la educación básica (DOGC núm. 8762), anexo 3 (traducción de trabajo). Borrador generado el ${d}; hay que revisarlo y adaptarlo al grupo.`,
    shareCriteria: "Presentación del reto y del producto final. Se comparten los objetivos de aprendizaje y los criterios de éxito; KPSI inicial para explicitar los conocimientos previos.",
    finalSelf: "Autoevaluación final (diana o rúbrica) y reflexión metacognitiva comparándola con el KPSI inicial: qué he aprendido, cómo lo he aprendido y qué mejoraría.",
    customInici: (r) => [`Presentación del contexto y planteamiento del reto: «${r}». Lluvia de ideas y registro de preguntas del alumnado.`, "Formación de equipos, asignación de roles y acuerdo de normas de trabajo."],
    customEstr: ["Elaboración de una base de orientación o mapa conceptual de los aprendizajes clave.", "Coevaluación del progreso entre equipos con la rúbrica y ajuste del plan de trabajo."],
    customApl: (p) => [`Elaboración del producto final: ${p}.`, "Presentación pública y difusión del producto a un público real (comunidad educativa, familias, entidades)."],
    customObj: (crit, t) => `${crit} en el marco del reto «${t}».`,
    vectorActions: {
      competencial: "El reto parte de un contexto real y cercano y moviliza saberes de diferentes ámbitos para elaborar un producto con sentido.",
      genere: "Roles rotativos dentro de los equipos, referentes femeninos de la tecnología y lenguaje inclusivo en los materiales y las presentaciones.",
      universalitat: "Diseño según el DUA con múltiples formas de representación, de acción y expresión y de implicación, y opciones de formato para el producto final.",
      llengua: "Uso del vocabulario técnico, glosario colaborativo y producción de textos técnicos y orales (memoria, presentación, defensa).",
      ciutadania: "El producto tiene una finalidad social vinculada a los ODS y se fomenta la toma de decisiones democrática dentro de los equipos.",
      benestar: "El error se gestiona como oportunidad de aprendizaje; se cuida la cohesión del grupo y se reconoce el esfuerzo y el progreso."
    },
    extraActivity: "Actividad complementaria",
    ceActivities: {
      tid: {
        "1": "Búsqueda y contraste de información en al menos tres fuentes, valorando su fiabilidad con una ficha de fuentes; análisis de un objeto o sistema relacionado.",
        "2": "Planificación del proyecto: reparto de roles, calendario (diagrama de Gantt sencillo), lista de materiales y presupuesto.",
        "3": "Práctica de taller guiada con ficha de seguridad y uso correcto de herramientas, máquinas e instrumentos de medida.",
        "4": "Elaboración de la documentación técnica (bocetos, planos acotados, esquemas) con herramientas digitales colaborativas.",
        "5": "Retos de programación graduados (secuencias, bucles, condicionales) con depuración en pareja.",
        "6": "Configuración del entorno digital de trabajo: carpetas compartidas, permisos, licencias de los recursos y copia de seguridad.",
        "7": "Análisis del impacto social y ambiental de la solución a lo largo de su ciclo de vida y propuestas de mejora."
      },
      tec: {
        "1": "Aplicación de una técnica de ideación (SCAMPER, Crazy 8, brainstorming) y selección de la mejor idea con criterios consensuados.",
        "2": "Análisis del ciclo de vida del producto y selección justificada de materiales y técnicas de fabricación.",
        "3": "Reuniones de equipo con acta digital, roles rotativos y herramientas colaborativas en la nube.",
        "4": "Diseño y simulación del sistema de control (sensores, controlador, actuadores) antes del montaje físico.",
        "5": "Modelado 3D y simulación de la solución; configuración de las herramientas de fabricación digital.",
        "6": "Evaluación del impacto ambiental y social de la solución (consumo energético, materiales, huella de carbono)."
      },
      dig: {
        "1": "Configuración práctica de dispositivos, sistemas operativos y red con resolución de incidencias simuladas.",
        "2": "Creación de contenidos digitales y organización en el entorno personal de aprendizaje (portafolio digital).",
        "3": "Revisión y mejora de la configuración de seguridad y privacidad de dispositivos y cuentas.",
        "4": "Análisis crítico de mensajes y fuentes, y reflexión sobre derechos de autoría y licencias de uso.",
        "5": "Análisis del impacto de la tecnología en relación con los ODS y aplicación de una tecnología emergente (IA, IoT)."
      }
    },
    ceInstruments: {
      tid: {
        "1": ["Ficha de fuentes y de análisis de objetos", "hetero"], "2": ["Memoria de proyecto y diario de equipo", "co"],
        "3": ["Lista de control de taller y ensayo del prototipo", "hetero"], "4": ["Rúbrica de documentación técnica y presentación oral", "co"],
        "5": ["Retos de programación y diario de depuración", "hetero"], "6": ["Lista de control de configuración y seguridad", "auto"],
        "7": ["Texto argumentativo o debate con rúbrica", "hetero"]
      },
      tec: {
        "1": ["Plan de proyecto (canvas) y registro de iteraciones", "hetero"], "2": ["Lista de control de fabricación e informe de viabilidad", "hetero"],
        "3": ["Rúbrica de presentación y de trabajo en equipo", "co"], "4": ["Prueba funcional del sistema y código comentado", "hetero"],
        "5": ["Portafolio digital de diseños y simulaciones", "auto"], "6": ["Informe de sostenibilidad y ciclo de vida", "hetero"]
      },
      dig: {
        "1": ["Práctica de configuración con lista de control", "hetero"], "2": ["Portafolio digital de producciones (EPA)", "auto"],
        "3": ["Checklist de seguridad y autoevaluación de bienestar digital", "auto"], "4": ["Rúbrica de participación y producción en la red", "co"],
        "5": ["Informe de impacto y prototipo con tecnología emergente", "hetero"]
      }
    },
    commonInstruments: [["KPSI inicial y final", "auto"], ["Diana de autoevaluación y coevaluación del trabajo en equipo", "co"], ["Observación sistemática con registro del docente", "hetero"]]
  }
};
