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

## 3. El Grafo de Rumores de Treftiel (Curiosity Board)

Usa esta red de pistas estilo *Outer Wilds* para entregar información en los descansos:

```mermaid
graph TD
    A["Rumor: Las Nieblas de Treftiel"] --> B["Bóveda de Estabilización de Minos"]
    B --> C["Ideogramas Rúnicos de Alrest"]
    B --> D["Subdungeons Elementales (1d8)"]
    C --> E["Consolas de 3 Gemas (Forced Override: 2 Cargas)"]
    D --> F["Fragmentos de la Gran Rueda de Criptografía (6 Piezas)"]
    F --> G["Sanctum 12: El Juicio de Minos (Balanced 5 PJs)"]
```
