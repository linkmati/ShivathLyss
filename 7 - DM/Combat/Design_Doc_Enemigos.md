# Design Doc - Enemigos Shivath (modelo general)

> Norma para crear cualquier enemigo: mook, élite, mini-boss, boss, leyenda. Los bichos cobálticos (`OneShots/Cooking Show/Design_Doc_Bichos.md`) son un caso particular de este modelo. Manda este doc.
>
> Lee antes: [[Sistema Marcial]], [[Traits]], [[Diseño de Jefes]], [[Status_Limbus_System]], [[Daños Deluxe]]. Formato hoja: `Bosses Shivath.xlsx` (hoja Cobalt Rain) y `OneShots/Cooking Show/Bosses Shivath - Cooking Show.xlsx`.

## 1. Filosofía (todo enemigo)

1. **Posición antes que DPS.** Todo enemigo interesante se juega con los pies: líneas que se evitan, zonas que se abandonan, aliados que se liberan, parejas que se separan, nova que se interrumpe. Si solo se pega hasta que cae, está mal.
2. **Cero contadores salvo leyenda.** Mooks, élites y mini-bosses: nada de Entropía, Heat, cargas 0-300, umbrales múltiples. Solo la leyenda tipo Cobalt Rain (450 HP) puede llevar doble recurso, y aun así con pasivas que lo muevan solas. Si tu élite necesita Excel para trackearse, recórtalo.
3. **Telegrafía 1 turno.** Toda mecánica que pegue más de 3d6 o aplique Restrained/Stun/Fear se anuncia antes: luz roja, grito H4ppy o del boss, marca visible. Formato: marca -> resuelve. Nunca al revés.
4. **Estados como herramientas, no cuotas.** Burn, Bleed, Prone, Restrained, Poison, etc. son opcionales. Un enemigo puede ir full daño físico, full Burn, o sin estados y solo posición + daño. Si usas estados, evita repetir el mismo primario en el mismo encuentro solo si es fácil variar; si la fantasía pide todo quemado, quémalo todo.
5. **Marcial Shivath siempre:** Martial Check gratis 1/turno (revela gimmick + debilidad, Nat20 revela Legend si la hay), Clash vs nova/fear cuando haya algo que interrumpir, Severing/Componentes en élites+ si tienen partes rompibles (si no tienen, no pasa nada), Traits del catálogo, Merciful por defecto (no rematar caídos salvo Ruthless/Merciless explícito <25% HP). **Last Stand opcional:** solo si el bicho lo necesita (anti-clímax, drama, captura viva). La mayoría no lo lleva y está bien.

## 2. Tiers (base Cobalt Rain 450 HP / DC17 / +9)

| Tier | HP | AC | Atk | DC | Acciones | Componentes | Nova | Last Stand (opcional) | Ejemplo |
|---|---|---|---|---|---|---|---|---|---|
| Mook (relleno) | 15-40 | 12-13 | +3/+4 | 11-12 | 1 AP + 1 reacción simple | 0 | no | no (salvo gag) | Kobold, cangrejo base |
| Élite (peligroso) | 60-120 | 14 | +5/+6 | 13-14 | 2-3 AP/AS + 1 gimmick | 0-1 si tiene parte obvia | no, o línea telegrafiada | solo si quieres drama/captura | Seltas 110 |
| Mini-boss | 130-170 | 15 | +6 | 14 | 4-6 + 2 gimmicks + 1-2 spells | 2 si tiene partes, si no 0 | 0-1 mini clasheable 3d6-6d6 | solo si anti-clímax probable | Nerscylla 150 |
| Boss | 200-250 | 16 | +7 | 15 | 8-12 + loop 3 gimmicks + 2-3 spells | 2 si tiene partes | 0-1 grande interrumpible 8d6 | recomendado pero no obligatorio | Mantis 225 |
| Leyenda (arco) | 400-500 | 16-18 | +8/+9 | 16-17 | kit completo + legendarias + 6+ spells | 3+ | Purge 12d6 + finisher | sí, aquí sí pega (cura + inmunidades + revive) | Cobalt Rain 450 |

- Daño orientativo por tier: mook 1d6-1d8, élite 1d8-3d6, mini 2d6-3d6, boss 2d8-4d6 + nova 8d6 1/combate, leyenda novas 8d6-12d6 + Burn stacking + Detonation.
- Duración: mook 1-2r, élite 4-5r, mini 6r, boss 6-8r vs party 3-4 nivel 1-3 (escala +1r por cada nivel medio extra). Si dura más, baja HP 10% o DC 1 antes que añadir daño.
- Enrage <30% HP siempre simple, sin contadores: +1 ataque, gimmick más frecuente, o pierde freno (Seltas siempre choca). Anúncialo: ¡ENRAGE!

## 3. Gimmicks por tier (elige, no acumules)

- Mook: ninguna, o 1 pasiva posicional (aura pequeña, embiste en línea sin marcar).
- Élite: 1 gimmick (línea vs muro, charco que se kitea, marca que se rompe con daño).
- Mini-boss: 2 gimmicks combinables (encierra + ensucia, marca + adds, fear + terreno).
- Boss: loop 3 (spread + dance + interrupt, o rompe A + rompe B + nova).
- Leyenda: loop 3 + fase 2 intrínseca (pierde severing, gana legendarias/reactividad) + Last Stand con revive.

Catálogo válido (WoW/MH, todos telegrafiados): línea vs muro, envuelto Maexxna (capullo AC12 10HP vuln Slash), charco Grobbulus (máx 4, kitear), vínculo spread (<20ft = stun), danza espiral Onyxia (roca/borde = mitad), nova interrumpible Ragnaros (20+ daño + Clash/Prone/Stun o wipe). Prohibido: one-shots sin marca, stun 2+ rondas sin save cada ronda, quitar agencia a 2+ PJs a la vez salvo nova interrumpible, trackeo entre rondas.

## 4. Estados y daño (opcionales, a gusto)

- Si usas Limbus: Burn (1d6 por punto fin turno luego /2, quita con acción) y Bleed X/Y (X al atacar/acción física luego Y-1, quita con cura mágica). Ver [[Status_Limbus_System]].
- Secundarios 5e si te apetecen: Prone, Restrained, Poisoned, Slowed, Frightened, Stunned, Vulnerable, terreno. Ninguno obligatorio.
- Puedes hacer un bicho sin estados: solo daño + posición + gimmick y funciona. Puedes hacer uno full Burn con 5 fuentes si su fantasía es quemar. Sin cuotas.
- Combos solo si salen solos: vulnerable -> payoff, Restrained -> +daño, Burn acumulado -> Detonation solo si quieres finisher (si limpian, pega poco = premia limpiar, pero no es obligatorio ponerlo).

## 5. Formato XLSX (el que manda en números)

Una hoja por boss/mini-boss/élite memorable. Mooks en texto, no en hoja. Maqueta `A1:AU37` (ver Cobalt Rain).

- Cabecera 1-7: B1/C1 HP (fórmulas D1/F1:O1 recalculan solas), A4 Speed `5 - 25ft`, C4 SSDC, D4 AC, D7 MartDC, G5:L5 `CON STR DEX WIS INT CAR` (CON primero), G6:L6 plus, G7:L7 saves, T5 inmunidades, T6 sentidos, T7 idiomas, A7 Entropía (0 = sin entropía, no borrar columna).
- Fila 11 `E11:AR11` merge = Traits + gimmicks en 1 frase c/u + `Hidden Behind Nat20 Martial / Last Stand`.
- Filas 12-34: `A:D` nombre, E costo (`—`), F `AP, AS, Reacc, Pasiva`, `I:K` forma (`Single, Circle, Semi, Cone, Line, Free, Multi, Aura, Self`), L rango (`1`, `12 (60ft)`, `3 (15ft)`...), `M:O` tipo (lista M exacta), `P:R` daño (`HIT +7\n2d8+4` o `DC15 CON\n3d6`), `S:T` estado, `U:AG` descripción mecánica completa, `AH:AR` flavour (`Melee Attack, Ranged Attack, Area attack, Control, Combo Payoff, Damaging terrain, Telegraphed, Nova, Defensive, Component, Legend, Enrage`).
- R35 spells (`Lvl n Nombre: DC _ ...`), R37 notas/loot. No tablas estructuradas, todo merges. No copiar el datetime contaminado de Cobalt L25/L30.
- Para crear uno: duplica hoja `Seltas Lluvia` (no Cobalt), renombra, cambia B1/C1, E11, filas 12+, A35, A37. Borra dejando en blanco, no borres filas (rompes merges/validaciones).

## 6. Formato MD espejo (para jugar sin Excel)

Un `Boss_<Nombre>.md` por hoja con Bloques 0-4 + Notas DM + Loot. La escena (`02-...`, encuentro, etc.) solo resumen jugable + link `[[Boss_...]]`. El XLSX manda si hay discrepancia.

## 7. Checklist (todo enemigo)

- [ ] Tier y números dentro de tabla §2 (o justifica por qué no)
- [ ] 0-3 gimmicks según tier, todas telegrafía 1 turno + counter sin tirar o con 1 tirada (moverse, esconderse, separar, pegar capullo, interrumpir)
- [ ] Componentes 0-2 según tier solo si tiene partes obvias, con Severing DC si los hay (si no hay partes, no forzar)
- [ ] Estados a gusto: 0 a los que pida la fantasía, sin cuotas ni límites de Burn
- [ ] Clash definido solo si hay nova/fear que interrumpir, Last Stand solo si quieres drama/anti-clímax/captura (la mayoría no lo lleva)
- [ ] Traits del catálogo [[Traits]], sintaxis [[Diseño de Jefes]] `[Habilidad] (Tipo, Recarga). Efecto`, DCs y tipos en negrita
- [ ] XLSX validado (dropdowns, merges, fórmulas vivas) + MD espejo + link en escena + loot útil (cocina/crafteo/venta, nunca solo oro)
- [ ] Test mental 4 PJs nivel medio: ¿rompen 1 parte ronda 2? ¿evitan cada gimmick moviéndose? ¿dura lo de §2? Si no, recorta antes de añadir.

Caso particular bichos: ver `OneShots/Cooking Show/Design_Doc_Bichos.md` (escalado 25/33/50%, loot cocina +1/+2/auto-win Mantis 15+).
