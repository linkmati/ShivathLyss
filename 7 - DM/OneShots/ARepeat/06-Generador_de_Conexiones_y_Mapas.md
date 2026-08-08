# Generador de Conexiones y Topología de Mapas (5x5 Rejilla Isaac / Zelda)

> **Ubicación**: `7 - DM/OneShots/ARepeat/06-Generador_de_Conexiones_y_Mapas.md`  
> **Propósito**: Herramienta rápida para generar la topología de salas en una matriz 5x5 con huecos libres (abismos/muros inamovibles).  
> **Estilo**: *Zelda 2D* / *The Binding of Isaac* (Habitaciones orgánicas con nodos vacíos y ramificaciones).  
> **Nota**: *Tú diseñas el mapa visual. Este sistema te da la disposición lógica y las conexiones.*

---

## 1. Opción Automática: Script de Python (`generador_laberinto.py`)

El script crea una mazmorra 5x5 ramificada orgánicamente con ~12-14 salas activas y celdas vacías:

```bash
# Incursión aleatoria 5x5
python3 generador_laberinto.py

# Incursión forzando un Día Astral (FIRE, WATER, AIR, EARTH, LIFE, LIGHT)
python3 generador_laberinto.py --dia FIRE

# Reproducir un mapa específico usando semilla
python3 generador_laberinto.py --seed 42
```

### Ejercicio Visual de la Matriz 5x5 Generada:
```
       1              2              3              4              5
A [A1: --- VACÍO --- ] [A2: --- VACÍO --- ] [A3: --- VACÍO --- ] [A4: --- VACÍO --- ] [A5: --- VACÍO --- ] 

B [B1:Sala 07: Cr] [B2:Sala 10: Pi] [B3:Sala 08: Ac] [B4: --- VACÍO --- ] [B5: --- VACÍO --- ] 

C [C1:Sala 01: At] [C2:Sala 02: De] [C3: --- VACÍO --- ] [C4: --- VACÍO --- ] [C5: --- VACÍO --- ] 

D [D1:Sala 03: In] [D2:Sala 06: Sa] [D3:Sala 11: Ga] [D4:[SUBDUNGEON] [D5: --- VACÍO --- ] 

E [E1:Sala 04: En] [E2: --- VACÍO --- ] [E3:Sala 14: Cá] [E4: --- VACÍO --- ] [E5: --- VACÍO --- ] 
```

---

## 2. Opción Manual: Tablas con Dados (Zero-Tech DM Tables)

Si generas el mapa manualmente en mesa:

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

### PASO 2: Tirada de Estado de Conexión de Puertas (1d8 por Pasadizo)

Tira 1d8 para cada pasadizo entre salas adyacentes:

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

Dibuja o dispone tus losetas en las coordenadas activas, dejando las celdas vacías como abismos sin suelo o muros macizos:

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
