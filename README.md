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
