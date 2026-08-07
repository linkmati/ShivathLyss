<< Previous: [[01-Desafios_Ambientales]] >>

# 02 - Combat: Wes Ritchie (Cobalt Rain) Overheated

## Encounter Summary
The final combat in the core of the Heat Exchanger is not a traditional fight to the death. It is a **4-round tactical survival encounter** designed for a **level 4 party with homebrew elements**. 
The players physically face **Wes Ritchie (Cobalt Rain)** himself. Being connected to the thermodynamic loop, Wes possesses the power of a **CR 13/14** enemy, meaning a direct confrontation is suicide.
The players must survive his desperate assault and use the scattered **Nitrogen Cryo-Vials** in the room (or cold magic) to return his Heat to safe levels (below 150) before he detonates in round 5.

---

## Survival and Heat Mechanics

*   **Objective:** Survive **4 full rounds** (16 turns total). Combat ends at the start of Round 5.
*   **Critical Limit (150):** Wes's safe operating limit is 150. Starting at 300, he is in a critical state.
    *   **Cold Damage / Cryo-Vials:** Every point of cold damage dealt to Wes **reduces his Heat by 1 point** (cold damage does not reduce his HP).
    *   **Healing:** If Wes receives magical healing, it **reduces his Heat** by the amount healed instead of restoring HP.
    *   **Fire / Force Damage:** **Increases his Heat** by double the amount of damage taken.
    *   **Stabilization (Victory):** If at the start of Round 5 his Heat is below 150 and Wes is still alive, the machine safely shuts down and Wes regains consciousness.

---

## Freezing Cold Lair

The core of the Heat Exchanger is plunged into absolute industrial cold. 
*   **Passive Damage:** At the start of each creature's turn (except Wes and ice monsters), the creature takes **1d4 cold damage** guaranteed from the freezing air. (Creatures with heavy winter gear or cold resistance ignore this damage).

---

## Dual Initiative

Wes is overwhelmingly fast and acts **twice per round** at two separate initiative counts (e.g., Initiative 20 and Initiative 10).
*   **Identical Turns:** Both of his initiative turns are mechanically identical normal turns. He can move, take actions, and take bonus actions on both.

---

## Direct Interaction: Nitrogen Cryo-Vials
Scattered on the room's floor are **cracked cryopreservation tubes** leaking pressurized liquid nitrogen.
*   **Pick Up and Throw:** A character can use their Action to pick up a **Cryo-Vial** and throw it at Wes (ranged attack, 30 ft range).
*   **Effect:** On a hit (DEX vs Wes's current AC), the vial shatters, instantly reducing Wes's Heat by **40 points**.

---

## Stat Block: Wes Ritchie (Overheated)

```markdown
### Wes Ritchie (Cobalt Rain)
*Medium Construct (Warforged), Chaotic Neutral*

**Armor Class (AC):** 18 (Natural Armor. *Drops to 16 while Overheated*).
**Hit Points (HP):** 450 (CR 14 Boss)
**Speed:** 30 ft

| STR | DEX | CON | INT | WIS | CHA |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 10 (+0) | 18 (+4) | 16 (+3) | 12 (+1) | 16 (+3) | 22 (+6) |

**Saving Throws:** Constitution +8, Intelligence +6, Charisma +6
**Spell Attacks:** +11 to hit, Spell Save DC 19.
**Damage Immunities:** Poison
**Damage Resistances:** Cold, Necrotic (Cold/necrotic damage does not reduce his HP; cold reduces his Heat 1-to-1).
**Condition Immunities:** Poisoned, Exhaustion, Charmed, Frightened
**Senses:** Blindsight 60 ft (unstable optics), passive Perception 13
**Challenge (CR):** 14 (11,500 XP)

#### Special Traits

*   **Heat Tiers:** Wes's behavior and power change dynamically based on his current Heat:
    *   **Critical (> 200 Heat):** Pneumatic overpressure increases his Speed to 40 ft. He has Advantage on Strength checks. His melee attacks deal extra fire damage equal to (Heat / 20) (e.g., +12 damage at 250 Heat).
    *   **Overheated (> 150 Heat):** The metal beneath his cloak melts. He suffers a **-2 penalty to AC, attack rolls, and spell save DC**. He attacks the closest enemy blindly. His boiling coolant blood spatters: melee attackers take 2d6 automatic fire damage.
    *   **Cooling Down (< 150 Heat):** He regains his tactical mind and no longer attacks blindly. The metal solidifies, removing the AC and attack penalties. He loses the extra fire damage and spatter.
*   **Thermal Shock:** If Wes's Heat drops by **50 points or more in a single round**, the violent contraction of the metal triggers a shrapnel explosion. All creatures within 10 ft of Wes take **1d6 damage (fire/piercing) for every 10 points of difference** dropped. (Using his 50-Heat Supermove always deals 5d6 guaranteed damage).
*   **Thermal Management:** If Wes's HP reaches 0 while his Heat is greater than 0, he detonates massively, destroying the entire sector.
*   **Residual Absolute Zero:** His attacks slow cellular movement. When he hits a creature, its speed is reduced by 10 ft until the end of its next turn.
```

### Abilities and Attacks Table

*(DM Note: Apply a -2 penalty to the Attack rolls and DCs listed here while Wes's Heat is > 150).*

| Attack / Ability       | Heat | Action   | Shape  | Range        | Dmg Type | Damage      | Status / Effect                                                                   |
| :--------------------- | :--- | :------- | :----- | :----------- | :------- | :---------- | :-------------------------------------------------------------------------------- |
| **Thermal Siphon**     | +10x | Passive  | Aura   | 30 ft        | N/A      | 0           | **AURA**: Start of turn, drains heat gaining +10 Heat per enemy within 30 ft.     |
| **Cobalt Thrust**      | 0    | AP       | Single | 10 ft        | Piercing | +9 / 2d8+4  | **SLOWED**: Speed reduced by 10 ft until end of next turn.                        |
| **Bludgeoning Strike** | 0    | AP       | Single | 5 ft         | Bludg.   | +9 / 3d8+4  | **NONE**: Heavy basic attack with closed umbrella.                                |
| **Cryogenic Drops**    | +10  | AP       | Single | 60 ft        | Cold     | +11 / 1d10  | **RESTRAINED**: Frozen to the floor (DC 19 Str to break).                         |
| **Glacial Blockade**   | +20  | AP       | Line   | 20x5 ft      | N/A      | 0           | **OBSTACLE**: Creates solid ice wall blocking LoS and movement.                   |
| **Pneumatic Flare**    | -15  | AP       | Cone   | 15 ft        | Fire     | DC 19 / 5d6 | **BURN 10**: Purges internal heat. Target gains Burn 10.                          |
| **Thermal Lance**      | -25  | AP       | Line   | 60x5 ft      | Fire     | DC 19 / 5d8 | **MELTED & BURN 6**: Pierces cover. -2 AC and gains Burn 6.                       |
| **Thermal Pile-Bunker**| -25  | AP       | Single | 5 ft         | Piercing | +9 / 3d8    | **DETONATION**: If target has Burn, takes (Burn × 2) fire dmg and Burn ends.      |
| **Thermite Grapple**   | -20  | AP       | Single | 5 ft         | Fire     | +9 / 4d10   | **GRAPPLED**: Vents core into target. Applies **Burn 12** on Wes's turn.          |
| **Rain Down**          | +15  | AP       | Circle | 30 ft (R:15) | Cold     | DC 19 / 3d6 | **VULNERABLE**: (Cold) for 1 turn (Dex Save).                                     |
| **Raindrop Skip**      | +5   | Bonus    | Self   | 0 ft         | N/A      | 0           | **FLY/DASH**: Steps on falling rain/steam to fly 30 ft without provoking attacks. |
| **Endothermic Draw**   | +30  | Bonus    | Aura   | 30 ft        | Cold     | DC 19 / 1d6 | **CHARGE**: Sucks ambient heat rapidly. Extinguishes normal fires.                |
| **Cobalt Ignition**    | -20  | Bonus    | Self   | 0 ft         | N/A      | 0           | **BUFF**: Umbrella deals +2d6 extra fire damage this turn.                        |
| **Abrasive Valve**     | -10  | Bonus    | Single | 5 ft         | Fire     | DC 19 / 2d6 | **BLINDED**: Vapor to the eyes. Blinds for 1 turn (DC 19 Con Save).               |
| **Boiling Geyser**     | -15  | Bonus    | Circle | 10 ft        | Fire     | DC 19 / 2d8 | **OBSCURED**: Vents steam. Applies **Burn 4** to anyone inside.                   |
| **Scorched Earth**     | -40  | Bonus    | Circle | 20 ft        | Fire     | 2d6         | **ZONE**: Turns floor to magma. Entering/ending turn there applies **Burn 6**.    |
| **Overpressure Purge** | -50  | AP (Ult) | Line   | 30x5 ft      | Fire     | DC 19 / 8d6 | **PRONE & BURN 20**: Brutal vent. *Triggers Thermal Shock automatically*.         |
| **Entropic Umbrella**  | +15  | Reaction | Self   | 0 ft         | N/A      | 0           | **DEFENSE**: +4 AC against 1 attack, absorbs and gains +15 Heat.                  |
| **Spell Absorption**   | +20  | Reaction | Single | 30 ft        | N/A      | 0           | **COUNTER**: Nullifies enemy Cold/Fire spell. Gains +20 Heat.                     |

---

## Spellcasting (Apocalyptic Bard)

Wes utiliza su maquinaria interna y el paraguas metálico como foco para canalizar magia ilusoria y de control a través de ondas térmicas, presión y ruidos estridentes.
*   **Spell Save DC:** 17
*   **Spell Attack Modifier:** +9

**Conjuros Clave (Solo CC y Concentración):**

*   **Bane (Nivel 1)**
    *   **Tirada:** Salvación de Carisma (DC 17)
    *   **Área:** Hasta 3 objetivos a 30 pies.
    *   **Efecto:** Restan 1d4 a todas sus tiradas de ataque y tiradas de salvación. (Reflavor: Radiación térmica paralizante).
*   **Silvery Barbs (Nivel 1)**
    *   **Tirada:** Ninguna (Reacción).
    *   **Área:** 1 criatura a 60 pies.
    *   **Efecto:** Cuando un enemigo tiene éxito en una tirada, le obligas a repetir el dado y usar el más bajo. Luego das Ventaja a otro aliado (o a ti mismo). (Reflavor: Ráfaga de vapor a presión que desvía el ataque o deslumbra en el milisegundo crítico).
*   **Heat Metal (Nivel 2)**
    *   **Tirada:** Ninguna inicial. Salvación de CON (DC 17) para no soltar el arma.
    *   **Área:** 1 objetivo a 60 pies.
    *   **Efecto:** Daño pasivo al calentar el metal. Si llevan armadura de metal, tienen Desventaja en todos los ataques y checks mientras mantenga concentración.
*   **Slow (Nivel 3)**
    *   **Tirada:** Salvación de Sabiduría (DC 17)
    *   **Área:** Cubo de 40 pies (hasta 6 objetivos).
    *   **Efecto:** Congela el aire. Movimiento a la mitad, -2 a CA, sin Reacciones. En su turno solo pueden usar Acción o Acción Bonus (no ambas) y realizar solo 1 ataque.
*   **Fear (Nivel 3)**
    *   **Tirada:** Salvación de Sabiduría (DC 17)
    *   **Área:** Cono de 30 pies desde Wes.
    *   **Efecto:** Ven el colapso del núcleo. Sueltan sus armas, tienen Desventaja en todo (Asustados) y deben gastar su turno alejándose lo más posible.
*   **Hypnotic Pattern (Nivel 3)**
    *   **Tirada:** Salvación de Sabiduría (DC 17)
    *   **Área:** Cubo de 30 pies.
    *   **Efecto:** Tormenta hipnótica de brasas y vapor. Los que fallan quedan Incapacitados y con velocidad 0 hasta que sufran daño o alguien use una Acción para sacudirlos.
*   **Confusion (Nivel 4)**
    *   **Tirada:** Salvación de Sabiduría (DC 17)
    *   **Área:** Esfera de 10 pies de radio.
    *   **Efecto:** Golpe de calor agudo. Tiran 1d10 en su turno para ver qué hacen (1: caminar en dirección aleatoria, 2-6: no hacer nada, 7-8: atacar a quien tengan al lado, 9-10: actuar normal).
*   **Synaptic Static (Nivel 5)**
    *   **Tirada:** Salvación de Inteligencia (DC 17)
    *   **Área:** Esfera de 20 pies a 120 pies.
    *   **Efecto:** Ruido de radio estático y chillidos metálicos que fríen la mente. Daño psíquico inicial, pero lo importante es el CC: los que fallan **restan 1d6** a todas sus tiradas de ataque y checks de habilidad durante 1 minuto. Sumado al 1d4 de *Bane*, los jugadores no acertarán ni un solo golpe.
*   **Wall of Force (Nivel 5)**
    *   **Tirada:** Ninguna.
    *   **Área:** Paneles que cubren hasta 100 pies o una cúpula.
    *   **Efecto:** CC físico puro. Crea una barrera completamente indestructible (fuego a temperatura de plasma estabilizado o hielo a cero absoluto). Divide al grupo de jugadores por la mitad o aísla a un objetivo para masacrarlo 1 a 1 sin que el resto pueda intervenir.

---

## Loot: Cobalt Entropic Umbrella

> **Cobalt's Entropic Umbrella**
> *Martial Weapon (Requires Attunement), Very Rare*
> 
> An elegant umbrella reinforced with thermoconductive cobalt alloy from Nifl. 
> You gain a **+1 bonus to attack and damage rolls** made with this magic weapon.
> *   **Base Damage:** 1d8 bludgeoning (closed) or 1d8 piercing (thrust with the tip). Versatile (1d10).
> *   **Special Properties:** Finesse, Reach (*only when using the piercing thrust*).
> *   **Thermoconductive Alloy:** Your melee attacks with this weapon deal an **extra 1d6 damage** Fire or Cold damage.
> *   **Entropic Parry:** As a reaction when you are hit by a melee attack, you can suddenly open the umbrella to gain a **+2 bonus to your AC** against that attack. If the attack **misses** you thanks to this bonus, the umbrella absorbs the kinetic force of the impact. Your next successful hit with the umbrella (before the end of your next turn) deals an **extra 1d6 Force damage**. You can use this property a number of times equal to your Proficiency Bonus, regaining all uses after a long rest.
> *   **Pneumatic Glider:** If you fall more than 10 feet, you can use your reaction to open the umbrella above your head. While you hold it with both hands, you gain the effects of the *Feather Fall* spell.

---

## Export to Google Sheets (Copy & Paste)

*Select the text within the following block and paste it directly into cell A1 of your Google Sheets. Being tab-separated, it will automatically divide into the correct columns.*

```text
Attack	Heat	Action	Shape	Range	Type	Damage	Status	Description
Thermal Siphon	10	Passive	Aura	30	N/A	0	AURA	Start of turn, drains heat gaining +10 Heat per enemy within 30 ft.
Cobalt Thrust	0	AP	Single	10	Piercing	2d8+4	SLOWED	Speed reduced by 10 ft until end of next turn.
Bludgeoning Strike	0	AP	Single	5	Bludg.	3d8+4	NONE	Heavy basic attack with closed umbrella.
Cryogenic Drops	10	AP	Single	60	Ice	1d10	RESTRAINED	Frozen to the floor (DC 19 Str to break).
Pneumatic Flare	-15	AP	Cone	15	Fire	5d6	IGNITED	Purges heat. Target burns for 1d6 fire/turn.
Thermite Grapple	-20	AP	Single	5	Fire	4d10	GRAPPLED	Vents core into target. Takes 2d10 fire/turn while grabbed.
Rain Down	15	AP	Circle	30	Ice	3d6	VULN	Freezing rain. Vulnerability to Cold for 1 turn.
Raindrop Skip	5	Bonus	Self	0	N/A	0	FLY/DASH	Steps on falling rain/steam to fly 30 ft without provoking attacks.
Cobalt Ignition	-20	Bonus	Self	0	N/A	0	BUFF	Umbrella deals +2d6 extra fire damage this turn.
Abrasive Valve	-10	Bonus	Single	5	Fire	2d6	BLINDED	Vapor to the eyes. Blinds for 1 turn (DC 19 Con Save).
Boiling Geyser	-15	Bonus	Circle	10	Fire	2d8	OBSCURED	Vents steam. Area is heavily obscured for 1 turn.
Overpressure Purge	-50	Release	Line	30	Fire	8d6	PRONE	Brutal vent. Automatically triggers Thermal Shock.
Expansive Vacuum	-50	Release	Circle	30	Force	6d6	PUSHED	Thermobaric explosion. Triggers Thermal Shock.
Entropic Umbrella	15	React	Self	0	N/A	0	DEFENSE	+4 AC against 1 attack, gains +15 Heat.
Spell Absorption	20	React	Single	30	N/A	0	COUNTER	Nullifies enemy Cold/Fire spell. Gains +20 Heat.
```
