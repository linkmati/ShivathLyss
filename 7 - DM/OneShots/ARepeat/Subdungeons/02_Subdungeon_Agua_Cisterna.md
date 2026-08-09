# 🌊 Subdungeon 2: La Cisterna Sumergida (Layout Complejo y No-Lineal estilo Ancient Cistern)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/02_Subdungeon_Agua_Cisterna.md`  
> **Inspiración Verbatim**: **Ancient Cistern** (*Skyward Sword*)  
> **Estructura de Layout**: **Gran Palacio del Loto (Hub Central Dual)** + **Ala Este (Conductos Subacuáticos)** + **El Submundo Inferior (Nivel Cursado)** + **Control de Nivel de Agua (ALTO / MEDIO / BAJO)**  
> **Dungeon Item**: *Flauta del Mar* (Controlador del Nivel de Agua & Invocador de Corrientes)  
> **Guardián de Área**: *La Quimera Hidráulica* (Inspirado en *Koloktos*)  
> **Recompensa**: 🔓 Desbloqueo Permanente de la Cisterna + Fragmento de Tablilla #2

---

## 🗺️ Mapa de Flujo No-Lineal de la Mazmorra (Ancient Cistern Non-Linear Layout)

```mermaid
graph TD
    S1["Room 1: La Gran Estatua de Loto (Hub Central)"] -->|Explorar Ala Este| S2["Room 2: Ala Este - Galeria de Nufares"]
    S2 -->|Puzle 1: Inversion de Hojas| S2_Key["Cofre: Llave Pequena 1"]
    S2_Key -->|Backtrack al Hub| S1
    
    S1 -->|Usar Llave 1 en Esclusa| S3["Room 3: Ala Oeste - Esclusa Dorado"]
    S3 -->|Pasaje Libre| S4["Room 4: Camara del Guardian de Laton"]
    S4 -->|COFRE MAESTRO| Item["ITEM: Flauta del Mar"]
    
    Item -->|Backtrack al Hub Central| S1
    S1 -->|Tocar Flauta: Drenar a Nivel BAJO| S5["Room 5: Caida al Submundo Cursado"]
    S5 -->|Puzle 2: Escala del Hilo de Seda| S6["Room 6: El Laberinto de Hilos"]
    S6 -->|Cofre en Altura| BossKey["COFRE: Llave del Boss"]
    
    BossKey -->|Backtrack al Hub: Llenar a Nivel ALTO| S1
    S1 -->|Usar Llave del Boss en Cabeza de Estatua| S7["Room 7: Antecamara del Loto"]
    S7 --> S8["Room 8: Arena de Koloktos"]
    S8 -->|Vencer Guardian| Win["SUBDUNGEON COMPLETADA & FRAGMENTO 2"]
```

---

## 🏛️ Recorrido Verbatim Sala por Sala (DM Walkthrough & Water Level Manipulations)

### Room 1: La Gran Estatua de Loto (Hub Central Dual)
> *"Un palacio subacuático dominado por una estatua dorada de loto de 40 pies. La estatua conecta verticalmente el Palacio Superior (turquesa y brillante) con el Submundo Inferior (oscuro y fangoso). Al inicio, el nivel de agua está en ALTO. La boca de la estatua sostiene un portón con candado de loto 🔒."*
* **Estructura Hub**: Almacena las compuertas a Room 2 (Este), Room 3 (Oeste - Locked 🗝️1), Room 5 (Submundo - accesible solo drenando el agua a Nivel BAJO) y Room 7 (Cabeza de la estatua - accesible solo elevando el agua a Nivel ALTO).

---

### Room 2: 🧩 Ala Este: Galería de las Núfares Flotantes (SS)
> *"Una cámara sumergida con grandes hojas de loto flotando en la superficie."*
* **Puzle Involucrado**: Bucear bajo la hoja principal y realizar un empuje hacia arriba (*Atletismo DC 11*) para voltear la hoja en la superficie, revelando el paso al conducto sumergido.
* **Botín**: Abrir el cofre sumergido para obtener la **Llave Pequeña 🗝️1**.
* **🔄 BACKTRACKING**: Regresar nadando al **Hub Central (Room 1)** e insertar la Llave 🗝️1 en la Esclusa Oeste.

---

### Room 3: Ala Oeste: Esclusa del Canal Dorado
> *"Un pasillo con válvulas mecánicas de loto. Al usar la Llave 🗝️1, la compuerta se despeja."*

---

### Room 4: ⚔️ Cámara del Mini-Boss: Guardián de Latón de Cuatro Brazos (SS)
> *"Un autómata de latón de cuatro brazos armado con cimitarras ceremoniales."*
* **Combate**: Parar sus cimitarras y romper sus articulaciones (*DC 13*).
* **🎁 COFRE MAESTRO**: Entrega la **Flauta del Mar** (Cambia el nivel de agua del templo entre ALTO, MEDIO y BAJO).
* **🔄 BACKTRACKING & CAMBIO DE ESTADO**: El grupo regresa al **Hub Central (Room 1)** y toca la *Flauta del Mar* a **Nivel BAJO**. El agua del palacio se drena estruendosamente, abriendo el gran abismo hacia el Submundo (Room 5).

---

### Room 5: 🧩 Foso Inferior: Caída al Submundo Cursado & Hilo de Seda (SS)
> *"Al vaciarse el agua, los jugadores caen al fango del Submundo entre hordas de Cursed Bokoblins. Un único Hilo de Seda Mística cuelga desde el techo elevado."*
* **Puzle Involucrado**: Derrotar a 4x Engendros Afligidos (resucitan salvo daño de fuego/luz) y escalar el Hilo de Seda (*Atletismo DC 13*) esquivando guadañas giratorias.

---

### Room 6: El Laberinto de Hilos y Turbinas (Llave del Boss 👑)
> *"Una pasarela superior en el Submundo. Tocar la Flauta del Mar para revertir la corriente de la turbina permite cruzar nadando (*Atletismo DC 12*)."*
* **Botín**: Reclamar la **Llave del Boss 👑 (Llave de la Flor de Loto)**.
* **🔄 BACKTRACKING**: Regresar al **Hub Central (Room 1)** y tocar la *Flauta del Mar* a **Nivel ALTO** para llenar la estancia y hacer descender la cabeza de la estatua.

---

### Room 7: 🔒 Antecámara del Corazón del Loto
> *"Nadar hacia la boca de la estatua descompuesta e insertar la Llave del Boss 👑."*

---

### Room 8: 💀 Boss Final: Koloktos / La Quimera Hidráulica (SS)
> *"Una cámara circular dominada por Koloktos: autómata gigante de seis brazos."*
* **Mecánica Boss**: Desmembrar sus brazos, recoger sus cimitarras de 12 ft (*Fuerza DC 14*) y romper la reja de su pecho.
* **Recompensa**: 🔓 Desbloqueo permanente de la Cisterna + **Fragmento de Tablilla #2**.
