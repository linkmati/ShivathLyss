# Generador de Conexiones y Topología de Mapas (Web App 7x7 & Python)

> **Ubicación**: `7 - DM/OneShots/ARepeat/06-Generador_de_Conexiones_y_Mapas.md`  
> **Web App Interactiva**: [`generador_minos_7x7.html`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/generador_minos_7x7.html) (Fichero de un clic).  
> **Script CLI Python**: [`generador_laberinto.py`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/generador_laberinto.py) (Ejecutable por terminal).

---

## 1. Aplicación Web Interactiva 7x7 (`generador_minos_7x7.html`)

Abre el archivo [`generador_minos_7x7.html`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/generador_minos_7x7.html) con un doble clic en cualquier navegador web.

### Características de la Web App:
* **Matriz Interactiva 7x7**: Visualiza las 49 celdas (A1 a G7) con codificación por colores para Atrios, Subdungeons, Salas Secretas y Huecos Libres.
* **Generación 1d8 Automática**: Botón **"⚡ Generar Mazmorra 7x7"** con selección de Subdungeon (FIRE, WATER, AIR, EARTH, LIFE, LIGHT, BOSS, NADA).
* **Edición Manual Celda a Celda**:
  * Haz clic en cualquier celda para activar/desactivar la sala.
  * Cambia el tipo de sala con un desplegable de plantillas Zelda o pon un nombre personalizado.
  * Configura el rol especial (Entrada Atrio, Subdungeon Boss, Sala Secreta).
* **Edición Total de Conexiones de Puertas**:
  * Configura el estado de cada pasadizo en las 4 direcciones (Norte, Sur, Este, Oeste): *Puerta Abierta, Glifos 3-Gemas, Hielo, Muro Bomba, Agua, Viento, Vides, Espejo, Rejilla Atajo o Muro Macizo*.
* **Exportación / Importación**: Copia el resumen formateado para Obsidian/Discord o guarda/carga el mapa en archivo JSON.

---

## 2. Script de Terminal Python (`generador_laberinto.py`)

Para uso rápido desde consola:

```bash
# Incursión aleatoria 7x7 o 5x5
python3 generador_laberinto.py

# Seleccionar opción de Subdungeon 1..8
python3 generador_laberinto.py --subdungeon 1
```

---

## 3. Tablas Manuales con Dados (Zero-Tech DM Tables)

### Tirada 1d8 de Subdungeon Abierta Hoy
| 1d8 | Subdungeon Accesible | Guardián de Área |
| :---: | :--- | :--- |
| **1** | **FIRE (La Caldera Volcánica)** | El Señor del Crisol |
| **2** | **WATER (La Cisterna Sumergida)** | La Quimera Hidráulica |
| **3** | **AIR (La Torre de los Vientos)** | El Coloso del Vértice |
| **4** | **EARTH (El Dominio Telúrico)** | El Titán de Basalto |
| **5** | **LIFE (El Invernadero Ancestral)** | El Botánico de Sombras |
| **6** | **LIGHT (El Santuario Prismático)** | El Espejismo de Cristal |
| **7** | **BOSS FINAL (Sanctum de Minos)** | El Juicio de Minos |
| **8** | **NADA** | Exploración estándar |
