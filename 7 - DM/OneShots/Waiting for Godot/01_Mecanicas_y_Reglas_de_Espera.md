# ⚙️ Mecánicas y Reglas de Espera — Waiting for Godot (Shivath)

> *"El tiempo es una ilusión provocada por el refresco de pantalla del servidor."*  
> — Manual de Usuario de STELLAR, Sector 404

Este documento contiene todas las reglas, subsistemas interactivos y minijuegos psicológicos diseñados para transformar la "inacción" de la espera en un juego tenso, hilarante y existencialmente agotador para la mesa.

---

## ⏳ 1. El Sistema de Dilatación Temporal (El Servidor Especulativo)

En la High City de Treftiel, el tiempo virtual no corre parejo al biológico. Para ahorrar potencia de cálculo en nodos abandonados o de bajo tráfico, el motor de **STELLAR** aplica compresión dinámica de fotogramas (*Throttling de Ciclo*).

### La Paradoja del Reloj de Pared
En el diner hay un gran reloj analógico sobre la barra cromada con tres manecillas que a veces giran hacia adelante, a veces hacia atrás, o tiemblan en el mismo segundo durante diez minutos.

* **Regla de Percepción Temporal:** Los jugadores tienen prohibido mirar sus relojes o móviles reales para consultar la hora en partida. Si un personaje pregunta qué hora es, intenta estimar el tiempo o mira el reloj de la pared, hazle tirar **1d20 + modificador de Sabiduría o Tecnología**:

| d20 + Mod | Resultado Temporal Percibido y Efecto en la Mesa |
|:---:|---|
| **1 (Pifia)** | **Colapso de Sincronía:** El reloj empieza a girar a toda velocidad hacia atrás. El personaje experimenta náusea temporal: *"Sientes que acaban de pasar 3 semanas de pura soledad en medio segundo"*. Gana **1 nivel de Fatiga Mental** (desventaja en la próxima tirada social o de concentración). |
| **2 – 6** | **Lag Subjetivo:** Solo han pasado **4 minutos y 12 segundos** desde la última comprobación. Sin embargo, los personajes sienten en sus músculos y espalda la pesadez de haber estado sentados 6 horas seguidas. El café sigue hirviendo exactamente a la misma temperatura. |
| **7 – 12** | **Salto de Fotogramas:** El reloj parpadea en negro un milisegundo y avanza de golpe **1 hora y 40 minutos**. No ha ocurrido absolutamente nada en ese intervalo. Si estaban hablando, olvidan a mitad de frase de qué estaban hablando. |
| **13 – 17** | **Bucle Estático:** El reloj marca exactamente **18:00:00**. Los segunderos avanzan 5 segundos y vuelven a saltar a las 18:00:00 con un chasquido metálico. |
| **18 – 19** | **Compresión de STELLAR:** Han pasado **3 horas**. Las sombras de la terraza se han alargado, pero nadie recuerda haber visto el atardecer. Si tenían bufos de corta duración (10 min o 1 hora), se han disipado en la nada. |
| **20 (Nat 20)** | **Aura de Revelación Absurda:** Las tres manecillas se alinean verticalmente y el cristal digital proyecta en letras verdes fosforito: `TIEMPO RESTANTE: SÍ`. El personaje recupera 1 slot de conjuro de nivel 1 por la pura catarsis de entender que el tiempo no importa. |

### El "Coste de Cómputo" (Tensión en la Mesa)
Cada vez que los jugadores intentan realizar acciones complejas innecesarias (lanzar hechizos visuales grandilocuentes, invocar familiares, quemar objetos con magia, registrar cada baldosa), el servidor sufre *latencia*:
* Los sonidos llegan con medio segundo de retraso.
* Las tiradas de dados físicas en la mesa deben repetirse si alguien dice la palabra *"Rápido"*.

---

## ⚠️ 2. Protocolo de Inactividad (AFK Warnings)

Para evitar que los usuarios ocupen pods de inmersión en la High City sin generar consumo comercial ni actividad cerebral válida, **The Registry** y el motor de **STELLAR** tienen activado un protocolo de expulsión por inactividad implacable.

Si los jugadores guardan silencio en la mesa durante más de **30 segundos** o sus personajes declaran que *"no hacen nada y solo esperan"*, se activan las alertas escalonadas:

```
[Silencio >30s] 
   └── FASE 1: Alerta Amarilla (Ping Háptico & Desaturación)
         └── [Si persiste 1 min]
               └── FASE 2: Alerta Naranja (Recaptcha Biomecánico & Voz Sintetizada)
                     └── [Si persiste 30s]
                           └── FASE 3: Alerta Roja (Desconexión Forzosa & Multa del Registro)
```

### Fase 1: Alerta Amarilla — *Ping Háptico & Desaturación*
* **Señal:** Un pitido agudo y molesto resuena directamente en el cráneo de los personajes (`*BEEP... BEEP...*`). Los colores del diner pierden un 50% de saturación, volviéndose todo grisáceo y apagado.
* **Efecto:** La interfaz parpadea en la esquina de la visión: `[AVISO: DETECTADA INACTIVIDAD DE ENLACE COGNITIVO]`.
* **Cómo frenarlo:** Cualquier personaje debe realizar una acción física evidente (levantarse, golpear la mesa, servirse agua, cambiar de postura).

### Fase 2: Alerta Naranja — *Recaptcha Biomecánico & Voz Robótica*
* **Señal:** El cielo del ciberespacio se tiñe de un tono ámbar alarmante. Las voces de los personajes se procesan a través de un modulador sintético y suenan como robots de juguete averiados.
* **Prueba de Autenticación (Recaptcha en Vivo):** Una ventana flotante translúcida aparece frente a un jugador aleatorio con una orden absurda que debe cumplir en 15 segundos reales:
  * *"Demuestre que no es un constructo huérfano: señale tres objetos en el diner que contengan dolor existencial."*
  * *"Gire sobre sí mismo en el sitio y recite el himno corporativo de Vitra."*
  * *"Mencione tres razones por las que Anvil Consortium es superior a la carne biológica."*
  * *"Salte con un solo pie virtual mientras insulta a un compañero."*
* Si el jugador no lo hace o falla la respuesta en la mesa, el grupo pasa inmediatamente a Fase 3.

### Fase 3: Alerta Roja — *Desconexión Inminente & Multa de The Registry*
* **Señal:** Sirenas industriales atronadoras. Un contador en números rojos gigantescos desciende en el cielo: `00:15... 00:14... 00:13...`
* **Consecuencias:**
  * Si el contador llega a cero, el pod inicia la eyección forzada de emergencia:
    * Se pierde la fianza del contrato (0 gp).
    * The Registry impone una penalización de **-50 puntos de reputación de mercenario**.
    * Cada personaje sufre 2d10 de daño psíquico por desconexión en caliente sin descompresión háptica.
* **Cómo abortar la Fase 3:** Requiere que al menos **dos personajes colaboren** en un esfuerzo de red:
  * Iniciar el **Protocolo Keep-Alive (Intercambio de Insultos)** a grito pelado.
  * O realizar una prueba combinada de *Tecnología (DC 14)* golpeando la base del poste del *Holo-Tree* con un objeto contundente para enviar paquetes de datos basura y reiniciar el timer.

---

## 🗣️ 3. Protocolo Keep-Alive (El Intercambio de Insultos de Beckett)

Homenaje directo al duelo verbal de Vladimir y Estragón. En momentos de aburrimiento o para mantener activo el canal de voz y evitar el AFK kick, los personajes pueden recurrir al tráfico de voz basura.

* **Regla:** Dos o más jugadores se enfrentan en un combate de insultos elocuentes y solemnes por turnos.
* **Normas del Duelo:**
  1. No se pueden usar groserías vulgares modernas; deben ser insultos grandilocuentes, teatrales, medievales o corporativos.
  2. Ejemplos válidos: *"¡Archivero de cloaca! ¡Apéndice biológico mal compilado! ¡Burócrata sin alma! ¡Crítico de poesía! ¡Hijo de un procesador de 8 bits!"*.
  3. Cada jugador lanza su improperio con convicción. La mesa o el DM votan el más creativo.
* **Recompensa:** El ganador obtiene **1 Dado de Inspiración (d6)** aplicable a cualquier tirada en el nodo, y el contador de inactividad de STELLAR se congela durante 30 minutos ficticios.

---

## 🛏️ 4. El Modo Suspensión y las Pesadillas del Buffer

Cuando el tiempo se hace eterno, es natural que algún jugador declare: *"Mi personaje se tumba en el banco y se echa a dormir"*.

Dormir dentro de un pod de la High City no es descansar; es exponer la psique a los desechos de memoria no purgados del servidor (*Memory Buffer Leaks*).

### La Experiencia del Durmiente
El personaje que se duerme queda en estado de trance catatónico. Pásale una nota privada o susurro tirando en la **Tabla de Pesadillas del Buffer (1d6)**:

| d6 | Pesadilla en el Buffer | Efecto al Despertar |
|:---:|---|---|
| **1** | **El Coro de Maniquíes:** Te encuentras en un pasillo blanco infinito donde miles de cuerpos sintéticos sin rostro cantan las cláusulas de rescisión de tu contrato con la voz de tu madre. | Te despiertas gritando. Sufres desventaja en tiradas de Iniciativa durante el resto del one-shot. |
| **2** | **La Habitación Invertida:** Sueñas que estás sentado en Chez Infinite, pero el techo es el suelo. Tus compañeros están clavados al techo boca abajo mirándote en silencio con ojos de píxeles estáticos. | Despiertas con un escalofrío de congelación: 1d4 de daño de frío en tu avatar. |
| **3** | **La Papelera de Reciclaje:** Eres un documento de texto de 0 KB que está a punto de ser arrastrado a la papelera. Una voz celestial dice: *"Espacio insuficiente en disco"*. | Te despiertas convencido de que has olvidado tu propio apellido durante 10 minutos reales. |
| **4** | **El Juicio de los Números:** Tres figuras vestidas de jueces de The Registry te piden que calcules mentalmente el coste de tu propia alma en calderilla de cobre. El número nunca cuadra. | Pierdes 1 punto de Inspiración si lo tenías. Si no, pierdes 2 puntos de vida máxima temporal. |
| **5** | **El Espejo Vacío:** Te miras en el cristal del diner y ves a tu personaje vivo en el mundo real, dentro del pod de Treftiel, ahogándose lentamente en gelatina de soporte vital. | Te despiertas jadeando por aire, con taquicardia háptica: -1 a salvaciones de Constitución. |
| **6** | **El Mensaje Oculto:** Sueñas con una figura dorada en el horizonte que te susurra: *"El secreto de Godot es que..."*, pero justo en ese momento un camión de la basura digital pasa tocando el claxon y no escuchas el final. | Despiertas con una extraña lucidez absurda: ganas ventaja en tu próxima tirada de Investigación. |

### La Desesperación del Vigía
Mientras uno duerme, el jugador que permanece despierto experimenta el terror de la quietud absoluta.
* Debe superar una salvación de **Sabiduría DC 13**.
* **Fallo:** Entra en pánico de soledad. Siente que si no despierta a su compañero de inmediato, su compañero se disolverá en código y desaparecerá para siempre.
* **El Dilema:** Si sacude al dormido para despertarlo, el dormido se despierta confuso y ambos deben compartir el relato del sueño; escuchar la pesadilla obliga al vigía a tirar Sabiduría DC 10 o ganar **1 punto de Tensión/Estrés**.

---

## 👢 5. El Inventario Defectuoso (Las Botas de Estragón)

Homenaje a la primera escena de la obra, donde Estragón lucha agónicamente por quitarse la bota.

* **El Disparador:** Al comenzar la sesión, designa a un jugador (preferiblemente quien lleve calzado pesado, armadura o implantes de piernas):
  > *"Sientes una molestia aguda y punzante en tu bota izquierda (o interfaz del pie). Como si tuvieras una chincheta de código, un clavo oxidado o un cálculo biliar digital alojado dentro del calcetín."*
* **Mecánica:**
  * Cada 20 minutos de tiempo real, el personaje sufre **1 punto de daño psíquico/molestia** si no intenta quitársela.
  * **La Lucha por la Bota:** Quitarse la bota requiere una prueba de **Fuerza (Atletismo) o Destreza (Acrobacias) DC 12**. Si falla, tira de ella con furia, resbala del banco y se da un golpe cómico contra la mesa (1d4 de daño contundente).
  * **La Inspección:** Una vez fuera, el personaje la sacude, mira dentro, mete la mano, o tira *Investigación / Tecnología (incluso con un 25+)*.
  * **El Veredicto del DM:** *"Miras dentro con minuciosidad microscópica. Pasas la mano. No hay nada. Ni una piedra, ni una costura rota, ni un bug de geometría. La bota es perfecta."*
  * **El Castigo Descalzo:** Si decide dejar la bota fuera y caminar descalzo por el diner, el suelo metálico está a temperaturas bajo cero y cubierto de estática poligonal. Sufre **desventaja en todas las pruebas de Destreza** y velocidad reducida a la mitad.
  * **La Resignación:** Tarde o temprano, suspirando de asco, tiene que volver a ponérsela... momento en el cual el dolor punzante regresa de inmediato.

---

## 🎭 6. Interacciones y Paranoias Específicas por Personaje

Personalizaciones preparadas para el elenco de jugadores habituales de la mesa:

```
+-----------------------------------------------------------------------------------+
| PERSONAJE / JUGADOR  | MANÍA EXISTENCIAL / GLITCH PERSONAL                        |
+----------------------+------------------------------------------------------------+
| Argia (Lucas)        | Hipnosis por fluorescente de 60 Hz (Instinto Moth)         |
| Anathema (Jose)      | Señal de patrón ctónico en contestador de 56k              |
| Ary (Noah)           | El ovillo de lana de conspiración con físicas Havok rotas  |
| Luther (Luciano)     | La puerta del baño que abre dimensiones no euclidianas     |
| Humeante (Lucía)     | Mod de dragón barato en 2D con bocina de payaso            |
| Kudi (Rafa)          | Congelación por lag temporal y batido infinito             |
+-----------------------------------------------------------------------------------+
```

### 1. Argia (Lucas — Raza Moth)
* La lámpara fluorescente sobre la barra del diner emite una vibración ultravioleta que actúa como droga visual para su naturaleza.
* *Prueba:* Cada hora ficticia, salvación de Sabiduría DC 12.
* *Fallo:* Pasa 1d4 minutos en estado hipnótico balbuceando: *"Es... tan... eficiente..."*. Si falla por 5 o más, debe ser sujetado físicamente por otro PJ antes de que se lance en plancha contra el tubo de luz.

### 2. Anathema (Jose — Warlock Ctónico / Valdros)
* Intenta contactar con su deidad/patrón para pedir guía o entender si G.O.D.O.T. es una entidad del más allá.
* *Resultado:* Los cortafuegos de High City bloquean la conexión extradimensional. Solo escucha una voz enlatada con música MIDI distorsionada:
  > *"Ha contactado con el Abismo Primordial de Valdros. Para condenación eterna, pulse 1. Para pactos con sacrificios de sangre, pulse 2. Para consultar el estado de su ticket de salvación, manténgase en espera..."*

### 3. Ary (Noah — Conspiranoico del Corcho e Hilos de Obsidian)
* Ary intenta ordenar la situación conectando los cabos sueltos de The Registry, H4ppy, Godot y Treftiel con un ovillo de hilo rojo virtual que materializa con su interfaz.
* *Resultado:* Las físicas del hilo se corrompen. El hilo adquiere masa y tensión elástica infinita: empieza a azotar las paredes, atrapar vasos en el aire y envolver a los personajes en una telaraña de lana roja poligonal que parpadea a 120 FPS.

### 4. Luther (Luciano — Especialista en Cerraduras)
* No soporta ver una puerta cerrada. Al fondo del diner está la puerta de los baños con el cartel de *"FUERA DE SERVICIO"*.
* *Mecánica:* Con sus herramientas de ladrón, puede forzar la cerradura:
  * **DC 15:** Se abre a un baño normal, pero el agua del lavabo sale hacia arriba en dirección al extractor del techo.
  * **DC 20:** Se abre a una sala vacía donde una sola taza de váter flota en el centro con un foco cenital dramático mientras suena un violín triste.
  * **DC 25+:** Se abre... y da directamente a la espalda de sus propios compañeros sentados en la mesa del diner. Puede tocarse el hombro a sí mismo desde atrás, causando una paradoja que resetea la puerta de golpe con un portazo.

### 5. Humeante (Lucía — Proyecto Dracónido y Prótesis)
* En la máquina expendedora *"Apex BodyMods Express"*, ve en oferta la skin legendaria *"Alma Dracónica Ancestral"* por 200 gp.
* *Resultado:* Si gasta el dinero, no recibe escamas cibernéticas reales: su personaje adquiere una textura plana de dragón verde dibujada con rotulador digital pegada con cinta adhesiva a su pecho. Si intenta usar un aliento elemental, su boca emite un chillido de corneta de feria (`*HONK*`) y suelta una nube de confeti que hace 1 de daño de risa a quien esté delante.

### 6. Kudi (Rafa — Chill de Cojones / Desincronizada en el Tiempo)
* Kudi permanece imperturbable ante el caos, bebiendo de un batido de vainilla virtual que tiene un bug en el nivel de líquido y nunca se vacía.
* *Mecánica:* Debido a su historial de congelación temporal en Treftiel (*System Failure*), sufre picos de lag aleatorios: su avatar se queda congelado en mitad de un bostezo o un trago durante 30 segundos reales. Cuando vuelve la sincronía, suelta tres frases seguidas a 5x velocidad sin pausas para respirar.

---

## 🪢 7. Minijuegos Existenciales Ambientales

### El Cable Coaxial y el Debate del Suicidio
* Una manguera de cable de datos blindado cuelga del techo junto al poste del *Holo-Tree*.
* Los personajes contemplan la posibilidad de ahorcarse con él para provocar un *Crash Dump* en el pod y forzar su desconexión al mundo real.
* **El Debate Filosófico:**
  * *"Si tú te cuelgas y el servidor te borra, yo me quedo aquí solo para siempre esperando a Godot. Pero si me cuelgo yo y la rama aguanta, ¿quién te desenchufa a ti?"*
  * *"¿Y si al ahorcarnos en el juego nos da una erección háptica en el pod biológico?"* (Referencia textual a Estragón y las mandrágoras).
* **El Intento Físico:** Si alguien insiste en colgarse o tirar con fuerza del cable, prueba de Atletismo DC 10. Con un crujido estrepitoso, la viga de soporte se parte, el cable cae al suelo, y la armadura del PJ pierde sus texturas durante 1 hora (queda en un modelo poligonal gris de desarrollo sin ropa ni detalles).

### El Baile de Sombreros de Tres Cabezas (The Hat Dance)
* En el Acto II, Luck-E olvida un casco cibernético de lujo de High City sobre la banqueta. Sumado a los yelmos y gorros de los PJs, hay un número impar de sombreros para las cabezas del grupo.
* Quien se pone el casco escucha una cacofonía demencial: transmisiones de 40 streamers de STELLAR retransmitiendo en directo a la vez a volumen ensordecedor.
* Para no sufrir 1d6 de daño psíquico por turno, los jugadores deben pasarse los sombreros de cabeza en cabeza en una coreografía frenética por turnos:
  1. Jugador A se quita el casco y se lo pone a B.
  2. Jugador B se quita su sombrero y se lo encasqueta a C.
  3. Jugador C se quita el suyo y se lo devuelve a A.
* Requiere 3 rondas coordinadas con pruebas de Destreza DC 11 para lograr lanzar el casco por el borde del precipicio hacia el vacío lila.

### El Teléfono de Disco de The Registry
* En la pared del diner hay un teléfono de baquelita negra con cable helicoidal que suena periódicamente (`*RINGGGG... RINGGGG...*`).
* Al descolgarlo, suena una locución automática con tono burocrático exasperante:
  * **Pulsar 1 (Cliente no ha venido):** *"Le informamos que según nuestros registros, el cliente ya está en su mesa. Si usted no puede verlo, el problema es de sus córneas. Ticket archivado."*
  * **Pulsar 2 (Deseo cancelar el contrato):** *"Para confirmar la cancelación, por favor deposite 10.000 piezas de oro en concepto de indemnización por daños a la moral de The Registry. Saldo insuficiente detectado. Manténgase a la espera."*
  * **Pulsar 3 (Hablar con un operador):** *"Su llamada ha sido situada en el puesto 4.892 de la cola. Tiempo estimado de respuesta: 34 años y dos meses. Por favor, disfrute de nuestra sintonía."* (Suena una versión espantosa de *The Girl from Ipanema* interpretada con una flauta dulce desafinada).

---

## 🎲 8. Tabla Completa de Micro-Glitches del Diner (1d12)

Tira 1d12 cada 30 minutos de tiempo real o cuando la conversación decaiga:

| d12 | Anomalía en Chez Infinite |
|:---:|---|
| **1** | **El Clip-Walker:** Un PNJ burócrata de Vitra con gabardina y maletín entra corriendo, choca contra la mesa de los jugadores y sus piernas siguen corriendo en el sitio contra la mesa sin parar durante 15 minutos mientras silba alegremente. Si le preguntan, grita: *"¡No puedo parar, llego tarde a la junta de accionistas del Anvil!"*. |
| **2** | **Ametralladora de Menús:** Un menú de cartón empieza a vibrar salvajemente contra la mesa por un error de colisión física, haciendo un ruido ensordecedor de ametralladora (`*TAK-TAK-TAK-TAK*`). Si alguien intenta agarrarlo, sale disparado como un misil y se clava en la pared. |
| **3** | **Z-Fighting Servilleta:** Una servilleta de papel sufre un fallo de render y se estira en el eje X hasta el infinito, atravesando horizontalmente el diner y las cabezas de dos jugadores como un rayo láser de celulosa inofensivo. |
| **4** | **Gravedad Cero en Condimentos:** El salero y el pimentero se desprenden de la mesa y flotan lentamente en círculos en el aire a la altura de los ojos. |
| **5** | **BSOD Celestial:** El cielo estrellado del ciberespacio se congela y se transforma durante 3 segundos en una pantalla azul gigante de error de Windows con un código QR que no lleva a ninguna parte. |
| **6** | **Audio a 0.25x:** La música ambiental de jazz se ralentiza a velocidad agónica: cada nota dura 40 segundos y suena como el lamento de una ballena cibernética moribunda. |
| **7** | **Ping Fantasma:** El reflejo de los personajes en la cristalera del diner se mueve con 3 segundos de retraso respecto a sus cuerpos físicos. Si un PJ parpadea, su reflejo tarda tres segundos en cerrar los ojos. |
| **8** | **El Vaso Eterno:** El camarero B-4R-T0L0 vierte café en una taza que se desborda continuamente; sin embargo, el líquido que cae sobre la mesa desaparece en un destello de luz sin manchar nada. |
| **9** | **La Servilleta Profética:** Debajo de un azucarero encuentran una servilleta arrugada con un mensaje escrito a mano: *"No confíes en el árbol. El árbol no es un árbol, es un proceso en segundo plano que mina cripto-almas para el Anvil."* |
| **10** | **El Reloj Invertido:** El reloj de la pared retrocede súbitamente 25 minutos. El DM declara con solemnidad: *"Biológicamente sentís que acabáis de rejuvenecer media hora de aburrimiento puro."* |
| **11** | **Textura Perdida:** Todo el suelo del diner pierde su textura de madera y azulejos durante 5 minutos, convirtiéndose en un tablero de ajedrez gigante en rosa fucsia y negro brillante (`MISSING_TEXTURE`). |
| **12** | **Aviso del Moderador:** Aparece un mensaje flotante dorado en el aire: `[MOD_BOT]: EL USUARIO 'GODOT' HA CAMBIADO SU ESTADO A 'AUSENTE (HACIENDO LA COMPRA)'`. |
