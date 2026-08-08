# Generador de Conexiones y Topología de Mapas (Minos Generator)

> **Ubicación**: `7 - DM/OneShots/ARepeat/06-Generador_de_Conexiones_y_Mapas.md`  
> **Propósito**: Herramienta rápida para generar la topología de salas, alineamiento y estado de las puertas en 5 segundos.  
> **Nota**: *Tú diseñas el mapa visual. Este sistema te da la disposición lógica y las conexiones.*

---

## 1. Opción Automática: Script de Python (`generador_laberinto.py`)

Se incluye un script ejecutable directamente desde terminal o consola en la misma carpeta:

```bash
# Incursión aleatoria automática
python3 generador_laberinto.py

# Incursión forzando un Día Astral específico (ej: FIRE, WATER, AIR, EARTH, LIFE, LIGHT)
python3 generador_laberinto.py --dia FIRE

# Reproducir un mapa usando una semilla específica
python3 generador_laberinto.py --seed 12345
```

### Ejemplo de Salida del Script:
```
======================================================================
          MAPA Y CONEXIONES DEL LABERINTO DE MINOS (RUN LOG)
======================================================================
DÍA ASTRAL DE SHIVATH: [ FIRE ]
SUBDUNGEON ABIERTA:   La Caldera Volcánica (Acceso desde Sala 05: La Forja)
GUARDIÁN DE ÁREA:     El Señor del Crisol
ALINEAMIENTO 1d6:     [5] Alineamiento Inundado (WATER)
----------------------------------------------------------------------
MATRIZ PROCEDURAL 3x3 (TOPOLOGÍA DE SALAS):

  [Pos A: Sala 01: Atrio ] <---> [Pos B: Sala 02: Depósit] <---> [Pos C: Sala 03: Invernad]
           ^                                  ^                                  ^
           v                                  v                                  v
  [Pos D: Sala 05: La For] <---> [Pos E: Sala 04: Engran] <---> [Pos F: Sala 10: Pilar d]
           ^                                  ^                                  ^
           v                                  v                                  v
  [Pos G: Sala 07: Cripta] <---> [Pos H: Sala 11: Galerí] <---> [Pos I: Sala 05: Subdung]

----------------------------------------------------------------------
DETALLE DE CONEXIONES Y ESTADO DE PUERTAS:

* [A] Sala 01: Atrio de Entrada
  └─ (Este) -> [B] Sala 02: Depósito de Agua | ESTADO: Puerta Abierta
  └─ (Sur)  -> [D] Sala 05: La Gran Forja    | ESTADO: Puerta Abierta

* [B] Sala 02: Depósito de Agua
  └─ (Este) -> [C] Sala 03: Invernadero      | ESTADO: Tupida por Vides [LIFE o Fuego]
  └─ (Sur)  -> [E] Sala 04: Engranaje        | ESTADO: Puerta Abierta

* [D] Sala 05: La Gran Forja
  └─ (Sur)  -> [G] Sala 07: Cripta           | ESTADO: Muro de Piedra [EARTH Shatter]
```

---

## 2. Opción Manual: Tablas con Dados (Zero-Tech DM Tables)

Si prefieres generar el mapa en mesa sin ordenador, usa estos 3 pasos:

### PASO 1: Tirada del Día Astral de Shivath (1d6)
| 1d6 | Día Astral | Subdungeon Accesible | Guardián |
| :---: | :--- | :--- | :--- |
| **1** | **FIRE (Día de la Llama)** | *La Caldera Volcánica* | El Señor del Crisol |
| **2** | **WATER (Día de la Marea)** | *La Cisterna Sumergida* | La Quimera Hidráulica |
| **3** | **AIR (Día del Viento)** | *La Torre de los Vientos* | El Coloso del Vértice |
| **4** | **EARTH (Día del Pico)** | *El Dominio Telúrico* | El Titán de Basalto |
| **5** | **LIFE (Día del Brote)** | *El Invernadero Ancestral* | El Botánico de Sombras |
| **6** | **LIGHT (Día del Sol)** | *El Santuario Prismático* | El Espejismo de Cristal |

---

### PASO 2: Tirada de Alineamiento Procedural de Minos (1d6)
Tira 1d6 para el **Efecto Ambiental Global** (`02-Relaciones_Inter_Salas_y_Matriz.md`).

---

### PASO 3: Estado de las Conexiones entre Salas (Tirada 1d8 por Puerta)

Tira 1d8 para cada pasadizo entre salas adyacentes:

| 1d8 | Estado de la Puerta / Pasadizo | Requisito para Desbloquear |
| :---: | :--- | :--- |
| **1-3** | **Puerta Abierta de Par en Par** | Tránsito libre. |
| **4** | **Compuerta de Glifos Alrestianos** | Ingresar la Triada de 3 Gemas (`01-Sistema_de_Escritura_Alrestiano.md`). |
| **5** | **Bloqueada por Hielo Mágico** | Usar **FIRE** o derrite con el calor de La Forja. |
| **6** | **Muro de Piedra Frágil** | Usar **EARTH** *Shatter* o prueba de Fuerza DC 16. |
| **7** | **Conducto de Agua Hirviendo** | Usar **WATER** para desviar agua o abrir la Válvula de Sala 02. |
| **8** | **Tupida por Vides Arcanas / Gas** | Usar **LIFE** o quemar las raíces con antorcha. |

---

## 3. Plantilla de Dibujo Rápido para el DM

Organiza tus baldosas/mapas en esta rejilla lógica simple:

```
+----------------+----------------+----------------+
|  [POSICIÓN A]  |  [POSICIÓN B]  |  [POSICIÓN C]  |
| (ENTRADA ATRIO)|                |                |
+----------------+----------------+----------------+
|  [POSICIÓN D]  |  [POSICIÓN E]  |  [POSICIÓN F]  |
|                | (ENG. MAESTRO) |                |
+----------------+----------------+----------------+
|  [POSICIÓN G]  |  [POSICIÓN H]  |  [POSICIÓN I]  |
|                |                |  (SUBDUNGEON)  |
+----------------+----------------+----------------+
```
