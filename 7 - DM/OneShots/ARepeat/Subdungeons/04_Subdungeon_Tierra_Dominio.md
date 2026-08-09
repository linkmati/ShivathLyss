# 🪨 Subdungeon 4: El Dominio Telúrico (Layout Complejo y No-Lineal estilo Snowhead Temple)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/04_Subdungeon_Tierra_Dominio.md`  
> **Inspiración Verbatim**: **Snowhead Temple** (*Majora's Mask* - Edición Basalto 100% Roca)  
> **Estructura de Layout**: **Torre Cilíndrica de 4 Pisos (Hub Central)** + **Ala Catacumbas (Piso 1)** + **Ala Armería (Piso 2)** + **Colapso Sísmico Vertical por Impactos de Martillo**  
> **Dungeon Item**: *Martillo de Basalto* (Gran Megaton Hammer Telúrico)  
> **Guardián de Área**: *El Titán de Basalto* (Inspirado en *Goht / Scaldera*)  
> **Recompensa**: 🔓 Desbloqueo Permanente del Dominio Telúrico + Fragmento de Tablilla #4

---

## 🗺️ Mapa de Flujo No-Lineal de la Mazmorra (Snowhead Central Pillar Non-Linear Layout)

```mermaid
graph TD
    S1["Room 1: Pozo del Pilar Central (Hub 4 Pisos - Nivel 1)"] -->|Explorar Catacumbas Este| S2["Room 2: Ala Catacumbas de Basalto Agrietado"]
    S2 -->|Limpiar Escombros| S2_Key["🗝️ Cofre: Llave Pequeña #1"]
    S2_Key -->|Backtrack al Hub| S1
    
    S1 -->|Usar Llave #1 en Puerta Oeste 🗝️1| S3["Room 3: Ala Armería (Piso 2)"]
    S3 -->|Pasaje Libre| S4["Room 4: ⚔️ Cámara del Armos de la Cumbre (Mini-Boss)"]
    S4 -->|🎁 COFRE MAESTRO| Item["🎁 ITEM: Martillo de Basalto"]
    
    Item -->|Backtrack a la Base del Hub (Piso 1)| S5["Room 5: Primer Smash al Pilar Central (Piso 1)"]
    S5 -->|Destruir Anillo #1 del Pilar: Pilar Cae 10 ft| S5_Align["🔓 Alineamiento: Conecta Piso 2 con Piso 3"]
    S5_Align --> S6["Room 6: Segundo Smash al Pilar (Piso 3) & Bloques Peg"]
    S6 -->|Destruir Anillo #2 del Pilar: Pilar Cae 10 ft| BossKey["👑 COFRE: Llave del Boss (en Cúspide del Pilar)"]
    
    BossKey -->|Ascender Escalera Perimetral al Piso 4| S7["Room 7: 🔒 El Portón de la Cumbre Tectónica"]
    S7 --> S8["Room 8: 💀 Arena de Goht / El Titán de Basalto"]
    S8 -->|Vencer Guardián| Win["🔓 SUBDUNGEON COMPLETADA & FRAGMENTO #4"]
```

---

## 🏛️ Recorrido Verbatim Sala por Sala (DM Walkthrough & Tower Collapses)

### Room 1: Pozo del Pilar Central (Hub 4 Pisos - Nivel 1)
> *"Una monumental torre cilíndrica de cuatro pisos dominada por un Pilar Central de Basalto. Pasarelas de piedra giran alrededor del pilar a distintas alturas, pero la pasarela del Piso 3 está inalcanzable. En el Piso 1 destacan las Catacumbas (Este), la Armería (Oeste - Locked 🗝️1) y la Cumbre (Piso 4 - Locked 🔒)."*
* **Estructura Hub**: Conecta todos los pisos verticalmente mediante el Pilar Central.

---

### Room 2: 🧩 Ala Catacumbas de Basalto Agrietado (Piso 1)
> *"Un pasadizo donde temblores desprenden escombros de basalto sobre las tumbas."*
* **Puzle Involucrado**: Mover rocas de fallas (*Fuerza DC 11*) y derrotar a 3x Escarabajos Telúricos.
* **Botín**: Oblicuo en el nicho descansa la **Llave Pequeña 🗝️1**.
* **🔄 BACKTRACKING**: Regresar al **Hub (Room 1)** e insertar la Llave 🗝️1 en la Armería Oeste.

---

### Room 3: Ala Armería (Piso 2)
> *"Una galería de armaduras de basalto que conduce a la sala del guardián."*

---

### Room 4: ⚔️ Cámara del Mini-Boss: Armos de la Cumbre (MM)
> *"Un colosal autómata de granito armado con mazo masivo."*
* **🎁 COFRE MAESTRO**: Otorga el **Martillo de Basalto** (Gran Megaton Hammer capaz de pulverizar anillos del Pilar Central).
* **🔄 BACKTRACKING & PRIMER IMPACTO**: El grupo regresa a la base del **Hub (Room 1)** para golpear la grieta del primer anillo del Pilar Central.

---

### Room 5: 🧩 Base del Pilar Central: Primer Smash (Snowhead MM)
> *"Asestar un golpe de masa completa con el Martillo de Basalto (*Fuerza DC 13*) sobre el anillo inferior del pilar."*
* **Resultado**: ¡El primer anillo de 10 pies del pilar se pulveriza en pedazos y todo el Pilar Central desciende 10 pies! Esto conecta por primera vez la pasarela del Piso 2 con el balcón del Piso 3 (Room 6).

---

### Room 6: 🧩 Balcón del Piso 3: Segundo Smash & Bloques Peg (Snowhead MM - Llave del Boss 👑)
> *"Al ascender al Piso 3, el grupo alcanza el segundo anillo del pilar y encuentra dos bloques Peg (rojo y azul) que bloquean la corona."*
* **Puzle Involucrado**:
  1. Asestar un segundo golpe de martillo sobre el pilar (desciende otros 10 ft).
  2. Golpear el bloque Peg rojo para hundirlo, elevando el bloque Peg azul y despejando la pasarela sobre la cabeza del pilar.
* **Botín**: Caminar sobre la cúspide del pilar para abrir el cofre dorado con la **Llave del Boss 👑 (Llave de Goht)**.

---

### Room 7: 🔒 Portón de la Cumbre Tectónica (Piso 4)
> *"Ascender por la escalera perimetral al Piso 4 e insertar la Llave del Boss 👑."*

---

### Room 8: 💀 Boss Final: Goht / El Titán de Basalto (Snowhead MM)
> *"Pista circular de basalto donde Goht rueda a gran velocidad."*
* **Mecánica Boss**: Golpe de martillo en sus patas durante la embestida para hacerlo tropezar.
* **Recompensa**: 🔓 Desbloqueo permanente del Dominio Telúrico + **Fragmento de Tablilla #4**.
