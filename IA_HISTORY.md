# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Alex Elian Sanchez -->
**Fecha:** <!--23/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
<!-- Actuá como si fuera un programador web experto ayudandome a resolver las siguientes consignas del archivo adjunto:
-Reemplazar todos los <div> y <span> estructurales por etiquetas semánticas: <header>, <nav>, <main>, <section>, <article>, <footer>, etc.
-Agregar alt descriptivo a todas las imágenes.
-Asociar cada campo del formulario con su <label> correspondiente (usando for e id).
-Reemplazar los falsos botones (<div class="btn">) por elementos <button>.
-Corregir la paleta de colores para cumplir WCAG AA (contraste mínimo 4.5:1 para texto normal).
-Agregar lang="es" al <html> y <meta name="viewport"> en el <head>. -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  Este prompt lo utilice al momento de modificar las etiquetas HTML tales como <div> por etiquetas semánticas con roles más especificos.
  La IA se enfocó explicitamente en cambiar las etiquetas dejando de lado aspectos como la identación, lo cuál por si mismo no es un problema pero dificulta la lectura.
  El resultado más allá de lo anterior mencionado fue lo que esperaba, hay ciertos apartados como tomarse la libertad de separar los archivos HTMl y CSS que la IA dió como cierto (Gemini 3).
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
   Tuve que modificar la etiqueta <style> ya que habia sido eliminada y reemplazada por un link a un archivo externo, este error lo leí directamente desde el codigo mientras revisaba que todo este en orden. Este error es más una alucinacion por parte de la IA, ya que no fui específico al decirle que mantenga el resto del codigo como estaba en ese momento.
   Tambien hubo errores de identado, lo cuál confundia la jerarquia de etiquetas a la hora de leer el codigo.
   Para esto fui organizando la jerarquia de izquierda a derecha manualmente (las de mayor importancia a la izquierda y las hijas identadas debajo)
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
<!-- Actúa como si fueras un programador web experto y ajustá los siguientes cambios en el archivo adjunto:
-Definir layout macro con grid-template-areas para header, main y footer.
-Usar display: flex para la barra de navegación y las etiquetas de habilidades (.tags).
-Eliminar los estilos inline y el bloque <style> del HTML. -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  La IA se enfoco no solo en modificar mi archivo index.html sino que se encargó de modificar dentro de un nuevo archivo toda la lógica dentro de la etiqueta <style>
  El resultado fue el que esperaba pero hubo un detalle que pasó por alto y tuve que modificar luego.
  Como punto de partida facilitó bastante revisar manualmente como se vería la página en cada fase de implementación de grillas y flex
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.

  El error concreto que tuve fue que al modificar el archivo index.html el cuál vi probando en live server, el link fue renombrado como style.css así como el archivo del mismo nombre, el problema radicaba en que mi archivo estaba nombrado como styles.css , lo cuál generó que no se puedan enlazar ambos archivos.
  Este error fue un error humano de mi parte más que del lado de la IA, para corregirlo tuve que modificar el archivo y hacer un commit que explique dicho cambio en el mismo.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
  La IA repitio errores específicos los cuáles derivaron de falta de detalles así como darle una base sólida sobre la cuál trabajar, a pesar de esto la IA cumplió con lo solicitado casi sin modificaciones de manera manual, pero me dejó la enseñanza de que para la proxima vez que requiera hacer algun trabajo debo detallar cada parte que quiero y que no quiero modificar de un archivo por ejemplo o una seccion de código
-->
```
