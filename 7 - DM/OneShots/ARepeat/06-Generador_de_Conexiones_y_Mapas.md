# Generador de Conexiones y Topología de Mapas (5x5 Rejilla Isaac / Zelda)

> **Ubicación**: `7 - DM/OneShots/ARepeat/06-Generador_de_Conexiones_y_Mapas.md`  
> **Propósito**: Herramienta rápida para generar la topología de salas en una matriz 5x5 con huecos libres y tirada 1d8 de Subdungeon.  
> **Estilo**: *Zelda 2D* / *The Binding of Isaac* (Habitaciones orgánicas con nodos vacíos y ramificaciones).

---

## 1. Opción Automática: Script de Python (`generador_laberinto.py`)

El script crea una mazmorra 5x5 ramificada orgánicamente con ~12-14 salas activas y celdas vacías, integrando la tirada 1d8:

```bash
# Incursión aleatoria 5x5 (Tirada 1d8 automática)
python3 generador_laberinto.py

# Seleccionar opción 1..8 explícitamente (ej: 1=FIRE, 7=BOSS, 8=NADA)
python3 generador_laberinto.py --subdungeon 1
python3 generador_laberinto.py --subdungeon 8

# Reproducir un mapa específico usando semilla
python3 generador_laberinto.py --seed 42
```

---

## 2. Opción Manual: Tablas con Dados (Zero-Tech DM Tables)

Si generas el mapa manualmente en mesa:

### PASO 1: Tirada 1d8 de Subdungeon Abierta Hoy
| 1d8 | Subdungeon Accesible | Guardián de Área | Ubicación Sugerida |
| :---: | :--- | :--- | :--- |
| **1** | **FIRE (La Caldera Volcánica)** | El Señor del Crisol | Nodo más lejano (Subdungeon). |
| **2** | **WATER (La Cisterna Sumergida)** | La Quimera Hidráulica | Nodo más lejano (Subdungeon). |
| **3** | **AIR (La Torre de los Vientos)** | El Coloso del Vértice | Nodo más lejano (Subdungeon). |
| **4** | **EARTH (El Dominio Telúrico)** | El Titán de Basalto | Nodo más lejano (Subdungeon). |
| **5** | **LIFE (El Invernadero Ancestral)** | El Botánico de Sombras | Nodo más lejano (Subdungeon). |
| **6** | **LIGHT (El Santuario Prismático)** | El Espejismo de Cristal | Nodo más lejano (Subdungeon). |
| **7** | **BOSS FINAL (Sanctum de Minos)** | El Juicio de Minos | Nodo más lejano (Sanctum). |
| **8** | **NADA** | Sin Guardián hoy | Exploración estándar del laberinto principal. |

---

### PASO 2: Tirada de Estado de Conexión de Puertas (1d8 por Pasadizo)

| 1d8 | Estado de la Puerta / Pasadizo | Requisito para Desbloquear |
| :---: | :--- | :--- |
| **1-3** | **Puerta Abierta de Par en Par** | Tránsito libre. |
| **4** | **Compuerta de Glifos Alrestianos** | Ingresar la Triada de 3 Gemas (`01-Sistema_de_Escritura_Alrestiano.md`). |
| **5** | **Bloqueada por Hielo Mágico** | Usar **FIRE** o calor de La Forja. |
| **6** | **Muro de Piedra Frágil / Secreta** | Usar **EARTH** *Shatter* o prueba de Fuerza DC 16. |
| **7** | **Conducto de Agua Hirviendo** | Usar **WATER** para desviar agua o abrir Válvula de Sala 02. |
| **8** | **Tupida por Vides Arcanas / Gas** | Usar **LIFE** o quemar las raíces con antorcha. |

---

## 3. Plantilla de Dibujo en Rejilla 5x5 (Zelda 2D Layout)

```
    Col 1        Col 2        Col 3        Col 4        Col 5
A [  A1  ] --- [  A2  ] --- [  A3  ] --- [  A4  ] --- [  A5  ]
     |            |            |            |            |
B [  B1  ] --- [  B2  ] --- [  B3  ] --- [  B4  ] --- [  B5  ]
     |            |            |            |            |
C [  C1  ] --- [  C2  ] --- [  C3  ] --- [  C4  ] --- [  C5  ]
   (ATRIO)
     |            |            |            |            |
D [  D1  ] --- [  D2  ] --- [  D3  ] --- [  D4  ] --- [  D5  ]
                                       (SUBDUNGEON)
     |            |            |            |            |
E [  E1  ] --- [  E2  ] --- [  E3  ] --- [  E4  ] --- [  E5  ]
```
