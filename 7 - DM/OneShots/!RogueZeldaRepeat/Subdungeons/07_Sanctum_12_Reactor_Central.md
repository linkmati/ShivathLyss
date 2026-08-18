# 👑 Sanctum 12: El Reactor Central de Minos (Layout Complejo y No-Lineal estilo Ganon's Castle)

> **Ubicación**: `7 - DM/OneShots/ARepeat/Subdungeons/07_Sanctum_12_Reactor_Central.md`  
> **Inspiración Verbatim**: **Ganon's Castle** (*The Legend of Zelda: Ocarina of Time*) + **Hyrule Castle** (*Tears of the Kingdom*)  
> **Regla de Diseño DM (Sistema de Doble Opción)**: **CERO BLOQUEOS OBLIGATORIOS (No Skill-Check Gates)**. Las seis alas elementales y el ascenso al reactor admiten **DOS MÉTODOS DE RESOLUCIÓN**:  
> 1. 🟢 **Opción Interactiva (Sin Tirada / 100% Seguro)**: Emplear los Dungeon Items obtenidos en las 6 subdungeons previa (Guantelete, Flauta, Capa, Martillo, Semilla, Mirror Shield).  
> 2. ⚡ **Opción Rápida con Tirada (Skill Check Skip)**: Permite disipar barreras o saltarse puzles elementales al instante mediante tiradas de habilidad (Fuerza, Atletismo, Acrobacias, Juego de Manos, Arcanos, etc.).  
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

    S1["Fase 1: Puerta Hexagonal<br/><b>[6 Tablillas o Arcanos/Religión]</b>"]:::hub
    S2["Fase 2: Atrio Central del Reactor<br/><i>(6 Barreras Elementales)</i>"]:::hub

    subgraph "LAS SEIS ALAS ELEMENTALES AUTÓNOMAS (Elección Libre)"
        B1["Ala 1: Fuego (Roja)<br/><b>[Guantelete / Atletismo]</b>"]:::wing
        B2["Ala 2: Agua (Azul)<br/><b>[Flauta / Atletismo Subacuático]</b>"]:::wing
        B3["Ala 3: Aire (Verde)<br/><b>[Capa / Acrobacias]</b>"]:::wing
        B4["Ala 4: Tierra (Gris)<br/><b>[Martillo / Fuerza]</b>"]:::wing
        B5["Ala 5: Vida (Esmeralda)<br/><b>[Semilla / Naturaleza]</b>"]:::wing
        B6["Ala 6: Luz (Dorada)<br/><b>[Mirror Shield / Arcanos]</b>"]:::wing
    end

    S1 --> S2
    S2 --> B1 & B2 & B3 & B4 & B5 & B6
    B1 & B2 & B3 & B4 & B5 & B6 -->|Disipar 6 Barreras| S3["Fase 3: Escalera Central en Espiral"]:::unlock
    S3 --> S4["Fase 4: Arena de El Juicio de Minos 💀<br/><b>[Full Burst & Tesoro Imperial]</b>"]:::boss
```

---

### 📊 Tabla Resumen de Progreso (Sistema Doble Opción)

| Paso | Ubicación | Tipo | 🟢 Opción Sin Tirada (100% Seguro) | ⚡ Opción Rápida con Tirada (Skill Skip) |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Puerta Hexagonal** | 🗝️ Requisito | Encajar los 6 Fragmentos de Tablilla en sus zócalos | **Arcanos DC 14** (forzar sintonización de glifos en zócalos faltantes) |
| **2** | **Ala 1: Fuego** | 🟢 Elemental | Caminar por el techo magnético con Guantelete de Llama | **Atletismo DC 13** (saltar entre plataformas de magma sin caminata techo) |
| **3** | **Ala 2: Agua** | 🟢 Elemental | Drenar fosa a Nivel BAJO con la Flauta del Mar | **Atletismo DC 13** (bucear a pulmón a contracorriente sin drenar) |
| **4** | **Ala 3: Aire** | 🟢 Elemental | Rebotar en trampolines celestiales con la Capa del Vértice | **Acrobacias DC 13** (impulsarse en muros celestes volando sobre barrera) |
| **5** | **Ala 4: Tierra** | 🟢 Elemental | Asestar golpe de Martillo de Basalto en estaca de prueba | **Fuerza DC 14** (derribar el pilar de granito de un tacle directo) |
| **6** | **Ala 5: Vida** | 🟢 Elemental | Plantar Semilla Botánica para tejer puente de vides | **Naturaleza / Atletismo DC 13** (balancearse en lianas ancestrales) |
| **7** | **Ala 6: Luz** | 🟢 Elemental | Reflejar luz solar del tragaluz con el Mirror Shield | **Arcanos DC 14** (canalizar conjuro de luz propia hacia el ojo) |
| **8** | **Torre Central** | 🏃 Ascenso | Correr resguardándose en nichos ante rocas caídas | **Acrobacias DC 13** (esprintar en espiral sin detenerse entre derrumbes) |
| **9** | **Arena Boss** | 💀 Boss Final | Romper los 6 Orbes con elementos opuestos | **Percepción DC 14** (identificar vulnerabilidad de orbe 1 ronda antes) |



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
