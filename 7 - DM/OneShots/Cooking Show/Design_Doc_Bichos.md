# Design Doc - Bichos Cobálticos (modelo Cooking Show / Bosses Shivath)

> Caso particular de [[Design_Doc_Enemigos|modelo general de enemigos en Combate]]. Manda el general; aquí solo peculiaridades bichos.

> Para crear más bichos sin romper el modelo. Si dudas, mira `Boss_Seltas_Lluvia.md` (simple), `Boss_Nerscylla_Tormenta.md` (medio) y `Boss_Mantis_Reina.md` (completo). Fuente original: `Bosses Shivath.xlsx` hoja Cobalt Rain + `Bosses Shivath - Cooking Show.xlsx`.

## 1. Filosofía (no negociable)

1. **Monster Hunter + raid WoW, no saco de HP.** Cada bicho se caza (rastrear -> romper parte -> capturar/matar) y se raidea (mecánica telegrafiada que se juega con posición, no con DPS).
2. **Cero contadores.** Nada de Entropía, Heat, cargas 0-300, umbrales múltiples. Prohibido: `Heat Sink`, `Thermal Shock`, `Critical State`, `Overheated`, `Entropy Accumulation`. Si lo piensas, es no.
3. **1-3 gimmicks máximo, siempre telegrafiadas 1 turno.** Luz roja + grito H4ppy (`¡APÁRTENSE! ¡SEPÁRENSE! ¡SUELTEN! ¡INTERRUMPAN!`). Si no da tiempo a reaccionar, está mal diseñada.
4. **Estados a gusto, sin cuotas.** Los actuales variaron (Seltas sangra, Nerscylla encierra, Mantis quema) como ejemplo, no como obligación. El próximo puede ir full Burn, sin estados, o como pida su fantasía.
5. **Shivath marcial sí queda:** Martial Check gratis 1/turno (revela gimmick + debilidad, Nat20 revela Legend si la hay), Clash cuando haya nova/fear, Severing si tiene partes rompibles, Traits, Merciful. **Last Stand opcional:** los 3 actuales lo llevan como ejemplo de captura viva, los próximos pueden no llevarlo.

## 2. Escalado (base Cobalt Rain 450 HP / DC17 / +9)

| Tier | HP | AC | Atk | DC | Spells | Componentes | Nova | Last Stand (opcional) |
|---|---|---|---|---|---|---|---|---|
| FÁCIL 25% ej Seltas | 100-120 | 14 | +5 | 13 | 0 | 1 si tiene parte obvia | no, solo línea telegrafiada | solo si quieres captura/drama |
| NORMAL 33% ej Nerscylla | 140-160 | 15 | +6 | 14 | 1-2 (Slow/Fear) | 2 si tiene partes | 0-1 mini clasheable | solo si anti-clímax probable |
| DIFÍCIL 50% ej Mantis | 210-230 | 16 | +7 | 15 | 2-3 (Bane/Slow/Fear) | 2 si tiene partes | 0-1 grande interrumpible | recomendado pero no obligatorio |
| Jefe arco 100% | 450 | 18-2 | +9 | 17 | lista completa | 3+ | Purge 12d6 + Detonation | cura 100 + inmunidades + revive 1 min |

- Daño: fácil 1d8-3d6, normal 2d6-3d6, difícil 2d8-4d6 y nova 8d6 1/combate.
- Duración objetivo: fácil 4-5r, normal 6r, difícil 6-8r vs party 3-4 nivel 1-3. Si dura más, es porque no rompen partes: avisa por Chat (`¡rompe lo brillante!`).
- Enrage simple <30% HP: +1 ataque o gimmick más frecuente, sin nuevos contadores. Ej: Seltas siempre choca, Nerscylla envuelve cada 2r, Mantis danza cada 2r.

## 3. Gimmicks permitidas (elige 1-2, inspira WoW/MH)

- **Línea vs muro (Seltas/Diablos):** marca línea 60x10ft, siguiente turno embiste. Vacía + roca = 20 dmg a sí mismo + Prone + Vulnerable + Sever gratis.
- **Envuelto (Maexxna):** marca lejano, siguiente Restrained capullo AC12 10HP vuln Slash. Pegar capullo libera. 2r = Poisoned. Nunca mismo 2 veces.
- **Charco (Grobbulus):** crítico/sever = charco 10ft máx 4. Entrar/terminar DC o Poisoned + 1d6. Bicho dentro = +1 atk. Kitear fuera.
- **Vínculo spread:** enlaza 2 a 30ft. Fin siguiente <20ft = 3d6 ambos + Stun. Separados = nada + bicho -10 HP.
- **Danza espiral (Onyxia):** marca zona, siguiente +X a descubiertos. Tras roca/borde = mitad sin estado.
- **Nova interrumpible (Ragnaros):** a 50% HP canaliza 1r. Si 20+ daño + Clash/Prone/Stun antes de su turno = cancela + Prone 2r + Vulnerable. Si no = 8d6 + Prone.
- Prohibido: mecánicas que exijan trackear números entre rondas, que maten sin telegrafía, que quiten agencia 2+ rondas, que obliguen a leer 3 párrafos en mesa.

## 4. Formato XLSX (el que manda)

Archivo: `Bosses Shivath - Cooking Show.xlsx` (copia de `Bosses Shivath.xlsx`). Una hoja por bicho. Maqueta `A1:AU37`.

Bloque cabecera filas 1-7:
- R1: A1=`PS ` B1=HP actual C1=HP max D1=`=B1/C1`, F1:O1=`=C1*0.1`...`=C1` (barra 10 tramos), Q1=`RESISTANCES`
- R2: F2:O2 barra merge, Q2:AC2 tipos `Slash Pier Bludg Fire Cold Light Thun Pois Acid Rad Nec Psi Forc`
- R3: A3=`Speed` B3=`Initiative` C3=`SSDC` D3=`AC` U3=`R` X3=`Imm` AA3=`R`
- R4: A4=`5 - 25ft` C4=SSDC D4=AC F4=`STATS` N4=`-2 a todo` o `—`
- R5: C5=`(19-2)` o vacío D5=`(18-2)` o vacío, G5:L5=`CON STR DEX WIS INT CAR`, Q5=`IMMUNITIES` T5=`Poisoned, Charm...`
- R6: A6=`Entropy` (dejar, poner 0 = sin entropía), D6=`MartDC` F6=`Plus` G6:L6=mods, Q6=`SENSES` T6=`Normal`
- R7: A7=0, D7=MartDC E7=base o vacío, F7=`Save` G7:L7=saves, Q7=`LANGUAGES` T7=`—`

Tabla fila 10 cabecera: A10=`Ataque` E10=`Entropy` (poner `—`, no usar) F10=`Action` I10=`Forma` L10=`Range` M10=`Type` P10=`Damage` S10=`Status` U10=`Descripcion` AH10=`Flavour`.

Fila 11: `E11:AR11` merge = lista Traits + gimmicks + `Hidden Behind Nat20 Martial / Last Stand`.

Filas 12-34 datos, merges por fila: `A:D` nombre, E costo (siempre `—` o 0), F acción, `I:K` forma, L rango, `M:O` tipo, `P:R` daño, `S:T` estado, `U:AG` descripción, `AH:AR` flavour.

Dropdowns (no romper): F=`AP, AS, Reacc, Pasiva`, I=`Single, Circle, Semi, Cone, Line, Free, Multi, Aura, Self`, M=`Slash, Piercing, Bludgeoning, Fire, Cold, Lightning, Thunder, Poison, Acid, Radiant, Necrotic, Psychic, Force, Other` (usar `Cold` no `Ice`, `Other` para N-A).

R35: `A35` Spell List merge. R37: notas/loot. No hay tablas estructuradas ni condicionales, todo merges manuales. Ojo: en Cobalt original L25/L30 tenían datetime contaminado `2026-06-12`, no copiar eso, usar `12 (60ft)` texto.

## 5. Formato MD espejo (para Obsidian)

Un `.md` por bicho: `Boss_<Nombre>.md` con Bloques 0-4 + Notas DM + Loot (ver Seltas ejemplo). El `02-Escena_La_Caza.md` solo lleva resumen jugable + link `[[Boss_...]]`. No dupliques números en dos sitios: el XLSX manda, el MD resume.

Orden columnas tabla MD igual que XLSX: `Ataque | Entropy | Action | Forma | Range | Type | Damage | Status | Descripcion | Flavour`.

## 6. Checklist antes de dar por hecho un bicho

- [ ] Sin columna Entropy usada (todo `—`), sin Heat/Entropía en pasivas
- [ ] 1-2 gimmicks con telegrafía 1 turno + grito H4ppy + forma de evitarlas sin tirar (moverse, esconderse, separar, pegar capullo, interrumpir)
- [ ] 1-2 componentes con Severing DC (Atletismo/Arcana vs STR/DEX) = daño + pierde pasiva + Prone + loot
- [ ] Estados primarios distintos a otros bichos del mismo tier si se puede (no tercer bicho Burn)
- [ ] Clash definido vs nova/fear (quién puede, qué niega, qué cuesta)
- [ ] Last Stand 1 vez, cura fija, sin revive full salvo final arco
- [ ] Enrage <30% simple, sin contadores
- [ ] Fila XLSX validada (dropdowns respetados, merges intactos, fórmulas B1/C1/D1/F1:O1 vivas)
- [ ] MD espejo creado + link en `02-Escena_La_Caza.md` + loot cocina (+1/+2 ptos o ventaja, nunca auto-win salvo Mantis con 15+)
- [ ] Testeado mental 4 PJs nivel 2: ¿pueden romper 1 parte en ronda 2? ¿pueden evitar cada gimmick moviéndose? ¿dura 4-8r? Si no a algo, recorta HP 10% o baja DC 1.

## 7. Cómo crear uno nuevo (5 pasos)

1. Duplica hoja `Seltas Lluvia` (no Cobalt) en el XLSX, renombra. Cambia B1/C1/F1:O1 (fórmulas solas recalculan barra).
2. Escribe E11 Traits + 2 gimmicks en una frase cada una.
3. Rellena filas 12+: Legend primera, componentes después, gimmicks como Pasiva, luego 4-6 ataques (1 básico, 1 setup vulnerable, 1 payoff, 1 control, 1 reacción, 1 enrage). Borra filas sobrantes (dejar en blanco, no borrar fila).
4. Pon spells en A35 (0-3) y loot en A37.
5. Crea `Boss_<Nombre>.md` copiando Seltas, enlázalo en `02` y `NPCs_y_Bichos.md`, juega mental 1 combate.
