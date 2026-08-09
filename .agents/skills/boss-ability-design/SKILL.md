---
name: boss-ability-design
description: Guidelines for designing complex, phased, and modular boss abilities with abstract trait categories and action syntax.
---

# Marco de Referencia Metodológico para Diseño de Jefes (Boss Design Framework)

Este documento define la estructura lógica, taxonómica y descriptiva para la creación de encuentros y habilidades de jefes de alta complejidad. Utiliza este marco genérico para estructurar habilidades cuando sea necesario diseñar un nuevo oponente.

---

## 1. Taxonomía de Rasgos del Sistema (Core Trait Categories)
En lugar de depender de rasgos fijos, cada jefe debe configurarse seleccionando y combinando componentes de las siguientes categorías funcionales:

* **Categoría de Letalidad y Remate:** Define las reglas especiales para interactuar con personajes con salud crítica o inconscientes, así como las restricciones aplicadas a sus tiradas de salvación de muerte o habilidades de supervivencia pasivas.
* **Categoría de Adaptabilidad y Progresión:** Regula cómo el jefe reacciona de forma dinámica a los eventos del combate, modificando sus estadísticas base, adquiriendo o perdiendo rasgos a lo largo de la batalla.
* **Categoría de Sinergia y Combo:** Define la interconexión entre habilidades individuales, donde la aplicación de un estado o el uso de una acción previa potencia o habilita ataques subsiguientes.
* **Categoría de Mitigación y Defensa:** Gestiona la supervivencia del jefe mediante la regeneración de salud, la reducción o eliminación de condiciones perjudiciales (afflictions), el incremento de la clase de armadura (AC) o la absorción de daño.
* **Categoría de Control y Denegación:** Controla la movilidad y la economía de acciones de los personajes en el campo de batalla, afectando su posicionamiento o forzando la pérdida de turnos.
* **Categoría de Efectos Garantizados (Efectos Ineludibles):** Regula las acciones ofensivas o defensivas que omiten las tiradas tradicionales de ataque o salvación, garantizando un resultado o daño fijo.

---

## 2. Estructura de Redacción de Acciones (Action Syntax Template)
La descripción de cualquier habilidad debe seguir un formato estandarizado para garantizar claridad matemática y facilidad de uso:

`[Nombre de la Habilidad] ([Tipo de Acción/Gatillo], [Restricciones/Recarga]). [Efecto Mecánico]`

### Clasificación de Acciones y Tiempos:
* **Acciones Activas del Turno:** Acciones principales y secundarias ejecutadas durante el turno del jefe.
* **Acciones Reactivas:** Habilidades ejecutadas fuera del turno del jefe en respuesta a un desencadenante específico de un personaje o el entorno.
* **Acciones Pasivas:** Efectos constantes que no consumen la economía de acciones del turno del jefe.
* **Acciones de Hito Temporal:** Eventos y efectos obligatorios que ocurren al inicio o al final de turnos o rondas específicas.
* **Modificadores Globales del Encuentro:** Reglas pasivas que alteran el comportamiento del sistema de juego general mientras el jefe esté activo.

*Nota: Todos los tipos de daño, valores de dificultad de salvación (DC), y nombres de estados alterados del sistema deben resaltarse en negrita.*

---

## 3. Escalado y Modularidad de Habilidades
El nivel de poder del jefe debe fluctuar o desarrollarse mediante dos patrones de diseño estructural:

### A. Escalado de Recursos Acumulativos
* **Condición de Incremento:** Acción o evento específico del combate que genera cargas de un recurso temático para el jefe.
* **Bonificación Lineal:** Modificador estático que escala con cada unidad del recurso (ej. daño, precisión, alcance).
* **Hitos de Umbral:** Desbloqueo de habilidades de alta potencia o estados alterados al alcanzar cantidades específicas del recurso.
* **Mecánica de Mitigación del Jugador:** Una contra-estrategia explícita que los personajes pueden usar para reducir el recurso del jefe. Si el recurso llega a cero, el subsistema de habilidades asociado se deshabilita.

### B. Modularidad por Componentes Activos
* El jefe posee componentes interactivos que determinan sus rasgos, inmunidades o magias.
* **Mecánica de Sabotaje (Desarme):** Reglas para que los personajes intenten inutilizar o retirar estos componentes mediante tiradas enfrentadas.
* **Penalización por Pérdida:** Consecuencias inmediatas para el jefe tras perder el componente (daño directo, pérdida de habilidades) y el tiempo necesario antes de poder recuperarlo.

---

## 4. Estructura de Transición de Fase
Los jefes de fases múltiples deben transicionar bajo un concepto de desarrollo de mecánicas:

* **Fase de Apertura (Interactiva):** El jefe depende de componentes saboteables, recursos fluctuantes y mecánicas contrarrestables por los jugadores.
* **Fase Final (Consolidada):**
  * Los componentes y recursos se vuelven intrínsecos al jefe.
  * Se eliminan las mecánicas que permitían a los jugadores sabotear o desarmar sus habilidades.
  * El repertorio del jefe se simplifica en pasivas de alta letalidad constante y se añade reactividad directa al recibir daño.
