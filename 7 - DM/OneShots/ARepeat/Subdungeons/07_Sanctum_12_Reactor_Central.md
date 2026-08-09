# 👑 Sanctum 12: El Reactor Central de Minos (Verbatim Ganon's Castle - Ocarina of Time & TotK)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/07_Sanctum_12_Reactor_Central.md`  
> **Inspiración Verbatim**: **Ganon's Castle** (*The Legend of Zelda: Ocarina of Time*) + **Hyrule Castle** (*Tears of the Kingdom*)  
> **Puzles Copiados Directos**: **Las Seis Barreras Elementales de Prueba**, **El Ascenso por la Escalera en Espiral del Órgano** y **El Combate de Orbes Elementales con Full Burst**  
> **Requisitos**: Reunir los 6 Fragmentos de Tablilla (de las 6 Subdungeons de Zelda)  
> **Boss Final**: *El Juicio de Minos* (Nivel Recomendado 7-8, Grupo de 5 PJs)

---

## 🗺️ Mapa de Flujo del Sanctum Final (Ganon's Castle Layout)

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

    B1 & B2 & B3 & B4 & B5 & B6 -->|Disipar 6 Barreras| S3["Phase 3: La Escalera en Espiral del Órgano"]
    S3 -->|Ascenso a la Cúspide| S4["Phase 4: 💀 Arena de El Juicio de Minos (Ganon Core)"]
    S4 -->|FULL BURST (Xenoblade 2 System)| Win["👑 VICTORIA FINAL SOBRE EL LABERINTO DE MINOS"]
```

---

## 🏛️ Recorrido Verbatim por Fases con Puzles Involucrados

### Phase 1: La Gran Puerta Hexagonal (Acceso)
> *"Una monumental cúpula de basalto sellada por una losa hexagonal. En cada vértice brilla un zócalo para un Fragmento de Tablilla. Una melodía sorda de órgano resuena desde la cúspide."*
* **Mecánica**: Encajar los **6 Fragmentos de Tablilla** obtenidos al vencer a los 6 Guardianes de Área.
* **Resultado**: La losa desciende con un estampido sordo abriendo el puente hacia el núcleo del castillo.

---

### Phase 2: 🧩 Puzle 1 Verbatim: Las Seis Barreras Elementales de Prueba (Ganon's Castle OoT)
> *"Un atrio central circular donde seis pasillos conducen a barreras de fuerza de colores primarios que bloquean la escalera central de ascenso."*

1. **Barrera de Fuego (Roja - OoT)**: Disparar el *Guantelete de Llama* a los 3 braseros distantes y caminar boca abajo por el techo magnético para pulsar el cristal que disipa la barrera.
2. **Barrera de Agua (Azul - OoT)**: Tocar la *Flauta del Mar* a Nivel BAJO para drenar la fosa mística, bajar al submundo y rescatar la llave que apaga la barrera.
3. **Barrera de Aire (Verde - OoT)**: Desplegar la *Capa del Vértice* en los 3 aros de trampolines celestiales para volar sobre la barrera y acelerar la turbina de paso.
4. **Barrera de Tierra (Gris - OoT)**: Asestar un impacto del *Martillo de Basalto* sobre la base del pilar central para hacer caer la torre 10 ft y aplastar los pasadores de tierra.
5. **Barrera de Vida (Verde Esmeralda - OoT)**: Plantar la *Semilla Botánica* en la fosa arcana para germinar un puente de vides y descender en caída libre por la tela de araña.
6. **Barrera de Luz (Dorada - OoT)**: Interponer el *Escudo Prismático (Mirror Shield)* en el tragaluz para reflejar luz solar directa sobre el ojo de cuarzo de la barrera.

---

### Phase 3: 🧩 Puzle 2 Verbatim: La Escalera en Espiral del Órgano Resonante (Ganon's Castle OoT)
> *"Al disiparse las seis barreras, la gran escalera central en espiral queda desenganchada. Conforme el grupo asciende los 100 peldaños de mármol, la música de órgano se vuelve ensordecedora y pedazos de piedra caen del techo."*
* **Puzle Involucrado**:
  - **Ascenso con Derrumbes**: El grupo debe correr por los peldaños realizando *Checks de Atletismo o Destreza (DC 13)* para esquivar las rocas que caen del techo mientras la torre retumba (1d6 daño contundente si son golpeados).

---

### Phase 4: 💀 Boss Final Verbatim: El Juicio de Minos (Ganon Core OoT / Xenoblade 2 System)
> *"Una catedral circular suspendida sobre el vacío electromagnético donde El Juicio de Minos toca el órgano del reactor rodeado por seis Orbes Elementales flotantes."*

* **Mecánica de Combate (Xenoblade 2 System)**:
  - **Orbes Activos**: Cada orbe (`Fire`, `Water`, `Air`, `Earth`, `Life`, `Light`) otorga al boss +1 AC e inmunidad a su elemento.
  - **Countering de Orbes**:
    - `Fire Orb` se rompe con **WATER** (2 pts de daño).
    - `Water Orb` se rompe con **FIRE** (2 pts de daño).
    - `Air Orb` se rompe con **EARTH** (2 pts de daño).
    - `Earth Orb` se rompe con **AIR** (2 pts de daño).
    - `Life Orb` se rompe con **LIGHT** (2 pts de daño).
    - `Light Orb` se rompe con **LIFE** (2 pts de daño).
  - **⚡ FULL BURST**: Al romper los 6 orbes activos, el boss queda **Aturdido 1 Ronda**, pierde sus inmunidades y sufre **Daño Crítico Automático Multiplicado (x2)** de todas las fuentes.

---

## 👑 Recompensa y Cierre de la Incursión
* Victoria total sobre el Sanctum Final de Minos.
* Obtención del **Tesoro Imperial de Alrest** (Reliquias Legendarias, Elixires y Cierre Definitivo de la Misión Repetible `ARepetible`).
