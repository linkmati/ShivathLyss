# 👑 Sanctum 12: El Reactor Central de Minos (Inspirada en Ganon's Castle & Hyrule Castle - OoT & TotK)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/07_Sanctum_12_Reactor_Central.md`  
> **Inspiración Directa**: **Ganon's Castle** (*Ocarina of Time*) + **Hyrule Castle** (*Tears of the Kingdom*)  
> **Estética**: **La Torre del Reactor Invertido**, **Las Seis Barreras de Seudo-Espacio** y **El Órgano de los Seis Elementos**  
> **Requisitos**: Reunir los 6 Fragmentos de Tablilla (de las 6 Subdungeons de Zelda)  
> **Boss Final**: *El Juicio de Minos* (Nivel Recomendado 7-8, Grupo de 5 PJs)

---

## 🗺️ Mapa de Flujo de la Mazmorra Final (Ganon's Castle Layout)

```mermaid
graph TD
    S1["Phase 1: La Gran Puerta Hexagonal"] -->|Insertar 6 Fragmentos| S2["Phase 2: Las Seis Barreras Elementales"]
    
    subgraph "LAS SEIS BARRERAS ELEMENTALES (Ganon's Castle Wings)"
        S2 --> B1["Barrera 1: FUEGO (Usar Guantelete de Llama)"]
        S2 --> B2["Barrera 2: AGUA (Usar Flauta del Mar)"]
        S2 --> B3["Barrera 3: AIRE (Usar Capa del Vértice)"]
        S2 --> B4["Barrera 4: TIERRA (Usar Martillo de Basalto)"]
        S2 --> B5["Barrera 5: VIDA (Usar Semilla Botánica)"]
        S2 --> B6["Barrera 6: LUZ (Usar Escudo Prismático)"]
    end

    B1 & B2 & B3 & B4 & B5 & B6 -->|Disipar 6 Barreras| S3["Phase 3: La Escalera del Órgano Resonante"]
    S3 -->|Ascenso a la Cúspide| S4["Phase 4: 💀 Arena de El Juicio de Minos (Ganon Core)"]
    S4 -->|FULL BURST (Xenoblade 2 System)| Win["👑 VICTORIA FINAL SOBRE EL LABERINTO DE MINOS"]
```

---

## 🏛️ Recorrido Verbatim por Fases (DM Walkthrough)

### Phase 1: La Gran Puerta Hexagonal (Acceso)
> *"Una monumental cúpula de basalto sellada por una gran losa hexagonal. En cada uno de sus vértices brilla el zócalo para un Fragmento de Tablilla. Una música de órgano sorda resuena desde las alturas."*
* **Mecánica**: Encajar los **6 Fragmentos de Tablilla** obtenidos al vencer a los 6 Guardianes de Área.
* **Resultado**: La losa desciende con un estampido sordo abriendo el puente hacia el núcleo del castillo.

---

### Phase 2: Las Seis Barreras Elementales (Ganon's Castle Wings)
> *"Un atrio central circular donde seis pasillos conducen a barreras de fuerza de colores primarios que bloquean la escalera central de ascenso."*
1. **Barrera de Fuego (Roja)**: Usar el *Guantelete de Llama* para encender la antorcha maestra y derretir el sello.
2. **Barrera de Agua (Azul)**: Tocar la *Flauta del Mar* a nivel BAJO para drenar la fosa mística y liberar la palanca.
3. **Barrera de Aire (Verde Clarita)**: Desplegar la *Capa del Vértice* en la turbina ascendente para volar sobre la barrera.
4. **Barrera de Tierra (Marrón/Gris)**: Asestar un impacto de *Martillo de Basalto* en la estaca de ancla para retraer los muros.
5. **Barrera de Vida (Verde Esmeralda)**: Plantar la *Semilla Botánica* en la arcilla para tejer una pasarela que esquive las espinas.
6. **Barrera de Luz (Dorada)**: Reflejar el haz solar con el *Escudo Prismático* sobre el ojo de cuarzo central.

---

### Phase 3: La Escalera del Órgano Resonante (Ascenso)
> *"Al disiparse las seis barreras, la escalera central de caracol queda despejada. Conforme ascendéis los peldaños de mármol, la melodía de órgano se vuelve estruendosa hasta alcanzar la puerta del reactor."*

---

### Phase 4: 💀 Arena de El Juicio de Minos (Ganon Core Boss)
> *"Una catedral circular suspendida sobre el vacío electromagnético donde El Juicio de Minos flota ante el órgano del reactor rodeado por seis Orbes Elementales."*

* **Mecánica de Combate (Xenoblade 2 System)**:
  - **Orbes Activos**: Cada orbe (`Fire`, `Water`, `Air`, `Earth`, `Life`, `Light`) otorga al boss +1 AC e inmunidad a su elemento.
  - **Countering de Orbes**:
    - `Fire Orb` se rompe con **WATER** (2 pts de daño).
    - `Water Orb` se rompe con **FIRE** (2 pts de daño).
    - `Air Orb` se rompe con **EARTH** (2 pts de daño).
    - `Earth Orb` se rompe con **AIR** (2 pts de daño).
    - `Life Orb` se rompe con **LIGHT** (2 pts de daño).
    - `Light Orb` se rompe con **LIFE** (2 pts de daño).
  - **⚡ FULL BURST**: Al romper todos los orbes activos, el boss queda **Aturdido 1 Ronda**, pierde sus inmunidades y sufre **Daño Crítico Automático Multiplicado (x2)** de todas las fuentes.

---

## 👑 Recompensa y Cierre de la Incursión
* Victoria total sobre el Sanctum Final de Minos.
* Obtención del **Tesoro Imperial de Alrest** (Reliquias Legendarias, Elixires y Cierre Definitivo de la Misión Repetible).
