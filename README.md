# Generador de situacions d'aprenentatge · ESO

Webapp estàtica (sense backend) per generar esborranys de **situacions d'aprenentatge** per a l'ESO a Catalunya, basada en el currículum oficial del **Decret 175/2022, de 27 de setembre** (DOGC núm. 8762, annex 3).

**Matèries incloses:** Tecnologia i Digitalització (1r-3r), Tecnologia (4t) i Digitalització (4t).
**Idiomes:** català i castellà.

## Què genera

- Context, repte i producte final (19 contextos predefinits o context propi).
- Objectius d'aprenentatge.
- Competències específiques, criteris d'avaluació i sabers literals del decret (editables).
- Competències clau, els sis vectors del currículum i ODS.
- Seqüència d'activitats en 4 fases (inici, desenvolupament, estructuració, aplicació) amb repartiment de sessions.
- Avaluació formativa i formadora: instruments, agents i rúbrica NA/AS/AN/AE.
- Mesures i suports universals (DUA) i addicionals.

El document resultant és editable directament, es pot **desar al navegador (localStorage)**, imprimir/PDF, descarregar en HTML, copiar en Markdown o convertir en un prompt per enriquir-lo amb un assistent d'IA. Les SA desades es poden exportar/importar en JSON.

## Programació de curs, cobertura i recomanacions (sense IA)

- Programacions per matèria i curs: hores setmanals, setmanes per trimestre, recursos del centre i criteris prioritzats.
- SA organitzades per trimestres, amb el recompte de sessions planificades i disponibles.
- Mapa de cobertura de criteris i sabers (matriu SA × criteri) i vista de cicle 1r-3r per a TiD.
- Alertes: criteris i CE sense avaluar, criteris amb una sola evidència, sabers no treballats, excés de sessions, trimestres buits, CE concentrades en un trimestre, vectors absents i SA sobrecarregades.
- Recomanador de contextos que puntua quants buits cobreix cada context i si el centre té els recursos necessaris.
- Revisió de coherència de cada SA (criteris i sessions, DUA, vectors, context i producte).
- Document de programació imprimible o en HTML.

## IA opcional amb clau pròpia (BYOK)

Amb una clau de l'API de Claude (botó ✨ IA), el navegador crida directament l'API amb l'SDK oficial `@anthropic-ai/sdk` carregat des de jsDelivr i fa servir sortides estructurades (JSON Schema). Permet:

- generar descriptors de rúbrica específics;
- concretar les activitats de cada fase;
- revisar una SA o la programació;
- proposar una SA nova que cobreixi els criteris i sabers pendents (els identificadors es validen contra el currículum).

La clau només es desa al `localStorage` del navegador. Model per defecte: Claude Opus 5.5 (es pot canviar a Sonnet 5.5 o Haiku 5.5).

## Executar en local

```bash
python -m http.server 8000
```

i obrir http://localhost:8000. (Cal servidor perquè fa servir mòduls ES.)

## Estructura

- `js/curriculum.js` — competències, criteris i sabers (text oficial en català; castellà = traducció de treball).
- `js/themes.js` — contextos predefinits per matèria.
- `js/i18n.js` — textos d'interfície i plantilles.
- `js/generator.js` — construcció del document.
- `js/app.js` — interfície i emmagatzematge.

## Avís

El resultat és un punt de partida: cal revisar-lo i adaptar-lo al grup. Consulteu sempre el text oficial al DOGC.
