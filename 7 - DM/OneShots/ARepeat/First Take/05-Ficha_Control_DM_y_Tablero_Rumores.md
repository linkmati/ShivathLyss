# Ficha de Control del DM, Cuaderno Físico y Tablero de Rumores

> **Ubicación**: `7 - DM/OneShots/ARepeat/05-Ficha_Control_DM_y_Tablero_Rumores.md`  
> **Formato de Seguimiento**: Cuaderno Físico en Mesa (Jugadores) + Grafo de Rumores (*Curiosity Board*).  
> **Palabras de Poder de Shivath**: **Fire**, **Water**, **Air**, **Earth**, **Life**, **Light**.

---

## 1. El Cuaderno Físico en Mesa (Transferencia entre Jugadores)

```
======================================================================
               📖 EL CUADERNO FÍSICO DE LA MINA 📖
======================================================================
1. MAPA Y ANOTACIONES HECHAS POR JUGADORES:
   - Los jugadores mantienen un CUADERNO FÍSICO en la mesa de juego donde
     dibujan el mapa del laberinto, anotan significados de ideogramas
     alrestianos y registran atajos permanentes.

2. TRANSFERENCIA IN-GAME:
   - Cualquier grupo de personajes que entre en el laberinto lleva consigo
     el Cuaderno Físico en su equipo. De este modo, los descubrimientos de
     jugadores anteriores benefician a los nuevos sin necesidad de reseteos.
======================================================================
```

---

## 2. Regla de Rendimiento Decreciente por Incursión (Anti-Farm)

Para evitar que los aventureros "farmeen" dinero repetido haciendo incursiones cortas de 2 cargas:

* **Salas Previamente Exploradas**: Los cofres menores de salas ya abiertas en runs anteriores **no otorgan dinero ni gemas repetidos**.
* **Obtención de Botín de Downtime**: El botín solo se concede al explorar **salas nuevas en la rejilla 7x7**, resolver un puzle de triada por primera vez o completar la **Subdungeon Elemental**.

---

## 3. La Tríada de Información de Minos (Knowledge-Gating / Outer Wilds)

Todo escrito, ideograma o pista encontrado en el laberinto o en los rumores de Treftiel cumple simultáneamente **3 Capas concéntricas de información**:

```
 ┌────────────────────────────────────────────────────────┐
 │ 1. Capa Narrativa / Lore (Emoción, Conflicto, Historia)│
 ├────────────────────────────────────────────────────────┤
 │ 2. Capa Espacial / Vector (¿A qué sala/dirección ir?) │
 ├────────────────────────────────────────────────────────┤
 │ 3. Capa Mecánica / Regla (¿Cómo resolver un puzle?)   │
 └────────────────────────────────────────────────────────┘
```

### Ejemplo de Pista Multicapa (El Cuaderno del Arcanista)
1. **Lore**: *"El maestro artesano pereció abrasado al intentar moldear la Lente Solar sin enfriar primero los conductos del Núcleo."*
2. **Vector Espacial**: Apunta a la *Sala del Crisol (Fuego)* y al *Santuario Prismático (Luz)*.
3. **Regla Mecánica**: Revela que la Lente de Luz de la Subdungeon #6 requiere templado en la Subdungeon de Fuego (#1) antes de alinearse en el Núcleo.

---

## 4. El Grafo de Rumores de Treftiel (Curiosity Board / Knowledge DAG)

Usa esta red de pistas estilo *Outer Wilds* (*Rumor Mode*) para estructurar el avance cognitivo trans-ciclo:

```mermaid
graph TD
    subgraph "Hilo 1: Fuego & Templado"
        F1["Rumor: El Crisol Olvidado"] -->|Pista Lore+Vector| F2["Caldera Volcánica (Subdungeon 1)"]
        F2 -->|Regla: Templado Térmico| F3["Lente Prismática Templada"]
    end
    
    subgraph "Hilo 2: Agua & Hidráulica"
        W1["Rumor: Las Piscinas Inundadas"] -->|Pista Vector| W2["Cisterna Sumergida (Subdungeon 2)"]
        W2 -->|Regla: Control de Presión| W3["Compuerta Hidráulica de Alrest"]
    end

    subgraph "Hilo 3: Aire & Vértice"
        A1["Rumor: Los Silbidos de la Mina"] -->|Pista Vector| A2["Torre de Vientos (Subdungeon 3)"]
        A2 -->|Regla: Efecto Venturi| A3["Impulso Gravitacional de Viento"]
    end

    subgraph "Hilo 4: Tierra & Tectónica"
        E1["Rumor: Los Temblores del Angramanio"] -->|Pista Vector| E2["Dominio Telúrico (Subdungeon 4)"]
        E2 -->|Regla: Puntos de Fractura| E3["Deducción de Muros Agrietados (Isaac)"]
    end

    subgraph "Hilo 5: Vida & Botánica"
        L1["Rumor: La Semilla Titanis"] -->|Pista Vector| L2["Invernadero Ancestral (Subdungeon 5)"]
        L2 -->|Regla: Bio-conducción| L3["Puentes de Enredadera Bioluminiscente"]
    end

    subgraph "Hilo 6: Luz & Sombra"
        Li1["Rumor: El Rayo Inclinado"] -->|Pista Vector| Li2["Santuario Prismático (Subdungeon 6)"]
        Li2 -->|Regla: Reflexión en Espejos| Li3["Enfoque Solar del Núcleo"]
    end

    F3 & W3 & A3 & E3 & L3 & Li3 -->|6 Fragmentos de Tablilla + Reglas Aprendidas| Sanctum["Sanctum 12: El Juicio de Minos (Boss Final)"]
```

---

## 5. Tabla de Bloqueos Cognitivos Inter-Salas (Knowledge-Gated Puzzles)

Las siguientes salas **NO se pueden resolver mediante tiradas casuales o fuerza bruta**, sino que **EXIGEN la información descubierta en otra estancia del laberinto**:

| Sala Bloqueada (Target) | Puzle / Bloqueo | Dónde está la Pista / Clave | Contenido de la Clave (Anotar en Diario) |
|---|---|---|---|
| **Sala 13** (*Umbral Decodificación*) | Cortina mística invulnerable | **Sala 24** (*Observatorio Sideral*) | Secuencia rúnica: **Sol ➔ Luna ➔ Estrella** |
| **Sala 07 de Fuego** (*Horno Magmático*) | Reactor térmico inestable | **Sala 25** (*Cripta de Daedalus*) | Protocolo de purga: **2 Vapor + 1 Helada a 400°C** |
| **Sala 05 de Vida** (*Bulbo Carnívoro*) | Fauce vegetal voraz | **Sala 25** (*Cripta de Daedalus*) | Nota de sedación: **Fa Sostenido (432 Hz)** |
| **Sala 04 de Luz** (*Prisma del Santo Sol*) | Descomposición de luz descalibrada | **Sala 24** (*Observatorio Sideral*) | Ángulo cósmico: **45° Norte - 135° Este** |
| **Sanctum 12** (*Reactor Central*) | Escudo del Boss Final (*Juicio de Minos*) | **6 Arenas de Guardianes** (Sets 1 a 6) | Orden de activación de los 6 Relés Elementales |


