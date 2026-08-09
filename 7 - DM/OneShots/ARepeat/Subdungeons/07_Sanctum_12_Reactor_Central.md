# 👑 Sanctum 12: El Reactor Central de Minos (Layout Complejo y No-Lineal estilo Ganon's Castle)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/07_Sanctum_12_Reactor_Central.md`  
> **Inspiración Verbatim**: **Ganon's Castle** (*The Legend of Zelda: Ocarina of Time*) + **Hyrule Castle** (*Tears of the Kingdom*)  
> **Regla de Diseño DM**: **CERO BLOQUEOS POR TIRADA OBLIGATORIA (No Skill-Check Gates)**. La progresión es 100% interactiva, mecánica y espacial. Las tiradas de dados son opcionales (evitar daño, ir más rápido o hallar secretos), pero el avance obligatorio NUNCA requiere fallar/pasar un dado.  
> **Estructura de Layout**: **Atrio Hexagonal de Entrada (Hub Master)** + **Seis Alas Elementales Autónomas (Wings 1 a 6)** + **Desbloqueo de la Torre Central de Ascenso**  
> **Requisitos**: Reunir los 6 Fragmentos de Tablilla (de las 6 Subdungeons de Zelda)  
> **Boss Final**: *El Juicio de Minos* (Nivel Recomendado 7-8, Grupo de 5 PJs)

---

## 🗺️ Mapa de Flujo No-Lineal del Sanctum Final (Ganon's Castle Hub Wings Layout)

```mermaid
graph TD
    classDef hub fill:#1e293b,stroke:#f59e0b,stroke-width:3px,color:#f8fafc;
    classDef wing fill:#0f172a,stroke:#64748b,stroke-width:2px,color:#e2e8f0;
    classDef unlock fill:#78350f,stroke:#fbbf24,stroke-width:3px,color:#fef3c7;
    classDef boss fill:#7f1d1d,stroke:#f87171,stroke-width:3px,color:#fee2e2;

    S1["Fase 1: Puerta Hexagonal<br/><b>[Insertar 6 Tablillas]</b>"]:::hub
    S2["Fase 2: Atrio Central del Reactor<br/><i>(6 Barreras Elementales)</i>"]:::hub

    subgraph "LAS SEIS ALAS ELEMENTALES AUTÓNOMAS (Elección Libre)"
        B1["Ala 1: Fuego (Roja)<br/><b>[Guantelete / Techo]</b>"]:::wing
        B2["Ala 2: Agua (Azul)<br/><b>[Flauta / Nivel BAJO]</b>"]:::wing
        B3["Ala 3: Aire (Verde)<br/><b>[Capa / Turbina]</b>"]:::wing
        B4["Ala 4: Tierra (Gris)<br/><b>[Martillo / Estaca]</b>"]:::wing
        B5["Ala 5: Vida (Esmeralda)<br/><b>[Semilla / Vides]</b>"]:::wing
        B6["Ala 6: Luz (Dorada)<br/><b>[Mirror Shield / Rayo]</b>"]:::wing
    end

    S1 --> S2
    S2 --> B1 & B2 & B3 & B4 & B5 & B6
    B1 & B2 & B3 & B4 & B5 & B6 -->|Disipar 6 Barreras| S3["Fase 3: Escalera Central en Espiral"]:::unlock
    S3 --> S4["Fase 4: Arena de El Juicio de Minos 💀<br/><b>[Full Burst & Tesoro Imperial]</b>"]:::boss
```

---

### 📊 Tabla Resumen de Progreso (Paso a Paso)

| Paso | Ubicación | Tipo | Objetivo y Acción Clave | Resultado |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Puerta Hexagonal** | 🗝️ Requisito | Reagrupar los 6 Fragmentos de Tablilla de las subdungeons | Encajar piezas y abrir entrada |
| **2** | **Atrio del Reactor** | 🟢 Hub Master | Acceder a cualquiera de las 6 alas elementales en cualquier orden | Libertad total de resolución |
| **3** | **Alas 1 a 6** | 🧩 Puzle / Ítem | Emplear el Dungeon Item correspondiente a cada elemento | Disipar las 6 barreras de energía |
| **4** | **Torre Central** | 🏃 Ascenso | Subir por la escalera en espiral esquivando derrumbes | Acceso a la arena superior |
| **5** | **Arena Final** | 💀 Boss Final | Vencer a **El Juicio de Minos** (Mecánica Full Burst 6 Orbes) | 🏆 **VICTORIA FINAL DE LA INCURSIÓN** |


---

## 🏛️ Recorrido Verbatim por Fases y Navegación de Alas (DM Walkthrough)

### Phase 1: La Gran Puerta Hexagonal (Acceso)
> *"Una monumental cúpula de basalto sellada por una losa de seis lados. En cada vértice brilla un zócalo para un Fragmento de Tablilla."*
* **Mecánica**: Encajar los **6 Fragmentos de Tablilla**. La losa desciende abriendo el paso al Hub Master del Reactor.

---

### Phase 2: 🧩 Atrio Central y las Seis Alas Elementales Autónomas (Ganon's Castle OoT)
> *"Un atrio circular catedralicio donde levita la esfera descalibrada del Reactor Central. Seis grandes pasillos abovedados conducen a seis Alas Elementales protegidas por barreras de fuerza de colores primarios. El grupo puede abordar las 6 alas en cualquier orden."*

* **Ala 1: Fuego (Roja - OoT/TP)**: Disparar el *Guantelete de Llama* a los braseros y caminar boca abajo por el techo magnético para pulsar el cristal rúnico.
* **Ala 2: Agua (Azul - OoT/SS)**: Tocar la *Flauta del Mar* a Nivel BAJO para drenar la fosa, bajar al submundo y recuperar la llave de la esclusa.
* **Ala 3: Aire (Verde - OoT/TotK)**: Usar la *Capa del Vértice* en los trampolines celestiales para volar sobre la barrera y acelerar la turbina de paso.
* **Ala 4: Tierra (Gris - OoT/MM)**: Asestar un golpe de *Martillo de Basalto* en la estaca de ancla para colapsar la torre de prueba 10 ft.
* **Ala 5: Vida (Verde Esmeralda - OoT)**: Plantar la *Semilla Botánica* en la arcilla para tejer un puente de vides y descender en caída libre por la tela de araña.
* **Ala 6: Luz (Dorada - OoT)**: Interponer el *Escudo Prismático (Mirror Shield)* en el tragaluz para reflejar luz solar directa sobre el ojo de cuarzo.

---

### Phase 3: 🧩 Desbloqueo de la Torre Central de Ascenso (OoT)
> *"Al disiparse las seis barreras elementales, el campo de fuerza del centro se desmorona con un zumbido armónico. Una gran escalera en espiral desenganchada se eleva hacia la cúspide mientras pedazos de mampostería caen del techo."*
* **Puzle de Ascenso Sin Gating**: Correr por la escalera en espiral esquivando las rocas caídas aprovechando los nichos de protección. *(Tirada opcional de Atletismo o Destreza DC 13 evita 1d6 daño si alguien corre sin cubrirse, pero el ascenso es 100% garantizado)*.

---

### Phase 4: 💀 Boss Final Verbatim: El Juicio de Minos (Ganon Core OoT / Xenoblade 2)
> *"Una catedral circular suspendida sobre el vacío electromagnético donde El Juicio de Minos toca el órgano del reactor rodeado por seis Orbes Elementales."*
* **Mecánica Xenoblade 2**: Romper los 6 Orbes Elementales usando sus contra-elementos opuestos para desencadenar el **⚡ FULL BURST** (Boss aturdido 1 ronda + daño crítico x2).
* **Recompensa**: 🔓 Cierre definitivo de la Incursión Repetible + **Tesoro Imperial de Alrest**.
