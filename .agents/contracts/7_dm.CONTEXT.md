# Shelf Contract: 7 - DM (Dungeon Master Master Hub)

Master routing hub for all DM preparation, encounter mechanics, modular dungeons, and behind-the-screen secrets.

## Sub-Shelf Routes

| Sub-Area | Focus | Contract Path |
|---|---|---|
| `Combat/` | Boss Design, Limbus Status, Daños Deluxe, Martial Rules, Traits | `.agents/contracts/7_dm_combat.CONTEXT.md` |
| `OneShots/` | Modular Dungeons, Puzzles, Roguelike/Zelda Matrices, Stand-alone Quests | `.agents/contracts/7_dm_oneshots.CONTEXT.md` |
| `Lore Building/` | DM Secrets, Villain Clocks, Unrevealed Factions & Sandboxes | `.agents/contracts/7_dm_lore.CONTEXT.md` |

## General DM Invariants
1. **Never leak DM files into player-facing notes**: DM lore in `7 - DM/Lore Building` stays segregated from `1 - Mundo`.
2. **Standard Action Syntax**: Boss actions must follow `[Action Name] ([Trigger/Cost], [Restrictions/Recharge]). [Mechanical Effect]`.
3. **Modular Room Shape**: Dungeon rooms must declare exits, hazards, interactable elements, and loot.
4. **Human Gate**: Intermediate designs (boss phases, puzzle solutions) must be editable before finalizing session prep.
