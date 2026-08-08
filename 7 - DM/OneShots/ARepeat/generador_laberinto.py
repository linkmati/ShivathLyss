#!/usr/bin/env python3
"""
Generador de Conexiones del Laberinto de Minos (Shivath Campaign)
-----------------------------------------------------------------
Este script genera la topología de conexiones, alineamiento procedural,
días elementales y estado de las puertas para cualquier incursión de downtime.

Uso:
    python3 generador_laberinto.py [--dia FIRE|WATER|AIR|EARTH|LIFE|LIGHT] [--seed INT] [--anchors 04,06]
"""

import sys
import random
import argparse

PALABRAS_PODER = ["FIRE", "WATER", "AIR", "EARTH", "LIFE", "LIGHT"]

SUBDUNGEONS = {
    "FIRE": ("La Caldera Volcánica", "El Señor del Crisol", "Sala 05: La Forja"),
    "WATER": ("La Cisterna Sumergida", "La Quimera Hidráulica", "Sala 02: El Depósito"),
    "AIR": ("La Torre de los Vientos", "El Coloso del Vértice", "Sala 04: El Engranaje"),
    "EARTH": ("El Dominio Telúrico", "El Titán de Basalto", "Sala 10: Pilar de Anclas"),
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

SALAS_POOL = [
    "Sala 01: Atrio de Entrada",
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
    "Sala 12: Sanctum de Minos"
]

ESTADOS_PUERTA = [
    "Puerta Abierta de Par en Par",
    "Compuerta de Glifos [Requiere Triada de 3 Gemas]",
    "Bloqueada por Hielo Mágico [Requiere FIRE o Calor de la Forja]",
    "Bloqueada por Muro de Piedra [Requiere EARTH Shatter o Fuerza]",
    "Conducto de Agua Hirviendo [Requiere WATER o Desvío en Sala 02]",
    "Pozo de Viento Ascendente [Requiere AIR o Caída Pluma]",
    "Tupida por Vides Arcanas [Requiere LIFE o Fuego]",
    "Pasaje Invisible Espejado [Requiere LIGHT o Espejo Rúnico]"
]

POSICIONES_GRID = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

def generar_incursion(dia_astral=None, seed=None, anchors_str=""):
    if seed is not None:
        random.seed(seed)
        
    if not dia_astral or dia_astral.upper() not in PALABRAS_PODER:
        dia_astral = random.choice(PALABRAS_PODER)
    else:
        dia_astral = dia_astral.upper()
        
    sub_nombre, guardian, sala_sub = SUBDUNGEONS[dia_astral]
    alineamiento_id = random.randint(1, 6)
    alineamiento_nombre, regla_global = ALINEAMIENTOS[alineamiento_id]
    
    # Procesar anclas fijas
    anclas = [a.strip() for a in anchors_str.split(",") if a.strip()]
    
    # Asignar 9 salas a la matriz (Sala 01 siempre en Posición A/Entrada)
    salas_disponibles = [s for s in SALAS_POOL if s != "Sala 01: Atrio de Entrada"]
    random.shuffle(salas_disponibles)
    
    matriz = {}
    matriz["A"] = "Sala 01: Atrio de Entrada"
    
    # Colocar la sala de la Subdungeon en Posición I (Final) o E (Centro)
    matriz["I"] = sala_sub
    if sala_sub in salas_disponibles:
        salas_disponibles.remove(sala_sub)
        
    for pos in ["B", "C", "D", "E", "F", "G", "H"]:
        matriz[pos] = salas_disponibles.pop(0)

    # Definir conexiones entre posiciones adyacentes en la matriz 3x3
    # Grid:
    # A - B - C
    # D - E - F
    # G - H - I
    vecinos = {
        "A": [("Este", "B"), ("Sur", "D")],
        "B": [("Oeste", "A"), ("Este", "C"), ("Sur", "E")],
        "C": [("Oeste", "B"), ("Sur", "F")],
        "D": [("Norte", "A"), ("Este", "E"), ("Sur", "G")],
        "E": [("Norte", "B"), ("Oeste", "D"), ("Este", "F"), ("Sur", "H")],
        "F": [("Norte", "C"), ("Oeste", "E"), ("Sur", "I")],
        "G": [("Norte", "D"), ("Este", "H")],
        "H": [("Norte", "E"), ("Oeste", "G"), ("Este", "I")],
        "I": [("Norte", "F"), ("Oeste", "H")]
    }

    conexiones = []
    conexiones_vistas = set()

    for pos, lista_vecinos in vecinos.items():
        for dir_cardinal, pos_destino in lista_vecinos:
            pair_key = tuple(sorted([pos, pos_destino]))
            if pair_key not in conexiones_vistas:
                conexiones_vistas.add(pair_key)
                estado = random.choice(ESTADOS_PUERTA) if random.random() < 0.65 else "Puerta Abierta de Par en Par"
                conexiones.append((pos, dir_cardinal, pos_destino, estado))

    # Formatear Salida
    output = []
    output.append("======================================================================")
    output.append("          MAPA Y CONEXIONES DEL LABERINTO DE MINOS (RUN LOG)")
    output.append("======================================================================")
    output.append(f"DÍA ASTRAL DE SHIVATH: [ {dia_astral} ]")
    output.append(f"SUBDUNGEON ABIERTA:   {sub_nombre} (Acceso desde {sala_sub})")
    output.append(f"GUARDIÁN DE ÁREA:     {guardian}")
    output.append(f"REGLA DE SINTONÍA:    Completar conservando >= 7/10 Cargas Arcanas intactas.")
    output.append(f"ALINEAMIENTO 1d6:     [{alineamiento_id}] {alineamiento_nombre}")
    output.append(f"EFECTO AMBIENTAL:     {regla_global}")
    output.append("----------------------------------------------------------------------")
    output.append("MATRIZ PROCEDURAL 3x3 (TOPOLOGÍA DE SALAS):")
    output.append("")
    output.append(f"  [Pos A: {matriz['A'][:18]:<18}] <---> [Pos B: {matriz['B'][:18]:<18}] <---> [Pos C: {matriz['C'][:18]:<18}]")
    output.append("           ^                                   ^                                   ^")
    output.append("           v                                   v                                   v")
    output.append(f"  [Pos D: {matriz['D'][:18]:<18}] <---> [Pos E: {matriz['E'][:18]:<18}] <---> [Pos F: {matriz['F'][:18]:<18}]")
    output.append("           ^                                   ^                                   ^")
    output.append("           v                                   v                                   v")
    output.append(f"  [Pos G: {matriz['G'][:18]:<18}] <---> [Pos H: {matriz['H'][:18]:<18}] <---> [Pos I: {matriz['I'][:18]:<18}]")
    output.append("")
    output.append("----------------------------------------------------------------------")
    output.append("DETALLE DE CONEXIONES Y ESTADO DE PUERTAS:")
    output.append("")

    for pos_origen, dir_card, pos_destino, estado in conexiones:
        s_origen = matriz[pos_origen]
        s_destino = matriz[pos_destino]
        output.append(f"* [{pos_origen}] {s_origen}")
        output.append(f"  └─ ({dir_card}) -> [{pos_destino}] {s_destino}")
        output.append(f"     ESTADO: {estado}")
        output.append("")

    output.append("======================================================================")
    output.append("RECUERDA: La disposición visual del mapa la dibuja el DM.")
    output.append("Este reporte proporciona la topología lógica y los bloqueos de la run.")
    output.append("======================================================================")

    return "\n".join(output)

def main():
    parser = argparse.ArgumentParser(description="Generador de Conexiones del Laberinto de Minos")
    parser.add_argument("--dia", type=str, choices=PALABRAS_PODER, help="Día Astral de Shivath (FIRE, WATER, AIR, EARTH, LIFE, LIGHT)")
    parser.add_argument("--seed", type=int, help="Semilla aleatoria para reproducir un mapa específico")
    parser.add_argument("--anchors", type=str, default="", help="Lista de salas ancladas separadas por coma (ej: 04,06)")
    
    args = parser.parse_args()
    resultado = generar_incursion(dia_astral=args.dia, seed=args.seed, anchors_str=args.anchors)
    print(resultado)

if __name__ == "__main__":
    main()
