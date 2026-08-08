#!/usr/bin/env python3
"""
generador_laberinto.py - Generador de Topología y Conexiones para El Laberinto de Minos (7x7 Disperso estilo Isaac)
Shivath TTRPG System
"""

import random
import argparse

ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
COLS = [1, 2, 3, 4, 5, 6, 7]

DOOR_TYPES = [
    "Puerta Abierta de Par en Par",
    "Compuerta de Glifos [3 Gemas]",
    "Bloqueada por Hielo Mágico [FIRE]",
    "Muro de Piedra Frágil [EARTH]",
    "Conducto de Agua Hirviendo [WATER]",
    "Pozo de Viento Ascendente [AIR]",
    "Tupida por Vides Arcanas [LIFE]",
    "Pasaje Invisible Espejado [LIGHT]",
    "Rejilla de Hierro [Atajo Forma Gaseosa]",
    "Sin Pasadizo (Muro Macizo)"
]

SUBDUNGEONS = {
    1: {"code": "FIRE", "name": "La Caldera Volcánica", "boss": "El Señor del Crisol", "room": "Sala 05: La Gran Forja"},
    2: {"code": "WATER", "name": "La Cisterna Sumergida", "boss": "La Quimera Hidráulica", "room": "Sala 02: Depósito de Agua"},
    3: {"code": "AIR", "name": "La Torre de los Vientos", "boss": "El Coloso del Vértice", "room": "Sala 04: Engranaje Maestro"},
    4: {"code": "EARTH", "name": "El Dominio Telúrico", "boss": "El Titán de Basalto", "room": "Sala 10: Pilar de Anclas"},
    5: {"code": "LIFE", "name": "El Invernadero Ancestral", "boss": "El Botánico de Sombras", "room": "Sala 03: Invernadero Botánico"},
    6: {"code": "LIGHT", "name": "El Santuario Prismático", "boss": "El Espejismo de Cristal", "room": "Sala 09: Galería de Espejos"},
    7: {"code": "BOSS", "name": "Sanctum de Minos", "boss": "El Juicio de Minos", "room": "Sala 12: Sanctum de Minos"},
    8: {"code": "NONE", "name": "Ninguna Subdungeon Hoy", "boss": "Sin Guardián de Área", "room": "Exploración Estándar"}
}

def generate_layout(sub_roll=None):
    if sub_roll is None or sub_roll < 1 or sub_roll > 8:
        sub_roll = random.randint(1, 8)
    
    align_roll = random.randint(1, 6)
    sub_info = SUBDUNGEONS[sub_roll]

    # Pick entry point
    start_key = random.choice(["C3", "D3", "D4", "C4", "E4"])
    
    grid = {}
    doors = {}

    for r in ROWS:
        for c in COLS:
            grid[f"{r}{c}"] = {"active": False, "name": "--- VACÍO ---", "role": "EMPTY"}

    grid[start_key] = {"active": True, "name": "Sala 01: Atrio de Entrada", "role": "ATRIO"}
    placed = {start_key}

    presets = [
        "Sala 02: Depósito de Agua", "Sala 03: Invernadero Botánico", "Sala 04: Engranaje Maestro",
        "Sala 05: La Gran Forja", "Sala 06: Salón Invertido", "Sala 07: Cripta del Hielo",
        "Sala 08: Acuífero Subterráneo", "Sala 09: Galería de Espejos", "Sala 10: Pilar de Anclas",
        "Sala 11: Galería del Juicio", "Sala de la Rejilla y el Abismo", "Sala del Interruptor de Cristal",
        "Sala de las Cuatro Antorchas", "Sala de la Cisterna de 3 Niveles", "Sala del Tobogán Unidireccional"
    ]
    random.shuffle(presets)

    # Branching crawler (Isaac Dispersed Layout)
    target_rooms = random.randint(14, 18)
    for _ in range(4):
        curr = start_key
        for _ in range(random.randint(3, 5)):
            if len(placed) >= target_rooms:
                break
            
            r_idx = ROWS.index(curr[0])
            c_val = int(curr[1])
            neighbors = []
            if r_idx > 0: neighbors.append(f"{ROWS[r_idx-1]}{c_val}")
            if r_idx < 6: neighbors.append(f"{ROWS[r_idx+1]}{c_val}")
            if c_val > 1: neighbors.append(f"{curr[0]}{c_val-1}")
            if c_val < 7: neighbors.append(f"{curr[0]}{c_val+1}")

            unvisited = [nk for nk in neighbors if nk not in placed]
            if unvisited:
                nxt = random.choice(unvisited)
                placed.add(nxt)
                grid[nxt] = {
                    "active": True,
                    "name": presets.pop() if presets else f"Sala Cámara ({nxt})",
                    "role": "NORMAL"
                }
                pair = "-Door-".join(sorted([curr, nxt]))
                doors[pair] = random.choice(DOOR_TYPES[:8])
                curr = nxt

    # Subdungeon distance constraint (<= 3 steps)
    start_r = ROWS.index(start_key[0])
    start_c = int(start_key[1])

    if sub_roll != 8:
        candidates = [k for k in placed if k != start_key and 1 <= abs(ROWS.index(k[0]) - start_r) + abs(int(k[1]) - start_c) <= 3]
        target = random.choice(candidates) if candidates else start_key
        if target != start_key:
            grid[target] = {"active": True, "name": sub_info["room"], "role": "SUBDUNGEON"}

    # Guaranteed Isaac Secret Room
    secret_candidates = []
    for r in ROWS:
        for c in COLS:
            k = f"{r}{c}"
            if not grid[k]["active"]:
                r_idx = ROWS.index(r)
                nb_active = []
                for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
                    nr_idx, nc_val = r_idx + dr, c + dc
                    if 0 <= nr_idx < 7 and 1 <= nc_val <= 7:
                        nb_key = f"{ROWS[nr_idx]}{nc_val}"
                        if grid[nb_key]["active"]:
                            nb_active.append(nb_key)
                if len(nb_active) >= 1:
                    secret_candidates.append((k, len(nb_active), nb_active))

    secret_candidates.sort(key=lambda x: x[1], reverse=True)
    if secret_candidates:
        s_key, _, nbs = secret_candidates[0]
        grid[s_key] = {"active": True, "name": "🗝️ Sala Secreta de Minos", "role": "SECRET"}
        for n_k in nbs:
            pair = "-Door-".join(sorted([s_key, n_k]))
            doors[pair] = "Muro de Piedra Frágil [EARTH]"

    return grid, doors, sub_roll, align_roll, start_key

def print_ascii_grid(grid):
    print("\n--- MATRIZ 7x7 DE MINOS (DISPERSA ESTILO ISAAC) ---")
    print("   1   2   3   4   5   6   7")
    for r in ROWS:
        row_str = f"{r} "
        for c in COLS:
            k = f"{r}{c}"
            node = grid[k]
            if not node["active"]:
                row_str += " ·  "
            elif node["role"] == "ATRIO":
                row_str += " 🏛️ "
            elif node["role"] == "SUBDUNGEON":
                row_str += " 👑 "
            elif node["role"] == "SECRET":
                row_str += " 🗝️ "
            else:
                row_str += " 🚪 "
        print(row_str)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generador 7x7 del Laberinto de Minos")
    parser.add_argument("--subdungeon", type=int, choices=range(1, 9), help="Forzar opción de Subdungeon 1..8")
    args = parser.parse_args()

    g, d, sub, align, start = generate_layout(args.subdungeon)
    print_ascii_grid(g)
    print(f"\nEntrada (Atrio): [{start}] | Subdungeon 1d8: [{sub}] -> {SUBDUNGEONS[sub]['name']} | Secret Room: 🗝️ Incluida")
