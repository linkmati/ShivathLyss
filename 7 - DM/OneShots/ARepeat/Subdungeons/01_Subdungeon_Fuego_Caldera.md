# 🌋 Subdungeon 1: La Caldera Volcánica (Layout Complejo y No-Lineal estilo Goron Mines & Fire Temple)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/01_Subdungeon_Fuego_Caldera.md`  
> **Inspiración Verbatim**: **Goron Mines** (*Twilight Princess*) + **Fire Temple** (*Ocarina of Time*)  
> **Regla de Diseño DM**: **CERO BLOQUEOS POR TIRADA OBLIGATORIA (No Skill-Check Gates)**. La progresión es 100% interactiva, mecánica y espacial. Las tiradas de dados son opcionales (evitar daño, ir más rápido o hallar secretos), pero el avance obligatorio NUNCA requiere fallar/pasar un dado.  
> **Estructura de Layout**: **Hub Central (3 Pisos)** + **Ala Este (Celdas Goron)** + **Ala Oeste (Fundición de Rieles)** + **Backtracking con Dungeon Item**  
> **Dungeon Item**: *Guantelete de Llama* (Plasma Térmico & Atracción Magnética)  
> **Guardián de Área**: *El Señor del Crisol* (Inspirado en *Volvagia / Fyrus*)  
> **Recompensa**: 🔓 Desbloqueo Permanente de la Caldera + Fragmento de Tablilla #1

---

## 🗺️ Mapa de Flujo No-Lineal de la Mazmorra (Non-Linear Zelda Hub Layout)

```mermaid
graph TD
    S1["Room 1: Atrio del Crisol Central (Hub 3 Pisos)"] -->|Explorar Ala Este| S2["Room 2: Ala Este - Las Celdas Volcanicas"]
    S2 -->|Puzle 1: Liberar Anciano Goron| S2_Key["Cofre: Llave Pequena 1"]
    S2_Key -->|Backtrack al Hub| S1
    
    S1 -->|Usar Llave 1 en Puerta Oeste| S3["Room 3: Ala Oeste - El Laberinto de Muros de Fuego"]
    S3 -->|Pasaje Libre| S4["Room 4: Camara del Bailarin de Llama"]
    S4 -->|COFRE MAESTRO| Item["ITEM: Guantelete de Llama"]
    
    Item -->|Backtrack al Hub Central| S1
    S1 -->|Usar Guantelete al Piso 2| S5["Room 5: Piso 2 - Galeria de Frutas de Agua"]
    S5 -->|Solidificar Magma| S6["Room 6: Piso 3 - Canon de Escoria Rodante"]
    S6 -->|Desbloquear Atajo al Hub| S1
    S6 -->|Cofre en Cornisa Elevada| BossKey["COFRE: Llave del Boss"]
    
    BossKey -->|Regresar al Hub Central| S1
    S1 -->|Usar Llave del Boss en Porton Norte| S7["Room 7: Antecamara del Dragon"]
    S7 --> S8["Room 8: Arena de Volvagia"]
    S8 -->|Vencer Guardian| Win["SUBDUNGEON COMPLETADA & FRAGMENTO 1"]
```

---

## 🏛️ Recorrido Verbatim Sala por Sala (DM Walkthrough & Backtracking)

### Room 1: Atrio del Crisol Central (Hub Central - 3 Pisos)
> *"Un monumental atrio circular de tres niveles tallado en piedra volcánica. Un lago de magma hirviente ocupa el suelo inferior. Tres grandes accesos flanquean la sala: al Este las Celdas Volcánicas, al Oeste un pasaje cerrado con cerrojo de latón 🗝️1, y en el techo del Piso 2 discurren rieles de basalto magnético azuledo. Al norte, en el Piso 3, se yergue el Portón del Dragón 🔒."*
* **Estructura Hub**: Conecta directo con Room 2 (Este), Room 3 (Oeste - Locked 🗝️1), Room 5 (Techo - Requiere *Guantelete de Llama*) y Room 7 (Norte - Requiere *Llave del Boss 👑*).

---

### Room 2: 🧩 Ala Este: Celdas Volcánicas & Rescate del Anciano Goron (OoT / TP)
> *"Una galería subterránea barrida por un muro de llamas vivas de 10 pies de altura. Detrás de los barrotes de la celda Este, un Anciano Goron grita señalando un cristal rúnico ocantado tras una estatua de basalto."*
* **Puzle Mecánico Sin Gating**:
  1. Mover la estatua de basalto para revelar el cristal rúnico (interacción física simple; tirada de Fuerza DC 13 opcional para hacerlo de un solo empuje en vez de 1 minuto).
  2. Disparar al cristal rúnico a distancia para apagar el muro de fuego durante 2 rondas.
  3. Correr por el corredor y presionar el pisador de la celda.
* **Botín**: Los barrotes de la celda se elevan. El Anciano Goron entrega la **Llave Pequeña 🗝️1**.
* **🔄 BACKTRACKING**: Regresar al **Hub Central (Room 1)** e insertar la Llave 🗝️1 en la Puerta Oeste.

---

### Room 3: 🧩 Ala Oeste: El Laberinto de Muros de Fuego (OoT)
> *"Un corredor sinuoso donde ráfagas de llama oscilan en patrones rítmicos cruzados."*
* **Puzle Mecánico Sin Gating**: Observar el patrón rítmico (las llamas se alternan cada 6 segundos) y cruzar en el momento seguro. *(Tirada opcional de Acrobacias DC 13 permite cruzar corriendo sin esperar, pero el cruce normal es 100% seguro esperando la alternancia)*.

---

### Room 4: ⚔️ Cámara del Mini-Boss: Bailarín de Llama / Flare Dancer (OoT)
> *"Una estancia circular sobre magma donde el Bailarín de Llama realiza su danza de fuego."*
* **Combate / Puzle**: Desalojar el núcleo negro con agua/plasma/impacto y atacarlo antes de que regenere su manto.
* **🎁 COFRE MAESTRO**: Otorga el **Guantelete de Llama** (Dispara plasma térmico y activa la **Atracción Magnética de Basalto** para caminar por el techo).
* **🔄 BACKTRACKING**: Con el recién obtenido *Guantelete de Llama*, el grupo regresa al **Hub Central (Room 1)** para ascender al Piso 2 caminando boca abajo por los rieles del techo.

---

### Room 5: 🧩 Piso 2: Galería de las Frutas de Agua (Fire Sanctuary SS)
> *"Un balcón suspendido en el Piso 2 del Hub sobre un ancho canal de magma. En los muros cuelgan frutas de agua cristalina."*
* **Puzle Mecánico Sin Gating**: Disparar el *Guantelete de Llama* o armas a distancia a las frutas de agua para hacerlas caer sobre el magma, solidificando plataformas circulares flotantes temporales para cruzar al Piso 3 (Room 6).

---

### Room 6: Piso 3: Cañón de Escoria Rodante & Atajo del Hub (Llave del Boss 👑)
> *"Una cañuela alta en el Piso 3 por donde esferas de escoria caen rodando. En un nicho elevado flota un cofre dorado."*
* **Puzle & Atajo**:
  1. Avanzar entre los nichos laterales aprovechando el intervalo entre rocas rodantes. *(Tirada opcional de Reflejos DC 13 evita 1d6 daño si alguien corre a destiempo, pero no bloquea la sala)*.
  2. **Abrir Atajo al Hub**: Golpear la estaca de basalto con el *Guantelete de Llama* para hacer caer una escalera de contrapeso directa al Piso 1 del Hub Central.
* **Botín**: Abrir el cofre dorado para reclamar la **Llave del Boss 👑 (Llave de Volvagia)**.

---

### Room 7: 🔒 Antecámara del Dragón
> *"De regreso al Piso 3 del Hub Central (usando la nueva escalera atajo), el grupo se alza ante el Portón monumental del Dragón."*
* **Resolución**: Insertar la **Llave del Boss 👑** para desenganchar los cerrojos de bronce.

---

### Room 8: 💀 Arena del Boss Final: Volvagia / El Señor del Crisol (OoT / TP)
> *"Una pista circular con 9 hoyos sobre magma de los que emerge Volvagia."*
* **Mecánica Boss**: Whack-a-mole con el *Guantelete de Llama*, aturdimiento 1 ronda y esquive de rocas en vuelo.
* **Recompensa**: 🔓 Desbloqueo permanente de la Caldera + **Fragmento de Tablilla #1**.
