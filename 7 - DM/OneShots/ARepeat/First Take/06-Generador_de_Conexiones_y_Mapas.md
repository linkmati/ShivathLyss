# Generador de Conexiones y Topología de Mapas (Web App 7x7)

> **Ubicación**: `7 - DM/OneShots/ARepeat/06-Generador_de_Conexiones_y_Mapas.md`  
> **Herramienta Única Recomendada**: [`generador_minos_7x7.html`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/generador_minos_7x7.html) (Fichero de 1 clic).

---

## 1. Aplicación Web Interactiva 7x7 (`generador_minos_7x7.html`)

Abre el archivo [`generador_minos_7x7.html`](file:///Users/matiasbay/Documents/Obsidian/Shivath/7%20-%20DM/OneShots/ARepeat/generador_minos_7x7.html) con un doble clic en cualquier navegador web.

### Características de la Web App:
* **Matriz Interactiva 7x7**: Visualiza las 49 celdas (A1 a G7) con celdas de tamaño rígido y codificación por colores para Atrios, Subdungeons, Salas Secretas y Huecos Libres.
* **Generación 1d8 Automática Dispersa**: Botón **"⚡ Generar Mazmorra 7x7"** con selección de Subdungeon (FIRE, WATER, AIR, EARTH, LIFE, LIGHT, BOSS, NADA).
* **Restricción de Distancia de Subdungeon**: La Subdungeon activa se genera como máximo a **3 pasadizos de distancia** de la Entrada.
* **Sala Secreta Obligatoria estilo Isaac (🗝️)**: Siempre se incluye una Sala Secreta en muros de piedra agrietada (`Muro Bomba`).
* **Atrio Móvil**: La Entrada se coloca en celdas variadas o el DM puede seleccionar cualquier celda y hacer clic en **"📍 Hacer Entrada (Atrio)"**.
* **Edición Manual Celda a Celda**:
  * Haz clic en cualquier celda para activar/desactivar la sala.
  * Cambia el tipo de sala con un desplegable de plantillas Zelda o pon un nombre personalizado.
  * Configura el rol especial (Entrada Atrio, Subdungeon Boss, Sala Secreta).
* **Edición Total de Conexiones de Puertas**:
  * Configura el estado de cada pasadizo en las 4 direcciones (Norte, Sur, Este, Oeste): *Puerta Abierta, Glifos 3-Gemas, Hielo, Muro Bomba, Agua, Viento, Vides, Espejo, Rejilla Atajo o Muro Macizo*.
* **Exportación / Importación**: Copia el resumen formateado para Obsidian/Discord o guarda/carga el mapa en archivo JSON.

### 🎲 Flujo de Mesa Física del DM (Fog of War Manual):
* **Dibujo Progresivo**: El DM proyecta o dibuja en la mesa las celdas y conexiones a las que los jugadores pueden desplazarse según se abre la topología.
* **Contenido Oculto**: Los jugadores ven la cuadrícula de salas a las que pueden ir, pero **NO se les revela el nombre, tipo, puzle o contenido** de la celda hasta que abren la puerta y entran.

---

## 2. Tablas Manuales con Dados (Zero-Tech DM Tables)

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
