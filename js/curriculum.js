// Currículum de les matèries a partir del Decret 175/2022, de 27 de setembre,
// d'ordenació dels ensenyaments de l'educació bàsica (DOGC núm. 8762, 29.9.2022), annex 3.
// El text en català és l'oficial. La versió en castellà és una traducció de treball (no oficial).

export const CURRICULUM = {
  tid: {
    name: { ca: "Tecnologia i Digitalització", es: "Tecnología y Digitalización" },
    cursos: ["1", "2", "3"],
    ces: [
      {
        id: "1",
        text: {
          ca: "Buscar, analitzar i seleccionar la informació adequada, de manera crítica i segura, tot aplicant processos de recerca, mètodes d'anàlisi de productes i experimentant amb eines de simulació, per delimitar problemes tecnològics i proposar solucions a partir de la informació obtinguda.",
          es: "Buscar, analizar y seleccionar la información adecuada, de manera crítica y segura, aplicando procesos de investigación, métodos de análisis de productos y experimentando con herramientas de simulación, para delimitar problemas tecnológicos y proponer soluciones a partir de la información obtenida."
        },
        criteris: [
          { id: "1.1", ca: "Identificar i definir problemes o necessitats plantejades, tot cercant i contrastant la informació procedent de diferents fonts de manera crítica i segura, fent ús dels coneixements científics i tecnològics, avaluant-ne la fiabilitat i la pertinència.", es: "Identificar y definir problemas o necesidades planteadas, buscando y contrastando la información procedente de diferentes fuentes de manera crítica y segura, haciendo uso de los conocimientos científicos y tecnológicos y evaluando su fiabilidad y pertinencia." },
          { id: "1.2", ca: "Analitzar i examinar productes tecnològics d'ús habitual a través de l'anàlisi d'objectes i sistemes, fent ús dels coneixements científics i tecnològics, utilitzant, si s'escau, eines de simulació, en la construcció de coneixement.", es: "Analizar y examinar productos tecnológicos de uso habitual mediante el análisis de objetos y sistemas, haciendo uso de los conocimientos científicos y tecnológicos y utilizando, si procede, herramientas de simulación, en la construcción de conocimiento." }
        ]
      },
      {
        id: "2",
        text: {
          ca: "Planificar, dissenyar i desenvolupar solucions a problemes tecnològics amb autonomia i actitud creativa, tot aplicant el procés tecnològic, coneixements interdisciplinaris i treballant de manera ordenada i cooperativa, per resoldre problemes o necessitats de manera eficaç, innovadora i sostenible.",
          es: "Planificar, diseñar y desarrollar soluciones a problemas tecnológicos con autonomía y actitud creativa, aplicando el proceso tecnológico y conocimientos interdisciplinares y trabajando de manera ordenada y cooperativa, para resolver problemas o necesidades de manera eficaz, innovadora y sostenible."
        },
        criteris: [
          { id: "2.1", ca: "Idear i dissenyar solucions tecnològiques originals a problemes plantejats, tot aplicant el procés tecnològic amb conceptes, tècniques i procediments interdisciplinaris amb actitud emprenedora, perseverant i creativa, documentant la informació en una memòria de projecte.", es: "Idear y diseñar soluciones tecnológicas originales a problemas planteados, aplicando el proceso tecnológico con conceptos, técnicas y procedimientos interdisciplinares con actitud emprendedora, perseverante y creativa, y documentando la información en una memoria de proyecto." },
          { id: "2.2", ca: "Seleccionar, planificar i organitzar el temps, els materials i les eines, així com les tasques necessàries per a la construcció d'una solució definida en un projecte, treballant individualment o en grup de manera cooperativa.", es: "Seleccionar, planificar y organizar el tiempo, los materiales y las herramientas, así como las tareas necesarias para la construcción de una solución definida en un proyecto, trabajando individualmente o en grupo de manera cooperativa." },
          { id: "2.3", ca: "Aplicar criteris de sostenibilitat en el disseny de solucions tecnològiques considerant tot el cicle de vida útil de l'objecte.", es: "Aplicar criterios de sostenibilidad en el diseño de soluciones tecnológicas considerando todo el ciclo de vida útil del objeto." }
        ]
      },
      {
        id: "3",
        text: {
          ca: "Aplicar de manera apropiada diferents tècniques i coneixements interdisciplinaris, tot utilitzant operadors, sistemes tecnològics i eines, seguint la planificació i el disseny sostenible previ per construir solucions tecnològiques que donin resposta a necessitats en diferents contextos.",
          es: "Aplicar de manera apropiada diferentes técnicas y conocimientos interdisciplinares, utilizando operadores, sistemas tecnológicos y herramientas, siguiendo la planificación y el diseño sostenible previo para construir soluciones tecnológicas que den respuesta a necesidades en diferentes contextos."
        },
        criteris: [
          { id: "3.1", ca: "Fabricar objectes o models mitjançant la manipulació i la conformació de materials, tot emprant instruments de mesura, eines i màquines adequades, posant en pràctica els fonaments d'estructures, mecanismes, electricitat i electrònica seguint les normes de seguretat i de salut.", es: "Fabricar objetos o modelos mediante la manipulación y conformación de materiales, empleando instrumentos de medida, herramientas y máquinas adecuadas y poniendo en práctica los fundamentos de estructuras, mecanismos, electricidad y electrónica, siguiendo las normas de seguridad y salud." },
          { id: "3.2", ca: "Avaluar el resultat d'una construcció tot contrastant les seves funcions en relació amb els requeriments tècnics del projecte, mitjançant l'observació i l'ús d'instruments de mesura per validar el resultat final.", es: "Evaluar el resultado de una construcción contrastando sus funciones con los requisitos técnicos del proyecto, mediante la observación y el uso de instrumentos de medida para validar el resultado final." }
        ]
      },
      {
        id: "4",
        text: {
          ca: "Descriure, representar i intercanviar idees o solucions a problemes tecnològics o digitals, utilitzant els mitjans de representació, simbologia i vocabulari adequats, així com els instruments i els recursos disponibles, utilitzant les eines digitals per argumentar, comunicar i difondre informació.",
          es: "Describir, representar e intercambiar ideas o soluciones a problemas tecnológicos o digitales, utilizando los medios de representación, simbología y vocabulario adecuados, así como los instrumentos y recursos disponibles, y utilizando las herramientas digitales para argumentar, comunicar y difundir información."
        },
        criteris: [
          { id: "4.1", ca: "Documentar el procés de la creació d'un producte des del disseny fins a l'avaluació, elaborant la documentació tècnica i gràfica amb l'ajuda d'eines digitals, emprant els formats i el vocabulari tècnic adequats, de manera col·laborativa, tant presencialment com en remot.", es: "Documentar el proceso de creación de un producto desde el diseño hasta la evaluación, elaborando la documentación técnica y gráfica con la ayuda de herramientas digitales, empleando los formatos y el vocabulario técnico adecuados, de manera colaborativa, tanto presencialmente como en remoto." },
          { id: "4.2", ca: "Representar objectes, diagrames i esquemes tècnics mitjançant eines digitals col·laboratives, tot aplicant les normes tècniques corresponents.", es: "Representar objetos, diagramas y esquemas técnicos mediante herramientas digitales colaborativas, aplicando las normas técnicas correspondientes." },
          { id: "4.3", ca: "Utilitzar dispositius i recursos digitals per a comunicar-se amb els altres, per difondre els propis aprenentatges i argumentar-los.", es: "Utilizar dispositivos y recursos digitales para comunicarse con los demás, para difundir los propios aprendizajes y argumentarlos." }
        ]
      },
      {
        id: "5",
        text: {
          ca: "Desenvolupar algorismes i aplicacions informàtiques en diferents entorns, tot aplicant els principis del pensament computacional i incorporant les tecnologies emergents, per resoldre problemes concrets, automatitzar processos i aplicar-los en sistemes de control o robòtica.",
          es: "Desarrollar algoritmos y aplicaciones informáticas en diferentes entornos, aplicando los principios del pensamiento computacional e incorporando las tecnologías emergentes, para resolver problemas concretos, automatizar procesos y aplicarlos en sistemas de control o robótica."
        },
        criteris: [
          { id: "5.1", ca: "Descriure, interpretar i dissenyar solucions a problemes informàtics mitjançant algorismes i diagrames de flux, tot aplicant els elements i les tècniques de programació de manera creativa.", es: "Describir, interpretar y diseñar soluciones a problemas informáticos mediante algoritmos y diagramas de flujo, aplicando los elementos y técnicas de programación de manera creativa." },
          { id: "5.2", ca: "Programar aplicacions senzilles per a diferents dispositius (ordinadors, dispositius mòbils i altres) emprant els elements de programació de manera apropiada, fent servir el programari i els llenguatges de programació adients i mòduls d'intel·ligència artificial que afegeixin funcionalitats.", es: "Programar aplicaciones sencillas para diferentes dispositivos (ordenadores, dispositivos móviles y otros) empleando los elementos de programación de manera apropiada, utilizando el software y los lenguajes de programación adecuados y módulos de inteligencia artificial que añadan funcionalidades." },
          { id: "5.3", ca: "Automatitzar processos, màquines i objectes de manera autònoma, amb o sense connexió a Internet, mitjançant l'anàlisi, la construcció i la programació de robots i sistemes de control.", es: "Automatizar procesos, máquinas y objetos de manera autónoma, con o sin conexión a Internet, mediante el análisis, la construcción y la programación de robots y sistemas de control." }
        ]
      },
      {
        id: "6",
        text: {
          ca: "Utilitzar els fonaments del funcionament dels dispositius i de les aplicacions habituals de l'entorn digital d'aprenentatge, analitzant-ne els components i les funcions i ajustant-los a les necessitats per fer-ne un ús més eficient i segur, per detectar i resoldre problemes tècnics senzills.",
          es: "Utilizar los fundamentos del funcionamiento de los dispositivos y de las aplicaciones habituales del entorno digital de aprendizaje, analizando sus componentes y funciones y ajustándolos a las necesidades para hacer un uso más eficiente y seguro de ellos, y para detectar y resolver problemas técnicos sencillos."
        },
        criteris: [
          { id: "6.1", ca: "Fer un ús eficient i segur dels dispositius digitals d'ús quotidià en la resolució de problemes senzills, analitzant els components i els sistemes de comunicació, per identificar els riscos i adoptar mesures de seguretat per a la protecció de dades i equips.", es: "Hacer un uso eficiente y seguro de los dispositivos digitales de uso cotidiano en la resolución de problemas sencillos, analizando los componentes y los sistemas de comunicación, para identificar los riesgos y adoptar medidas de seguridad para la protección de datos y equipos." },
          { id: "6.2", ca: "Crear continguts, elaborar materials i difondre'ls en diferents plataformes, configurant correctament les eines digitals habituals de l'entorn d'aprenentatge, ajustant-les a les necessitats i respectant les llicències i els drets d'autoria.", es: "Crear contenidos, elaborar materiales y difundirlos en diferentes plataformas, configurando correctamente las herramientas digitales habituales del entorno de aprendizaje, ajustándolas a las necesidades y respetando las licencias y los derechos de autoría." },
          { id: "6.3", ca: "Organitzar la informació de manera estructurada, aplicant tècniques d'emmagatzematge segur.", es: "Organizar la información de manera estructurada, aplicando técnicas de almacenamiento seguro." }
        ]
      },
      {
        id: "7",
        text: {
          ca: "Fer ús ètic, sostenible i ecosocialment responsable de la tecnologia, identificant les repercussions i les aportacions, per valorar l'impacte del desenvolupament tecnològic a la societat i a l'entorn.",
          es: "Hacer un uso ético, sostenible y ecosocialmente responsable de la tecnología, identificando sus repercusiones y aportaciones, para valorar el impacto del desarrollo tecnológico en la sociedad y en el entorno."
        },
        criteris: [
          { id: "7.1", ca: "Identificar la influència de l'activitat tecnològica en la societat i en la sostenibilitat ambiental al llarg de la història, analitzant-ne les aportacions i les repercussions tot valorant-ne la importància per al desenvolupament sostenible.", es: "Identificar la influencia de la actividad tecnológica en la sociedad y en la sostenibilidad ambiental a lo largo de la historia, analizando sus aportaciones y repercusiones y valorando su importancia para el desarrollo sostenible." },
          { id: "7.2", ca: "Fer un ús responsable i ètic de les tecnologies emergents, tot identificant les seves aportacions al benestar, a la igualtat social i a la reducció de l'impacte ambiental.", es: "Hacer un uso responsable y ético de las tecnologías emergentes, identificando sus aportaciones al bienestar, a la igualdad social y a la reducción del impacto ambiental." },
          { id: "7.3", ca: "Valorar l'economia circular com una aportació tecnològica i social a la sostenibilitat per reduir la necessitat de matèries primeres i aconseguir la reducció de residus.", es: "Valorar la economía circular como una aportación tecnológica y social a la sostenibilidad para reducir la necesidad de materias primas y conseguir la reducción de residuos." }
        ]
      }
    ],
    sabers: [
      {
        id: "A", title: { ca: "Procés de resolució de problemes i de projectes", es: "Proceso de resolución de problemas y de proyectos" },
        items: [
          { id: "A1", ca: "Aplicació d'estratègies, tècniques i marcs de resolució de problemes en diferents contextos i les seves fases.", es: "Aplicación de estrategias, técnicas y marcos de resolución de problemas en diferentes contextos y sus fases." },
          { id: "A2", ca: "Aplicació d'estratègies de cerca crítica d'informació per a la recerca i la definició de problemes plantejats.", es: "Aplicación de estrategias de búsqueda crítica de información para la investigación y la definición de problemas planteados." },
          { id: "A3", ca: "Anàlisi de productes i de sistemes tecnològics per a la construcció de coneixement des de diferents enfocaments i àmbits.", es: "Análisis de productos y de sistemas tecnológicos para la construcción de conocimiento desde diferentes enfoques y ámbitos." },
          { id: "A4", ca: "Anàlisi i disseny d'estructures per a la construcció de models.", es: "Análisis y diseño de estructuras para la construcción de modelos." },
          { id: "A5", ca: "Anàlisi i disseny de sistemes mecànics bàsics. Muntatges físics i/o ús de simuladors.", es: "Análisis y diseño de sistemas mecánicos básicos. Montajes físicos y/o uso de simuladores." },
          { id: "A6", ca: "Muntatge d'esquemes i circuits elèctrics o electrònics, físics o simulats. Interpretació, càlcul, disseny i aplicació en projectes.", es: "Montaje de esquemas y circuitos eléctricos o electrónicos, físicos o simulados. Interpretación, cálculo, diseño y aplicación en proyectos." },
          { id: "A7", ca: "Identificar les característiques dels materials d'ús tecnològic i el seu impacte ambiental.", es: "Identificar las características de los materiales de uso tecnológico y su impacto ambiental." },
          { id: "A8", ca: "Utilització d'eines i tècniques de manipulació i mecanització de materials per a la construcció d'objectes i de prototips. Iniciació a la fabricació digital. Aplicació de les normes de seguretat i d'higiene.", es: "Utilización de herramientas y técnicas de manipulación y mecanizado de materiales para la construcción de objetos y prototipos. Iniciación a la fabricación digital. Aplicación de las normas de seguridad e higiene." },
          { id: "A9", ca: "Desenvolupament de l'emprenedoria, la resiliència, la perseverança i la creativitat per resoldre problemes des d'una perspectiva interdisciplinària.", es: "Desarrollo del emprendimiento, la resiliencia, la perseverancia y la creatividad para resolver problemas desde una perspectiva interdisciplinar." }
        ]
      },
      {
        id: "B", title: { ca: "Comunicació i difusió d'idees", es: "Comunicación y difusión de ideas" },
        items: [
          { id: "B1", ca: "Ús del vocabulari tècnic apropiat. Desenvolupament de les habilitats bàsiques de comunicació interpersonal. Ús adequat de pautes de conducta pròpies de l'entorn virtual.", es: "Uso del vocabulario técnico apropiado. Desarrollo de las habilidades básicas de comunicación interpersonal. Uso adecuado de pautas de conducta propias del entorno virtual." },
          { id: "B2", ca: "Ús de les normes d'acotació i aplicació de les escales i les tècniques de representació gràfica.", es: "Uso de las normas de acotación y aplicación de las escalas y las técnicas de representación gráfica." },
          { id: "B3", ca: "Utilització d'aplicacions CAD en 2D i 3D per a la representació d'esquemes, circuits, plànols i objectes.", es: "Utilización de aplicaciones CAD en 2D y 3D para la representación de esquemas, circuitos, planos y objetos." },
          { id: "B4", ca: "Utilització d'eines digitals per a l'elaboració, la publicació i la difusió de documentació tècnica i informació multimèdia relativa a projectes.", es: "Utilización de herramientas digitales para la elaboración, publicación y difusión de documentación técnica e información multimedia relativa a proyectos." }
        ]
      },
      {
        id: "C", title: { ca: "Pensament computacional, programació i robòtica", es: "Pensamiento computacional, programación y robótica" },
        items: [
          { id: "C1", ca: "Resolució de processos mitjançant algorísmica i representació amb diagrames de flux.", es: "Resolución de procesos mediante algorítmica y representación con diagramas de flujo." },
          { id: "C2", ca: "Implementació d'aplicacions informàtiques senzilles per a ordinador i dispositius mòbils i iniciació a la intel·ligència artificial.", es: "Implementación de aplicaciones informáticas sencillas para ordenador y dispositivos móviles e iniciación a la inteligencia artificial." },
          { id: "C3", ca: "Disseny i implementació de sistemes de control programat. Muntatge físic i/o ús de simuladors i programació senzilla de dispositius. Internet de les coses.", es: "Diseño e implementación de sistemas de control programado. Montaje físico y/o uso de simuladores y programación sencilla de dispositivos. Internet de las cosas." },
          { id: "C4", ca: "Iniciació a la robòtica. Muntatge i control programat de robots o dispositius programables de manera física o mitjançant simuladors.", es: "Iniciación a la robótica. Montaje y control programado de robots o dispositivos programables de manera física o mediante simuladores." },
          { id: "C5", ca: "Aplicació de tècniques de depuració iteratives d'un programa informàtic per a la identificació de l'error com a part del procés d'aprenentatge i afirmació de l'autoconfiança.", es: "Aplicación de técnicas de depuración iterativas de un programa informático para la identificación del error como parte del proceso de aprendizaje y afirmación de la autoconfianza." }
        ]
      },
      {
        id: "D", title: { ca: "Digitalització de l'entorn personal d'aprenentatge", es: "Digitalización del entorno personal de aprendizaje" },
        items: [
          { id: "D1", ca: "Ús de dispositius digitals, tant dels elements del maquinari com del programari. Identificació i resolució de problemes tècnics senzills.", es: "Uso de dispositivos digitales, tanto de los elementos del hardware como del software. Identificación y resolución de problemas técnicos sencillos." },
          { id: "D2", ca: "Utilització de sistemes de comunicació digital d'ús comú. Transmissió de dades. Tecnologies sense fil per a la comunicació.", es: "Utilización de sistemas de comunicación digital de uso común. Transmisión de datos. Tecnologías inalámbricas para la comunicación." },
          { id: "D3", ca: "Utilització d'eines i entorns virtuals d'aprenentatge. Configuració, manteniment i ús crític.", es: "Utilización de herramientas y entornos virtuales de aprendizaje. Configuración, mantenimiento y uso crítico." },
          { id: "D4", ca: "Utilització d'eines d'edició i creació de continguts. Instal·lació, configuració i ús responsable de les aplicacions i de la propietat intel·lectual.", es: "Utilización de herramientas de edición y creación de contenidos. Instalación, configuración y uso responsable de las aplicaciones y de la propiedad intelectual." },
          { id: "D5", ca: "Implementació de tècniques de tractament, organització i emmagatzematge segur de la informació. Còpies de seguretat.", es: "Implementación de técnicas de tratamiento, organización y almacenamiento seguro de la información. Copias de seguridad." },
          { id: "D6", ca: "Implementació de la seguretat a la xarxa: riscos, amenaces i atacs. Aplicació de mesures de protecció de les dades i de la informació. Accions preventives per al benestar digital.", es: "Implementación de la seguridad en la red: riesgos, amenazas y ataques. Aplicación de medidas de protección de los datos y de la información. Acciones preventivas para el bienestar digital." }
        ]
      },
      {
        id: "E", title: { ca: "Tecnologia sostenible", es: "Tecnología sostenible" },
        items: [
          { id: "E1", ca: "Desenvolupament tecnològic: creativitat, innovació, investigació, obsolescència i impacte social i ambiental. Utilització ètica de les aplicacions i les tecnologies emergents.", es: "Desarrollo tecnológico: creatividad, innovación, investigación, obsolescencia e impacto social y ambiental. Utilización ética de las aplicaciones y las tecnologías emergentes." },
          { id: "E2", ca: "Aplicació de la tecnologia sostenible. Valoració crítica de la contribució a la consecució dels objectius de desenvolupament sostenible.", es: "Aplicación de la tecnología sostenible. Valoración crítica de la contribución a la consecución de los objetivos de desarrollo sostenible." },
          { id: "E3", ca: "Valoració de l'energia com a factor tecnològic clau del desenvolupament sostenible. Eficiència energètica, consum responsable i energies renovables.", es: "Valoración de la energía como factor tecnológico clave del desarrollo sostenible. Eficiencia energética, consumo responsable y energías renovables." }
        ]
      }
    ]
  },

  tec: {
    name: { ca: "Tecnologia (4t ESO)", es: "Tecnología (4.º ESO)" },
    cursos: ["4"],
    ces: [
      {
        id: "1",
        text: {
          ca: "Identificar i proposar problemes tecnològics amb iniciativa i creativitat, tot estudiant les necessitats de l'entorn proper, aplicant estratègies i processos col·laboratius i iteratius relatius a projectes, per idear i planificar solucions de manera eficient i innovadora.",
          es: "Identificar y proponer problemas tecnológicos con iniciativa y creatividad, estudiando las necesidades del entorno cercano y aplicando estrategias y procesos colaborativos e iterativos relativos a proyectos, para idear y planificar soluciones de manera eficiente e innovadora."
        },
        criteris: [
          { id: "1.1", ca: "Idear i planificar solucions tecnològiques emprenedores que generin un valor a la comunitat, a partir de l'observació i l'anàlisi de l'entorn més proper, tot estudiant les necessitats, els requisits i les possibilitats de millora.", es: "Idear y planificar soluciones tecnológicas emprendedoras que generen valor a la comunidad, a partir de la observación y el análisis del entorno más cercano, estudiando las necesidades, los requisitos y las posibilidades de mejora." },
          { id: "1.2", ca: "Aplicar, amb iniciativa, estratègies col·laboratives de gestió de projectes amb perspectiva interdisciplinària, seguint un procés iteratiu de validació, des de la fase d'ideació fins a la resolució de problemes.", es: "Aplicar, con iniciativa, estrategias colaborativas de gestión de proyectos con perspectiva interdisciplinar, siguiendo un proceso iterativo de validación, desde la fase de ideación hasta la resolución de problemas." },
          { id: "1.3", ca: "Desenvolupar la gestió del projecte de manera creativa, aplicant estratègies i tècniques col·laboratives, així com mètodes de recerca per a la ideació de solucions eficients, innovadores i respectuoses amb el medi ambient.", es: "Desarrollar la gestión del proyecto de manera creativa, aplicando estrategias y técnicas colaborativas, así como métodos de investigación para la ideación de soluciones eficientes, innovadoras y respetuosas con el medio ambiente." }
        ]
      },
      {
        id: "2",
        text: {
          ca: "Aplicar diferents tècniques i coneixements interdisciplinaris utilitzant procediments i recursos tecnològics tot preveient el cicle de vida dels productes per construir solucions tecnològiques sostenibles que donin resposta a necessitats plantejades.",
          es: "Aplicar diferentes técnicas y conocimientos interdisciplinares utilizando procedimientos y recursos tecnológicos, previendo el ciclo de vida de los productos, para construir soluciones tecnológicas sostenibles que den respuesta a necesidades planteadas."
        },
        criteris: [
          { id: "2.1", ca: "Analitzar el disseny d'un producte que doni resposta a una necessitat plantejada, avaluant-ne la demanda, l'evolució i la previsió de fi del cicle de vida amb criteri ètic, sostenible i responsable.", es: "Analizar el diseño de un producto que dé respuesta a una necesidad planteada, evaluando su demanda, evolución y previsión de fin del ciclo de vida con criterio ético, sostenible y responsable." },
          { id: "2.2", ca: "Fabricar productes i solucions tecnològiques, fent ús del disseny assistit, utilitzant les diferents tècniques d'elaboració manual, mecànica i digital, emprant de manera adequada els diferents materials i recursos mecànics, elèctrics, electrònics i digitals.", es: "Fabricar productos y soluciones tecnológicas, haciendo uso del diseño asistido y utilizando las diferentes técnicas de elaboración manual, mecánica y digital, empleando de manera adecuada los diferentes materiales y recursos mecánicos, eléctricos, electrónicos y digitales." },
          { id: "2.3", ca: "Argumentar les solucions tecnològiques aportades a les necessitats plantejades, valorant-ne la viabilitat econòmica, l'ús funcional, sostenible i eficient.", es: "Argumentar las soluciones tecnológicas aportadas a las necesidades planteadas, valorando su viabilidad económica y su uso funcional, sostenible y eficiente." }
        ]
      },
      {
        id: "3",
        text: {
          ca: "Comunicar, argumentar i difondre idees i solucions tecnològiques en diferents espais virtuals, emprant diversos recursos tot aplicant els elements i les tècniques necessàries per intercanviar la informació i fomentar el treball en equip.",
          es: "Comunicar, argumentar y difundir ideas y soluciones tecnológicas en diferentes espacios virtuales, empleando diversos recursos y aplicando los elementos y técnicas necesarios para intercambiar la información y fomentar el trabajo en equipo."
        },
        criteris: [
          { id: "3.1", ca: "Intercanviar informació i fomentar el treball en equip de manera assertiva, emprant les eines digitals, el vocabulari tècnic, símbols i esquemes de sistemes tecnològics apropiats.", es: "Intercambiar información y fomentar el trabajo en equipo de manera asertiva, empleando las herramientas digitales, el vocabulario técnico, y los símbolos y esquemas de sistemas tecnológicos apropiados." },
          { id: "3.2", ca: "Presentar i difondre les propostes o solucions tecnològiques de manera concreta, emprant l'entonació, l'expressió, l'adaptació del discurs i del temps, usant un llenguatge inclusiu i lliure d'estereotips sexistes.", es: "Presentar y difundir las propuestas o soluciones tecnológicas de manera concreta, empleando la entonación, la expresión y la adaptación del discurso y del tiempo, usando un lenguaje inclusivo y libre de estereotipos sexistas." }
        ]
      },
      {
        id: "4",
        text: {
          ca: "Desenvolupar solucions sostenibles a problemes plantejats que incorporin l'automatització i les tecnologies emergents, per dissenyar i construir sistemes de control programables i robòtics.",
          es: "Desarrollar soluciones sostenibles a problemas planteados que incorporen la automatización y las tecnologías emergentes, para diseñar y construir sistemas de control programables y robóticos."
        },
        criteris: [
          { id: "4.1", ca: "Dissenyar, construir, controlar i/o simular sistemes automàtics programables i robots que siguin capaços de fer tasques de forma autònoma, aplicant coneixements de mecànica, electrònica, pneumàtica i components dels sistemes de control, així com altres coneixements interdisciplinaris.", es: "Diseñar, construir, controlar y/o simular sistemas automáticos programables y robots que sean capaces de realizar tareas de forma autónoma, aplicando conocimientos de mecánica, electrónica, neumática y componentes de los sistemas de control, así como otros conocimientos interdisciplinares." },
          { id: "4.2", ca: "Integrar a les màquines i sistemes tecnològics aplicacions digitals emergents de control i simulació com Internet de les coses, tractament massiu de dades (big data) i intel·ligència artificial amb sentit crític, ètic i sostenible.", es: "Integrar en las máquinas y sistemas tecnológicos aplicaciones digitales emergentes de control y simulación como Internet de las cosas, tratamiento masivo de datos (big data) e inteligencia artificial con sentido crítico, ético y sostenible." }
        ]
      },
      {
        id: "5",
        text: {
          ca: "Emprar les eines digitals de disseny i fabricació, adaptant-les i configurant-les a les necessitats tot aplicant els coneixements interdisciplinaris, per a una producció més eficient i sostenible.",
          es: "Emplear las herramientas digitales de diseño y fabricación, adaptándolas y configurándolas a las necesidades y aplicando los conocimientos interdisciplinares, para una producción más eficiente y sostenible."
        },
        criteris: [
          { id: "5.1", ca: "Resoldre tasques proposades de manera eficient mitjançant l'ús i la configuració de diferents aplicacions i eines digitals, tot aplicant coneixements interdisciplinaris amb autonomia.", es: "Resolver tareas propuestas de manera eficiente mediante el uso y la configuración de diferentes aplicaciones y herramientas digitales, aplicando conocimientos interdisciplinares con autonomía." },
          { id: "5.2", ca: "Utilitzar en el disseny de solucions, eines de representació en tres dimensions i d'experimentació virtual mitjançant simuladors, per a la construcció del coneixement tecnològic.", es: "Utilizar en el diseño de soluciones herramientas de representación en tres dimensiones y de experimentación virtual mediante simuladores, para la construcción del conocimiento tecnológico." },
          { id: "5.3", ca: "Emprar diferents gestors de presentació, eines de difusió o publicació de la informació per a la realització de tasques col·laboratives.", es: "Emplear diferentes gestores de presentación y herramientas de difusión o publicación de la información para la realización de tareas colaborativas." },
          { id: "5.4", ca: "Configurar programes o aplicacions informàtiques per al control de diferents automatismes.", es: "Configurar programas o aplicaciones informáticas para el control de diferentes automatismos." }
        ]
      },
      {
        id: "6",
        text: {
          ca: "Analitzar processos tecnològics, valorant l'impacte en la societat i l'entorn, tot aplicant criteris de sostenibilitat, per fer un ús ètic i ecosocialment responsable de la tecnologia.",
          es: "Analizar procesos tecnológicos, valorando su impacto en la sociedad y el entorno y aplicando criterios de sostenibilidad, para hacer un uso ético y ecosocialmente responsable de la tecnología."
        },
        criteris: [
          { id: "6.1", ca: "Fer un ús responsable de la tecnologia, mitjançant l'anàlisi i l'aplicació de criteris de sostenibilitat en la selecció de materials, el disseny i els processos de fabricació dels productes tecnològics, tot minimitzant l'impacte en la societat i el planeta.", es: "Hacer un uso responsable de la tecnología, mediante el análisis y la aplicación de criterios de sostenibilidad en la selección de materiales, el diseño y los procesos de fabricación de los productos tecnológicos, minimizando el impacto en la sociedad y el planeta." },
          { id: "6.2", ca: "Analitzar els beneficis i valorar la contribució de les tecnologies al desenvolupament sostenible i la cura de l'entorn, que aporten l'arquitectura bioclimàtica, les energies renovables i la mobilitat eficient.", es: "Analizar los beneficios y valorar la contribución de las tecnologías al desarrollo sostenible y al cuidado del entorno que aportan la arquitectura bioclimática, las energías renovables y la movilidad eficiente." },
          { id: "6.3", ca: "Identificar i valorar la repercussió i els beneficis del desenvolupament de projectes tecnològics de caràcter social per mitjà de comunitats obertes, accions de voluntariat o projectes de servei a la comunitat.", es: "Identificar y valorar la repercusión y los beneficios del desarrollo de proyectos tecnológicos de carácter social por medio de comunidades abiertas, acciones de voluntariado o proyectos de servicio a la comunidad." }
        ]
      }
    ],
    sabers: [
      {
        id: "A", title: { ca: "Procés de resolució de problemes i projectes", es: "Proceso de resolución de problemas y proyectos" },
        items: [
          { id: "A1", ca: "Aplicació d'estratègies de gestió de projectes col·laboratius i de tècniques de resolució de problemes iteratives.", es: "Aplicación de estrategias de gestión de proyectos colaborativos y de técnicas de resolución de problemas iterativas." },
          { id: "A2", ca: "Cerca, comparació i estudi de les necessitats del centre educatiu, dels àmbits local i regional, etc. per al plantejament de projectes col·laboratius o cooperatius.", es: "Búsqueda, comparación y estudio de las necesidades del centro educativo, de los ámbitos local y regional, etc. para el planteamiento de proyectos colaborativos o cooperativos." },
          { id: "A3", ca: "Implementació de diferents tècniques d'ideació per a la resolució de problemes.", es: "Implementación de diferentes técnicas de ideación para la resolución de problemas." },
          { id: "A4", ca: "Resolució de problemes amb actitud emprenedora, creativa i perseverant, des d'una perspectiva interdisciplinària de l'activitat tecnològica, tot fomentant la satisfacció i l'interès pel treball i la qualitat del mateix.", es: "Resolución de problemas con actitud emprendedora, creativa y perseverante, desde una perspectiva interdisciplinar de la actividad tecnológica, fomentando la satisfacción y el interés por el trabajo y su calidad." },
          { id: "A5", ca: "Selecció i utilització de diferents productes i materials per a la resolució de problemes.", es: "Selección y utilización de diferentes productos y materiales para la resolución de problemas." },
          { id: "A6", ca: "Anàlisi del cicle de vida d'un producte i identificació de les diferents fases.", es: "Análisis del ciclo de vida de un producto e identificación de sus diferentes fases." },
          { id: "A7", ca: "Selecció de materials tot utilitzant diverses estratègies, d'acord amb les seves propietats o requisits, per a la resolució de problemes i projectes.", es: "Selección de materiales utilizando diversas estrategias, de acuerdo con sus propiedades o requisitos, para la resolución de problemas y proyectos." },
          { id: "A8", ca: "Valoració, selecció i utilització de diferents tècniques de fabricació en la resolució de problemes i projectes.", es: "Valoración, selección y utilización de diferentes técnicas de fabricación en la resolución de problemas y proyectos." },
          { id: "A9", ca: "Utilització de diferents eines de disseny i de fabricació assistit per ordinador en 2D i 3D, per a la representació i/o fabricació de peces aplicades a projectes.", es: "Utilización de diferentes herramientas de diseño y fabricación asistidos por ordenador en 2D y 3D para la representación y/o fabricación de piezas aplicadas a proyectos." },
          { id: "A10", ca: "Valoració, selecció i utilització de diferents tècniques de fabricació manual i mecànica, en les aplicacions pràctiques.", es: "Valoración, selección y utilización de diferentes técnicas de fabricación manual y mecánica en las aplicaciones prácticas." },
          { id: "A11", ca: "Implementació, en aplicacions pràctiques, de tècniques de fabricació digital, com la impressió 3D i el tall.", es: "Implementación, en aplicaciones prácticas, de técnicas de fabricación digital, como la impresión 3D y el corte." },
          { id: "A12", ca: "Documentació, presentació i difusió de projectes, integrant diferents elements, tècniques i eines. Utilització d'una comunicació efectiva basada en una entonació, expressió, gestió del temps i adaptació del discurs i amb un ús de llenguatge inclusiu i lliure d'estereotips de gènere.", es: "Documentación, presentación y difusión de proyectos, integrando diferentes elementos, técnicas y herramientas. Utilización de una comunicación efectiva basada en la entonación, la expresión, la gestión del tiempo y la adaptación del discurso, y con un uso de lenguaje inclusivo y libre de estereotipos de género." }
        ]
      },
      {
        id: "B", title: { ca: "Operadors tecnològics", es: "Operadores tecnológicos" },
        items: [
          { id: "B1", ca: "Identificació dels components electrònics analògics bàsics i la seva simbologia, amb l'anàlisi i el muntatge físic i simulats de circuits elementals.", es: "Identificación de los componentes electrónicos analógicos básicos y su simbología, con el análisis y el montaje físico y simulado de circuitos elementales." },
          { id: "B2", ca: "Representació, anàlisi, disseny, simulació i muntatge de circuits electrònics digitals senzills i la seva aplicació.", es: "Representación, análisis, diseño, simulación y montaje de circuitos electrónicos digitales sencillos y su aplicación." },
          { id: "B3", ca: "Representació, anàlisi, disseny, simulació i muntatge de circuits pneumàtics bàsics amb components que compleixin una determinada funció en un mecanisme o màquina.", es: "Representación, análisis, diseño, simulación y montaje de circuitos neumáticos básicos con componentes que cumplan una determinada función en un mecanismo o máquina." },
          { id: "B4", ca: "Anàlisi, descripció i relació dels diferents elements mecànics, electrònics i pneumàtics aplicats a la robòtica, fent ús del muntatge físic o simulat.", es: "Análisis, descripción y relación de los diferentes elementos mecánicos, electrónicos y neumáticos aplicados a la robótica, haciendo uso del montaje físico o simulado." }
        ]
      },
      {
        id: "C", title: { ca: "Pensament computacional, automatització i robòtica", es: "Pensamiento computacional, automatización y robótica" },
        items: [
          { id: "C1", ca: "Utilització de diferents components de sistemes de control programat: controladors, sensors i actuadors, que permetin l'optimització dels recursos i apliquin l'automatització i la robotització.", es: "Utilización de diferentes componentes de sistemas de control programado: controladores, sensores y actuadores, que permitan la optimización de los recursos y apliquen la automatización y la robotización." },
          { id: "C2", ca: "Disseny i implementació d'aplicacions informàtiques per a ordinador i dispositius mòbils. Utilització de simuladors informàtics en la verificació i comprovació del funcionament dels sistemes dissenyats. Introducció de les aplicacions de la intel·ligència artificial i al tractament massiu de dades (big data). Ús d'espais digitals compartits i discos virtuals per l'emmagatzematge i compartició d'informació.", es: "Diseño e implementación de aplicaciones informáticas para ordenador y dispositivos móviles. Utilización de simuladores informáticos en la verificación y comprobación del funcionamiento de los sistemas diseñados. Introducción a las aplicaciones de la inteligencia artificial y al tratamiento masivo de datos (big data). Uso de espacios digitales compartidos y discos virtuales para el almacenamiento y la compartición de información." },
          { id: "C3", ca: "Integració de les telecomunicacions en els sistemes de control digital; Internet de les coses amb els diferents elements, comunicacions i control, mitjançant l'aplicació pràctica per donar resposta a les necessitats personals o col·lectives.", es: "Integración de las telecomunicaciones en los sistemas de control digital; Internet de las cosas con sus diferentes elementos, comunicaciones y control, mediante la aplicación práctica para dar respuesta a las necesidades personales o colectivas." },
          { id: "C4", ca: "Disseny, construcció i control de robots senzills de manera física o simulada per al desenvolupament de tasques reals o fictícies.", es: "Diseño, construcción y control de robots sencillos de manera física o simulada para el desarrollo de tareas reales o ficticias." }
        ]
      },
      {
        id: "D", title: { ca: "Tecnologia sostenible", es: "Tecnología sostenible" },
        items: [
          { id: "D1", ca: "Selecció de materials i disseny de processos, productes i sistemes tecnològics per a una sostenibilitat mediambiental, econòmica i social.", es: "Selección de materiales y diseño de procesos, productos y sistemas tecnológicos para una sostenibilidad medioambiental, económica y social." },
          { id: "D2", ca: "Justificació de l'energia com a factor tecnològic clau del desenvolupament sostenible. Eficiència energètica, consum responsable i energies renovables.", es: "Justificación de la energía como factor tecnológico clave del desarrollo sostenible. Eficiencia energética, consumo responsable y energías renovables." },
          { id: "D3", ca: "Cerca, aplicació i disseny d'estratègies d'estalvi energètic en edificis. Anàlisi de l'arquitectura bioclimàtica i sostenible en la reducció de l'impacte ambiental tant en l'àmbit local com en el global.", es: "Búsqueda, aplicación y diseño de estrategias de ahorro energético en edificios. Análisis de la arquitectura bioclimática y sostenible en la reducción del impacto ambiental tanto en el ámbito local como en el global." },
          { id: "D4", ca: "Anàlisi i valoració de la mobilitat sostenible dels diferents mitjans de transport públic o privat.", es: "Análisis y valoración de la movilidad sostenible de los diferentes medios de transporte público o privado." },
          { id: "D5", ca: "Creació de comunitats obertes d'aprenentatge, foment del voluntariat tecnològic i la implementació de projectes de servei a la comunitat amb un compromís actiu tant en l'àmbit local com en el global.", es: "Creación de comunidades abiertas de aprendizaje, fomento del voluntariado tecnológico e implementación de proyectos de servicio a la comunidad con un compromiso activo tanto en el ámbito local como en el global." }
        ]
      }
    ]
  },

  dig: {
    name: { ca: "Digitalització (4t ESO)", es: "Digitalización (4.º ESO)" },
    cursos: ["4"],
    ces: [
      {
        id: "1",
        text: {
          ca: "Gestionar les eines i els dispositius informàtics i de comunicació d'ús quotidià aplicant els coneixements de maquinari i sistemes operatius per resoldre problemes tècnics senzills.",
          es: "Gestionar las herramientas y los dispositivos informáticos y de comunicación de uso cotidiano aplicando los conocimientos de hardware y sistemas operativos para resolver problemas técnicos sencillos."
        },
        criteris: [
          { id: "1.1", ca: "Connectar dispositius i gestionar xarxes locals aplicant els coneixements i processos associats a sistemes de comunicació amb fil i sense fil amb una actitud proactiva.", es: "Conectar dispositivos y gestionar redes locales aplicando los conocimientos y procesos asociados a sistemas de comunicación con cable e inalámbricos con una actitud proactiva." },
          { id: "1.2", ca: "Gestionar, a nivell bàsic, sistemes operatius configurant-ne les característiques en funció de les necessitats personals.", es: "Gestionar, a nivel básico, sistemas operativos configurando sus características en función de las necesidades personales." },
          { id: "1.3", ca: "Resoldre problemes tècnics senzills analitzant components i funcions dels dispositius digitals, avaluant les solucions de manera crítica i reformulant el procediment, si cal.", es: "Resolver problemas técnicos sencillos analizando componentes y funciones de los dispositivos digitales, evaluando las soluciones de manera crítica y reformulando el procedimiento, si es necesario." },
          { id: "1.4", ca: "Fer un ús responsable dels dispositius i de la seva utilització per promoure la sostenibilitat, tot fomentant la reutilització i l'estalvi i l'eficiència energètica.", es: "Hacer un uso responsable de los dispositivos y de su utilización para promover la sostenibilidad, fomentando la reutilización, el ahorro y la eficiencia energética." }
        ]
      },
      {
        id: "2",
        text: {
          ca: "Idear solucions innovadores i creatives aplicant diferents formes de raonament, integrant-les en l'entorn personal d'aprenentatge tot fent ús de les eines i els recursos d'edició, la creació de continguts digitals i el desenvolupament d'aplicacions per optimitzar l'aprenentatge permanent.",
          es: "Idear soluciones innovadoras y creativas aplicando diferentes formas de razonamiento, integrándolas en el entorno personal de aprendizaje y haciendo uso de las herramientas y recursos de edición, la creación de contenidos digitales y el desarrollo de aplicaciones para optimizar el aprendizaje permanente."
        },
        criteris: [
          { id: "2.1", ca: "Cercar i seleccionar informació per a la ideació de solucions innovadores, amb responsabilitat i sentit crític.", es: "Buscar y seleccionar información para la ideación de soluciones innovadoras, con responsabilidad y sentido crítico." },
          { id: "2.2", ca: "Dissenyar solucions possibles a problemes plantejats aplicant diferents formes de raonament, com el pensament de disseny i el pensament computacional, tenint en compte les tecnologies emergents, la realitat virtual, augmentada i mixta.", es: "Diseñar soluciones posibles a problemas planteados aplicando diferentes formas de razonamiento, como el pensamiento de diseño y el pensamiento computacional, teniendo en cuenta las tecnologías emergentes y la realidad virtual, aumentada y mixta." },
          { id: "2.3", ca: "Generar o modificar, de forma individual o col·laborativa, continguts amb suport digital i creacions audiovisuals, integrant imatge, so i vídeo per a la construcció de produccions multimèdia.", es: "Generar o modificar, de forma individual o colaborativa, contenidos con soporte digital y creaciones audiovisuales, integrando imagen, sonido y vídeo para la construcción de producciones multimedia." },
          { id: "2.4", ca: "Desenvolupar aplicacions fent servir el programari i els llenguatges de programació adients, per la resolució de problemes concrets tenint en compte criteris d'autoria i llicències d'ús.", es: "Desarrollar aplicaciones utilizando el software y los lenguajes de programación adecuados para la resolución de problemas concretos, teniendo en cuenta criterios de autoría y licencias de uso." },
          { id: "2.5", ca: "Integrar els continguts digitals en entorns personals d'aprenentatge (pàgina web, espai al núvol, carpetes, etc.) autoregulant el propi aprenentatge de manera autònoma.", es: "Integrar los contenidos digitales en entornos personales de aprendizaje (página web, espacio en la nube, carpetas, etc.) autorregulando el propio aprendizaje de manera autónoma." }
        ]
      },
      {
        id: "3",
        text: {
          ca: "Identificar riscos i amenaces i aplicar mesures preventives i correctives, adquirint hàbits que fomentin el benestar digital per protegir dispositius, dades personals i la pròpia salut.",
          es: "Identificar riesgos y amenazas y aplicar medidas preventivas y correctivas, adquiriendo hábitos que fomenten el bienestar digital para proteger dispositivos, datos personales y la propia salud."
        },
        criteris: [
          { id: "3.1", ca: "Configurar adequadament les opcions de privadesa de les aplicacions, xarxes socials i espais virtuals i utilitzar les eines i tècniques de seguretat, per protegir les dades personals, la petjada digital i preservar la seva identitat a la xarxa.", es: "Configurar adecuadamente las opciones de privacidad de las aplicaciones, redes sociales y espacios virtuales y utilizar las herramientas y técnicas de seguridad para proteger los datos personales y la huella digital y preservar su identidad en la red." },
          { id: "3.2", ca: "Configurar i actualitzar mesures de protecció i seguretat de dispositius i sistemes digitals d'ús habitual (antivirus, contrasenyes, bloqueig de pantalla, protecció de la comunicació, etc.).", es: "Configurar y actualizar medidas de protección y seguridad de dispositivos y sistemas digitales de uso habitual (antivirus, contraseñas, bloqueo de pantalla, protección de la comunicación, etc.)." },
          { id: "3.3", ca: "Identificar i prendre mesures per protegir-se davant d'amenaces, atacs, intrusions o infeccions que esdevenen a la xarxa.", es: "Identificar y tomar medidas para protegerse ante amenazas, ataques, intrusiones o infecciones que se producen en la red." },
          { id: "3.4", ca: "Identificar situacions de risc per a la salut associades a l'ús de les tecnologies digitals i adoptar les mesures necessàries per tenir cura de la pròpia salut.", es: "Identificar situaciones de riesgo para la salud asociadas al uso de las tecnologías digitales y adoptar las medidas necesarias para cuidar la propia salud." }
        ]
      },
      {
        id: "4",
        text: {
          ca: "Fer un ús actiu, responsable i ètic de les tecnologies digitals, valorant les possibles accions que cal fer a la xarxa i identificar-ne les repercussions per exercir una ciutadania digital crítica.",
          es: "Hacer un uso activo, responsable y ético de las tecnologías digitales, valorando las posibles acciones que hay que realizar en la red e identificando sus repercusiones para ejercer una ciudadanía digital crítica."
        },
        criteris: [
          { id: "4.1", ca: "Respectar els drets d'autoria i les llicències d'ús en la comunicació, col·laboració i participació a la xarxa, fent un ús ètic de les dades i de les produccions, i justificar-ne les raons.", es: "Respetar los derechos de autoría y las licencias de uso en la comunicación, colaboración y participación en la red, haciendo un uso ético de los datos y de las producciones, y justificar sus razones." },
          { id: "4.2", ca: "Analitzar i valorar críticament les aportacions de les tecnologies digitals a les gestions administratives i el comerç electrònic, identificant els problemes derivats de la bretxa social d'accés i l'ús per a determinats col·lectius.", es: "Analizar y valorar críticamente las aportaciones de las tecnologías digitales a las gestiones administrativas y al comercio electrónico, identificando los problemas derivados de la brecha social de acceso y uso para determinados colectivos." },
          { id: "4.3", ca: "Valorar la importància de l'oportunitat, la facilitat i la llibertat d'expressió que suposen els mitjans digitals connectats, analitzant de manera crítica els missatges que es reben tenint en compte la seva objectivitat, ideologia, intencionalitat, biaixos i caducitat.", es: "Valorar la importancia de la oportunidad, la facilidad y la libertad de expresión que suponen los medios digitales conectados, analizando de manera crítica los mensajes que se reciben teniendo en cuenta su objetividad, ideología, intencionalidad, sesgos y caducidad." },
          { id: "4.4", ca: "Participar, col·laborar i interactuar en espais virtuals de comunicació i plataformes d'aprenentatge col·laboratiu, compartint i publicant informació i dades, adaptant-se a diferents audiències amb una actitud respectuosa, responsable i participativa.", es: "Participar, colaborar e interactuar en espacios virtuales de comunicación y plataformas de aprendizaje colaborativo, compartiendo y publicando información y datos, adaptándose a diferentes audiencias con una actitud respetuosa, responsable y participativa." }
        ]
      },
      {
        id: "5",
        text: {
          ca: "Analitzar l'impacte de les tecnologies digitals a la societat, a partir de la identificació dels canvis econòmics i socials a escala global, i aplicar les tecnologies emergents per al disseny de solucions a problemes reals tenint en compte els objectius de desenvolupament sostenible.",
          es: "Analizar el impacto de las tecnologías digitales en la sociedad, a partir de la identificación de los cambios económicos y sociales a escala global, y aplicar las tecnologías emergentes para el diseño de soluciones a problemas reales teniendo en cuenta los objetivos de desarrollo sostenible."
        },
        criteris: [
          { id: "5.1", ca: "Identificar els canvis econòmics i socials derivats de l'ús de les tecnologies digitals aplicades a diferents àmbits.", es: "Identificar los cambios económicos y sociales derivados del uso de las tecnologías digitales aplicadas a diferentes ámbitos." },
          { id: "5.2", ca: "Analitzar i valorar l'impacte de les tecnologies digitals en la societat tenint en compte els ODS.", es: "Analizar y valorar el impacto de las tecnologías digitales en la sociedad teniendo en cuenta los ODS." },
          { id: "5.3", ca: "Aplicar les tecnologies emergents en el disseny de solucions a problemes reals tenint en compte els objectius de desenvolupament sostenible (intel·ligència artificial, IoT, etc.).", es: "Aplicar las tecnologías emergentes en el diseño de soluciones a problemas reales teniendo en cuenta los objetivos de desarrollo sostenible (inteligencia artificial, IoT, etc.)." },
          { id: "5.4", ca: "Analitzar l'ús d'eines de simulació i supercomputadors en el tractament de dades i valorar-ne l'impacte en la societat de la informació i l'aplicació a tecnologies associades.", es: "Analizar el uso de herramientas de simulación y superordenadores en el tratamiento de datos y valorar su impacto en la sociedad de la información y su aplicación a tecnologías asociadas." }
        ]
      }
    ],
    sabers: [
      {
        id: "A", title: { ca: "Dispositius digitals, sistemes operatius i de comunicació", es: "Dispositivos digitales, sistemas operativos y de comunicación" },
        items: [
          { id: "A1", ca: "Anàlisi, implementació i configuració d'ordinadors: elements, muntatge, configuració i resolució de problemes.", es: "Análisis, implementación y configuración de ordenadores: elementos, montaje, configuración y resolución de problemas." },
          { id: "A2", ca: "Gestió bàsica de sistemes operatius: instal·lació i configuració d'usuari.", es: "Gestión básica de sistemas operativos: instalación y configuración de usuario." },
          { id: "A3", ca: "Gestió bàsica de sistemes de comunicació i Internet. Dispositius de xarxa i funcionament.", es: "Gestión básica de sistemas de comunicación e Internet. Dispositivos de red y funcionamiento." },
          { id: "A4", ca: "Configuració d'una xarxa domèstica i connexió de dispositius.", es: "Configuración de una red doméstica y conexión de dispositivos." },
          { id: "A5", ca: "Posada en servei de dispositius connectats (IoT + wearables). Configuració i connexió de dispositius.", es: "Puesta en servicio de dispositivos conectados (IoT + wearables). Configuración y conexión de dispositivos." },
          { id: "A6", ca: "Reutilització de dispositius digitals adaptats a necessitats específiques.", es: "Reutilización de dispositivos digitales adaptados a necesidades específicas." },
          { id: "A7", ca: "Aplicació d'estratègies d'estalvi i eficiència energètica en sistemes i dispositius electrònics.", es: "Aplicación de estrategias de ahorro y eficiencia energética en sistemas y dispositivos electrónicos." }
        ]
      },
      {
        id: "B", title: { ca: "Digitalització de l'entorn personal d'aprenentatge", es: "Digitalización del entorno personal de aprendizaje" },
        items: [
          { id: "B1", ca: "Ús d'estratègies eficaces de cerca i selecció crítica d'informació.", es: "Uso de estrategias eficaces de búsqueda y selección crítica de información." },
          { id: "B2", ca: "Edició i creació de continguts: aplicacions de productivitat, desenvolupament d'aplicacions senzilles per a dispositius mòbils i web, realitat virtual, augmentada i mixta.", es: "Edición y creación de contenidos: aplicaciones de productividad, desarrollo de aplicaciones sencillas para dispositivos móviles y web, realidad virtual, aumentada y mixta." },
          { id: "B3", ca: "Comunicació i col·laboració sincrònica i asincrònica en xarxa.", es: "Comunicación y colaboración síncrona y asíncrona en red." },
          { id: "B4", ca: "Publicació i difusió responsable d'informació i dades en xarxes informàtiques.", es: "Publicación y difusión responsable de información y datos en redes informáticas." }
        ]
      },
      {
        id: "C", title: { ca: "Creació i publicació de continguts en suport digital", es: "Creación y publicación de contenidos en soporte digital" },
        items: [
          { id: "C1", ca: "Ús d'estratègies avançades de cerca i selecció crítica d'informació.", es: "Uso de estrategias avanzadas de búsqueda y selección crítica de información." },
          { id: "C2", ca: "Edició i creació de continguts: desenvolupament d'aplicacions senzilles per a dispositius mòbils i web, fent servir diferents llenguatges de programació. Aplicació d'estructures de programació comunes: condicionals i repeticions.", es: "Edición y creación de contenidos: desarrollo de aplicaciones sencillas para dispositivos móviles y web, utilizando diferentes lenguajes de programación. Aplicación de estructuras de programación comunes: condicionales y repeticiones." },
          { id: "C3", ca: "Ús d'eines per a la producció de continguts amb realitat virtual, augmentada i mixta.", es: "Uso de herramientas para la producción de contenidos con realidad virtual, aumentada y mixta." },
          { id: "C4", ca: "Desenvolupament de continguts per a Internet en format web, aplicant estàndards d'accessibilitat.", es: "Desarrollo de contenidos para Internet en formato web, aplicando estándares de accesibilidad." },
          { id: "C5", ca: "Aplicació de tecnologies emergents (IA, IoT) en la implementació de solucions a problemes reals.", es: "Aplicación de tecnologías emergentes (IA, IoT) en la implementación de soluciones a problemas reales." },
          { id: "C6", ca: "Creació de continguts audiovisuals amb eines digitals. Ús d'eines d'edició i tractament d'imatge, àudio i vídeo.", es: "Creación de contenidos audiovisuales con herramientas digitales. Uso de herramientas de edición y tratamiento de imagen, audio y vídeo." },
          { id: "C7", ca: "Aplicació de tècniques de raonament lògic com el pensament de disseny i el pensament computacional en la resolució de problemes en el disseny de solucions.", es: "Aplicación de técnicas de razonamiento lógico como el pensamiento de diseño y el pensamiento computacional en la resolución de problemas y el diseño de soluciones." },
          { id: "C8", ca: "Pràctica de l'educació mediàtica: periodisme digital, blogosfera, estratègies comunicatives.", es: "Práctica de la educación mediática: periodismo digital, blogosfera, estrategias comunicativas." }
        ]
      },
      {
        id: "D", title: { ca: "Seguretat i benestar digital", es: "Seguridad y bienestar digital" },
        items: [
          { id: "D1", ca: "Avaluació i configuració de la seguretat en dispositius. Mesures preventives i correctives per fer front a riscos, amenaces i atacs a dispositius.", es: "Evaluación y configuración de la seguridad en dispositivos. Medidas preventivas y correctivas para hacer frente a riesgos, amenazas y ataques a dispositivos." },
          { id: "D2", ca: "Aplicació de criteris de seguretat i de protecció de dades. Identitat, reputació, privadesa i empremta digital. Mesures preventives. Configuració de xarxes socials. Gestió d'identitats virtuals.", es: "Aplicación de criterios de seguridad y de protección de datos. Identidad, reputación, privacidad y huella digital. Medidas preventivas. Configuración de redes sociales. Gestión de identidades virtuales." },
          { id: "D3", ca: "Aplicació de criteris de seguretat en la salut física i mental. Riscos, amenaces al benestar personal. Opcions de resposta. Situacions de violència i de risc a la xarxa.", es: "Aplicación de criterios de seguridad en la salud física y mental. Riesgos y amenazas al bienestar personal. Opciones de respuesta. Situaciones de violencia y de riesgo en la red." }
        ]
      },
      {
        id: "E", title: { ca: "Ciutadania digital crítica", es: "Ciudadanía digital crítica" },
        items: [
          { id: "E1", ca: "Caracterització de la interactivitat a la xarxa: llibertat d'expressió, propietat intel·lectual i llicències d'ús.", es: "Caracterización de la interactividad en la red: libertad de expresión, propiedad intelectual y licencias de uso." },
          { id: "E2", ca: "Ús crític de la xarxa, eines per detectar notícies falses i fraus.", es: "Uso crítico de la red, herramientas para detectar noticias falsas y fraudes." },
          { id: "E3", ca: "Gestió d'operacions administratives: serveis públics en línia, registres digitals i certificats oficials.", es: "Gestión de operaciones administrativas: servicios públicos en línea, registros digitales y certificados oficiales." },
          { id: "E4", ca: "Fer un ús segur del comerç electrònic: factures digitals, formes de pagament i criptomonedes.", es: "Hacer un uso seguro del comercio electrónico: facturas digitales, formas de pago y criptomonedas." },
          { id: "E5", ca: "Gestió ètica en l'ús de dades i eines digitals: intel·ligència artificial, biaixos algorísmics i ideològics, obsolescència programada i sobirania tecnològica.", es: "Gestión ética en el uso de datos y herramientas digitales: inteligencia artificial, sesgos algorítmicos e ideológicos, obsolescencia programada y soberanía tecnológica." },
          { id: "E6", ca: "Aplicació proactiva de la responsabilitat social: plataformes d'iniciativa ciutadana, voluntariat i comunitats de maquinari i programari lliures.", es: "Aplicación proactiva de la responsabilidad social: plataformas de iniciativa ciudadana, voluntariado y comunidades de hardware y software libres." },
          { id: "E7", ca: "Anàlisi de l'impacte de les tecnologies digitals en la societat i els canvis socials i econòmics que se'n deriven.", es: "Análisis del impacto de las tecnologías digitales en la sociedad y de los cambios sociales y económicos que se derivan." },
          { id: "E8", ca: "Comprendre la cultura digital com a font d'aprenentatge permanent, coneixement de les tecnologies digitals emergents i els seus àmbits d'aplicació.", es: "Comprender la cultura digital como fuente de aprendizaje permanente, conocimiento de las tecnologías digitales emergentes y sus ámbitos de aplicación." }
        ]
      }
    ]
  }
};

// Vectors del currículum (Decret 175/2022)
export const VECTORS = [
  { id: "competencial", ca: "Aprenentatge competencial", es: "Aprendizaje competencial" },
  { id: "genere", ca: "Perspectiva de gènere", es: "Perspectiva de género" },
  { id: "universalitat", ca: "Universalitat del currículum", es: "Universalidad del currículo" },
  { id: "llengua", ca: "Qualitat de l'educació de la llengua", es: "Calidad de la educación de la lengua" },
  { id: "ciutadania", ca: "Ciutadania democràtica i consciència global", es: "Ciudadanía democrática y conciencia global" },
  { id: "benestar", ca: "Benestar emocional", es: "Bienestar emocional" }
];

// Competències clau del Perfil competencial de sortida
export const COMPETENCIES_CLAU = [
  { id: "CCL", ca: "Competència en comunicació lingüística", es: "Competencia en comunicación lingüística" },
  { id: "CP", ca: "Competència plurilingüe", es: "Competencia plurilingüe" },
  { id: "STEM", ca: "Competència matemàtica i en ciència, tecnologia i enginyeria", es: "Competencia matemática y competencia en ciencia, tecnología e ingeniería" },
  { id: "CD", ca: "Competència digital", es: "Competencia digital" },
  { id: "CPSAA", ca: "Competència personal, social i d'aprendre a aprendre", es: "Competencia personal, social y de aprender a aprender" },
  { id: "CC", ca: "Competència ciutadana", es: "Competencia ciudadana" },
  { id: "CE", ca: "Competència emprenedora", es: "Competencia emprendedora" },
  { id: "CCEC", ca: "Competència en consciència i expressió culturals", es: "Competencia en conciencia y expresión culturales" }
];

export const ODS = {
  3: { ca: "Salut i benestar", es: "Salud y bienestar" },
  4: { ca: "Educació de qualitat", es: "Educación de calidad" },
  5: { ca: "Igualtat de gènere", es: "Igualdad de género" },
  6: { ca: "Aigua neta i sanejament", es: "Agua limpia y saneamiento" },
  7: { ca: "Energia neta i assequible", es: "Energía asequible y no contaminante" },
  9: { ca: "Indústria, innovació i infraestructures", es: "Industria, innovación e infraestructura" },
  10: { ca: "Reducció de les desigualtats", es: "Reducción de las desigualdades" },
  11: { ca: "Ciutats i comunitats sostenibles", es: "Ciudades y comunidades sostenibles" },
  12: { ca: "Producció i consum responsables", es: "Producción y consumo responsables" },
  13: { ca: "Acció climàtica", es: "Acción por el clima" },
  15: { ca: "Vida terrestre", es: "Vida de ecosistemas terrestres" },
  16: { ca: "Pau, justícia i institucions sòlides", es: "Paz, justicia e instituciones sólidas" },
  17: { ca: "Aliança pels objectius", es: "Alianzas para lograr los objetivos" }
};
