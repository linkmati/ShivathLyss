# El Laberinto de Minos (Mapeo Maestro del Módulo)

> **Ubicación**: `7 - DM/OneShots/ARepeat/El Laberinto de Minos.md`  
> **Formato**: Compendio Ejecutivo para Actividad de Downtime / Repetible / Drop-in.  
> **Inspiraciones Core**: *Outer Wilds* (Progreso por Conocimiento) + *Blue Prince* (Lógica Inter-Salas) + *Xenoblade* (Escritura Alrestiana).

---

## Índice del Módulo ARepeat

Este paquete modular contiene todo lo necesario para dirigir el Laberinto de Minos como una aventura recurrente en tu campaña:

1. [`00-Indice_y_Sistemas_Core.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/00-Indice_y_Sistemas_Core.md)
   * Reglas de la Carga Arcana (10 pts por *run*).
   * Sistema del Diario del Gremio (Persistencia asíncrona entre grupos).
   * **Sistema de Sintonía Elemental**: Tabla completa de bufos exclusivos de incursión (Pyros, Hydro, Fulgur, Zephyr, Geo, Umbra).
2. [`01-Sistema_de_Escritura_Alrestiano.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/01-Sistema_de_Escritura_Alrestiano.md)
   * Alfabeto de Ideogramas y Modificadores de Minos.
   * Reglas de Consolas Rúnicas e ingreso de código ejecutable.
   * Mecánica de descifrado criptográfico progresivo en mesa.
3. [`02-Relaciones_Inter_Salas_y_Matriz.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/02-Relaciones_Inter_Salas_y_Matriz.md)
   * Redes de Causalidad (Hidráulica, Térmica, Eléctrica, Gravitacional).
   * Grafo de dependencias entre salas (Estilo *Blue Prince*).
   * Tabla de Alineamiento Procedural de Minos (1d6).
4. [`03-Catalogo_de_Salas_y_Puzles.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/03-Catalogo_de_Salas_y_Puzles.md)
   * Catálogo de 12 Salas Temáticas Artesanales con interacciones elementales de PJs y efectos permanentes en el terreno.
5. [`04-Encuentros_y_Guardianes.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/04-Encuentros_y_Guardianes.md)
   * Minibosses temáticos con efectos de derrota globales.
   * **Boss Final: El Juicio de Minos (El Héroe del Sello)** redactado con la metodología `boss-ability-design`. Fases de Escudo Elemental que requieren combos coordinados de los bufos elementales de los PJs.
6. [`05-Ficha_Control_DM_y_Tablero_Rumores.md`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/05-Ficha_Control_DM_y_Tablero_Rumores.md)
   * Grafo de Rumores (*Curiosity Board* estilo Outer Wilds).
   * Checklist interactiva para el DM para rastrear el avance entre sesiones.

---

## Síntesis de la Dinámica en Mesa

```mermaid
sequenceDiagram
    autonumber
    actor Jugadores
    participant Atrio as Sala 01 (Atrio)
    participant Laberinto as Matriz de Minos (12 Salas)
    participant Boss as El Juicio de Minos
    participant Base as Diario de la Mina

    Jugadores->>Atrio: Entran y leen Diario de la Mina
    Jugadores->>Atrio: Seleccionan Sintonía Elemental (Bufos Exclusivos)
    Jugadores->>Laberinto: Exploran consumiendo Carga Arcana (10 pts)
    Laberinto-->>Jugadores: Puzles Alrestianos + Alteraciones Físicas Inter-Salas
    Jugadores->>Laberinto: Derrotan Guardianes (Efectos Permanentes)
    Jugadores->>Boss: Desbloquean Puerta Hexagonal (Redes 4/4)
    Jugadores->>Boss: Combate por Fases (Combos Elementales Coordinados)
    Laberinto-->>Jugadores: Colapso por Carga 0 -> Expulsión al Campamento
    Jugadores->>Base: Registran hallazgos y retiran bufos
```
