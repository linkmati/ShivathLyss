# El Sistema de Escritura de Minos (Lenguaje Alrestiano Arcaico)

> **Ubicación**: `7 - DM/OneShots/ARepeat/01-Sistema_de_Escritura_Alrestiano.md`  
> **Inspiración**: *Alfabeto Alrestiano (Xenoblade Chronicles)* + *Criptografía de Puzles (Outer Wilds)*

---

## 1. Naturaleza Criptográfica del Lenguaje

Las inscripciones en las paredes, puertas y consolas del laberinto no son decoración: son **mandatos de código ejecutable** tallados en piedra y cristal. El idioma se compone de **Ideogramas Base** combinados con **Modificadores Directivos** y **Sellos Elementales**.

```
[IDEOGRAMA BASE] + [MODIFICADOR DIRECTIVO] + [SELLO ELEMENTAL] = [ORDEN DEL LABERINTO]
```

Ejemplo: `[AQUA] + [SHIFT_DOWN] + [FORGE]` = *"Drenar todo el líquido de la Forja Central hacia el nivel inferior"*.

---

## 2. Diccionario de Glifos (Ideogramas Principales)

### A. Glifos Elementales (Símbolos Primarios)

| Glifo | Nombre Alrestiano | Significado Físico / Mapeo |
| :---: | :--- | :--- |
| `🟁` | **Ignis / Pyros** | Fuego, Calor, Digestión Térmica, Activación de Forja. |
| `🟂` | **Aura / Hydro** | Agua, Líquidos, Presión Hidráulica, Enfriamiento. |
| `🟃` | **Fulmen / Fulgur** | Rayo, Energía, Corriente Continua, Reducción de Barrera. |
| `🟄` | **Vapor / Zephyr** | Viento, Gas, Presión de Vaciado, Vuelo / Plataforma Elevadora. |
| `🟅` | **Terra / Geo** | Piedra, Muro, Ancla Espacial, Peso, Masa Físicamente Inamovible. |
| `🟆` | **Nox / Umbra** | Vacío, Fase Astral, Resonancia Oculta, Registro de Memoria. |

### B. Glifos de Acción y Orientación (Modificadores Directivos)

| Glifo | Nombre Alrestiano | Función de Consola / Efecto |
| :---: | :--- | :--- |
| `▲` | **Kael-Up** | Elevar, Abrir Compuerta Superior, Calentar Temperatura. |
| `▼` | **Kael-Down** | Descender, Drenar, Enfriar Temperatura, Cerrar Compuerta. |
| `↻` | **Rota-Dextro** | Rotar sala 90° a la derecha (Sentido Horario). |
| `↺` | **Rota-Sinistro** | Rotar sala 90° a la izquierda (Sentido Anti-horario). |
| `◈` | **Vinc-Anchor** | Anclar sala actual (Impide que se mueva en el próximo *Shift*). |
| `☌` | **Conex-Flux** | Conectar conducto entre la sala actual y la sala adyacente. |
| `⊗` | **Purge-Null** | Resetear estado de la sala / Desactivar trampa activa. |

---

## 3. Mecánica de Descifrado Progresivo en Mesa

Inicialmente, los jugadores ven los páneles como **patrones geométricos incomprensibles**. El descifrado se logra de tres formas:

1. **La Estela Bilingüe de la Entrada**:
   * Otorga la traducción de los 6 Glifos Elementales Básicos desde la primera sesión.
2. **Tablillas Fragmentadas (Pistas dispersas)**:
   * Al explorar salas avanzadas, los jugadores encuentran notas de antiguos ingenieros con inscripciones traducidas parcialmente (ej: *"El glifo ↻ siempre gira la rueda de agua"*).
3. **Resonancia Umbra**:
   * El jugador con **Sintonía Umbra** puede tocar glifos oscuros para "escuchar" el eco de su significado, revelando el modificador directivo oculto.

---

## 4. Consolas de Minos (Ingreso de Comandos)

En ciertas salas clave (Hub Central, La Forja, El Salón del Engranaje), existen **Consolas de Piedra con Esferas Rúnicas**.

```
+-------------------------------------------------------+
|                CONSOLA DE MINOS                       |
|                                                       |
|  [Ranura 1: Elemento]  [Ranura 2: Dirección/Acción]    |
|       ( 🟂 Hydro )            ( ▼ Kael-Down )          |
|                                                       |
|  [Ranura 3: Destino]                                  |
|       ( 🟁 Pyros - La Forja )                         |
|                                                       |
|  RESULTADO: "Drenar el agua sobre la Forja"           |
+-------------------------------------------------------+
```

### Reglas de Uso de Consolas:
* **Gasto de Carga**: Pulsar una combinación errónea en una consola consume **1 Punto de Carga Arcana** debido a la descarga de sobretensión.
* **Confirmación Auditiva**: Si la combinación es correcta, la consola emite una nota armónica resonante y la sala afectada cambia su estado (incluso si está a varias salas de distancia).
