# Guía de Diseño y Estructura de Jefes (Boss Design Framework)

Esta guía define el estándar para la creación, redacción y estructuración de mecánicas para encuentros de jefes legendarios y de alta complejidad en la campaña de Shivath.

---

## 1. Categorías de Rasgos Base (Core Trait Categories)
Cada jefe se define seleccionando y combinando componentes de las siguientes categorías funcionales, evitando rasgos estáticos de bajo impacto:

* **Letalidad y Remate:** Reglas sobre cómo el jefe interactúa con personajes inconscientes o moribundos (ej. ejecución opcional, anulación de ventajas en salvaciones de muerte).
* **Adaptabilidad y Progresión:** Reglas para la modificación en tiempo real de estadísticas, resistencias o adquisición de nuevos estados/rasgos según avanza el combate.
* **Sinergias y Combos:** Conectores mecánicos donde el efecto de una habilidad previa habilita o potencia ataques subsiguientes.
* **Mitigación y Defensa:** Métodos de supervivencia del jefe mediante la regeneración de salud, eliminación de estados alterados (afflictions), aumento temporal de AC o reducción plana de daño.
* **Control y Denegación:** Habilidades de control de masas pesado que limitan el posicionamiento, la movilidad o la economía de acciones del grupo de aventureros.
* **Efectos Garantizados (Ineludibles):** Acciones que omiten las tiradas tradicionales de ataque o salvación para infligir daño o efectos fijos garantizados.

---

## 2. Plantilla de Redacción de Habilidades (Action Syntax)
Toda habilidad del jefe debe ser descrita utilizando la siguiente nomenclatura estandarizada:

`[Nombre de la Habilidad] ([Tipo de Acción/Gatillo], [Restricciones/Recarga]). [Efecto Mecánico]`

### Clasificación de Acciones:
* **`(Action)` / Acción:** Consume la acción principal del jefe en su turno.
* **`(Bonus Action)` / `(BA)`:** Consume la acción secundaria/bonus del jefe en su turno.
* **`(Reaction)` / `(Reaction, Trigger:...)`:** Se ejecuta inmediatamente fuera de su turno en respuesta a un disparador específico.
* **`(Triggered, [Condición])`:** Ocurre automáticamente y sin costo de acción cuando se cumple una condición (ej. al golpear con un ataque).
* **`(Passive)`:** Efectos continuos y constantes que no consumen la economía de acciones.
* **`(Passive, Legendary)`:** Reglas persistentes de encuentro que alteran las dinámicas de juego globales del combate.
* **`([Fase/Hito Temporal])`:** Acciones automáticas ejecutadas en hitos fijos de la ronda (ej. Inicio del turno, Fin de la ronda).

*Nota: Los tipos de daño, valores de salvación (DC) y condiciones aplicadas (ej. **Frightened**, **Slow**, **Burn 1**) deben ser resaltados en negrita.*

---

## 3. Escalado y Modularidad de Encuentro
El flujo del combate debe ser dinámico, permitiendo a los jugadores interactuar y mitigar las habilidades del jefe mediante dos estructuras:

### A. Escalado por Acumulación de Cargas (Pecados/Sinergias)
* **Gatillo de Carga:** Qué acción o evento incrementa los puntos de un recurso temático del jefe.
* **Efecto de Escalado Lineal:** Bonificaciones menores que se añaden por cada unidad del recurso (ej. daño, precisión, alcance).
* **Hito de Umbral:** Habilidades masivas o estados alterados que se desbloquean al alcanzar un límite del recurso (generalmente 5, 10 o 20).
* **Mecánica de Sellado (Virtud):** Una acción o condición específica que los jugadores pueden realizar para reducir este recurso. Si el recurso llega a cero, la habilidad o iniciativa del jefe asociada se desactiva permanentemente.

### B. Modularidad por Componentes Activos (Cadenas/Objetos)
* El jefe posee componentes externos interactivos que albergan sus rasgos, resistencias o magias.
* **Mecánica de Desarme (Severing):** Reglas para que los personajes dediquen su acción a retirar o desactivar un componente mediante tiradas enfrentadas (ej. Atletismo o Arcana).
* **Penalización por Pérdida:** Consecuencias inmediatas para el jefe tras perder el componente (daño directo, pérdida de la pasiva correspondiente) y el cooldown necesario antes de que pueda reconectarlo.

---

## 4. Diseño de Transiciones de Fase
Los jefes con múltiples fases deben experimentar una transformación mecánica y de comportamiento:

* **Fase 1: Interactiva e Inestable:** El jefe depende de componentes saboteables o recursos fluctuantes. Los jugadores pueden influir activamente desactivando sus herramientas.
* **Fase 2: Consolidación y Letalidad Continua:**
  * Los recursos externos se vuelven intrínsecos al cuerpo/estado del jefe.
  * Se elimina la interactividad (ya no se pueden desactivar o desarmar sus habilidades).
  * Las lógicas condicionales complejas de la Fase 1 se consolidan en pasivas estáticas más letales y directas.
  * Se incrementa la reactividad del jefe (acciones legendarias añadidas, daño reactivo garantizado al recibir ataques).
