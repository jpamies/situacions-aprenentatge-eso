// Contextos (reptes) predefinits per matèria. Cada context suggereix les competències,
// criteris i sabers més pertinents; el o la docent els pot modificar abans de generar.

const a = (ca, es) => ({ ca, es });

export const THEMES = [
  // ───────────── Tecnologia i Digitalització (1r-3r) ─────────────
  {
    id: "tid-pont", subject: "tid", cursos: ["1", "2"],
    title: a("Un pont per creuar la riera", "Un puente para cruzar la riera"),
    context: a(
      "L'Ajuntament vol instal·lar una passarel·la per a vianants sobre la riera que travessa el barri, perquè a l'hivern l'alumnat ha de fer una volta de quinze minuts per arribar a l'institut. Ens demana propostes de disseny que siguin resistents, econòmiques i respectuoses amb l'entorn.",
      "El Ayuntamiento quiere instalar una pasarela peatonal sobre la riera que atraviesa el barrio, porque en invierno el alumnado tiene que dar un rodeo de quince minutos para llegar al instituto. Nos pide propuestas de diseño que sean resistentes, económicas y respetuosas con el entorno."),
    repte: a("Com podem dissenyar i construir una maqueta de pont que suporti la màxima càrrega amb el mínim material?", "¿Cómo podemos diseñar y construir una maqueta de puente que soporte la máxima carga con el mínimo material?"),
    producte: a("Maqueta de pont a escala, provada a càrrega, i memòria tècnica del projecte", "Maqueta de puente a escala, probada a carga, y memoria técnica del proyecto"),
    ces: ["1", "2", "3", "4"], criteris: ["1.2", "2.1", "2.2", "3.1", "3.2", "4.1", "4.2"],
    sabers: ["A1", "A3", "A4", "A7", "A8", "B2", "B3"], ods: [9, 11, 12], cc: ["STEM", "CD", "CE", "CPSAA"],
    objectius: [
      a("Identificar els esforços (tracció, compressió, flexió) i els perfils estructurals presents en ponts reals per justificar decisions de disseny.", "Identificar los esfuerzos (tracción, compresión, flexión) y los perfiles estructurales presentes en puentes reales para justificar decisiones de diseño."),
      a("Dissenyar un pont triangulat a escala aplicant normes d'acotació i eines CAD 2D.", "Diseñar un puente triangulado a escala aplicando normas de acotación y herramientas CAD 2D."),
      a("Construir la maqueta amb eines de taller seguint les normes de seguretat i optimitzant el material.", "Construir la maqueta con herramientas de taller siguiendo las normas de seguridad y optimizando el material."),
      a("Avaluar el resultat amb un assaig de càrrega i comunicar-lo amb vocabulari tècnic.", "Evaluar el resultado mediante un ensayo de carga y comunicarlo con vocabulario técnico.")
    ],
    activitats: {
      inici: [
        a("Passeig virtual (fotos, Google Maps) per ponts famosos i del municipi: què els manté drets? Registre d'hipòtesis al mur de l'aula.", "Paseo virtual (fotos, Google Maps) por puentes famosos y del municipio: ¿qué los mantiene en pie? Registro de hipótesis en el mural del aula."),
        a("Mini-repte exprés: aguantar un llibre amb un full de paper a 10 cm d'alçada. Posada en comú sobre forma i rigidesa.", "Minirreto exprés: sostener un libro con una hoja de papel a 10 cm de altura. Puesta en común sobre forma y rigidez.")
      ],
      desenvolupament: [
        a("Laboratori d'esforços: experimentació amb esponges, gomes i palets per identificar tracció, compressió, flexió, torsió i cisallament.", "Laboratorio de esfuerzos: experimentación con esponjas, gomas y palos para identificar tracción, compresión, flexión, torsión y cizalladura."),
        a("Anàlisi de tipologies de pont (biga, arc, penjant, atirantat) i ús d'un simulador de ponts per comparar solucions triangulades.", "Análisis de tipologías de puente (viga, arco, colgante, atirantado) y uso de un simulador de puentes para comparar soluciones trianguladas."),
        a("Croquis, plànol acotat a escala i full de procés amb llista de materials i pressupost (CAD 2D).", "Croquis, plano acotado a escala y hoja de proceso con lista de materiales y presupuesto (CAD 2D).")
      ],
      estructuracio: [
        a("Mapa conceptual col·laboratiu: esforços, elements estructurals i condicions (resistència, rigidesa, estabilitat).", "Mapa conceptual colaborativo: esfuerzos, elementos estructurales y condiciones (resistencia, rigidez, estabilidad)."),
        a("Base d'orientació del procés tecnològic aplicada al pont, revisada per parelles.", "Base de orientación del proceso tecnológico aplicada al puente, revisada por parejas.")
      ],
      aplicacio: [
        a("Construcció de la maqueta al taller amb rols cooperatius (coordinació, materials, seguretat, documentació).", "Construcción de la maqueta en el taller con roles cooperativos (coordinación, materiales, seguridad, documentación)."),
        a("Assaig de càrrega final: càlcul de l'eficiència (càrrega suportada / massa del pont) i proposta de millora.", "Ensayo de carga final: cálculo de la eficiencia (carga soportada / masa del puente) y propuesta de mejora.")
      ]
    },
    connexions: a("Matemàtiques (escales, proporcionalitat, geometria del triangle), Ciències (forces), Educació Visual i Plàstica (representació).", "Matemáticas (escalas, proporcionalidad, geometría del triángulo), Ciencias (fuerzas), Educación Plástica y Visual (representación)."),
    recursos: a("Palets de fusta, cola blanca, serra de marqueteria, regles, balança/dinamòmetre, simulador de ponts en línia, programari CAD 2D (p. ex. LibreCAD, Tinkercad).", "Palos de madera, cola blanca, sierra de marquetería, reglas, balanza/dinamómetro, simulador de puentes en línea, software CAD 2D (p. ej. LibreCAD, Tinkercad).")
  },
  {
    id: "tid-casa", subject: "tid", cursos: ["2", "3"],
    title: a("La casa que no malbarata energia", "La casa que no derrocha energía"),
    context: a(
      "La factura de la llum de moltes famílies s'ha disparat i una entitat del barri ens demana materials per explicar com estalviar energia a casa. Construirem la maqueta d'un habitatge amb la instal·lació elèctrica i la farem servir per mostrar bones pràctiques d'eficiència.",
      "La factura de la luz de muchas familias se ha disparado y una entidad del barrio nos pide materiales para explicar cómo ahorrar energía en casa. Construiremos la maqueta de una vivienda con su instalación eléctrica y la usaremos para mostrar buenas prácticas de eficiencia."),
    repte: a("Com podem il·luminar i fer funcionar una casa consumint el mínim d'energia possible?", "¿Cómo podemos iluminar y hacer funcionar una casa consumiendo la mínima energía posible?"),
    producte: a("Maqueta d'habitatge amb circuits elèctrics funcionals i infografia d'estalvi energètic", "Maqueta de vivienda con circuitos eléctricos funcionales e infografía de ahorro energético"),
    ces: ["2", "3", "4", "7"], criteris: ["2.1", "2.3", "3.1", "3.2", "4.2", "4.3", "7.1"],
    sabers: ["A6", "A7", "A8", "B2", "B4", "E2", "E3"], ods: [7, 11, 12, 13], cc: ["STEM", "CD", "CC", "CCL"],
    objectius: [
      a("Interpretar i dissenyar esquemes elèctrics en sèrie, paral·lel i mixtos amb la simbologia normalitzada.", "Interpretar y diseñar esquemas eléctricos en serie, paralelo y mixtos con la simbología normalizada."),
      a("Calcular magnituds elèctriques (V, I, R, P) i el consum energètic d'aparells per prendre decisions d'estalvi.", "Calcular magnitudes eléctricas (V, I, R, P) y el consumo energético de aparatos para tomar decisiones de ahorro."),
      a("Muntar i verificar amb el polímetre la instal·lació de la maqueta seguint normes de seguretat.", "Montar y verificar con el polímetro la instalación de la maqueta siguiendo normas de seguridad."),
      a("Comunicar propostes d'eficiència energètica a la comunitat mitjançant una infografia.", "Comunicar propuestas de eficiencia energética a la comunidad mediante una infografía.")
    ],
    activitats: {
      inici: [
        a("Anàlisi d'una factura elèctrica real (anonimitzada): què paguem? Pluja d'idees d'aparells que més consumeixen.", "Análisis de una factura eléctrica real (anonimizada): ¿qué pagamos? Lluvia de ideas de los aparatos que más consumen."),
        a("Auditoria energètica de l'aula: comptem punts de llum, aparells en standby i hores d'ús.", "Auditoría energética del aula: contamos puntos de luz, aparatos en standby y horas de uso.")
      ],
      desenvolupament: [
        a("Simulació de circuits (sèrie, paral·lel, mixtos) i mesura de tensió i intensitat; deducció experimental de la llei d'Ohm.", "Simulación de circuitos (serie, paralelo, mixtos) y medida de tensión e intensidad; deducción experimental de la ley de Ohm."),
        a("Comparativa LED vs. incandescent: potència, rendiment i cost en 10 anys (full de càlcul).", "Comparativa LED vs. incandescente: potencia, rendimiento y coste en 10 años (hoja de cálculo)."),
        a("Disseny de l'esquema elèctric de la maqueta amb interruptors, commutadors i LED.", "Diseño del esquema eléctrico de la maqueta con interruptores, conmutadores y LED.")
      ],
      estructuracio: [
        a("Fitxa-resum de magnituds, unitats i fórmules elaborada per l'alumnat i validada en grup.", "Ficha-resumen de magnitudes, unidades y fórmulas elaborada por el alumnado y validada en grupo."),
        a("Decàleg d'eficiència energètica a casa, consensuat per l'aula.", "Decálogo de eficiencia energética en casa, consensuado por el aula.")
      ],
      aplicacio: [
        a("Construcció i cablejat de la maqueta; verificació amb polímetre i registre de mesures.", "Construcción y cableado de la maqueta; verificación con polímetro y registro de medidas."),
        a("Infografia digital per a l'entitat del barri i presentació oral amb la maqueta.", "Infografía digital para la entidad del barrio y presentación oral con la maqueta.")
      ]
    },
    connexions: a("Física i Química (electricitat, energia), Matemàtiques (proporcionalitat, full de càlcul), Ciències Socials (consum i pobresa energètica).", "Física y Química (electricidad, energía), Matemáticas (proporcionalidad, hoja de cálculo), Ciencias Sociales (consumo y pobreza energética)."),
    recursos: a("Cartó ploma, LED, portapiles, interruptors, cable, polímetre, simulador de circuits (p. ex. Tinkercad Circuits, Falstad), eina d'infografies.", "Cartón pluma, LED, portapilas, interruptores, cable, polímetro, simulador de circuitos (p. ej. Tinkercad Circuits, Falstad), herramienta de infografías.")
  },
  {
    id: "tid-joguina", subject: "tid", cursos: ["1", "2", "3"],
    title: a("Joguines amb moviment i segona vida", "Juguetes con movimiento y segunda vida"),
    context: a(
      "L'escola bressol del barri necessita joguines i nosaltres tenim moltes andròmines que acabaran a la deixalleria. Crearem joguines amb mecanismes a partir de materials reutilitzats, aplicant l'economia circular.",
      "La escuela infantil del barrio necesita juguetes y nosotros tenemos muchos trastos que acabarán en el punto limpio. Crearemos juguetes con mecanismos a partir de materiales reutilizados, aplicando la economía circular."),
    repte: a("Com podem transformar residus en una joguina amb moviment, segura i atractiva per a infants petits?", "¿Cómo podemos transformar residuos en un juguete con movimiento, seguro y atractivo para niños pequeños?"),
    producte: a("Joguina mecànica (autòmat) feta amb materials reutilitzats i fitxa tècnica de cicle de vida", "Juguete mecánico (autómata) hecho con materiales reutilizados y ficha técnica de ciclo de vida"),
    ces: ["1", "2", "3", "7"], criteris: ["1.2", "2.1", "2.3", "3.1", "3.2", "7.3"],
    sabers: ["A3", "A5", "A7", "A8", "A9", "E1", "E2"], ods: [4, 12, 13], cc: ["STEM", "CE", "CC", "CPSAA"],
    objectius: [
      a("Analitzar joguines mecàniques per identificar mecanismes de transmissió i transformació del moviment.", "Analizar juguetes mecánicos para identificar mecanismos de transmisión y transformación del movimiento."),
      a("Calcular relacions de transmissió en politges i engranatges per obtenir el moviment desitjat.", "Calcular relaciones de transmisión en poleas y engranajes para obtener el movimiento deseado."),
      a("Construir un autòmat amb materials reutilitzats aplicant criteris de seguretat i d'economia circular.", "Construir un autómata con materiales reutilizados aplicando criterios de seguridad y de economía circular.")
    ],
    activitats: {
      inici: [
        a("Caixa misteriosa: desmuntatge d'una joguina vella per descobrir què la fa moure (anàlisi d'objectes).", "Caja misteriosa: desmontaje de un juguete viejo para descubrir qué lo hace moverse (análisis de objetos)."),
        a("Recollida i classificació de residus de casa: quins materials hi ha i quines propietats tenen?", "Recogida y clasificación de residuos de casa: ¿qué materiales hay y qué propiedades tienen?")
      ],
      desenvolupament: [
        a("Estacions de mecanismes: palanques, politges, engranatges, lleva, biela-manovella (muntatge físic o simulat).", "Estaciones de mecanismos: palancas, poleas, engranajes, leva, biela-manivela (montaje físico o simulado)."),
        a("Càlcul de relacions de transmissió i velocitats; repte de dissenyar una reductora.", "Cálculo de relaciones de transmisión y velocidades; reto de diseñar una reductora."),
        a("Esbossos i prototip ràpid en cartró de la joguina; validació amb criteris de seguretat infantil.", "Bocetos y prototipo rápido en cartón del juguete; validación con criterios de seguridad infantil.")
      ],
      estructuracio: [
        a("Taula-resum de mecanismes: moviment d'entrada, de sortida, aplicació i exemple quotidià.", "Tabla-resumen de mecanismos: movimiento de entrada, de salida, aplicación y ejemplo cotidiano."),
        a("Fitxa de cicle de vida de la joguina (les 7R) i comparativa amb una joguina comercial.", "Ficha de ciclo de vida del juguete (las 7R) y comparativa con un juguete comercial.")
      ],
      aplicacio: [
        a("Construcció de l'autòmat al taller i proves de funcionament i durabilitat.", "Construcción del autómata en el taller y pruebas de funcionamiento y durabilidad."),
        a("Lliurament de les joguines a l'escola bressol amb una petita demostració (aprenentatge servei).", "Entrega de los juguetes a la escuela infantil con una pequeña demostración (aprendizaje-servicio).")
      ]
    },
    connexions: a("Matemàtiques (raons i proporcions), Ciències (màquines simples), Educació Visual i Plàstica (disseny), Valors (consum responsable).", "Matemáticas (razones y proporciones), Ciencias (máquinas simples), Educación Plástica y Visual (diseño), Valores (consumo responsable)."),
    recursos: a("Envasos, taps, cartró, broquetes, gomes, engranatges reciclats, pistola de cola, simulador de mecanismes.", "Envases, tapones, cartón, brochetas, gomas, engranajes reciclados, pistola de cola, simulador de mecanismos.")
  },
  {
    id: "tid-hort", subject: "tid", cursos: ["2", "3"],
    title: a("L'hort escolar intel·ligent", "El huerto escolar inteligente"),
    context: a(
      "A l'estiu i els caps de setmana ningú rega l'hort de l'institut i les plantes es moren. A més, l'aigua és un recurs escàs. Necessitem un sistema que controli la humitat de la terra i regui només quan cal.",
      "En verano y los fines de semana nadie riega el huerto del instituto y las plantas se mueren. Además, el agua es un recurso escaso. Necesitamos un sistema que controle la humedad de la tierra y riegue solo cuando haga falta."),
    repte: a("Com podem automatitzar el reg de l'hort per estalviar aigua i mantenir les plantes vives?", "¿Cómo podemos automatizar el riego del huerto para ahorrar agua y mantener las plantas vivas?"),
    producte: a("Prototip de sistema de reg automàtic programat amb sensor d'humitat i panell de dades", "Prototipo de sistema de riego automático programado con sensor de humedad y panel de datos"),
    ces: ["1", "5", "4", "7"], criteris: ["1.1", "5.1", "5.3", "4.1", "7.2"],
    sabers: ["A2", "C1", "C3", "C5", "B4", "E2"], ods: [6, 12, 13, 15], cc: ["STEM", "CD", "CE", "CC"],
    objectius: [
      a("Investigar les necessitats hídriques de les plantes de l'hort contrastant fonts fiables.", "Investigar las necesidades hídricas de las plantas del huerto contrastando fuentes fiables."),
      a("Dissenyar l'algorisme de control del reg amb un diagrama de flux (entrada, procés, sortida).", "Diseñar el algoritmo de control del riego con un diagrama de flujo (entrada, proceso, salida)."),
      a("Programar una placa controladora amb sensor i actuador, depurant errors de manera iterativa.", "Programar una placa controladora con sensor y actuador, depurando errores de manera iterativa."),
      a("Valorar l'aportació de l'automatització i l'IoT a l'ús sostenible de l'aigua.", "Valorar la aportación de la automatización y el IoT al uso sostenible del agua.")
    ],
    activitats: {
      inici: [
        a("Visita a l'hort i fotografies de plantes mustigues: quines causes hi ha? Formulació de la pregunta del repte.", "Visita al huerto y fotografías de plantas mustias: ¿qué causas hay? Formulación de la pregunta del reto."),
        a("Què és un sistema automàtic? Identificació d'exemples quotidians (portes, semàfors, rentadores).", "¿Qué es un sistema automático? Identificación de ejemplos cotidianos (puertas, semáforos, lavadoras).")
      ],
      desenvolupament: [
        a("Cerca guiada sobre necessitats d'aigua de les hortalisses i reg eficient (fitxa de fonts amb valoració de fiabilitat).", "Búsqueda guiada sobre las necesidades de agua de las hortalizas y el riego eficiente (ficha de fuentes con valoración de fiabilidad)."),
        a("Reptes de programació progressius amb la placa (micro:bit/Arduino): llegir el sensor, mostrar valors, condicionals.", "Retos de programación progresivos con la placa (micro:bit/Arduino): leer el sensor, mostrar valores, condicionales."),
        a("Diagrama de flux del sistema i muntatge al simulador abans del muntatge físic.", "Diagrama de flujo del sistema y montaje en el simulador antes del montaje físico.")
      ],
      estructuracio: [
        a("Glossari visual: sensor, actuador, controlador, llindar, bucle, condicional.", "Glosario visual: sensor, actuador, controlador, umbral, bucle, condicional."),
        a("Diari de depuració: registre d'errors trobats i com s'han resolt.", "Diario de depuración: registro de errores encontrados y cómo se han resuelto.")
      ],
      aplicacio: [
        a("Muntatge del prototip a l'hort (o en una jardinera de prova) i calibratge del llindar d'humitat.", "Montaje del prototipo en el huerto (o en una jardinera de prueba) y calibración del umbral de humedad."),
        a("Presentació del sistema a la comunitat educativa amb dades recollides durant una setmana.", "Presentación del sistema a la comunidad educativa con datos recogidos durante una semana.")
      ]
    },
    connexions: a("Biologia i Geologia (necessitats de les plantes), Matemàtiques (gràfiques i dades), Ciències Socials (gestió de l'aigua).", "Biología y Geología (necesidades de las plantas), Matemáticas (gráficas y datos), Ciencias Sociales (gestión del agua)."),
    recursos: a("Placa micro:bit o Arduino, sensor d'humitat de terra, minibomba d'aigua o servomotor, relé, MakeCode/Arduino IDE/ArduinoBlocks, simulador Wokwi o Tinkercad.", "Placa micro:bit o Arduino, sensor de humedad de suelo, minibomba de agua o servomotor, relé, MakeCode/Arduino IDE/ArduinoBlocks, simulador Wokwi o Tinkercad.")
  },
  {
    id: "tid-robot", subject: "tid", cursos: ["2", "3"],
    title: a("Robot repartidor de l'institut", "Robot repartidor del instituto"),
    context: a(
      "La consergeria ha de portar paquets i documents per tot l'edifici i alguns alumnes amb mobilitat reduïda tenen dificultats per recollir material. Proposem un robot que segueixi un recorregut i faci lliuraments senzills.",
      "Conserjería tiene que llevar paquetes y documentos por todo el edificio y algunos alumnos con movilidad reducida tienen dificultades para recoger material. Proponemos un robot que siga un recorrido y haga entregas sencillas."),
    repte: a("Com podem programar un robot que es desplaci de manera autònoma i segura per fer lliuraments dins el centre?", "¿Cómo podemos programar un robot que se desplace de manera autónoma y segura para hacer entregas dentro del centro?"),
    producte: a("Robot mòbil programat (seguidor de línia / evitador d'obstacles) i vídeo demostratiu", "Robot móvil programado (seguidor de línea / evitador de obstáculos) y vídeo demostrativo"),
    ces: ["2", "5", "3", "4"], criteris: ["2.1", "2.2", "5.1", "5.3", "3.2", "4.3"],
    sabers: ["A1", "A9", "C1", "C4", "C5", "B4"], ods: [4, 9, 10], cc: ["STEM", "CD", "CE", "CPSAA"],
    objectius: [
      a("Descompondre el problema del lliurament en subproblemes i representar-los amb algorismes.", "Descomponer el problema de la entrega en subproblemas y representarlos con algoritmos."),
      a("Programar el robot amb estructures de control i sensors per desplaçar-se de manera autònoma.", "Programar el robot con estructuras de control y sensores para desplazarse de manera autónoma."),
      a("Planificar i repartir les tasques de l'equip i avaluar el funcionament del robot respecte als requisits.", "Planificar y repartir las tareas del equipo y evaluar el funcionamiento del robot respecto a los requisitos.")
    ],
    activitats: {
      inici: [
        a("Visionat de robots de repartiment reals i debat: quins avantatges i riscos tenen? Quines feines canvien?", "Visionado de robots de reparto reales y debate: ¿qué ventajas y riesgos tienen? ¿Qué trabajos cambian?"),
        a("Joc desendollat: un company fa de robot i la resta li dona instruccions precises per arribar a un punt.", "Juego desenchufado: un compañero hace de robot y el resto le da instrucciones precisas para llegar a un punto.")
      ],
      desenvolupament: [
        a("Reptes de moviment: quadrat, eslàlom, aturada davant d'obstacle (seqüències, bucles, condicionals).", "Retos de movimiento: cuadrado, eslalon, parada ante obstáculo (secuencias, bucles, condicionales)."),
        a("Sensors d'infraroig i d'ultrasons: lectura, calibratge i ús en condicions.", "Sensores de infrarrojos y de ultrasonidos: lectura, calibración y uso en condiciones."),
        a("Planificació del projecte amb tauler kanban i repartiment de rols.", "Planificación del proyecto con tablero kanban y reparto de roles.")
      ],
      estructuracio: [
        a("Diagrama de flux final del robot comentat i revisat entre equips.", "Diagrama de flujo final del robot comentado y revisado entre equipos."),
        a("Llista de control de bones pràctiques de programació i depuració.", "Lista de control de buenas prácticas de programación y depuración.")
      ],
      aplicacio: [
        a("Prova en circuit real (passadís o maqueta de l'institut) amb mesura de temps i errors.", "Prueba en circuito real (pasillo o maqueta del instituto) con medida de tiempos y errores."),
        a("Vídeo demostratiu d'1-2 minuts explicant el funcionament i les millores futures.", "Vídeo demostrativo de 1-2 minutos explicando el funcionamiento y las mejoras futuras.")
      ]
    },
    connexions: a("Matemàtiques (angles, mesures, velocitat), Llengües (guió del vídeo), Educació en valors (impacte laboral de l'automatització).", "Matemáticas (ángulos, medidas, velocidad), Lenguas (guion del vídeo), Educación en valores (impacto laboral de la automatización)."),
    recursos: a("Kits de robòtica educativa (mBot, Lego Spike, Arduino amb xassís), cinta negra, programari de blocs, càmera o mòbil.", "Kits de robótica educativa (mBot, Lego Spike, Arduino con chasis), cinta negra, software de bloques, cámara o móvil.")
  },
  {
    id: "tid-app", subject: "tid", cursos: ["2", "3"],
    title: a("Una app per al nostre institut", "Una app para nuestro instituto"),
    context: a(
      "Les famílies i l'alumnat nou es perden: no saben on és cada aula, quins horaris té la biblioteca o com reservar material. Crearem una aplicació mòbil senzilla que resolgui una necessitat real del centre.",
      "Las familias y el alumnado nuevo se pierden: no saben dónde está cada aula, qué horarios tiene la biblioteca o cómo reservar material. Crearemos una aplicación móvil sencilla que resuelva una necesidad real del centro."),
    repte: a("Quina app necessita la nostra comunitat educativa i com la podem programar perquè sigui útil i accessible?", "¿Qué app necesita nuestra comunidad educativa y cómo podemos programarla para que sea útil y accesible?"),
    producte: a("Aplicació mòbil funcional (App Inventor o similar) i pitch de presentació", "Aplicación móvil funcional (App Inventor o similar) y pitch de presentación"),
    ces: ["1", "5", "4", "6"], criteris: ["1.1", "5.1", "5.2", "4.3", "6.2"],
    sabers: ["A2", "C1", "C2", "C5", "D4", "B4"], ods: [4, 10], cc: ["CD", "STEM", "CE", "CCL"],
    objectius: [
      a("Detectar una necessitat del centre mitjançant enquestes i entrevistes i definir els requisits de l'app.", "Detectar una necesidad del centro mediante encuestas y entrevistas y definir los requisitos de la app."),
      a("Dissenyar la interfície i l'algorisme de l'app tenint en compte criteris d'usabilitat i accessibilitat.", "Diseñar la interfaz y el algoritmo de la app teniendo en cuenta criterios de usabilidad y accesibilidad."),
      a("Programar l'app amb variables, esdeveniments i condicionals, i provar-la amb usuaris reals.", "Programar la app con variables, eventos y condicionales, y probarla con usuarios reales."),
      a("Respectar les llicències dels recursos utilitzats i presentar el producte de manera convincent.", "Respetar las licencias de los recursos utilizados y presentar el producto de manera convincente.")
    ],
    activitats: {
      inici: [
        a("Enquesta digital a alumnat, famílies i professorat per detectar necessitats d'informació del centre.", "Encuesta digital a alumnado, familias y profesorado para detectar necesidades de información del centro."),
        a("Anàlisi crítica d'apps que fem servir: què les fa útils o frustrants?", "Análisis crítico de apps que usamos: ¿qué las hace útiles o frustrantes?")
      ],
      desenvolupament: [
        a("Prototip en paper (wireframes) i prova amb companys (pensament de disseny).", "Prototipo en papel (wireframes) y prueba con compañeros (design thinking)."),
        a("Tutorials guiats d'App Inventor: botons, pantalles, variables, base de dades local; opcionalment, un mòdul d'IA (p. ex. reconeixement d'imatges).", "Tutoriales guiados de App Inventor: botones, pantallas, variables, base de datos local; opcionalmente, un módulo de IA (p. ej. reconocimiento de imágenes)."),
        a("Cerca de recursos (icones, imatges) amb llicències Creative Commons i registre d'atribucions.", "Búsqueda de recursos (iconos, imágenes) con licencias Creative Commons y registro de atribuciones.")
      ],
      estructuracio: [
        a("Esquema de components de programació utilitzats i la seva funció.", "Esquema de componentes de programación utilizados y su función."),
        a("Checklist d'accessibilitat i usabilitat aplicada per un altre equip (coavaluació).", "Checklist de accesibilidad y usabilidad aplicado por otro equipo (coevaluación).")
      ],
      aplicacio: [
        a("Proves d'usuari amb alumnat d'altres cursos i millora iterativa de l'app.", "Pruebas de usuario con alumnado de otros cursos y mejora iterativa de la app."),
        a("Pitch de 3 minuts davant d'un jurat (direcció, AFA, alumnat).", "Pitch de 3 minutos ante un jurado (dirección, AFA, alumnado).")
      ]
    },
    connexions: a("Llengües (enquestes, pitch), Matemàtiques (tractament de dades de l'enquesta), Educació Visual i Plàstica (disseny d'interfícies).", "Lenguas (encuestas, pitch), Matemáticas (tratamiento de datos de la encuesta), Educación Plástica y Visual (diseño de interfaces)."),
    recursos: a("MIT App Inventor, mòbils o emuladors, formularis en línia, bancs d'imatges amb llicència CC.", "MIT App Inventor, móviles o emuladores, formularios en línea, bancos de imágenes con licencia CC.")
  },
  {
    id: "tid-ciber", subject: "tid", cursos: ["1", "2", "3"],
    title: a("Detectives del nostre entorn digital", "Detectives de nuestro entorno digital"),
    context: a(
      "Arran d'un cas de suplantació d'identitat en un grup de missatgeria del curs, la tutoria ens demana que ajudem a millorar la seguretat i el benestar digital de l'alumnat de primer.",
      "A raíz de un caso de suplantación de identidad en un grupo de mensajería del curso, la tutoría nos pide que ayudemos a mejorar la seguridad y el bienestar digital del alumnado de primero."),
    repte: a("Com podem protegir els nostres dispositius, dades i benestar a la xarxa, i ajudar-ne els altres?", "¿Cómo podemos proteger nuestros dispositivos, datos y bienestar en la red, y ayudar a los demás a hacerlo?"),
    producte: a("Guia digital de supervivència a la xarxa i taller impartit a alumnat més jove", "Guía digital de supervivencia en la red y taller impartido a alumnado más joven"),
    ces: ["6", "7", "4"], criteris: ["6.1", "6.2", "6.3", "7.2", "4.3"],
    sabers: ["D1", "D2", "D3", "D5", "D6", "E1", "B1"], ods: [3, 4, 16], cc: ["CD", "CPSAA", "CC", "CCL"],
    objectius: [
      a("Identificar els components i els sistemes de comunicació dels dispositius que fem servir per entendre'n els riscos.", "Identificar los componentes y los sistemas de comunicación de los dispositivos que usamos para entender sus riesgos."),
      a("Aplicar mesures de seguretat (contrasenyes robustes, 2FA, còpies de seguretat, privadesa) als propis dispositius.", "Aplicar medidas de seguridad (contraseñas robustas, 2FA, copias de seguridad, privacidad) a los propios dispositivos."),
      a("Crear continguts digitals respectant les llicències i difondre'ls per sensibilitzar la comunitat.", "Crear contenidos digitales respetando las licencias y difundirlos para sensibilizar a la comunidad.")
    ],
    activitats: {
      inici: [
        a("Escape room de ciberseguretat: pistes amb contrasenyes febles, phishing i configuracions de privadesa.", "Escape room de ciberseguridad: pistas con contraseñas débiles, phishing y configuraciones de privacidad."),
        a("Qüestionari anònim d'hàbits digitals i temps de pantalla; anàlisi de resultats del grup.", "Cuestionario anónimo de hábitos digitales y tiempo de pantalla; análisis de resultados del grupo.")
      ],
      desenvolupament: [
        a("Anatomia d'un dispositiu: maquinari, programari, xarxes (wifi, bluetooth, dades mòbils) i on hi ha riscos.", "Anatomía de un dispositivo: hardware, software, redes (wifi, bluetooth, datos móviles) y dónde hay riesgos."),
        a("Laboratori de contrasenyes i doble factor; configuració de la privadesa d'apps habituals.", "Laboratorio de contraseñas y doble factor; configuración de la privacidad de apps habituales."),
        a("Organització de fitxers al núvol i còpies de seguretat (regla 3-2-1).", "Organización de archivos en la nube y copias de seguridad (regla 3-2-1).")
      ],
      estructuracio: [
        a("Mapa de riscos i mesures preventives elaborat en grup.", "Mapa de riesgos y medidas preventivas elaborado en grupo."),
        a("Protocol d'actuació davant ciberassetjament i suplantació (a qui demanar ajuda).", "Protocolo de actuación ante ciberacoso y suplantación (a quién pedir ayuda).")
      ],
      aplicacio: [
        a("Creació de la guia digital (web, pòster interactiu o vídeo) amb recursos amb llicència CC.", "Creación de la guía digital (web, póster interactivo o vídeo) con recursos con licencia CC."),
        a("Taller de 30 minuts impartit per l'alumnat a un grup de primer o de 6è de primària.", "Taller de 30 minutos impartido por el alumnado a un grupo de primero o de 6.º de primaria.")
      ]
    },
    connexions: a("Tutoria (benestar emocional, convivència), Llengües (textos divulgatius), Educació en Valors Cívics i Ètics.", "Tutoría (bienestar emocional, convivencia), Lenguas (textos divulgativos), Educación en Valores Cívicos y Éticos."),
    recursos: a("Ordinadors o tauletes, recursos de l'Internet Segura (INCIBE, Internet Segura Catalunya), eines de creació (Canva, Genially, Google Sites).", "Ordenadores o tabletas, recursos de Internet Segura (INCIBE, Internet Segura Catalunya), herramientas de creación (Canva, Genially, Google Sites).")
  },
  {
    id: "tid-adapta", subject: "tid", cursos: ["2", "3"],
    title: a("Dissenyem per a tothom: objectes adaptats en 3D", "Diseñamos para todos: objetos adaptados en 3D"),
    context: a(
      "Una residència de gent gran propera ens explica que molts residents tenen dificultats per obrir pots, agafar coberts o girar claus. Dissenyarem i fabricarem adaptadors personalitzats amb impressió 3D.",
      "Una residencia de mayores cercana nos explica que muchos residentes tienen dificultades para abrir botes, coger cubiertos o girar llaves. Diseñaremos y fabricaremos adaptadores personalizados con impresión 3D."),
    repte: a("Com podem dissenyar objectes que facilitin la vida diària de persones amb mobilitat reduïda a les mans?", "¿Cómo podemos diseñar objetos que faciliten la vida diaria de personas con movilidad reducida en las manos?"),
    producte: a("Adaptador dissenyat en CAD 3D, imprès i validat amb els usuaris, amb fitxa tècnica", "Adaptador diseñado en CAD 3D, impreso y validado con los usuarios, con ficha técnica"),
    ces: ["1", "2", "4", "3"], criteris: ["1.1", "2.1", "2.3", "4.1", "4.2", "3.2"],
    sabers: ["A2", "A7", "A8", "A9", "B2", "B3", "E2"], ods: [3, 10, 12], cc: ["STEM", "CD", "CE", "CC"],
    objectius: [
      a("Investigar les necessitats reals dels usuaris mitjançant entrevistes i observació (empatia).", "Investigar las necesidades reales de los usuarios mediante entrevistas y observación (empatía)."),
      a("Representar l'objecte amb vistes acotades i modelar-lo en 3D aplicant normes de representació.", "Representar el objeto con vistas acotadas y modelarlo en 3D aplicando normas de representación."),
      a("Fabricar el prototip amb impressió 3D i avaluar-lo amb els usuaris per millorar-lo.", "Fabricar el prototipo con impresión 3D y evaluarlo con los usuarios para mejorarlo.")
    ],
    activitats: {
      inici: [
        a("Simulació d'empatia: obrir un pot o cordar-se amb guants gruixuts. Què hem sentit?", "Simulación de empatía: abrir un bote o abrocharse con guantes gruesos. ¿Qué hemos sentido?"),
        a("Entrevista (presencial o en línia) a residents o a personal de la residència.", "Entrevista (presencial o en línea) a residentes o al personal de la residencia.")
      ],
      desenvolupament: [
        a("Vistes, perspectives i acotació d'objectes quotidians; mesura amb peu de rei.", "Vistas, perspectivas y acotación de objetos cotidianos; medida con pie de rey."),
        a("Iniciació a Tinkercad / FreeCAD: operacions booleanes i modelat paramètric senzill.", "Iniciación a Tinkercad / FreeCAD: operaciones booleanas y modelado paramétrico sencillo."),
        a("Materials per a impressió 3D (PLA, PETG): propietats, impacte ambiental i reciclatge.", "Materiales para impresión 3D (PLA, PETG): propiedades, impacto ambiental y reciclaje.")
      ],
      estructuracio: [
        a("Fitxa de disseny centrat en l'usuari: necessitat, requisits, solucions i decisions justificades.", "Ficha de diseño centrado en el usuario: necesidad, requisitos, soluciones y decisiones justificadas."),
        a("Coavaluació de models 3D amb rúbrica entre equips.", "Coevaluación de modelos 3D con rúbrica entre equipos.")
      ],
      aplicacio: [
        a("Impressió del prototip i prova amb usuaris; segona iteració del disseny.", "Impresión del prototipo y prueba con usuarios; segunda iteración del diseño."),
        a("Publicació del model amb llicència oberta en un repositori i lliurament a la residència.", "Publicación del modelo con licencia abierta en un repositorio y entrega a la residencia.")
      ]
    },
    connexions: a("Educació Visual i Plàstica (dibuix tècnic), Matemàtiques (geometria i mesura), Educació en Valors (inclusió), Biologia (anatomia de la mà).", "Educación Plástica y Visual (dibujo técnico), Matemáticas (geometría y medida), Educación en Valores (inclusión), Biología (anatomía de la mano)."),
    recursos: a("Impressora 3D, filament PLA, peu de rei, Tinkercad o FreeCAD, repositori de models (p. ex. Printables).", "Impresora 3D, filamento PLA, pie de rey, Tinkercad o FreeCAD, repositorio de modelos (p. ej. Printables).")
  },

  // ───────────── Tecnologia (4t) ─────────────
  {
    id: "tec-bioclima", subject: "tec", cursos: ["4"],
    title: a("Rehabilitem un edifici: arquitectura bioclimàtica", "Rehabilitamos un edificio: arquitectura bioclimática"),
    context: a(
      "Algunes aules del nostre institut són un forn al juny i una nevera al gener. El consell escolar vol saber quines intervencions de rehabilitació energètica serien més efectives i viables.",
      "Algunas aulas de nuestro instituto son un horno en junio y una nevera en enero. El consejo escolar quiere saber qué intervenciones de rehabilitación energética serían más efectivas y viables."),
    repte: a("Quines solucions bioclimàtiques i d'eficiència energètica podem proposar per millorar el confort de l'institut reduint-ne el consum?", "¿Qué soluciones bioclimáticas y de eficiencia energética podemos proponer para mejorar el confort del instituto reduciendo su consumo?"),
    producte: a("Proposta de rehabilitació energètica amb maqueta o model 3D, dades de sensors i informe de viabilitat", "Propuesta de rehabilitación energética con maqueta o modelo 3D, datos de sensores e informe de viabilidad"),
    ces: ["1", "2", "6", "3"], criteris: ["1.1", "1.3", "2.1", "2.3", "6.1", "6.2", "3.2"],
    sabers: ["A2", "A3", "A6", "A9", "A12", "D2", "D3"], ods: [7, 11, 13], cc: ["STEM", "CD", "CE", "CC"],
    objectius: [
      a("Analitzar les condicions tèrmiques i lumíniques del centre amb sensors i dades obertes.", "Analizar las condiciones térmicas y lumínicas del centro con sensores y datos abiertos."),
      a("Idear solucions bioclimàtiques (orientació, aïllament, proteccions solars, ventilació) i renovables.", "Idear soluciones bioclimáticas (orientación, aislamiento, protecciones solares, ventilación) y renovables."),
      a("Argumentar la viabilitat econòmica i ambiental de la proposta davant el consell escolar.", "Argumentar la viabilidad económica y ambiental de la propuesta ante el consejo escolar.")
    ],
    activitats: {
      inici: [
        a("Mapa de confort: cada grup mesura temperatura, humitat i lluminositat a diferents aules i hores.", "Mapa de confort: cada grupo mide temperatura, humedad y luminosidad en diferentes aulas y horas."),
        a("Anàlisi de casos d'arquitectura bioclimàtica tradicional i contemporània.", "Análisis de casos de arquitectura bioclimática tradicional y contemporánea.")
      ],
      desenvolupament: [
        a("Estudi de l'orientació solar del centre amb eines de trajectòria solar i plànols.", "Estudio de la orientación solar del centro con herramientas de trayectoria solar y planos."),
        a("Experiments amb maquetes: aïllaments, colors de façana, proteccions solars (presa de dades).", "Experimentos con maquetas: aislamientos, colores de fachada, protecciones solares (toma de datos)."),
        a("Dimensionament bàsic d'una instal·lació fotovoltaica d'autoconsum i càlcul d'amortització.", "Dimensionado básico de una instalación fotovoltaica de autoconsumo y cálculo de amortización.")
      ],
      estructuracio: [
        a("Taula de decisió multicriteri (cost, estalvi, impacte, viabilitat) per prioritzar intervencions.", "Tabla de decisión multicriterio (coste, ahorro, impacto, viabilidad) para priorizar intervenciones."),
        a("Infografia de principis bioclimàtics elaborada per cada grup.", "Infografía de principios bioclimáticos elaborada por cada grupo.")
      ],
      aplicacio: [
        a("Modelatge 3D o maqueta de l'aula rehabilitada i simulació de millores.", "Modelado 3D o maqueta del aula rehabilitada y simulación de mejoras."),
        a("Presentació de l'informe al consell escolar o a l'equip directiu.", "Presentación del informe al consejo escolar o al equipo directivo.")
      ]
    },
    connexions: a("Física i Química (calor i energia), Matemàtiques (estadística, funcions), Geografia (clima), Economia.", "Física y Química (calor y energía), Matemáticas (estadística, funciones), Geografía (clima), Economía."),
    recursos: a("Sensors de temperatura/llum (micro:bit, Arduino o dataloggers), SketchUp/Tinkercad, eines de trajectòria solar, factures del centre.", "Sensores de temperatura/luz (micro:bit, Arduino o dataloggers), SketchUp/Tinkercad, herramientas de trayectoria solar, facturas del centro.")
  },
  {
    id: "tec-iot", subject: "tec", cursos: ["4"],
    title: a("Estació meteorològica IoT per al barri", "Estación meteorológica IoT para el barrio"),
    context: a(
      "Les dades meteorològiques oficials es mesuren lluny del barri i no reflecteixen l'efecte illa de calor dels carrers sense arbres. Construirem una xarxa d'estacions connectades que publiquin dades obertes.",
      "Los datos meteorológicos oficiales se miden lejos del barrio y no reflejan el efecto isla de calor de las calles sin árboles. Construiremos una red de estaciones conectadas que publiquen datos abiertos."),
    repte: a("Com podem mesurar i compartir en temps real les condicions ambientals del barri per prendre millors decisions?", "¿Cómo podemos medir y compartir en tiempo real las condiciones ambientales del barrio para tomar mejores decisiones?"),
    producte: a("Estació IoT amb sensors, panell de dades en línia i informe d'anàlisi", "Estación IoT con sensores, panel de datos en línea e informe de análisis"),
    ces: ["4", "5", "3", "6"], criteris: ["4.1", "4.2", "5.1", "5.4", "3.1", "6.2"],
    sabers: ["B1", "B2", "C1", "C2", "C3", "A11", "D1"], ods: [11, 13, 3], cc: ["STEM", "CD", "CC", "CE"],
    objectius: [
      a("Seleccionar i connectar sensors i controladors adequats per a la mesura de variables ambientals.", "Seleccionar y conectar sensores y controladores adecuados para la medida de variables ambientales."),
      a("Programar l'enviament de dades a una plataforma IoT i visualitzar-les en un panell.", "Programar el envío de datos a una plataforma IoT y visualizarlos en un panel."),
      a("Analitzar les dades amb sentit crític i proposar actuacions per reduir l'illa de calor.", "Analizar los datos con sentido crítico y proponer actuaciones para reducir la isla de calor.")
    ],
    activitats: {
      inici: [
        a("Comparativa de dades oficials vs. mesures amb termòmetre en diferents carrers: hi ha diferències?", "Comparativa de datos oficiales vs. medidas con termómetro en diferentes calles: ¿hay diferencias?"),
        a("Què és l'Internet de les coses? Exemples a la ciutat (smart city) i debat sobre privadesa.", "¿Qué es el Internet de las cosas? Ejemplos en la ciudad (smart city) y debate sobre privacidad.")
      ],
      desenvolupament: [
        a("Pràctiques amb sensors analògics i digitals (temperatura, humitat, pressió, qualitat de l'aire).", "Prácticas con sensores analógicos y digitales (temperatura, humedad, presión, calidad del aire)."),
        a("Connexió WiFi de la placa (ESP32) i publicació de dades a una plataforma IoT (MQTT/ThingSpeak).", "Conexión WiFi de la placa (ESP32) y publicación de datos en una plataforma IoT (MQTT/ThingSpeak)."),
        a("Disseny i impressió 3D de la carcassa (protecció solar i ventilació).", "Diseño e impresión 3D de la carcasa (protección solar y ventilación).")
      ],
      estructuracio: [
        a("Esquema de blocs del sistema (sensors, controlador, comunicació, núvol, visualització).", "Esquema de bloques del sistema (sensores, controlador, comunicación, nube, visualización)."),
        a("Glossari d'IoT i big data amb exemples propis.", "Glosario de IoT y big data con ejemplos propios.")
      ],
      aplicacio: [
        a("Instal·lació de les estacions en diferents punts i recollida de dades durant dues setmanes.", "Instalación de las estaciones en diferentes puntos y recogida de datos durante dos semanas."),
        a("Informe amb gràfiques i propostes a l'Ajuntament (més arbrat, ombres, materials).", "Informe con gráficas y propuestas al Ayuntamiento (más arbolado, sombras, materiales).")
      ]
    },
    connexions: a("Física i Química, Matemàtiques (estadística), Biologia (salut i medi), Geografia (urbanisme).", "Física y Química, Matemáticas (estadística), Biología (salud y medio), Geografía (urbanismo)."),
    recursos: a("ESP32 o micro:bit amb mòdul WiFi, sensors DHT22/BME280, plataforma IoT gratuïta, impressora 3D.", "ESP32 o micro:bit con módulo WiFi, sensores DHT22/BME280, plataforma IoT gratuita, impresora 3D.")
  },
  {
    id: "tec-robot", subject: "tec", cursos: ["4"],
    title: a("Robots que classifiquen residus", "Robots que clasifican residuos"),
    context: a(
      "A la planta de reciclatge comarcal, molts residus acaben mal classificats. Volem prototipar un sistema automàtic que separi els envasos segons el material.",
      "En la planta de reciclaje comarcal, muchos residuos acaban mal clasificados. Queremos prototipar un sistema automático que separe los envases según el material."),
    repte: a("Com podem dissenyar un sistema robotitzat que classifiqui residus de manera autònoma i fiable?", "¿Cómo podemos diseñar un sistema robotizado que clasifique residuos de manera autónoma y fiable?"),
    producte: a("Prototip de cinta classificadora o braç robòtic amb sensors (i, opcionalment, visió artificial)", "Prototipo de cinta clasificadora o brazo robótico con sensores (y, opcionalmente, visión artificial)"),
    ces: ["4", "2", "5", "6"], criteris: ["4.1", "4.2", "2.2", "5.2", "5.4", "6.1"],
    sabers: ["B2", "B3", "B4", "C1", "C2", "C4", "A11", "D1"], ods: [9, 12, 13], cc: ["STEM", "CD", "CE", "CC"],
    objectius: [
      a("Analitzar els elements mecànics, electrònics i pneumàtics d'un sistema robotitzat industrial.", "Analizar los elementos mecánicos, electrónicos y neumáticos de un sistema robotizado industrial."),
      a("Dissenyar i construir un prototip automàtic amb sensors i actuadors programats.", "Diseñar y construir un prototipo automático con sensores y actuadores programados."),
      a("Integrar un model d'IA de classificació d'imatges i valorar-ne els límits i biaixos.", "Integrar un modelo de IA de clasificación de imágenes y valorar sus límites y sesgos.")
    ],
    activitats: {
      inici: [
        a("Vídeo d'una planta de reciclatge automatitzada i anàlisi: quins sensors i actuadors identifiquem?", "Vídeo de una planta de reciclaje automatizada y análisis: ¿qué sensores y actuadores identificamos?"),
        a("Repte: classificar a mà 50 envasos en 1 minut. Quants errors? Per què automatitzar?", "Reto: clasificar a mano 50 envases en 1 minuto. ¿Cuántos errores? ¿Por qué automatizar?")
      ],
      desenvolupament: [
        a("Simulació de circuits pneumàtics bàsics i electrònica digital (portes lògiques) per a la presa de decisions.", "Simulación de circuitos neumáticos básicos y electrónica digital (puertas lógicas) para la toma de decisiones."),
        a("Programació de servomotors i sensors (color, inductiu, ultrasons) amb Arduino.", "Programación de servomotores y sensores (color, inductivo, ultrasonidos) con Arduino."),
        a("Entrenament d'un model de visió artificial (p. ex. Teachable Machine) per reconèixer materials.", "Entrenamiento de un modelo de visión artificial (p. ej. Teachable Machine) para reconocer materiales.")
      ],
      estructuracio: [
        a("Diagrama de blocs i diagrama de flux del sistema complet.", "Diagrama de bloques y diagrama de flujo del sistema completo."),
        a("Debat estructurat: automatització, ocupació i ètica de la IA.", "Debate estructurado: automatización, empleo y ética de la IA.")
      ],
      aplicacio: [
        a("Construcció del prototip (peces impreses en 3D o tallades amb làser) i proves de fiabilitat.", "Construcción del prototipo (piezas impresas en 3D o cortadas con láser) y pruebas de fiabilidad."),
        a("Fira de prototips amb demostració i fitxa tècnica.", "Feria de prototipos con demostración y ficha técnica.")
      ]
    },
    connexions: a("Física (forces, pressió), Biologia (residus i ecosistemes), Matemàtiques (probabilitat d'error), Filosofia/Valors (ètica de la IA).", "Física (fuerzas, presión), Biología (residuos y ecosistemas), Matemáticas (probabilidad de error), Filosofía/Valores (ética de la IA)."),
    recursos: a("Arduino, servomotors, sensors, simulador pneumàtic (FluidSIM o similar), Teachable Machine, impressora 3D o talladora làser.", "Arduino, servomotores, sensores, simulador neumático (FluidSIM o similar), Teachable Machine, impresora 3D o cortadora láser.")
  },
  {
    id: "tec-mobilitat", subject: "tec", cursos: ["4"],
    title: a("Arribar a l'institut de manera sostenible", "Llegar al instituto de manera sostenible"),
    context: a(
      "Cada matí hi ha cues de cotxes a la porta del centre. L'Ajuntament està elaborant el pla de mobilitat i vol escoltar propostes de l'alumnat.",
      "Cada mañana hay colas de coches en la puerta del centro. El Ayuntamiento está elaborando el plan de movilidad y quiere escuchar propuestas del alumnado."),
    repte: a("Quines solucions tecnològiques poden fer més sostenible, segura i eficient la mobilitat cap a l'institut?", "¿Qué soluciones tecnológicas pueden hacer más sostenible, segura y eficiente la movilidad hacia el instituto?"),
    producte: a("Estudi de mobilitat amb dades i prototip (p. ex. aparcament intel·ligent de bicis, comptador de vehicles)", "Estudio de movilidad con datos y prototipo (p. ej. aparcamiento inteligente de bicis, contador de vehículos)"),
    ces: ["1", "6", "3", "5"], criteris: ["1.1", "1.2", "6.2", "6.3", "3.2", "5.3"],
    sabers: ["A2", "A3", "A1", "A12", "C1", "D2", "D4"], ods: [3, 11, 13], cc: ["STEM", "CC", "CE", "CCL"],
    objectius: [
      a("Recollir i analitzar dades sobre els hàbits de mobilitat de la comunitat educativa.", "Recoger y analizar datos sobre los hábitos de movilidad de la comunidad educativa."),
      a("Comparar l'eficiència energètica i l'impacte de diferents mitjans de transport.", "Comparar la eficiencia energética y el impacto de diferentes medios de transporte."),
      a("Prototipar una solució tecnològica i presentar-la de manera argumentada a l'Ajuntament.", "Prototipar una solución tecnológica y presentarla de manera argumentada al Ayuntamiento.")
    ],
    activitats: {
      inici: [
        a("Enquesta de mobilitat a tot el centre i recompte de vehicles a l'entrada.", "Encuesta de movilidad a todo el centro y recuento de vehículos en la entrada."),
        a("Càlcul de la petjada de carboni del propi trajecte.", "Cálculo de la huella de carbono del propio trayecto.")
      ],
      desenvolupament: [
        a("Estudi comparatiu: motors de combustió, elèctrics, híbrids, bicicleta i transport públic (energia/km, emissions).", "Estudio comparativo: motores de combustión, eléctricos, híbridos, bicicleta y transporte público (energía/km, emisiones)."),
        a("Tècniques d'ideació (SCAMPER, 6 barrets) per generar solucions.", "Técnicas de ideación (SCAMPER, 6 sombreros) para generar soluciones."),
        a("Prototip amb sensors i controlador per a la solució escollida.", "Prototipo con sensores y controlador para la solución elegida.")
      ],
      estructuracio: [
        a("Infografia de dades de l'enquesta i conclusions.", "Infografía de datos de la encuesta y conclusiones."),
        a("Matriu de viabilitat (tècnica, econòmica, social, ambiental).", "Matriz de viabilidad (técnica, económica, social, ambiental).")
      ],
      aplicacio: [
        a("Proves del prototip en situació real (entrada del centre).", "Pruebas del prototipo en situación real (entrada del centro)."),
        a("Presentació a l'Ajuntament o al consell d'infants i joves.", "Presentación al Ayuntamiento o al consejo de infancia y juventud.")
      ]
    },
    connexions: a("Matemàtiques (estadística), Física (energia i velocitat), Geografia (territori), Educació Física (mobilitat activa).", "Matemáticas (estadística), Física (energía y velocidad), Geografía (territorio), Educación Física (movilidad activa)."),
    recursos: a("Formularis en línia, full de càlcul, sensors (PIR, ultrasons), placa controladora, calculadores de petjada de carboni.", "Formularios en línea, hoja de cálculo, sensores (PIR, ultrasonidos), placa controladora, calculadoras de huella de carbono.")
  },
  {
    id: "tec-aps", subject: "tec", cursos: ["4"],
    title: a("Repair Café: tecnologia al servei de la comunitat", "Repair Café: tecnología al servicio de la comunidad"),
    context: a(
      "Molts aparells es llencen per avaries senzilles. Organitzarem un Repair Café a l'institut obert al barri, on diagnosticarem, repararem i documentarem reparacions en obert.",
      "Muchos aparatos se tiran por averías sencillas. Organizaremos un Repair Café en el instituto abierto al barrio, donde diagnosticaremos, repararemos y documentaremos reparaciones en abierto."),
    repte: a("Com podem allargar la vida dels aparells del barri i compartir el coneixement per reparar-los?", "¿Cómo podemos alargar la vida de los aparatos del barrio y compartir el conocimiento para repararlos?"),
    producte: a("Jornada Repair Café, guies de reparació obertes i peces de recanvi dissenyades en 3D", "Jornada Repair Café, guías de reparación abiertas y piezas de recambio diseñadas en 3D"),
    ces: ["1", "2", "6", "3"], criteris: ["1.1", "1.2", "2.1", "2.2", "6.1", "6.3", "3.1"],
    sabers: ["A1", "A2", "A6", "A9", "A11", "A12", "B1", "D1", "D5"], ods: [11, 12, 17], cc: ["STEM", "CE", "CC", "CCL"],
    objectius: [
      a("Diagnosticar avaries d'aparells elèctrics i electrònics aplicant procediments segurs.", "Diagnosticar averías de aparatos eléctricos y electrónicos aplicando procedimientos seguros."),
      a("Dissenyar i fabricar peces de recanvi amb eines CAD/CAM.", "Diseñar y fabricar piezas de recambio con herramientas CAD/CAM."),
      a("Organitzar un projecte de servei a la comunitat i documentar-lo en obert.", "Organizar un proyecto de servicio a la comunidad y documentarlo en abierto.")
    ],
    activitats: {
      inici: [
        a("Documental sobre obsolescència programada i debat.", "Documental sobre obsolescencia programada y debate."),
        a("Inventari d'aparells espatllats a casa i causes probables.", "Inventario de aparatos estropeados en casa y causas probables.")
      ],
      desenvolupament: [
        a("Seguretat elèctrica i ús del polímetre per al diagnòstic de components.", "Seguridad eléctrica y uso del polímetro para el diagnóstico de componentes."),
        a("Identificació de components electrònics analògics i soldadura bàsica.", "Identificación de componentes electrónicos analógicos y soldadura básica."),
        a("Modelatge 3D de peces trencades (clips, rodes, tapes) i impressió.", "Modelado 3D de piezas rotas (clips, ruedas, tapas) e impresión.")
      ],
      estructuracio: [
        a("Protocol de diagnòstic en forma de diagrama de flux.", "Protocolo de diagnóstico en forma de diagrama de flujo."),
        a("Plantilla de guia de reparació (a l'estil iFixit).", "Plantilla de guía de reparación (al estilo iFixit).")
      ],
      aplicacio: [
        a("Organització i realització del Repair Café amb el veïnat.", "Organización y realización del Repair Café con el vecindario."),
        a("Publicació de guies i models 3D amb llicència oberta; valoració de l'impacte.", "Publicación de guías y modelos 3D con licencia abierta; valoración del impacto.")
      ]
    },
    connexions: a("Física (electricitat), Economia (consum), Llengües (guies), Educació en Valors (servei comunitari).", "Física (electricidad), Economía (consumo), Lenguas (guías), Educación en Valores (servicio comunitario)."),
    recursos: a("Polímetres, soldadors, eines manuals, impressora 3D, plataforma de documentació oberta.", "Polímetros, soldadores, herramientas manuales, impresora 3D, plataforma de documentación abierta.")
  },

  // ───────────── Digitalització (4t) ─────────────
  {
    id: "dig-segona-vida", subject: "dig", cursos: ["4"],
    title: a("Segona vida per als ordinadors", "Segunda vida para los ordenadores"),
    context: a(
      "El centre renova ordinadors i els antics acabarien com a residus electrònics. Moltes famílies del barri no tenen ordinador a casa. Els reacondicionarem amb programari lliure i els cedirem.",
      "El centro renueva ordenadores y los antiguos acabarían como residuos electrónicos. Muchas familias del barrio no tienen ordenador en casa. Los reacondicionaremos con software libre y los cederemos."),
    repte: a("Com podem reacondicionar equips antics perquè siguin útils, segurs i eficients per a famílies que ho necessiten?", "¿Cómo podemos reacondicionar equipos antiguos para que sean útiles, seguros y eficientes para familias que lo necesitan?"),
    producte: a("Ordinadors reacondicionats amb sistema operatiu configurat, xarxa de prova i manual d'usuari", "Ordenadores reacondicionados con sistema operativo configurado, red de prueba y manual de usuario"),
    ces: ["1", "3", "4"], criteris: ["1.1", "1.2", "1.3", "1.4", "3.2", "4.2"],
    sabers: ["A1", "A2", "A3", "A4", "A6", "A7", "D1", "E6"], ods: [4, 10, 12], cc: ["CD", "STEM", "CC", "CE"],
    objectius: [
      a("Identificar els components d'un ordinador i diagnosticar-ne avaries senzilles.", "Identificar los componentes de un ordenador y diagnosticar averías sencillas."),
      a("Instal·lar i configurar un sistema operatiu lliure segons les necessitats de l'usuari.", "Instalar y configurar un sistema operativo libre según las necesidades del usuario."),
      a("Configurar una xarxa local i aplicar mesures de seguretat i d'estalvi energètic.", "Configurar una red local y aplicar medidas de seguridad y de ahorro energético.")
    ],
    activitats: {
      inici: [
        a("Dades sobre residus electrònics i bretxa digital al municipi: què podem fer-hi?", "Datos sobre residuos electrónicos y brecha digital en el municipio: ¿qué podemos hacer?"),
        a("Desmuntatge guiat d'un ordinador antic i identificació de components.", "Desmontaje guiado de un ordenador antiguo e identificación de componentes.")
      ],
      desenvolupament: [
        a("Diagnòstic de maquinari (RAM, disc, font) i substitució de components.", "Diagnóstico de hardware (RAM, disco, fuente) y sustitución de componentes."),
        a("Instal·lació d'una distribució GNU/Linux lleugera i configuració d'usuaris i programari.", "Instalación de una distribución GNU/Linux ligera y configuración de usuarios y software."),
        a("Muntatge d'una xarxa local: router, adreçament IP, wifi segur, compartició de recursos.", "Montaje de una red local: router, direccionamiento IP, wifi seguro, compartición de recursos.")
      ],
      estructuracio: [
        a("Diagrama de la xarxa i protocol de reacondicionament pas a pas.", "Diagrama de la red y protocolo de reacondicionamiento paso a paso."),
        a("Taula de consum energètic abans/després i bones pràctiques.", "Tabla de consumo energético antes/después y buenas prácticas.")
      ],
      aplicacio: [
        a("Reacondicionament complet dels equips i proves d'usuari.", "Reacondicionamiento completo de los equipos y pruebas de usuario."),
        a("Manual d'usuari accessible i acte de lliurament a les famílies.", "Manual de usuario accesible y acto de entrega a las familias.")
      ]
    },
    connexions: a("Tecnologia, Economia (economia circular), Ciències Socials (bretxa digital), Llengües (manual d'usuari).", "Tecnología, Economía (economía circular), Ciencias Sociales (brecha digital), Lenguas (manual de usuario)."),
    recursos: a("Ordinadors en desús, tornavisos, memòries USB, distribucions lleugeres (Linkat, Lubuntu), router de proves.", "Ordenadores en desuso, destornilladores, memorias USB, distribuciones ligeras (Linkat, Lubuntu), router de pruebas.")
  },
  {
    id: "dig-fake", subject: "dig", cursos: ["4"],
    title: a("Caçadors de notícies falses", "Cazadores de noticias falsas"),
    context: a(
      "Un rumor fals sobre l'institut s'ha fet viral a les xarxes i ha generat alarma entre les famílies. Volem entendre com es propaga la desinformació i crear un mitjà digital de verificació.",
      "Un rumor falso sobre el instituto se ha hecho viral en las redes y ha generado alarma entre las familias. Queremos entender cómo se propaga la desinformación y crear un medio digital de verificación."),
    repte: a("Com podem detectar i combatre la desinformació a la xarxa amb rigor i creativitat?", "¿Cómo podemos detectar y combatir la desinformación en la red con rigor y creatividad?"),
    producte: a("Mitjà digital de verificació (blog o pòdcast) amb notícies verificades i peces audiovisuals", "Medio digital de verificación (blog o pódcast) con noticias verificadas y piezas audiovisuales"),
    ces: ["4", "2", "5"], criteris: ["4.1", "4.3", "4.4", "2.1", "2.3", "5.2"],
    sabers: ["C1", "C6", "C8", "B4", "E1", "E2", "E5"], ods: [4, 16], cc: ["CD", "CCL", "CC", "CPSAA"],
    objectius: [
      a("Aplicar estratègies avançades de cerca i verificació per identificar notícies falses.", "Aplicar estrategias avanzadas de búsqueda y verificación para identificar noticias falsas."),
      a("Analitzar la intencionalitat, els biaixos i el paper dels algorismes en la difusió de missatges.", "Analizar la intencionalidad, los sesgos y el papel de los algoritmos en la difusión de mensajes."),
      a("Produir continguts audiovisuals rigorosos respectant drets d'autoria i llicències.", "Producir contenidos audiovisuales rigurosos respetando derechos de autoría y licencias.")
    ],
    activitats: {
      inici: [
        a("Joc: real o fals? Titulars i imatges per classificar; recompte d'encerts i debat.", "Juego: ¿real o falso? Titulares e imágenes para clasificar; recuento de aciertos y debate."),
        a("Seguiment del recorregut d'un rumor real: d'on surt i per on es mou?", "Seguimiento del recorrido de un rumor real: ¿de dónde sale y por dónde se mueve?")
      ],
      desenvolupament: [
        a("Tècniques de verificació: cerca inversa d'imatges, operadors de cerca, metadades, fonts primàries.", "Técnicas de verificación: búsqueda inversa de imágenes, operadores de búsqueda, metadatos, fuentes primarias."),
        a("Bombolles de filtre i algorismes de recomanació; deepfakes i IA generativa.", "Burbujas de filtro y algoritmos de recomendación; deepfakes e IA generativa."),
        a("Taller d'edició d'àudio i vídeo i llicències Creative Commons.", "Taller de edición de audio y vídeo y licencias Creative Commons.")
      ],
      estructuracio: [
        a("Protocol de verificació en 5 passos creat per l'aula.", "Protocolo de verificación en 5 pasos creado por el aula."),
        a("Llibre d'estil del mitjà (rigor, llenguatge inclusiu, atribucions).", "Libro de estilo del medio (rigor, lenguaje inclusivo, atribuciones).")
      ],
      aplicacio: [
        a("Publicació de peces de verificació al blog/pòdcast del centre.", "Publicación de piezas de verificación en el blog/pódcast del centro."),
        a("Campanya de sensibilització per a famílies a través dels canals del centre.", "Campaña de sensibilización para familias a través de los canales del centro.")
      ]
    },
    connexions: a("Llengües (gèneres periodístics), Ciències Socials (opinió pública), Filosofia (veritat i argumentació).", "Lenguas (géneros periodísticos), Ciencias Sociales (opinión pública), Filosofía (verdad y argumentación)."),
    recursos: a("Eines de verificació (cerca inversa d'imatges, Maldita/Verificat), Audacity, editor de vídeo, plataforma de blog o pòdcast.", "Herramientas de verificación (búsqueda inversa de imágenes, Maldita/Verificat), Audacity, editor de vídeo, plataforma de blog o pódcast.")
  },
  {
    id: "dig-identitat", subject: "dig", cursos: ["4"],
    title: a("La meva identitat digital, sota control", "Mi identidad digital, bajo control"),
    context: a(
      "Una empresa de selecció de personal explica que revisa les xarxes dels candidats. Què diu de nosaltres la nostra petjada digital? Estem protegits davant d'atacs i de riscos per a la salut?",
      "Una empresa de selección de personal explica que revisa las redes de los candidatos. ¿Qué dice de nosotros nuestra huella digital? ¿Estamos protegidos ante ataques y riesgos para la salud?"),
    repte: a("Com podem gestionar la nostra identitat digital i protegir les nostres dades i el nostre benestar?", "¿Cómo podemos gestionar nuestra identidad digital y proteger nuestros datos y nuestro bienestar?"),
    producte: a("Auditoria personal de seguretat i privadesa, i campanya de benestar digital per al centre", "Auditoría personal de seguridad y privacidad, y campaña de bienestar digital para el centro"),
    ces: ["3", "4"], criteris: ["3.1", "3.2", "3.3", "3.4", "4.1", "4.4"],
    sabers: ["D1", "D2", "D3", "E1", "B4"], ods: [3, 16], cc: ["CD", "CPSAA", "CC", "CCL"],
    objectius: [
      a("Analitzar la pròpia petjada digital i configurar les opcions de privadesa de les xarxes.", "Analizar la propia huella digital y configurar las opciones de privacidad de las redes."),
      a("Aplicar mesures de seguretat en dispositius (contrasenyes, 2FA, actualitzacions, xifratge).", "Aplicar medidas de seguridad en dispositivos (contraseñas, 2FA, actualizaciones, cifrado)."),
      a("Identificar riscos per a la salut física i mental i proposar hàbits de benestar digital.", "Identificar riesgos para la salud física y mental y proponer hábitos de bienestar digital.")
    ],
    activitats: {
      inici: [
        a("Egosurfing guiat: què troba un cercador sobre mi? (sense compartir dades sensibles).", "Egosurfing guiado: ¿qué encuentra un buscador sobre mí? (sin compartir datos sensibles)."),
        a("Anàlisi dels propis informes de temps de pantalla.", "Análisis de los propios informes de tiempo de pantalla.")
      ],
      desenvolupament: [
        a("Tipus d'atacs (phishing, malware, enginyeria social) amb casos reals i simulacions.", "Tipos de ataques (phishing, malware, ingeniería social) con casos reales y simulaciones."),
        a("Configuració pràctica de privadesa i seguretat en xarxes socials i dispositius.", "Configuración práctica de privacidad y seguridad en redes sociales y dispositivos."),
        a("Salut digital: ergonomia, son, addiccions comportamentals, ciberassetjament i recursos d'ajuda.", "Salud digital: ergonomía, sueño, adicciones comportamentales, ciberacoso y recursos de ayuda.")
      ],
      estructuracio: [
        a("Checklist personal de seguretat i privadesa.", "Checklist personal de seguridad y privacidad."),
        a("Mapa de riscos i respostes (què fer, a qui acudir).", "Mapa de riesgos y respuestas (qué hacer, a quién acudir).")
      ],
      aplicacio: [
        a("Auditoria personal amb pla de millora (lliurament privat al docent).", "Auditoría personal con plan de mejora (entrega privada al docente)."),
        a("Campanya de benestar digital (cartells, vídeos curts, reptes) per al centre.", "Campaña de bienestar digital (carteles, vídeos cortos, retos) para el centro.")
      ]
    },
    connexions: a("Tutoria (benestar emocional), Educació Física (salut), Llengües (campanya), Valors Cívics i Ètics.", "Tutoría (bienestar emocional), Educación Física (salud), Lenguas (campaña), Valores Cívicos y Éticos."),
    recursos: a("Recursos d'Internet Segura i INCIBE, gestor de contrasenyes, guies de privadesa de les plataformes.", "Recursos de Internet Segura e INCIBE, gestor de contraseñas, guías de privacidad de las plataformas.")
  },
  {
    id: "dig-web", subject: "dig", cursos: ["4"],
    title: a("Una web accessible per a una entitat del barri", "Una web accesible para una entidad del barrio"),
    context: a(
      "Una associació del barri (banc d'aliments, club esportiu, casal de gent gran...) no té presència digital o té una web que no és accessible. Els oferim crear-ne una nova.",
      "Una asociación del barrio (banco de alimentos, club deportivo, centro de mayores...) no tiene presencia digital o tiene una web que no es accesible. Les ofrecemos crear una nueva."),
    repte: a("Com podem crear una web útil, atractiva i accessible per a tothom per a una entitat real?", "¿Cómo podemos crear una web útil, atractiva y accesible para todo el mundo para una entidad real?"),
    producte: a("Lloc web publicat (HTML/CSS o CMS) que compleix pautes d'accessibilitat, amb continguts multimèdia propis", "Sitio web publicado (HTML/CSS o CMS) que cumple pautas de accesibilidad, con contenidos multimedia propios"),
    ces: ["2", "4", "5"], criteris: ["2.2", "2.3", "2.4", "2.5", "4.1", "4.4", "5.2"],
    sabers: ["C2", "C4", "C6", "C7", "B3", "B4", "E1", "E6"], ods: [10, 11, 17], cc: ["CD", "CE", "CCL", "CC"],
    objectius: [
      a("Analitzar les necessitats comunicatives de l'entitat aplicant el pensament de disseny.", "Analizar las necesidades comunicativas de la entidad aplicando el pensamiento de diseño."),
      a("Desenvolupar una web amb HTML i CSS aplicant estàndards d'accessibilitat (WCAG).", "Desarrollar una web con HTML y CSS aplicando estándares de accesibilidad (WCAG)."),
      a("Crear continguts multimèdia propis i gestionar-ne les llicències d'ús.", "Crear contenidos multimedia propios y gestionar sus licencias de uso.")
    ],
    activitats: {
      inici: [
        a("Navegar amb lector de pantalla o només amb teclat per webs reals: quines barreres hi trobem?", "Navegar con lector de pantalla o solo con teclado por webs reales: ¿qué barreras encontramos?"),
        a("Entrevista a l'entitat per definir objectius, públic i continguts.", "Entrevista a la entidad para definir objetivos, público y contenidos.")
      ],
      desenvolupament: [
        a("HTML semàntic i CSS: estructura, estils, disseny responsiu.", "HTML semántico y CSS: estructura, estilos, diseño responsive."),
        a("Pautes d'accessibilitat: text alternatiu, contrast, jerarquia de títols, navegació per teclat.", "Pautas de accesibilidad: texto alternativo, contraste, jerarquía de títulos, navegación por teclado."),
        a("Fotografia, edició d'imatge i vídeo per a la web; optimització de pes.", "Fotografía, edición de imagen y vídeo para la web; optimización de peso.")
      ],
      estructuracio: [
        a("Guia d'estil i mapa web consensuats amb l'entitat.", "Guía de estilo y mapa web consensuados con la entidad."),
        a("Auditoria d'accessibilitat creuada entre equips amb eines automàtiques i revisió manual.", "Auditoría de accesibilidad cruzada entre equipos con herramientas automáticas y revisión manual.")
      ],
      aplicacio: [
        a("Publicació de la web (p. ex. GitHub Pages) i proves amb usuaris de l'entitat.", "Publicación de la web (p. ej. GitHub Pages) y pruebas con usuarios de la entidad."),
        a("Presentació i formació breu a l'entitat per mantenir la web.", "Presentación y formación breve a la entidad para mantener la web.")
      ]
    },
    connexions: a("Llengües (redacció per a web), Educació Visual i Plàstica (disseny gràfic), Valors (inclusió).", "Lenguas (redacción para web), Educación Plástica y Visual (diseño gráfico), Valores (inclusión)."),
    recursos: a("Editor de codi, navegador amb eines de desenvolupament, validador d'accessibilitat (WAVE), GitHub Pages o CMS.", "Editor de código, navegador con herramientas de desarrollo, validador de accesibilidad (WAVE), GitHub Pages o CMS.")
  },
  {
    id: "dig-ia", subject: "dig", cursos: ["4"],
    title: a("Intel·ligència artificial amb ulls crítics", "Inteligencia artificial con ojos críticos"),
    context: a(
      "La IA generativa ha arribat a les aules, a la feina i a la vida quotidiana. El claustre vol que l'alumnat proposi com s'hauria d'usar al centre i que creï una eina d'IA que resolgui un problema real.",
      "La IA generativa ha llegado a las aulas, al trabajo y a la vida cotidiana. El claustro quiere que el alumnado proponga cómo debería usarse en el centro y que cree una herramienta de IA que resuelva un problema real."),
    repte: a("Com podem aprofitar la IA per resoldre un problema real de manera ètica, crítica i sostenible?", "¿Cómo podemos aprovechar la IA para resolver un problema real de manera ética, crítica y sostenible?"),
    producte: a("Prototip d'aplicació amb un model d'IA entrenat per l'alumnat i proposta de codi ètic d'ús de la IA al centre", "Prototipo de aplicación con un modelo de IA entrenado por el alumnado y propuesta de código ético de uso de la IA en el centro"),
    ces: ["5", "2", "4"], criteris: ["5.1", "5.2", "5.3", "2.2", "2.4", "4.3"],
    sabers: ["C5", "C7", "C2", "E5", "E7", "E8"], ods: [4, 9, 10], cc: ["CD", "STEM", "CC", "CE"],
    objectius: [
      a("Explicar el funcionament bàsic de l'aprenentatge automàtic i el paper de les dades.", "Explicar el funcionamiento básico del aprendizaje automático y el papel de los datos."),
      a("Entrenar i integrar un model d'IA en una aplicació que resolgui un problema real.", "Entrenar e integrar un modelo de IA en una aplicación que resuelva un problema real."),
      a("Analitzar biaixos, impacte social, laboral i ambiental de la IA i proposar normes d'ús.", "Analizar sesgos e impacto social, laboral y ambiental de la IA y proponer normas de uso.")
    ],
    activitats: {
      inici: [
        a("Experiment: demanar a un xat d'IA el mateix en diferents formes; detectar errors i biaixos.", "Experimento: pedir a un chat de IA lo mismo de diferentes formas; detectar errores y sesgos."),
        a("Línia del temps de la IA i exemples a la vida quotidiana.", "Línea del tiempo de la IA y ejemplos en la vida cotidiana.")
      ],
      desenvolupament: [
        a("Activitat desendollada d'aprenentatge automàtic (classificar amb regles vs. amb exemples).", "Actividad desenchufada de aprendizaje automático (clasificar con reglas vs. con ejemplos)."),
        a("Entrenament de models amb Teachable Machine / LearningML i anàlisi del conjunt de dades.", "Entrenamiento de modelos con Teachable Machine / LearningML y análisis del conjunto de datos."),
        a("Integració del model en una app (Scratch, App Inventor o web) amb condicionals i repeticions.", "Integración del modelo en una app (Scratch, App Inventor o web) con condicionales y repeticiones.")
      ],
      estructuracio: [
        a("Mapa de conceptes: dades, entrenament, model, predicció, biaix, consum energètic.", "Mapa de conceptos: datos, entrenamiento, modelo, predicción, sesgo, consumo energético."),
        a("Debat formal sobre IA i ocupació, autoria i sostenibilitat.", "Debate formal sobre IA y empleo, autoría y sostenibilidad.")
      ],
      aplicacio: [
        a("Presentació del prototip i prova amb usuaris.", "Presentación del prototipo y prueba con usuarios."),
        a("Redacció i presentació al claustre d'una proposta de codi ètic d'ús de la IA.", "Redacción y presentación al claustro de una propuesta de código ético de uso de la IA.")
      ]
    },
    connexions: a("Matemàtiques (estadística i probabilitat), Filosofia (ètica), Economia (mercat laboral), Llengües (argumentació).", "Matemáticas (estadística y probabilidad), Filosofía (ética), Economía (mercado laboral), Lenguas (argumentación)."),
    recursos: a("Teachable Machine, LearningML, Scratch/App Inventor, eines d'IA generativa amb comptes educatius i supervisió docent.", "Teachable Machine, LearningML, Scratch/App Inventor, herramientas de IA generativa con cuentas educativas y supervisión docente.")
  },
  {
    id: "dig-tramits", subject: "dig", cursos: ["4"],
    title: a("Tràmits digitals sense bretxa", "Trámites digitales sin brecha"),
    context: a(
      "Molts familiars grans tenen dificultats per demanar cita mèdica, fer tràmits en línia o comprar per Internet amb seguretat. Farem de mentors digitals.",
      "Muchos familiares mayores tienen dificultades para pedir cita médica, hacer trámites en línea o comprar por Internet con seguridad. Haremos de mentores digitales."),
    repte: a("Com podem ajudar persones del nostre entorn a fer tràmits i compres en línia de manera autònoma i segura?", "¿Cómo podemos ayudar a personas de nuestro entorno a hacer trámites y compras en línea de manera autónoma y segura?"),
    producte: a("Píndoles formatives (vídeo-tutorials accessibles) i sessions de mentoria digital intergeneracional", "Píldoras formativas (vídeo-tutoriales accesibles) y sesiones de mentoría digital intergeneracional"),
    ces: ["4", "5", "3", "2"], criteris: ["4.2", "4.4", "5.1", "5.2", "3.3", "2.3"],
    sabers: ["E3", "E4", "E7", "B3", "B4", "C6", "D1"], ods: [4, 10, 16], cc: ["CD", "CC", "CCL", "CPSAA"],
    objectius: [
      a("Conèixer i utilitzar serveis públics en línia, identificació digital i certificats.", "Conocer y utilizar servicios públicos en línea, identificación digital y certificados."),
      a("Aplicar criteris de seguretat en el comerç electrònic i els pagaments digitals.", "Aplicar criterios de seguridad en el comercio electrónico y los pagos digitales."),
      a("Analitzar la bretxa digital i crear materials accessibles per reduir-la.", "Analizar la brecha digital y crear materiales accesibles para reducirla.")
    ],
    activitats: {
      inici: [
        a("Entrevista a un familiar sobre les seves dificultats digitals.", "Entrevista a un familiar sobre sus dificultades digitales."),
        a("Dades sobre bretxa digital per edat, gènere i territori.", "Datos sobre brecha digital por edad, género y territorio.")
      ],
      desenvolupament: [
        a("Identificació digital (idCAT Mòbil, certificat digital, Cl@ve) i serveis públics en línia (simulacions, sense dades reals).", "Identificación digital (idCAT Móvil, certificado digital, Cl@ve) y servicios públicos en línea (simulaciones, sin datos reales)."),
        a("Comerç electrònic segur: webs fiables, formes de pagament, factures digitals, fraus habituals.", "Comercio electrónico seguro: webs fiables, formas de pago, facturas digitales, fraudes habituales."),
        a("Guionatge i gravació de vídeo-tutorials amb subtítols i llenguatge planer.", "Guionización y grabación de vídeo-tutoriales con subtítulos y lenguaje claro.")
      ],
      estructuracio: [
        a("Decàleg de seguretat per a tràmits i compres en línia.", "Decálogo de seguridad para trámites y compras en línea."),
        a("Pauta de mentoria: com explicar sense fer-ho per l'altre.", "Pauta de mentoría: cómo explicar sin hacerlo por el otro.")
      ],
      aplicacio: [
        a("Sessions de mentoria amb gent gran (centre cívic, casal o famílies).", "Sesiones de mentoría con personas mayores (centro cívico, casal o familias)."),
        a("Publicació de les píndoles al web del centre i valoració de l'impacte.", "Publicación de las píldoras en la web del centro y valoración del impacto.")
      ]
    },
    connexions: a("Ciències Socials (administració pública), Economia (consum), Llengües (llenguatge planer), Tutoria (servei comunitari).", "Ciencias Sociales (administración pública), Economía (consumo), Lenguas (lenguaje claro), Tutoría (servicio comunitario)."),
    recursos: a("Webs de demostració de tràmits, editor de vídeo, eina de subtitulació, guies oficials d'identificació digital.", "Webs de demostración de trámites, editor de vídeo, herramienta de subtitulado, guías oficiales de identificación digital.")
  }
];
