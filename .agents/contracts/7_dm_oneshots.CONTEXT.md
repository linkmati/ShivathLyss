# Shelf Contract: 7 - DM / OneShots (Modular Dungeons & Adventures)

Specialized contract for designing stand-alone adventures, dungeon crawls, puzzle matrices, and modular room generators.

## Key References & Systems
- `7 - DM/OneShots/!RogueZeldaRepeat/`: Modular Zelda/Metroidvania/Roguelike dungeon architecture.
  - `Salas/`: Modular room catalog cards (exits, puzzles, enemies, interactables).
  - `First Take/`: Core systems, runic decoders, room-matrix connections.
  - `Research/`: Design inspirations (Zelda, Outer Wilds, Metroidvania, enemy placement).
- `7 - DM/OneShots/El Laberinto de Minos.md`: Complete labyrinth adventure dossier.

## Modular Dungeon Creation Pipeline
1. **Dungeon Core / Pitch**: Central aesthetic, unique puzzle mechanic, win/lose criteria.
2. **Room Generation**: Create modular room cards using `.agents/templates/dungeon_room.md`.
3. **Connection Matrix**: Map progression bottlenecks, keys/switches, and shortcuts.
4. **Boss & Climax Encounter**: Link to `.agents/contracts/7_dm_combat.CONTEXT.md`.
5. **Adventure Deliverable**: Packaged into `.agents/templates/dm_oneshot.md`.

## Context Boundaries
- **Load When**: Prepping one-shots, designing modular dungeon rooms, crafting multi-step dungeon puzzles.
- **Do NOT Load**: Inactive player journals or unrelated cosmology notes.
- **Token Target**: 3k–6k tokens.
