# 🪨 Subdungeon 4: El Dominio Telúrico (Mazmorra Zelda estilo Snowhead Temple)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/04_Subdungeon_Tierra_Dominio.md`  
> **Inspiración Verbatim**: **Snowhead Temple** (*Majora's Mask* - Edición Basalto)  
> **Regla de Diseño DM**: **CERO BLOQUEOS POR TIRADA OBLIGATORIA (No Skill-Check Gates)**. La progresión es 100% interactiva, mecánica y espacial. Las tiradas de dados son opcionales (evitar daño, ir más rápido o hallar secretos), pero el avance obligatorio NUNCA requiere fallar/pasar un dado.  
> **Estructura de Layout**: **Hub Central de 3 Pisos** + **Mecánica de Impacto al Eje Central (Snowhead Cylinder Smash)** + **Circuito de Vagoneras & Tobogán de Retorno** + **Backtracking con Dungeon Item**  
> **Dungeon Item**: *Martillo de Basalto* (Gran Megaton Hammer Telúrico)  
> **Guardián de Área**: *El Titán de Basalto* (Inspirado en *Goht / Scaldera*)  
> **Recompensa**: 🔓 Desbloqueo Permanente del Dominio Telúrico + Fragmento de Tablilla #4

---

## 🗺️ Mapa de Flujo No-Lineal de la Mazmorra (Snowhead Complex Layout)

```mermaid
graph TD
    classDef hub fill:#1e293b,stroke:#3b82f6,stroke-width:3px,color:#f8fafc;
    classDef branch fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#a7f3d0;
    classDef item fill:#831843,stroke:#f472b6,stroke-width:3px,color:#fce7f3;
    classDef key fill:#78350f,stroke:#fbbf24,stroke-width:3px,color:#fef3c7;
    classDef boss fill:#7f1d1d,stroke:#f87171,stroke-width:3px,color:#fee2e2;

    S1["Room 1: Base del Pilar (Hub 1F)<br/><i>(Pilar de 30 ft & Balcones Desalineados)</i>"]:::hub
    S2["Room 2: Celdas de Basalto (Este)<br/><b>[Limpiar Escombros]</b>"]:::branch
    S3["Room 3: Mina de Vagoneras (Oeste)<br/><b>[Descarrilar Vagonera]</b>"]:::branch
    S4["Room 4: Foso Tectónico (Subterráneo B1)<br/><i>(Túnel Secreto de Cripta)</i>"]:::branch
    S5["Room 5: Armería Norte (Piso 2)<br/><b>🎁 ITEM: MARTILLO DE BASALTO</b>"]:::item
    S6["Room 6: Primer Impacto al Pilar (Hub 1F)<br/><i>(Anillo Rojo Destruido: Pilar baja 10ft)</i>"]:::hub
    S7["Room 7: Cañón Rodante (Piso 2 Este)<br/><b>[Tobogán Atajo & Llave 🗝️2]</b>"]:::branch
    S8["Room 8: Bloques Peg (Piso 2 Oeste)<br/><b>[Invertir Pegs Rojo/Azul]</b>"]:::branch
    S9["Room 9: Segundo Impacto al Pilar (Hub 2F)<br/><b>👑 COFRE LLAVE DEL BOSS</b>"]:::key
    S10["Room 10: Portón Cumbre (Piso 3)"]:::key
    S11["Room 11: Arena de Goht 💀<br/><b>[Titán de Basalto / Tablilla #4]</b>"]:::boss

    S1 -->|Explorar Ala Este| S2
    S2 -->|🗝️ Llave Pequeña 1| S1
    S2 -.->|Grieta Secreta| S4
    S1 -->|Puerta Oeste Locked 🗝️1| S3 --> S5
    S5 -->|Backtrack a 1F con Martillo| S6
    S6 -->|Alineamiento 2F Este| S7
    S7 -->|🗝️ Llave Pequeña 2| S8
    S6 -->|Alineamiento 2F Oeste (Locked 🗝️2)| S8
    S7 -.->|Tobogán de Retorno| S1
    S8 -->|Pasarela Peg a la Cúspide| S9
    S9 -->|Smash Anillo Azul & Llave 👑| S10 --> S11
```

---

## 📊 Tabla Resumen de Progreso (Paso a Paso)

| Paso | Ubicación | Tipo | Objetivo y Acción Clave | Resultado |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Room 2 (Celdas Este)** | 🟢 Exploración | Desplazar losa de falla de 300 lbs y vencer escarabajos | Obtenida **Llave Pequeña 🗝️1** |
| **2** | **Room 3 (Mina Oeste)** | 🧩 Puzle | Usar 🗝️1, girar aguja de vía y descarrilar vagonera | Muro colapsa y abre paso a Piso 2 Norte |
| **3** | **Room 5 (Armería Norte)** | ⚔️ Mini-Boss | Enfrentar al autómata *Armos de la Cumbre* | 🎁 Obtención del **Martillo de Basalto** |
| **4** | **Room 6 (Hub 1F)** | 🔨 Puzle Pilar | Asestar golpe de masa con el Martillo al Anillo Rojo | El pilar baja 10ft y alinea pasarelas de 2F |
| **5** | **Room 7 (Cañón 2F Este)** | 🟢 Puzle & Atajo | Golpear biela para soltar esfera de 500 lbs | Abre **Tobogán Atajo 1F** y da **Llave 🗝️2** |
| **6** | **Room 8 (Bloques Peg 2F)** | 🧩 Puzle | Usar 🗝️2 e invertir bloques Peg Rojo/Azul con Martillo | Eleva pasarela a la cúspide del pilar |
| **7** | **Room 9 (Hub 2F)** | 👑 Clave Boss | Golpe final al Anillo Azul en la corona del pilar | 👑 Obtenida **Llave del Boss (Goht)** |
| **8** | **Room 11 (Arena Final)** | 💀 Boss Final | Ascender por la pasarela Peg e ingresar al Portón 3F | 🔓 Subdungeon 4 + Fragmento #4 |

---

## 🏛️ Recorrido Verbatim Sala por Sala (DM Walkthrough & Spatial Mechanics)

### Room 1: Base del Pilar Central (Hub Central - 3 Pisos)
> *"Un monumental cilindro tectónico de tres niveles. En el eje vertical se alza un Pilar Central de Basalto de 30 pies compuesto por dos Anillos Rúnicos (Anillo Rojo en 1F y Anillo Azul en 2F). Las pasarelas de piedra de los pisos 2 y 3 están desalineadas. En el Piso 1 destacan tres accesos: Catacumbas (Este), Mina de Vagoneras (Oeste - Locked 🗝️1) y el Portón de la Cumbre en el Piso 3 (Locked 🔒)."*
* **Mecánica Central**: Progresión conectada al desplazamiento vertical del Pilar Central mediante el *Martillo de Basalto*.

---

### Room 2: 🧩 Ala Este (Piso 1): Catacumbas de Basalto (OoT / MM)
> *"Una galería subterránea donde temblores desprenden losas sobre sarcófagos antiguos."*
* **Puzle Mecánico Sin Gating**:
  1. Desplazar la losa de falla de 300 lbs (*Fuerza DC 11 opcional para despejar de un solo empuje, o 1 minuto de palanca manual*) para despejar el acceso.
  2. Derrotar a 3x Escarabajos Telúricos.
* **Botín**: Cofre con la **Llave Pequeña 🗝️1**.
* **🔄 CONEXIÓN SECRETA**: Un túnel agrietado en el fondo conecta directamente con el **Foso Tectónico (Room 4)** en el subsuelo.

---

### Room 3: 🧩 Ala Oeste (Piso 1): Mina de Rieles y Vagoneras (TP / MM)
> *"Un complejo de rieles suspendidos donde una vagonera de granito está encallada en el trinquete principal."*
* **Puzle Mecánico Sin Gating**:
  1. Usar la **Llave Pequeña 🗝️1** para abrir el cerrojo de la esclusa.
  2. Girar la aguja del cambio de vía manualmente.
  3. Soltar el trinquete de freno. La vagonera ruede por la pendiente y descarrila contra el muro de contención, colapsando la pared y revelando el pasaje elevado hacia el Piso 2 Norte.

---

### Room 4: 🧩 Foso Tectónico Subterráneo (Piso B1 - Pasaje Secreto)
> *"Una caverna abisal bajo las catacumbas alimentada por vapor magmático."*
* **Mecánica**: Funciona como ruta de escape rápida si se cae de los balcones altos y contiene un cofre secundario con suministros de curación.

---

### Room 5: ⚔️ Armería Norte (Piso 2 Norte): Mini-Boss Armos (MM)
> *"Una sala abovedada en el Piso 2 donde un autómata gigante de granito de 12 pies despierta al pisar el altar."*
* **Combate**: Armos de la Cumbre (AC 16, 52 HP). Golpear la gema rúnica de su espalda cuando gira.
* **🎁 COFRE MAESTRO**: Otorga el **Martillo de Basalto** (Gran Megaton Hammer capaz de pulverizar anillos de basalto, remaches tectónicos y bloques Peg).
* **🔄 BACKTRACKING & PRIMER IMPACTO**: Con el *Martillo de Basalto*, regresar a la base del **Hub (Room 1)**.

---

### Room 6: 🧩 Hub (Piso 1): Primer Smash al Pilar Central (Snowhead MM)
> *"Posicionarse ante el Anillo de Basalto Rojo en la base del Pilar Central con el martillo."*
* **Puzle Mecánico Sin Gating**: Asestar un golpe de carga completa con el *Martillo de Basalto* sobre el remache del Anillo Rojo.
* **Resultado**: ¡El Anillo Rojo de 10 pies sale despedido por los aires y se pulveriza! El Pilar Central desciende 10 pies. Esto alinea la pasarela del Piso 2 directamente con las entradas del **Piso 2 Este (Room 7)** y **Piso 2 Oeste (Room 8)**.

---

### Room 7: 🧩 Piso 2 Este: Cañón del Rodillo de 500 lbs (Scaldera SS / MM)
> *"Un corredor inclinado por donde una esfera de basalto de 500 lbs descansa atrapada en una biela tectónica."*
* **Puzle Mecánico Sin Gating**: Golpear la biela con el *Martillo de Basalto*. La esfera rueda destruyendo la mampostería inferior y creando un **Tobogán Atajo Permanente** directo al Piso 1 del Hub.
* **Botín**: Cofre revelado tras el derrumbe con la **Llave Pequeña 🗝️2**.

---

### Room 8: 🧩 Piso 2 Oeste: Sala de Bloques Peg Reversibles (Snowhead MM)
> *"Una estancia con una matriz de bloques Peg intercambiables (Rojo elevado / Azul hundido)."*
* **Puzle Mecánico Sin Gating**:
  1. Usar la **Llave Pequeña 🗝️2** en el portón del pasaje.
  2. Golpear el bloque Peg rojo con el *Martillo de Basalto* para hundirlo. Esto eleva el bloque Peg azul, formando una pasarela continua hacia la cúspide del pilar.

---

### Room 9: 🧩 Hub (Piso 2): Segundo Smash & Llave del Boss 👑 (Snowhead MM)
> *"De regreso a la pasarela del Piso 2, el grupo se posiciona ante el Anillo de Basalto Azul del pilar."*
* **Puzle Mecánico**:
  1. Asestar un segundo golpe con el *Martillo de Basalto* en el Anillo Azul del pilar.
  2. El pilar desciende otros 10 ft. La **cúspide plana del pilar** se nivela exactamente con la pasarela del Piso 2.
* **Botín**: Caminar por encima de la cima del pilar desprendido para abrir el cofre dorado con la **Llave del Boss 👑 (Llave de Goht)**.

---

### Room 10: 🔒 Portón de la Cumbre Tectónica (Piso 3)
> *"Ascender por la pasarela de Bloques Peg de Room 8 al Piso 3 e insertar la Llave del Boss 👑 en el portón de granito."*

---

### Room 11: 💀 Boss Final: Goht / El Titán de Basalto (Snowhead MM)
> *"Una monumental pista circular de basalto donde Goht embiste a gran velocidad envuelto en chispas y rocas."*
* **Mecánica Boss**: Asestar martillazos mecánicos en las articulaciones de sus patas durante sus embestidas para hacerlo tropezar y rematar su vientre.
* **Recompensa**: 🔓 Desbloqueo permanente del Dominio Telúrico + **Fragmento de Tablilla #4**.

