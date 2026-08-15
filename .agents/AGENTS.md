# Agent Rules for Shivath Workspace

## Graphify First Rule
- ALWAYS check if `graphify-out/` or `graphify-out/graph.json` exists first when answering questions about the project, architecture, deities, or files.
- Query the graph (`graphify query`, `graphify explain`, or `graphify path`) before scanning raw files.

## Lyss Folder Protection
- NEVER read, write, modify, delete, list, search, or interact with any file or folder inside the `6 - Lyss` directory (or anything matching `Lyss`) unless explicitly specified by the user in the current conversation.

## Safe Editing & Git Rules
- NEVER rewrite or overwrite existing notes unless explicitly specified by the user.
- ALWAYS commit git changes before modifying any files in the workspace (NEVER run `git push`).

## ICM Navigation & Shelf Routing
Root contract: `.agents/contracts/root.CONTEXT.md`

| Task / Intent | Target Shelf | Contract Path |
|---|---|---|
| World lore, gods, factions, geography | `1 - Mundo/` | `.agents/contracts/1_mundo.CONTEXT.md` |
| History, eras, past/future timelines | `2 - Historia/` | `.agents/contracts/2_historia.CONTEXT.md` |
| Player sheets, build plans, NPC dossiers | `3 - Personajes/` | `.agents/contracts/3_personajes.CONTEXT.md` |
| Player mission logs, clues, campaign progress | `4 - Misiones/` | `.agents/contracts/4_misiones.CONTEXT.md` |
| Magic systems, mechanics, custom rules | `5 - Otros/` | `.agents/contracts/5_otros.CONTEXT.md` |
| **DM Master Hub** | `7 - DM/` | `.agents/contracts/7_dm.CONTEXT.md` |
| ↳ *DM Combat, Bosses & Status* | `7 - DM/Combat/` | `.agents/contracts/7_dm_combat.CONTEXT.md` |
| ↳ *DM OneShots, Dungeons & Puzzles* | `7 - DM/OneShots/` | `.agents/contracts/7_dm_oneshots.CONTEXT.md` |
| ↳ *DM Lore, Secrets & Clocks* | `7 - DM/Lore Building/` | `.agents/contracts/7_dm_lore.CONTEXT.md` |
| Visual maps & layout schemas | `Excalidraw/` | Direct lookup |
| Reusable templates (DM & Player) | `.agents/templates/` | `boss_statblock`, `dungeon_room`, `dm_session_tracker`, `dm_oneshot`, `npc`, `location`, `player_mission_log` |
| Restricted / Private | `6 - Lyss/` | **DO NOT TOUCH** |


