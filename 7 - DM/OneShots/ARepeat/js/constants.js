const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const COLS = [1, 2, 3, 4, 5, 6, 7];

const DOOR_TYPES = [
  "Puerta Abierta de Par en Par",
  "🗝️ Cerrojo de Latón [Small Key]",
  "Compuerta de Glifos [3 Gemas]",
  "Bloqueada por Hielo Mágico [FIRE]",
  "Muro de Piedra Frágil [EARTH]",
  "Conducto de Agua Hirviendo [WATER]",
  "Pozo de Viento Ascendente [AIR]",
  "Tupida por Vides Arcanas [LIFE]",
  "Pasaje Invisible Espejado [LIGHT]",
  "⚖️ Báscula de Contrapesos [Peso]",
  "⚙️ Clave de Engranajes Murales [Clave 3 dígitos]",
  "⏱️ Pasadores Sincronizados [2 Palancas]",
  "🕯️ Pasaje de Fundición Fría [Molde]",
  "🏋️ Rastrillo de Alta Tensión [Fuerza >= 13]",
  "🏥 Compuerta Biomecánica [Medicina DC 13]",
  "📜 Friso de Reyes [Fuerza + Historia DC 13]",
  "📜 Portón del Cántico [Religión DC 13]",
  "🎵 Cristalera de Resonancia [Interpretación DC 13]",
  "🪲 Nido de Larvas [Trato Animales DC 13]",
  "💨 Fisuras Térmicas [Supervivencia DC 13]",
  "🔮 Sello Arcano [Arcanismo DC 13]",
  "🎭 Guardián del Eco [Engaño DC 13]",
  "👥 Cristal de Espinas [Intimidación DC 13]",
  "🖐️ Engranaje Veloz [Juego de Manos DC 13]",
  "🌿 Vides Sensibles [Naturaleza DC 13]",
  "👁️ Relieve Cambiante [Perspicacia DC 13]",
  "Rejilla de Hierro [Atajo Forma Gaseosa]",
  "Sin Pasadizo (Muro Macizo)",
  "🧱 Muro Sólido (Bloqueado)"
];

const SUBDUNGEONS = {
  1: { code: "FIRE", name: "La Caldera Volcánica", boss: "El Señor del Crisol", room: "Sala 05: La Gran Forja", class: "subdungeon-fire" },
  2: { code: "WATER", name: "La Cisterna Sumergida", boss: "La Quimera Hidráulica", room: "Sala 02: Depósito de Agua", class: "subdungeon-water" },
  3: { code: "AIR", name: "La Torre de los Vientos", boss: "El Coloso del Vértice", room: "Sala 04: Engranaje Maestro", class: "subdungeon-air" },
  4: { code: "EARTH", name: "El Dominio Telúrico", boss: "El Titán de Basalto", room: "Sala 10: Pilar de Anclas", class: "subdungeon-earth" },
  5: { code: "LIFE", name: "El Invernadero Ancestral", boss: "El Botánico de Sombras", room: "Sala 03: Invernadero Botánico", class: "subdungeon-life" },
  6: { code: "LIGHT", name: "El Santuario Prismático", boss: "El Espejismo de Cristal", room: "Sala 09: Galería de Espejos", class: "subdungeon-light" },
  7: { code: "BOSS", name: "Sanctum de Minos", boss: "El Juicio de Minos", room: "Sala 12: Sanctum de Minos", class: "subdungeon-boss" },
  8: { code: "NONE", name: "Ninguna Subdungeon Hoy", boss: "Sin Guardián de Área", room: "Exploración Estándar", class: "" }
};

const ALIGNMENTS = [
  "Alineamiento Solar (FIRE) - Forjas encendidas",
  "Alineamiento Lunar (LIGHT) - Inscripciones visibles",
  "Alineamiento de Vida (LIFE) - Vides y flora activas",
  "Alineamiento Gravitacional (AIR) - Gravedad reducida",
  "Alineamiento Inundado (WATER) - Nivel inferior con agua",
  "Alineamiento Armónico (EARTH) - Modificación libre de anclas"
];

const CR_MONSTER_CATALOG = {
  3: "Enjambre de Escarabajos Magmáticos / Espectros de Bronce",
  4: "Minotauro de Basalto Joven / Elemental de Magma",
  5: "Minotauro del Laberinto / Golem de Piedra Rúnico",
  6: "Quimera Vulcánica / Salamandra de Fuego Ancestral",
  7: "Guardián Mecánico de Minos / Golem de Granito Telúrico",
  8: "Minotauro Berserker de Ruina / Beholder Espectral",
  9: "Titán de Basalto Enfadado / Quimera del Abismo",
  10: "Avatar de Minos / Golem de Piedra Abisal",
  11: "Gryphon de Cristal Místico / Archidemonio de Escoria",
  12: "Titán Primigenio de Basalto / Señor de la Sombra Espectral"
};

const SET_ROOMS = {
  "GENERIC": [
    "⚖️ Báscula de Contrapesos", "⚙️ Clave de Engranajes Murales", "🕯️ Puerta de la Fundición Fría",
    "🕸️ Galería de Cuerdas Tensadas", "⏱️ Taller de Relojería Rúnica", "📜 Archivo de Tablillas Rascadas",
    "🔮 Umbral de Decodificación Arcana", "🎭 Relieve del Eco Espectral Parlante", "👥 Puerta del Cristal de Espinas Sumiso",
    "👁️ Relieve de Miradas Cambiantes", "🎲 Sala del Dado Arcano",
    "🩸 Altar del Sacrificio Arcano", "📜 Mercado Espectral de Minos",
    "⚙️ Interruptor Rúnico (Conmutador Peg)", "🧊 Pasaje de Bloques Azules", "🟥 Cámara de Bloques Rojos",
    "🗝️ Sello del Molde de Llave", "⚖️ Consola de Inversión Gravitatoria", "🚪 Bóveda de Salida"
  ],
  "FIRE": [
    "🟁 La Caldera de Escoria Magmática", "🌋 El Horno de Enfriamiento Térmico", "🔥 La Galería de las Cuatro Antorchas",
    "🔴 El Laberinto de Magma Fluido", "♨️ La Grieta del Vapor Térmico", "🔥 Horno de Fundición (Molde de Cera)", "🌋 Horno Magmático Inferior"
  ],
  "WATER": [
    "🌊 El Depósito de las Tres Cisternas", "🚰 El Carril de las Balsas Sumergidas", "💧 El Conducto de Agua Hirviendo",
    "🏊 El Acuífero de los Pilares Sumergidos", "🔀 La Cámara de las Esclusas Sincronizadas",
    "🌊 Cisterna Maestro (Control Hidráulico)", "💧 Cámara de Filtros (Nivel Despejado)", "🚰 Esclusa de Salida (Portón Final)"
  ],
  "AIR": [
    "🌬️ La Torre del Viento Ascendente", "⛵ El Obelisco de la Vela Solar Giratoria", "💨 Las Fisuras Térmicas Micro-Gaseosas",
    "🌀 La Cámara del Vacío Venturi", "🪶 El Balcón del Planeador de Bronce",
    "🌬️ Pozo de Viento Ascendente", "🪶 Balcón de Salida", "💨 Conducto Neumático", "🌀 Torre de Bloques Flotantes"
  ],
  "EARTH": [
    "⚓ El Pilar de Anclas de Basalto", "⚖️ La Balanza de Peso y Catapulta", "🟅 Muro de Piedra Frágil",
    "🌋 La Sima de los Temblores Telúricos", "🪨 El Cañón del Rodillo de Basalto",
    "⛏️ Mina de Aleación Maleable", "🗿 Consola de Grúa de Basalto", "🪨 Cámara del Bloque Volado", "🟅 Sello de Presión de Basalto"
  ],
  "LIFE": [
    "🌱 El Invernadero del Hongo Trampolín", "🌿 La Compuerta de Vides Arcanas", "🍄 El Invernadero de Esporas Durmientes",
    "🌸 El Jardín de la Flora Bioluminiscente", "🪷 El Bulbo Carnívoro del Núcleo",
    "🍄 Invernadero de Esporas", "🌿 Purificador Ambiental", "🌿 Umbral de Vides Sensibles"
  ],
  "LIGHT": [
    "☀️ La Galería de los Espejos en Cadena", "🌌 La Cámara de las Sombras Cuánticas", "👁️ La Sala de la Perspectiva Anamórfica",
    "🌈 El Prisma del Santo Sol", "👥 La Cámara de los Clones de Penumbra",
    "☀️ Tragaluz Solar de Orientación", "🪞 Galería de Espejos Pivotantes", "🌈 Receptor de Luz Final"
  ]
};
