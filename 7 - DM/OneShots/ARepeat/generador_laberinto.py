#!/usr/bin/env python3
"""
Generador de Conexiones del Laberinto de Minos (Zelda 2D / Binding of Isaac 5x5 Grid)
-------------------------------------------------------------------------------------
Genera la topología de salas en una matriz 5x5 con huecos libres (vacíos),
estilo mazmorra roguelike / zelda 2d, definiendo conexiones y estados de puertas.

Uso:
    python3 generador_laberinto.py [--dia FIRE|WATER|AIR|EARTH|LIFE|LIGHT] [--seed INT]
"""

import sys
import random
import argparse

PALABRAS_PODER = ["FIRE", "WATER", "AIR", "EARTH", "LIFE", "LIGHT"]

SUBDUNGEONS = {
    "FIRE": ("La Caldera Volcánica", "El Señor del Crisol", "Sala 05: La Forja"),
    "WATER": ("La Cisterna Sumergida", "La Quimera Hidráulica", "Sala 02: El Depósito"),
    "AIR": ("La Torre de los Vientos", "El Coloso del Vértice", "Sala 04: Engranaje"),
    "EARTH": ("El Dominio Telúrico", "El Titán de Basalto", "Sala 10: Anclas"),
    "LIFE": ("El Invernadero Ancestral", "El Botánico de Sombras", "Sala 03: Invernadero"),
    "LIGHT": ("El Santuario Prismático", "El Espejismo de Cristal", "Sala 09: Espejos")
}

ALINEAMIENTOS = {
    1: ("Alineamiento Solar (FIRE)", "Forjas al 100% de calor. Las salas con hielo se derriten rápidamente."),
    2: ("Alineamiento Lunar (LIGHT)", "Iluminación nula. Se revelan inscripciones invisibles en las paredes."),
    3: ("Alineamiento de Vida (LIFE)", "Plantas y vides arcanas crecen rápido; plataformas de flora activas."),
    4: ("Alineamiento Gravitacional (AIR)", "Gravedad reducida a la mitad. Saltos dobles automáticos."),
    5: ("Alineamiento Inundado (WATER)", "Conexiones verticales empujadas hacia abajo. Nivel inferior lleno de agua."),
    6: ("Alineamiento Armónico (EARTH)", "Los jugadores eligen la posición inicial de 2 salas ancladas.")
}

SALAS_DISPONIBLES = [
    "Sala 02: Depósito de Agua",
    "Sala 03: Invernadero Botánico",
    "Sala 04: Engranaje Maestro",
    "Sala 05: La Gran Forja",
    "Sala 06: Salón Invertido",
    "Sala 07: Cripta del Hielo",
    "Sala 08: Acuífero Subterráneo",
    "Sala 09: Galería de Espejos",
    "Sala 10: Pilar de Anclas",
    "Sala 11: Galería del Juicio",
    "Sala 12: Sanctum de Minos",
    "Sala 13: Pasadizo de las Estatuas",
    "Sala 14: Cámara de la Resonancia",
    "Sala 15: Armería del Arquitecto"
]

ESTADOS_PUERTA = [
    "Puerta Abierta de Par en Par",
    "Compuerta de Glifos [Triada de 3 Gemas]",
    "Bloqueada por Hielo Mágico [Requiere FIRE]",
    "Muro de Piedra Frágil [Requiere EARTH Shatter]",
    "Conducto de Agua Hirviendo [Requiere WATER]",
    "Pozo de Viento Ascendente [Requiere AIR]",
    "Tupida por Vides Arcanas [Requiere LIFE]",
    "Pasaje Invisible Espejado [Requiere LIGHT]"
]

ROW_NAMES = ["A", "B", "C", "D", "E"]
COLS = [1, 2, 3, 4, 5]

def get_neighbors(row_idx, col_val):
    """Devuelve las posiciones adyacentes válidas en la rejilla 5x5."""
    neighbors = []
    # Norte
    if row_idx > 0:
        neighbors.append(("Norte", ROW_NAMES[row_idx - 1], col_val))
    # Sur
    if row_idx < 4:
        neighbors.append(("Sur", ROW_NAMES[row_idx + 1], col_val))
    # Oeste
    if col_val > 1:
        neighbors.append(("Oeste", ROW_NAMES[row_idx], col_val - 1))
    # Este
    if col_val < 5:
        neighbors.append(("Este", ROW_NAMES[row_idx], col_val + 1))
    return neighbors

def generar_incursion_5x5(dia_astral=None, seed=None):
    if seed is not None:
        random.seed(seed)

    if not dia_astral or dia_astral.upper() not in PALABRAS_PODER:
        dia_astral = random.choice(PALABRAS_PODER)
    else:
        dia_astral = dia_astral.upper()

    sub_nombre, guardian, sala_sub = SUBDUNGEONS[dia_astral]
    alineamiento_id = random.randint(1, 6)
    alineamiento_nombre, regla_global = ALINEAMIENTOS[alineamiento_id]

    # Generar layout estilo Isaac (Random Walk / Expansion)
    # Empezar en C1 (Fila C, Columna 1) o A1
    start_pos = ("C", 1)
    grid = {} # pos_key -> room_name
    grid[f"{start_pos[0]}{start_pos[1]}"] = "Sala 01: Atrio de Entrada"

    # Carve rooms
    rooms_to_place = random.randint(11, 14)
    active_coords = [start_pos]

    pool = list(SALAS_DISPONIBLES)
    random.shuffle(pool)

    while len(grid) < rooms_to_place and active_coords:
        current = random.choice(active_coords)
        r_idx = ROW_NAMES.index(current[0])
        c_val = current[1]
        
        valid_nb = get_neighbors(r_idx, c_val)
        unoccupied = [nb for nb in valid_nb if f"{nb[1]}{nb[2]}" not in grid]
        
        if unoccupied:
            _, n_row, n_col = random.choice(unoccupied)
            n_key = f"{n_row}{n_col}"
            if pool:
                grid[n_key] = pool.pop(0)
            else:
                grid[n_key] = f"Sala Cámara Extra ({n_key})"
            active_coords.append((n_row, n_col))
        else:
            active_coords.remove(current)

    # Asignar la Subdungeon al nodo activo más alejado de la entrada
    def distance(coord):
        r_idx = ROW_NAMES.index(coord[0])
        c_val = coord[1]
        start_r = ROW_NAMES.index(start_pos[0])
        start_c = start_pos[1]
        return abs(r_idx - start_r) + abs(c_val - start_c)

    furthest_key = max(grid.keys(), key=lambda k: distance((k[0], int(k[1]))))
    if furthest_key != "C1":
        grid[furthest_key] = f"[SUBDUNGEON] {sala_sub}"

    # Calcular Conexiones Físicas
    conexiones = []
    conexiones_vistas = set()

    for r_idx, r_name in enumerate(ROW_NAMES):
        for c_val in COLS:
            k1 = f"{r_name}{c_val}"
            if k1 in grid:
                for dir_card, n_row, n_col in get_neighbors(r_idx, c_val):
                    k2 = f"{n_row}{n_col}"
                    if k2 in grid:
                        pair_key = tuple(sorted([k1, k2]))
                        if pair_key not in conexiones_vistas:
                            conexiones_vistas.add(pair_key)
                            estado = random.choice(ESTADOS_PUERTA) if random.random() < 0.60 else "Puerta Abierta de Par en Par"
                            conexiones.append((k1, dir_card, k2, estado))

    # Formatear Salida
    out = []
    out.append("======================================================================")
    out.append("       MAPA Y CONEXIONES DEL LABERINTO DE MINOS (REJILLA 5x5 ISAAC/ZELDA)")
    out.append("======================================================================")
    out.append(f"DÍA ASTRAL DE SHIVATH: [ {dia_astral} ]")
    out.append(f"SUBDUNGEON ABIERTA:   {sub_nombre} (Ubicada en {furthest_key}: {sala_sub})")
    out.append(f"GUARDIÁN DE ÁREA:     {guardian}")
    out.append(f"REGLA DE SINTONÍA:    Completar conservando >= 7/10 Cargas Arcanas intactas.")
    out.append(f"ALINEAMIENTO 1d6:     [{alineamiento_id}] {alineamiento_nombre}")
    out.append(f"EFECTO AMBIENTAL:     {regla_global}")
    out.append("----------------------------------------------------------------------")
    out.append("MATRIZ PROCEDURAL 5x5 CON HUECOS LIBRES (ZELDA / BINDING OF ISAAC STYLE):")
    out.append("")

    # Dibujar rejilla 5x5
    out.append("       1              2              3              4              5")
    for r_name in ROW_NAMES:
        row_str = f"{r_name} "
        for c_val in COLS:
            key = f"{r_name}{c_val}"
            if key in grid:
                r_name_short = grid[key][:11]
                row_str += f"[{key}:{r_name_short:<11}] "
            else:
                row_str += f"[{key}: --- VACÍO --- ] "
        out.append(row_str)
        out.append("")

    out.append("----------------------------------------------------------------------")
    out.append("DETALLE DE CONEXIONES Y ESTADO DE PUERTAS:")
    out.append("")

    for k1, dir_card, k2, estado in conexiones:
        out.append(f"* [{k1}] {grid[k1]}")
        out.append(f"  └─ ({dir_card}) -> [{k2}] {grid[k2]}")
        out.append(f"     ESTADO: {estado}")
        out.append("")

    out.append("======================================================================")
    out.append("RECUERDA: La representación gráfica la dibuja el DM.")
    out.append("Los nodos '-- VACÍO --' corresponden a abismos o muros inamovibles.")
    out.append("======================================================================")

    return "\n".join(out)

def main():
    parser = argparse.ArgumentParser(description="Generador de Conexiones 5x5 del Laberinto de Minos")
    parser.add_argument("--dia", type=str, choices=PALABRAS_PODER, help="Día Astral de Shivath")
    parser.add_argument("--seed", type=int, help="Semilla aleatoria")

    args = parser.parse_args()
    print(generar_incursion_5x5(dia_astral=args.dia, seed=args.seed))

if __name__ == "__main__":
    main()
