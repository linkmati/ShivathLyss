# Relaciones Inter-Salas y Matriz Causal (Blue Prince / Outer Wilds Logic)

> **Ubicación**: `7 - DM/OneShots/ARepeat/02-Relaciones_Inter_Salas_y_Matriz.md`  
> **Concepto**: Ninguna sala funciona aislada. Accionar un mecanismo en la Sala X modifica el estado físico, la temperatura o la accesibilidad de la Sala Y.  
> **Palabras de Poder de Shivath**: **Fire**, **Water**, **Air**, **Earth**, **Life**, **Light**.

---

## 1. El Calendario Astral de Minos (Días Elementales)

Las **Subdungeons Elementales** no están abiertas siempre. Al inicio de cada sesión de downtime, el DM determina el **Día Astral** de Shivath (tirando 1d6 o avanzando el calendario de la campaña):

```mermaid
graph TD
    D1["1d6 = 1: Día de la Llama (FIRE)"] -->|"Abre Subdungeon"| S1["La Caldera Volcánica (Sala 05)"]
    D2["1d6 = 2: Día de la Marea (WATER)"] -->|"Abre Subdungeon"| S2["La Cisterna Sumergida (Sala 02)"]
    D3["1d6 = 3: Día del Viento (AIR)"] -->|"Abre Subdungeon"| S3["La Torre de los Vientos (Sala 04)"]
    D4["1d6 = 4: Día del Pico (EARTH)"] -->|"Abre Subdungeon"| S4["El Dominio Telúrico (Sala 10)"]
    D5["1d6 = 5: Día del Brote (LIFE)"] -->|"Abre Subdungeon"| S5["El Invernadero Ancestral (Sala 03)"]
    D6["1d6 = 6: Día del Sol (LIGHT)"] -->|"Abre Subdungeon"| S6["El Santuario Prismático (Sala 09)"]
```

---

## 2. Redes de Causalidad Inter-Salas

El Laberinto de Minos opera mediante **4 Redes de Transferencia Fieles**:

```mermaid
graph TD
    subgraph Red Hidráulica WATER
        S02["Sala 02: Depósito de Agua"] -->|"Válvula ABIERTA"| S05["Sala 05: La Forja Inundada"]
        S05 -->|"Drenaje Inferior"| S08["Sala 08: El Acuífero Subterráneo"]
    end

    subgraph Red Térmica FIRE
        S05["Sala 05: La Forja"] -->|"Calor Encendido"| S07["Sala 07: Cripta Congelada"]
        S07 -->|"Hielo Derretido"| S07B["S07: Paso del Altar Abierto"]
    end

    subgraph Red de Luz y Refracción LIGHT & LIFE
        S03["Sala 03: El Invernadero Solar"] -->|"Reflejo de Espejos"| S09["Sala 09: Galería de Luz"]
        S09 -->|"Rayo Enfocado"| S11["Sala 11: Campo de Fuerza del Núcleo"]
    end

    subgraph Red Gravitacional / Rotación AIR & EARTH
        S04["Sala 04: Engranaje Maestro"] -->|"Rotar 90° Dextro"| S06["Sala 06: Salón Invertido"]
        S06 -->|"Puerta Alineada"| S10["Sala 10: Sanctum del Guardián"]
    end
```

---

## 3. Matriz de Reconfiguración Procedural (Tirada de Alineamiento 1d6)

Al inicio de cada incursión, el DM tira **1d6** para determinar cómo encajan las salas en la cuadrícula 3x3 del laberinto:

```
    [Posición A] --- [Posición B] --- [Posición C]
         |                |                |
    [Posición D] --- [Posición E] --- [Posición F]
         |                |                |
    [Posición G] --- [Posición H] --- [Posición I]
```

### Tabla de Alineamientos de Minos

| 1d6 | Alineamiento | Disposición de Nodos | Regla Ambiental Global |
| :---: | :--- | :--- | :--- |
| **1** | **Alineamiento Solar (FIRE)** | En línea recta (A -> E -> I). | Forjas al 100% de calor. Subdungeon de Fire accesible. |
| **2** | **Alineamiento Lunar (LIGHT)** | Anillo periférico (A -> B -> C -> F -> I -> H -> G -> D). | Iluminación nula. Subdungeon de Light accesible. |
| **3** | **Alineamiento de Vida (LIFE)** | Concentrado en cruz alrededor del Hub (B, D, E, F, H). | Plantas crecen rápido. Subdungeon de Life accesible. |
| **4** | **Alineamiento Gravitacional (AIR)** | Matriz en espiral (A -> B -> C -> F -> E -> D -> G). | Gravedad reducida. Subdungeon de Air accesible. |
| **5** | **Alineamiento Inundado (WATER)** | Conexiones verticales empujadas hacia abajo. | Salas inferiores inundadas. Subdungeon de Water accesible. |
| **6** | **Alineamiento Armónico (EARTH)** | **Los jugadores eligen la posición inicial de 2 salas** mediante sus Anclas acumuladas. | Subdungeon de Earth accesible. |
