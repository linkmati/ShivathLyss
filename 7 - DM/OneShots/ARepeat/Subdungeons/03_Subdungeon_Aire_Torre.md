# 🌬️ Subdungeon 3: La Torre de los Vientos (Layout Complejo y No-Lineal estilo City in the Sky)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/03_Subdungeon_Aire_Torre.md`  
> **Inspiración Verbatim**: **City in the Sky** (*Twilight Princess*) + **Stormwind Ark** (*Tears of the Kingdom*)  
> **Estructura de Layout**: **Núcleo de la Ciudadela Flotante (Hub Vertical)** + **Ala Proa (Turbinas Exteriores)** + **Ala Popa (Trampolines Celestes)** + **Activación de Vórtices Eólicos**  
> **Dungeon Item**: *Capa del Vértice* (Planeo Eólico, Impulso de Ráfaga y Sustentación Aérea)  
> **Guardián de Área**: *El Coloso del Vértice* (Inspirado en *Argorok / Colgera*)  
> **Recompensa**: 🔓 Desbloqueo Permanente de la Torre + Fragmento de Tablilla #3

---

## 🗺️ Mapa de Flujo No-Lineal de la Mazmorra (City in the Sky Non-Linear Layout)

```mermaid
graph TD
    S1["Room 1: Atrio del Navío Celestial (Hub Vertical)"] -->|Explorar Ala Proa| S2["Room 2: Ala Proa - Torre de Ventiladores Exteriores"]
    S2 -->|Puzle 1: Calibrar Turbina de Proa| S2_Key["🗝️ Cofre: Llave Pequeña #1"]
    S2_Key -->|Backtrack al Hub| S1
    
    S1 -->|Usar Llave #1 en Escotilla Oeste 🗝️1| S3["Room 3: Ala Oeste - El Puente del Viento Cruzado"]
    S3 -->|Pasaje Libre| S4["Room 4: ⚔️ Cámara del Dragonante de Latón (Mini-Boss)"]
    S4 -->|🎁 COFRE MAESTRO| Item["🎁 ITEM: Capa del Vértice"]
    
    Item -->|Backtrack al Hub Central| S1
    S1 -->|Usar Capa: Atrapar Vórtice Central al Piso 2| S5["Room 5: Ala Popa - Trampolines en Velas Celestiales"]
    S5 -->|Puzle 2: Cadena de 3 Rebotes Celestiales| S6["Room 6: Piso 3 - Cámara del Motor Central"]
    S6 -->|Acelerar Turbinas con Ráfagas| BossKey["👑 COFRE: Llave del Boss"]
    
    BossKey -->|Planeo de Regreso al Hub Central| S1
    S1 -->|Usar Llave del Boss en Cúpula Norte 🔒| S7["Room 7: Antecámara de la Tormenta"]
    S7 --> S8["Room 8: 💀 Arena de Argorok / El Coloso del Vértice"]
    S8 -->|Vencer Guardián| Win["🔓 SUBDUNGEON COMPLETADA & FRAGMENTO #3"]
```

---

## 🏛️ Recorrido Verbatim Sala por Sala (DM Walkthrough & Vertical Navigation)

### Room 1: Atrio del Navío Celestial (Hub Vertical)
> *"Una plaza colosal de piedra eólica blanca que flota sobre un abismo de nubes. En el centro, un gran pozo de turbina desactivado se halla apagado. Tres accesos destacan: la Proa (Este), la Escotilla del Puente (Oeste - Locked 🗝️1) y la Popa elevada en el Piso 2. Al norte, en la cima, la Cúpula de la Tormenta 🔒."*
* **Estructura Hub**: Al principio el vórtice central está apagado. El grupo debe ir a la Proa (Room 2) a buscar la Llave Pequeña #1.

---

### Room 2: 🧩 Ala Proa: Torre de Ventiladores Exteriores (TotK)
> *"Un pasaje al aire libre donde hélices de bronce giran impulsadas por corrientes heladas."*
* **Puzle Involucrado**: Derrotar a 3x Harpías Eólicas y girar el timón eólico (*Fuerza DC 13*) para arrancar la turbina.
* **Botín**: La turbina expulsa una corriente que eleva el cofre con la **Llave Pequeña 🗝️1**.
* **🔄 BACKTRACKING**: Regresar al **Hub (Room 1)** e insertar la Llave 🗝️1 en la Escotilla Oeste.

---

### Room 3: Ala Oeste: El Puente del Viento Cruzado
> *"Una pasarela al vacío barrida por dos ventiladores laterales (*Acrobacias DC 12*)."*

---

### Room 4: ⚔️ Cámara del Mini-Boss: Dragonante de Latón (TP)
> *"Un autómata de latón que proyecta tornados."*
* **🎁 COFRE MAESTRO**: Otorga la **Capa del Vértice** (Permite planeo eólico y atrapar corrientes de aire).
* **🔄 BACKTRACKING & VÓRTICE RECTIFICADO**: Con la *Capa del Vértice*, el grupo regresa al **Hub (Room 1)**. Al desplegar la capa sobre el pozo central, el vórtice ascendente catapulta al grupo al Piso 2 (Ala Popa - Room 5).

---

### Room 5: 🧩 Ala Popa: Trampolines en Velas Celestiales (TotK)
> *"Un pozo vertical de 60 pies con tres velas elásticas horizontalmente."*
* **Puzle Involucrado**: Rebotar en las 3 velas y desplegar la *Capa del Vértice* (*Acrobacias DC 12*) para ascender al Piso 3 (Room 6).

---

### Room 6: Piso 3: Cámara del Motor Central (Llave del Boss 👑)
> *"La sala de máquinas principal con cuatro turbinas secundarias."*
* **Puzle**: Proyectar ráfagas de aire con la capa en las cuatro turbinas.
* **Botín**: Reclamar la **Llave del Boss 👑 (Llave de Argorok)**.
* **🔄 BACKTRACKING**: Planear desde la balconada del Piso 3 directamente a la Cúpula Norte del Hub (Room 1).

---

### Room 7: 🔒 Antecámara de la Tormenta
> *"Insertar la Llave del Boss 👑 para abrir las alas de bronce de la cúpula."*

---

### Room 8: 💀 Boss Final: Argorok / El Coloso del Vértice (TP)
> *"Cúspide de la ciudadela entre tormentas de rayos con 4 torres de pararrayos."*
* **Mecánica Boss**: Engancharse a las torres con la capa, ascender sobre Argorok y picar en caída libre sobre la gema de su espalda.
* **Recompensa**: 🔓 Desbloqueo permanente de la Torre + **Fragmento de Tablilla #3**.
