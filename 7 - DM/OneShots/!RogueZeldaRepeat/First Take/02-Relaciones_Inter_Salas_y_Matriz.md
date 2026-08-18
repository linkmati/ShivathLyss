# Relaciones Inter-Salas, Redes Causales y Persistencia de Puertas

> **Ubicación**: `7 - DM/OneShots/ARepeat/02-Relaciones_Inter_Salas_y_Matriz.md`  
> **Sistema**: Redes Causales de Área + Persistencia Mixta + Sala Secreta Isaac Pura (Sin Adyacencia a Subdungeon).  
> **Palabras de Poder de Shivath**: **Fire**, **Water**, **Air**, **Earth**, **Life**, **Light**.

---

## 1. Regla de Reseteo Físico y Soluciones Deterministas (Outer Wilds Style)

```
======================================================================
     🔁 RESETEO COMPLETO DE ESTADO VS. SOLUCIONES FIJAS 🔁
======================================================================
1. RESETEO TOTAL DE SALAS ENTRE INCURSIONES:
   - Al iniciar una nueva run (tras cambiar de día o por colapso), 
     todas las salas, palancas, interruptores y puzles SE RESETEAN FÍSICAMENTE
     a su estado inicial cerrado o bloqueado.

2. SOLUCIONES DETERMINISTAS Y CONOCIMIENTO JUGADOR / PERSONAJE:
   - Las combinaciones de engranajes, secuencias de botones, claves y patrones de espejos PERMANECEN EXACTAMENTE IGUALES entre incursiones.
   - **Deducción Directa por el Jugador (Player Skill)**: Si los jugadores deducen la clave mediante pistas del entorno (ej. `3-1-5`), la prueban y funciona, la anotan en su libreta física y queda resuelta para siempre sin tiradas.
   - **Resolución por Tirada de Habilidad (Character Skill)**:
     * **Éxito (>= DC)**: El personaje comprende la lógica del puzle, abre la puerta Y dicta la solución al grupo para inscribirla en la libreta física.
     * **Fail Forward / Éxito con Coste (Fallo por 1-3 pts sobre DC)**: La puerta se abre, pero narrativamente ocurre un forzado que CONSUME 1 CARGA ARCANA (o activa una trampa menor). Avanzan en la run actual, pero **no pueden anotarla con precisión en la libreta** para saltársela gratis en runs futuras.
   - **Travesía Instantánea (Theatre of the Mind)**: Desplazarse por salas ya recorridas y despejadas dentro de la MISMA incursión es **100% instantáneo** mediante teatro de la mente (sin tiradas ni combates de relleno).

3. REVELACIÓN DEL MAPA EN MESA (DIBUJO DEL DM):
   - El DM dibuja progresivamente el mapa en el tablero físico de la mesa mostrando las celdas/conexiones a las que el grupo puede desplazarse.
   - **Contenido Oculto**: Los jugadores ven la geometría de las salas adyacentes a las que pueden ir, pero **NO saben qué hay dentro de cada celda ni su tipo/rol** hasta que cruzan el umbral y entran en ella.
======================================================================
```

---

## 2. Regla de Generación de la Sala Secreta de Isaac (🗝️)

```
======================================================================
     🗝️ SALA SECRETA DE ISAAC (REGLA DE NO ADYACENCIA A SUBDUNGEON) 🗝️
======================================================================
1. UBICACIÓN MULTI-SALA:
   - Se genera SIEMPRE 1 Sala Secreta por incursión.
   - Se ubica en un hueco de la rejilla 7x7 que conecta con DOS O MÁS (2, 3 o 4)
     SALAS ACTIVAS vecinas.

2. PROHIBIDA LA ADYACENCIA A LA SUBDUNGEON:
   - NUNCA se genera en celdas colindantes a la Subdungeon Boss (Regla Isaac).
     La Sala Secreta debe estar en una rama distinta del laberinto.

3. SIN PISTAS EXTERNAS NI DIBUJO EN MAPA (DEDUCCIÓN PURA):
   - **No se Dibuja en el Mapa de Jugadores**: El DM **NUNCA dibuja la celda de la Sala Secreta** ni sus bordes en el tablero físico de los jugadores. Permanece completamente invisible e indetectable a simple vista.
   - **Deducción por Geometría del Cuaderno**: Los jugadores deducen su ubicación observando la geometría de su propio cuaderno dibujado, identificando huecos no revelados rodeados por 2, 3 o 4 salas.
   - **Apertura**: Para abrirla, deben usar una **Bomba Rúnica** o la habilidad **EARTH (Martillo/Shatter)** en el muro macizo que colinda con el espacio hueco.
======================================================================
```

---

## 3. Catálogo de Puertas Mecánicas No Elementales 

Para evitar la dependencia exclusiva de elementos arcanos, el laberinto incorpora cerrojos puramente mecánicos e ítems genéricos de dungeon. **Una vez que los jugadores entienden la mecánica en su primera run, su resolución en expediciones subsecuentes es rápida y directa** gracias al registro en el cuaderno físico:

```
======================================================================
     ⚙️ PUERTAS MECÁNICAS Y LLAVES DE INCURSIÓN (NO ELEMENTALES) ⚙️
======================================================================
1. PUERTA DE LLAVE DE LATÓN (🗝️ Small Key Door):
   - Requiere 1 Llave de Latón genérica hallada en cofres comunes, escombros 
     o enemiguitos constructos de la rejilla.
   - Puzle Repetible: Tras descubrir qué sala contiene la llave, en runs 
     posteriores el grupo anota su ubicación y la recoge en 1 turno.

2. PUERTA DE CONTRAPESOS DE BÁSCULA (⚖️ Weight Balance Door):
   - Exige equilibrar 2 platos de basalto (ej. colocar 2 rocas pesadas o el 
     peso de 2 personajes en un plato para igualar el contrapeso).
   - Puzle Repetible: La combinación de peso queda anotada ("Plato Izq = 2 PJs / 
     Plato Der = 1 bloque de piedra"), resolviéndose al instante en futuras runs.

3. PUERTA DE CLAVE DE ENGRANAJES MURALES (⚙️ Rotary Pin Lock):
   - Ruedas dentadas de bronce con muescas numeradas del 1 al 6.
   - Puzle Repetible: La secuencia (ej. 4-2-6) se deduce la primera vez por marcas 
     en la pared o inspección manual, y se ejecuta en 5 segundos en siguientes runs.

4. PUERTA DE PASADORES SINCRONIZADOS (⏱️ Simultaneous Levers):
   - Dos palancas en extremos opuestos de la sala (o salas colindantes) deben 
     ser accionadas en el mismo turno/segundo.
   - Puzle Repetible: Exige coordinar 2 aventureros o trabar 1 palanca con un 
     bloque/cuerda y correr a la otra. Mecánica pura sin consumo arcano.

5. PUERTA DE MOLDE Y FUNDICIÓN FRÍA (🕯️ Key Mold Door):
   - Muro con hendidura cilíndrica profunda. Requiere encontrar un Molde de Cera
     y derretir una aleación blanda en la sala de la forja para crear la llave.
   - Puzle Repetible: Aprendida la ruta entre la forja y el pasaje, se completa 
     en 1 turno de desplazamiento.

6. PUERTA DE PASADOR DE ALTA TENSIÓN (🏋️ Heavy Latch Bar):
   - Rastrillo de hierro pesado bloqueado por un pasador de trinquete de alta tensión.
   - Puzle Repetible: Requiere un personaje con Fuerza >= 12 tirando del mecanismo 
     o atándolo con cuerdas/estacas para mantenerlo abierto mientras cruzan.
======================================================================
```

---

## 5. Catálogo de Cerrojos con Pruebas de Habilidad Inusuales (Unusual Skill Checks)

Para dinamizar la exploración sin limitarse a tiradas repetitivas de Percepción/Investigación/Atletismo, estas puertas requieren **usos creativos de habilidades inusuales** (Arcanismo, Engaño, Intimidación, Juego de Manos, Naturaleza, Perspicacia, Interpretación, Medicina, etc.). Una vez descubierta la técnica o respuesta la primera vez, se anota en el cuaderno físico y su paso en runs futuras es inmediato:

```
======================================================================
     🧠 CERROJOS CON PRUEBAS DE HABILIDAD INUSUALES (UNUSUAL CHECKS) 🧠
======================================================================
1. PUERTA BIOMECÁNICA SANGRANTE (🏥 Check: Medicina DC 13):
   - Músculo petrificado y savia arcana. Palpar el "pulso" y hacer una punción 
     quirúrgica en la arteria rúnica correcta drena la presión muscular.

2. PUERTA DE FRISO DINÁSTICO (📜 Check: Fuerza [Historia] DC 13):
   - Losas de 200 lbs grabadas con reyes antiguos. Exige conocer el orden dinástico 
     mientras se ejerce fuerza física palanca para rotar las piedras pesadas.

3. PUERTA DE SALMODIA LITÚRGICA (📜 Check: Religión / Teología DC 13):
   - Efigies de Alrest que requieren recitar los versos arcanos de consagración 
     en la cadencia y tono ritual correctos.

4. PUERTA DE RESONANCIA CUÁNTICA (🎵 Check: Interpretación / Instrumento DC 13):
   - Cierre de cuarzo bloqueado por frecuencia armónica. Cantar o tocar la nota 
     exacta (ej. Sol#) que descompone la cristalización del cerrojo.

5. PUERTA DE NIDO DE VERMES CONSTRUCTO (🪲 Check: Trato con Animales DC 13):
   - Cerradura tupida por larvas de basalto. Guiar o alimentar a los insectos 
     con virutas de mineral para que royan el pestillo.

6. PUERTA DE FISURAS MICRO-GASEOSAS (💨 Check: Supervivencia Subterránea DC 13):
   - Muro con 6 orificios; 5 liberan gas tóxico y 1 activa el pasador. Leer la 
     dirección de micro-corrientes térmicas en las fisuras para dar con el correcto.

7. SELLO ARCANO DE DECODIFICACIÓN (🔮 Check: Arcanismo DC 13):
   - Glifo de retención en el umbral. Reconocer la firma rúnica para invertir 
     su polaridad y disipar la barrera de contención.

8. GUARDIÁN DEL ECO ESPESTRAL (🎭 Check: Engaño / Deception DC 13):
   - Relieve parlamentario de piedra. Mentir con convicción proclamando ser 
     el heraldo del Rey Minos para engañar a la cerradura espectral.

9. CRISTAL SUMISO DE ESPINAS (👥 Check: Intimidación DC 13):
   - Umbral bloqueado por espinas de cuarzo pulsante. Proyectar fuerza de voluntad 
     imponente para amedrentar la frecuencia del cristal y hacer que se retraiga.

10. CERRADURA ROTATORIA DE ALTA VELOCIDAD (🖐️ Check: Juego de Manos DC 13):
    - Engranaje con muescas girando a alta velocidad. Insertar un vástago de titanio 
      en la muesca exacta sin romper la aguja en el intento.

11. VIDES DE RAÍZ SENSIBLE (🌿 Check: Naturaleza DC 13):
    - Puerta tupida por vides carnívoras. Frotar el polen de feromonas adecuado 
      en el bulbo central para que relaje sus tallos.

12. EFIGIE DE ROSTRO CAMBIANTE (👁️ Check: Perspicacia / Insight DC 13):
    - Relieve facial ancestral. Leer la sutil micro-expresión en la mirada del 
      rostro para deducir qué ojo de cuarzo presionar.
======================================================================
```

---

## 6. Muros Sólidos y Bloqueos Adyacentes

> [!IMPORTANT]
> **REGLA DE MUROS SÓLIDOS (CONEXIONES BLOQUEADAS)**:
> 1. **Adyacencia no implica Conexión**: Aunque dos salas activas acaben colindando físicamente en el mapa 7x7 por coincidencia espacial, **no siempre habrá una puerta abierta entre ellas**.
> 2. **Generación de Muros**: Existe una probabilidad del 25% de que dos salas adyacentes (que no forman parte directa de la ruta obligatoria generada por la rama del laberinto) estén separadas por un muro macizo.
> 3. **Representación Visual**: En la Web App, estas conexiones bloqueadas se renderizan con un borde rojo oscuro (`door-wall`), y en el texto exportado aparecen marcadas explícitamente como `❌ MURO SÓLIDO (BLOQUEADO)`.
> 4. **Destrucción o Salto**: A discreción del DM, los jugadores con herramientas de excavación masiva o explosivos muy pesados podrían intentar romper un muro sólido, o usar hechizos de teletransporte ciego (`Paso Brumoso` a través de ranuras) si logran ver el otro lado.
