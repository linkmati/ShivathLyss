# Ficha de Control del DM y Tablero de Rumores (Outer Wilds Curiosity Board)

> **Ubicación**: `7 - DM/OneShots/ARepeat/05-Ficha_Control_DM_y_Tablero_Rumores.md`  
> **Propósito**: Herramienta interactiva para que el DM gestione la persistencia del laberinto entre múltiples sesiones y grupos de jugadores.  
> **Palabras de Poder de Shivath**: **Fire**, **Water**, **Air**, **Earth**, **Life**, **Light**.

---

## 1. El Tablero de Rumores (Grafo de Conocimiento)

Este es el mapa visual de misterios que los jugadores completan en el **Diario del Gremio**. Cada nodo representa un secreto o mecánica que abre el paso a nuevas áreas:

```mermaid
graph TD
    N1["Nodo 1: La Estela Bilingüe"] -->|"Muestra Glifos de Shivath"| N2["Nodo 2: Consolas de Minos"]
    N2 -->|"Revela Mandatos de Drenaje"| N3["Nodo 3: La Válvula de la Forja"]
    N3 -->|"Enfría La Forja"| N4["Nodo 4: Acceso a la Cripta Helada"]
    
    N1 -->|"Descifra Rota-Dextro"| N5["Nodo 5: El Engranaje Maestro"]
    N5 -->|"Invierte Sala 06"| N6["Nodo 6: La Ruta del Techo"]
    N6 -->|"Permite colocar Anclas"| N7["Nodo 7: El Pilar de Anclas"]
    
    N3 & N6 & N8["Nodo 8: Red de Luz e Invernadero"] --> N9["Nodo 9: La Puerta Hexagonal"]
    N9 --> N10["Nodo 10: El Sanctum / Boss Final"]
```

---

## 2. Ficha de Registro de Estado Persistente (DM Checklist)

Imprime o copia este bloque para llevar el estado actual de tu campaña:

```markdown
### ESTADO DEL LABERINTO DE MINOS (Campaña Activa)

#### A. Estado de Nodos y Redes Inter-Salas
- [ ] Válvula de Agua (Sala 02 - WATER): [ CERRADA / ABIERTA ] -> La Forja está [ INUNDADA / SECA ]
- [ ] Invernadero Solar (Sala 03 - LIFE/LIGHT): [ SIN LUZ / ILUMINADO ]
- [ ] Engranaje Maestro (Sala 04 - EARTH/AIR): [ ORIENTACIÓN 0° / 90° DEXTRO / 180° ]
- [ ] Horno de la Forja (Sala 05 - FIRE): [ APAGADO / ENCENDIDO ] -> Cripta Helada está [ CONGELADA / DERRETIDA ]
- [ ] Espejos Rúnicos (Sala 09 - LIGHT): [ DESALINEADOS / ALINEADOS ]
- [ ] Puerta Hexagonal del Núcleo (Sala 12): [ SELLADA / 1 de 4 / 2 de 4 / 3 de 4 / ABIERTA ]

#### B. Guardianes Persistentes
- [ ] Botánico de Sombras (Sala 03): [ VIVO / DERROTADO ] (Plaga de toxinas limpia: [ SI / NO ])
- [ ] Quimérico Volcánico (Sala 05): [ VIVO / DERROTADO ] (Calor de la Forja regulado: [ SI / NO ])
- [ ] El Juicio de Minos (Boss Final): [ INACTIVO / DERROTADO ]

#### C. Glifos Traducidos en el Diario
- [x] Glifos de Shivath (Fire, Water, Air, Earth, Life, Light)
- [ ] Directivo Kael-Up / Kael-Down
- [ ] Directivo Rota-Dextro / Rota-Sinistro
- [ ] Directivo Vinc-Anchor
- [ ] Combinación del Juicio ([FIRE] -> [EARTH] -> [LIGHT] -> [WATER])

#### D. Anclas Arcanas Colocadas por Jugadores
- Sala Anclada 1: _____________________
- Sala Anclada 2: _____________________
```

---

## 3. Guía de Inicio Rápido de Sesión (DM Zero-Prep)

Para dirigir una incursión improvisada de 2 horas:

1. **Paso 1 (Entrada y Sintonía)**:
   * Los jugadores entran a la Sala 01. Entrega **10 Puntos de Carga Arcana** al grupo.
   * Cada jugador escoge su **Sintonía Elemental** (Fire, Water, Air, Earth, Life, Light).
2. **Paso 2 (Tirada de Alineamiento)**:
   * Tira **1d6** en la *Tabla de Alineamientos* (`02-Relaciones_Inter_Salas_y_Matriz.md`).
   * Determina las salas conectadas en esta expedición.
3. **Paso 3 (Bucle de Carga)**:
   * Resta 1 de Carga Arcana por sala explorada o puzle fallado.
   * Al llegar a 0, narra el colapso espacial y la expulsión segura al campamento.
4. **Paso 4 (Cierre y Notas)**:
   * Pide a los jugadores que escriban sus descubrimientos en el **Diario de la Mina** para la siguiente sesión.
