  <script>
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
      "Sin Pasadizo (Muro Macizo)"
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

    // State
    let gridData = {}; 
    let doorData = {}; 
    let currentSelectedKey = "D1";
    let currentSubRoll = 1;
    let currentAlign = 1;

    function initGridData() {
      gridData = {};
      doorData = {};
      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          gridData[k] = {
            active: false,
            name: `Sala ${k}`,
            role: "NORMAL",
            hasSmallKey: false,
            clusterTag: "",
            elementTag: "",
            notes: ""
          };
        });
      });
    }

    function renderGrid() {
      const container = document.getElementById('grid-7x7');
      container.innerHTML = '';

      const subObj = SUBDUNGEONS[currentSubRoll];

      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          const cell = gridData[k];
          
          const div = document.createElement('div');
          let subClass = "";
          if (cell.role === "SUBDUNGEON" && subObj.class) {
            subClass = subObj.class;
          }

          let setClass = cell.elementTag ? `cell-set-${cell.elementTag.toLowerCase()}` : '';
          let clusterClass = cell.clusterTag ? `cluster-${cell.clusterTag.split('-')[1]?.toLowerCase()}` : '';
          let clusterTagClass = cell.clusterTag ? `clust-${cell.clusterTag.split('-')[1]?.toLowerCase()}` : '';

          div.className = `cell ${cell.active ? 'active' : 'empty'} ${cell.role.toLowerCase()} ${subClass} ${setClass} ${clusterClass}`;
          if (k === currentSelectedKey) div.classList.add('selected');
          div.onclick = () => selectCell(k);

          let icon = cell.active ? "🚪" : "⚪";
          if (cell.role === "ATRIO") icon = "🏛️";
          if (cell.role === "SUBDUNGEON") icon = "👑";
          if (cell.role === "SECRET") icon = "🗝️";

          let keyTag = cell.hasSmallKey ? `<span class="cell-key-tag" title="Contiene Llave de Latón (Small Key)">🗝️ LLAVE</span>` : '';
          let clusterTagHtml = cell.clusterTag ? `<span class="cell-cluster-tag ${clusterTagClass}">🔗 ${cell.clusterTag}</span>` : '';
          let elementTagHtml = cell.elementTag ? `<span class="cell-element-tag elem-tag-${cell.elementTag.toLowerCase()}">${cell.elementTag}</span>` : '';

          div.innerHTML = `
            <span class="cell-coord">${k}</span>
            ${elementTagHtml}
            ${keyTag}
            <div class="cell-icon">${icon}</div>
            <div class="cell-name">${cell.active ? cell.name : 'VACÍO'}</div>
            ${clusterTagHtml}
          `;

          if (cell.active) {
            ['N', 'S', 'W', 'E'].forEach(dir => {
              const doorState = getDoorState(k, dir);
              if (doorState !== "Sin Pasadizo (Muro Macizo)") {
                const doorInd = document.createElement('div');
                doorInd.className = `door-indicator ${dir} ${doorState === 'Puerta Abierta de Par en Par' ? 'door-open' : 'door-locked'}`;
                div.appendChild(doorInd);
              }
            });
          }

          container.appendChild(div);
        });
      });
    }

    function populateDoorDropdowns() {
      ['N', 'S', 'W', 'E'].forEach(dir => {
        const sel = document.getElementById(`door-${dir}`);
        sel.innerHTML = '';
        DOOR_TYPES.forEach(dt => {
          const opt = document.createElement('option');
          opt.value = dt;
          opt.textContent = dt;
          sel.appendChild(opt);
        });
        sel.onchange = (e) => saveDoorState(dir, e.target.value);
      });
    }

    function selectCell(key) {
      currentSelectedKey = key;
      renderGrid();

      const cell = gridData[key];
      document.getElementById('inspect-title').textContent = `Celda [ ${key} ]`;
      document.getElementById('inspect-active').value = cell.active ? "true" : "false";
      document.getElementById('inspect-role').value = cell.role;
      document.getElementById('inspect-has-key').checked = cell.hasSmallKey || false;
      document.getElementById('inspect-notes').value = cell.notes || "";

      const presetSel = document.getElementById('inspect-preset');
      let found = false;
      for (let i = 0; i < presetSel.options.length; i++) {
        if (presetSel.options[i].value === cell.name) {
          presetSel.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        presetSel.value = "CUSTOM";
        document.getElementById('group-custom-name').style.display = "flex";
        document.getElementById('inspect-custom-name').value = cell.name;
      } else {
        document.getElementById('group-custom-name').style.display = "none";
      }

      ['N', 'S', 'W', 'E'].forEach(dir => {
        const sel = document.getElementById(`door-${dir}`);
        const doorVal = getDoorState(key, dir);
        sel.value = doorVal;
      });
    }

    function getNeighborKey(key, dir) {
      const r = key[0];
      const c = parseInt(key[1]);
      const rIdx = ROWS.indexOf(r);

      if (dir === 'N' && rIdx > 0) return `${ROWS[rIdx - 1]}${c}`;
      if (dir === 'S' && rIdx < 6) return `${ROWS[rIdx + 1]}${c}`;
      if (dir === 'W' && c > 1) return `${r}${c - 1}`;
      if (dir === 'E' && c < 7) return `${r}${c + 1}`;
      return null;
    }

    function getDoorPairKey(k1, k2) {
      return [k1, k2].sort().join('-Door-');
    }

    function getDoorState(key, dir) {
      const nKey = getNeighborKey(key, dir);
      if (!nKey) return "Sin Pasadizo (Muro Macizo)";
      const pairKey = getDoorPairKey(key, nKey);
      return doorData[pairKey] || "Puerta Abierta de Par en Par";
    }

    function saveDoorState(dir, val) {
      const nKey = getNeighborKey(currentSelectedKey, dir);
      if (!nKey) return;
      const pairKey = getDoorPairKey(currentSelectedKey, nKey);
      doorData[pairKey] = val;
      renderGrid();
      updateOutputLog();
    }

    function autoDetectTags(cell) {
      if (!cell || !cell.name) return;
      const n = cell.name;
      if (n.includes("Cluster A") || n.includes("Cisterna Maestro")) cell.clusterTag = "CLUSTER-A";
      else if (n.includes("Cluster B") || n.includes("Cristales Peg")) cell.clusterTag = "CLUSTER-B";
      else if (n.includes("Cluster C") || n.includes("Fundición Llave") || n.includes("Mina Aleación")) cell.clusterTag = "CLUSTER-C";
      else if (n.includes("Cluster D") || n.includes("Contrapeso Basalto") || n.includes("Consola Grúa")) cell.clusterTag = "CLUSTER-D";
      else if (n.includes("Cluster E") || n.includes("Espejos Solar") || n.includes("Tragaluz Solar")) cell.clusterTag = "CLUSTER-E";
      else if (n.includes("Cluster F") || n.includes("Convección Térmica")) cell.clusterTag = "CLUSTER-F";
      else if (n.includes("Cluster G") || n.includes("Purificación Esporas")) cell.clusterTag = "CLUSTER-G";
      else if (n.includes("Cluster H") || n.includes("Gravedad Invertida")) cell.clusterTag = "CLUSTER-H";

      if (n.includes("Magma") || n.includes("Horno") || n.includes("Antorchas") || n.includes("Forja") || n.includes("Caldera") || n.includes("Vapor")) cell.elementTag = "FIRE";
      else if (n.includes("Cisterna") || n.includes("Agua") || n.includes("Acuífero") || n.includes("Esclusas") || n.includes("Balsas") || n.includes("Hidráulico")) cell.elementTag = "WATER";
      else if (n.includes("Viento") || n.includes("Vela Solar") || n.includes("Gaseosas") || n.includes("Venturi") || n.includes("Planeador")) cell.elementTag = "AIR";
      else if (n.includes("Basalto") || n.includes("Catapulta") || n.includes("Piedra") || n.includes("Telúricos") || n.includes("Rodillo") || n.includes("Anclas")) cell.elementTag = "EARTH";
      else if (n.includes("Hongo") || n.includes("Vides") || n.includes("Esporas") || n.includes("Flora") || n.includes("Bulbo")) cell.elementTag = "LIFE";
      else if (n.includes("Espejos") || n.includes("Sombras") || n.includes("Anamórfica") || n.includes("Prisma") || n.includes("Penumbra")) cell.elementTag = "LIGHT";
    }

    const SET_ROOMS = {
      "GENERIC": [
        "⚖️ Báscula de Contrapesos", "⚙️ Clave de Engranajes Murales", "🕯️ Puerta de la Fundición Fría",
        "🕸️ Galería de Cuerdas Tensadas", "⏱️ Taller de Relojería Rúnica", "📜 Archivo de Tablillas Rascadas",
        "🔮 Umbral de Decodificación Arcana", "🎭 Relieve del Eco Espectral Parlante", "👥 Puerta del Cristal de Espinas Sumiso",
        "🌿 Umbral de Vides Sensibles", "👁️ Relieve de Miradas Cambiantes", "🎲 Sala del Dado de Basaltos",
        "🩸 Altar del Sacrificio Arcano", "📜 Mercado Espectral de Minos"
      ],
      "CLUSTERS": [
        "🔗 Cluster A: Cisterna Maestro -> Filtros -> Esclusa",
        "🔗 Cluster B: Interruptor -> Bloques Azules -> Rojos",
        "🔗 Cluster C: Mina Aleación -> Horno -> Sello Molde",
        "🔗 Cluster D: Consola Grúa -> Cámara Bloque -> Sello Presión",
        "🔗 Cluster E: Tragaluz Solar -> Espejos -> Receptor",
        "🔗 Cluster F: Horno Magmático -> Pozo Viento -> Balcón",
        "🔗 Cluster G: Invernadero Esporas -> Conducto -> Purificador",
        "🔗 Cluster H: Consola Inversión -> Torre Bloques"
      ],
      "FIRE": [
        "🟁 La Caldera de Escoria Magmática", "🌋 El Horno de Enfriamiento Térmico", "🔥 La Galería de las Cuatro Antorchas",
        "🔴 El Laberinto de Magma Fluido", "♨️ La Grieta del Vapor Térmico"
      ],
      "WATER": [
        "🌊 El Depósito de las Tres Cisternas", "🚰 El Carril de las Balsas Sumergidas", "💧 El Conducto de Agua Hirviendo",
        "🏊 El Acuífero de los Pilares Sumergidos", "🔀 La Cámara de las Esclusas Sincronizadas"
      ],
      "AIR": [
        "🌬️ La Torre del Viento Ascendente", "⛵ El Obelisco de la Vela Solar Giratoria", "💨 Las Fisuras Térmicas Micro-Gaseosas",
        "🌀 La Cámara del Vacío Venturi", "🪶 El Balcón del Planeador de Bronce"
      ],
      "EARTH": [
        "⚓ El Pilar de Anclas de Basalto", "⚖️ La Balanza de Peso y Catapulta", "🟅 Muro de Piedra Frágil",
        "🌋 La Sima de los Temblores Telúricos", "🪨 El Cañón del Rodillo de Basalto"
      ],
      "LIFE": [
        "🌱 El Invernadero del Hongo Trampolín", "🌿 La Compuerta de Vides Arcanas", "🍄 El Invernadero de Esporas Durmientes",
        "🌸 El Jardín de la Flora Bioluminiscente", "🪷 El Bulbo Carnívoro del Núcleo"
      ],
      "LIGHT": [
        "☀️ La Galería de los Espejos en Cadena", "🌌 La Cámara de las Sombras Cuánticas", "👁️ La Sala de la Perspectiva Anamórfica",
        "🌈 El Prisma del Santo Sol", "👥 La Cámara de los Clones de Penumbra"
      ]
    };

    // EXACT ISAAC GENERATION ALGORITHM (NO SECRET ROOM ADJACENT TO SUBDUNGEONS)
    function generateDungeon() {
      initGridData();
      
      const subSel = document.getElementById('select-subdungeon').value;
      if (subSel === "RANDOM") {
        currentSubRoll = Math.floor(Math.random() * 8) + 1;
      } else {
        currentSubRoll = parseInt(subSel);
      }
      currentAlign = Math.floor(Math.random() * 6) + 1;

      const subObj = SUBDUNGEONS[currentSubRoll];
      const elemCode = subObj.code;

      let activeElementalRooms = SET_ROOMS[elemCode] || [];
      if (elemCode === "NONE" || elemCode === "BOSS") {
        const allElems = ["FIRE", "WATER", "AIR", "EARTH", "LIFE", "LIGHT"];
        const randElem = allElems[Math.floor(Math.random() * allElems.length)];
        activeElementalRooms = SET_ROOMS[randElem];
      }

      const possibleStarts = ["C3", "D3", "D4", "C4", "E4"];
      const startKey = possibleStarts[Math.floor(Math.random() * possibleStarts.length)];
      
      gridData[startKey] = {
        active: true,
        name: "Sala 01: Atrio de Entrada",
        role: "ATRIO",
        clusterTag: "",
        elementTag: "",
        notes: "Entrada principal del laberinto"
      };

      const targetRooms = Math.floor(Math.random() * 5) + 14;
      let placedKeys = new Set([startKey]);

      let pool = [...SET_ROOMS["GENERIC"], ...SET_ROOMS["CLUSTERS"], ...activeElementalRooms];
      pool.sort(() => Math.random() - 0.5);

      const numBranches = 4;
      for (let b = 0; b < numBranches; b++) {
        let currKey = startKey;
        const branchLength = Math.floor(Math.random() * 3) + 3;

        for (let step = 0; step < branchLength; step++) {
          if (placedKeys.size >= targetRooms) break;

          const r = currKey[0];
          const c = parseInt(currKey[1]);
          const rIdx = ROWS.indexOf(r);

          const neighbors = [];
          if (rIdx > 0) neighbors.push(`${ROWS[rIdx - 1]}${c}`);
          if (rIdx < 6) neighbors.push(`${ROWS[rIdx + 1]}${c}`);
          if (c > 1) neighbors.push(`${r}${c - 1}`);
          if (c < 7) neighbors.push(`${r}${c + 1}`);

          const unvisited = neighbors.filter(nk => !placedKeys.has(nk));
          if (unvisited.length > 0) {
            const nextKey = unvisited[Math.floor(Math.random() * unvisited.length)];
            placedKeys.add(nextKey);
            
            let rNotes = "";
            const roomName = pool.length > 0 ? pool.pop() : `Sala Cámara (${nextKey})`;
            if (roomName.includes("Cisterna") || roomName.includes("Depósito")) {
              rNotes = "Red Hidráulica: Modifica nivel de agua en salas vecinas";
            }
            if (roomName.includes("Cristal")) {
              rNotes = "Red de Cristales Peg: Conmuta bloques Azul/Rojo en el cuadrante";
            }

            gridData[nextKey] = {
              active: true,
              name: roomName,
              role: "NORMAL",
              clusterTag: "",
              elementTag: "",
              hasSmallKey: false,
              notes: rNotes
            };
            autoDetectTags(gridData[nextKey]);

            const pairKey = getDoorPairKey(currKey, nextKey);
            doorData[pairKey] = Math.random() < 0.65 ? "Puerta Abierta de Par en Par" : DOOR_TYPES[Math.floor(Math.random() * (DOOR_TYPES.length - 1))];

            currKey = nextKey;
          }
        }
      }

      const startR = ROWS.indexOf(startKey[0]);
      const startC = parseInt(startKey[1]);

      let subKey = null;
      if (currentSubRoll !== 8) {
        const candidates = Array.from(placedKeys).filter(k => {
          if (k === startKey) return false;
          const dist = Math.abs(ROWS.indexOf(k[0]) - startR) + Math.abs(parseInt(k[1]) - startC);
          return dist >= 1 && dist <= 3;
        });

        let targetKey = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : startKey;
        
        const subInfo = SUBDUNGEONS[currentSubRoll];
        if (targetKey !== startKey) {
          subKey = targetKey;
          gridData[targetKey] = {
            active: true,
            name: subInfo.room,
            role: "SUBDUNGEON",
            notes: `Subdungeon: ${subInfo.name} - Guardián: ${subInfo.boss} (Distancia <= 3)`
          };
        }
      }

      // ISAAC SECRET ROOM GENERATION:
      // Must NOT be adjacent to the Subdungeon room (subKey)!
      let secretCandidates = [];
      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          if (!gridData[k].active) {
            const rIdx = ROWS.indexOf(r);
            const activeNb = [];
            let touchesSubdungeon = false;

            ['N', 'S', 'W', 'E'].forEach(dir => {
              const nbKey = getNeighborKey(k, dir);
              if (nbKey && gridData[nbKey].active) {
                activeNb.push(nbKey);
                if (gridData[nbKey].role === "SUBDUNGEON") {
                  touchesSubdungeon = true;
                }
              }
            });

            // RULE: Secret room CANNOT be adjacent to the Subdungeon!
            if (!touchesSubdungeon && activeNb.length >= 2) {
              secretCandidates.push({ key: k, count: activeNb.length, nbs: activeNb });
            }
          }
        });
      });

      // Fallback if no 2+ neighbor spot without Subdungeon exists
      if (secretCandidates.length === 0) {
        ROWS.forEach(r => {
          COLS.forEach(c => {
            const k = `${r}${c}`;
            if (!gridData[k].active) {
              const activeNb = [];
              let touchesSubdungeon = false;
              ['N', 'S', 'W', 'E'].forEach(dir => {
                const nbKey = getNeighborKey(k, dir);
                if (nbKey && gridData[nbKey].active) {
                  activeNb.push(nbKey);
                  if (gridData[nbKey].role === "SUBDUNGEON") touchesSubdungeon = true;
                }
              });
              if (!touchesSubdungeon && activeNb.length >= 1) {
                secretCandidates.push({ key: k, count: activeNb.length, nbs: activeNb });
              }
            }
          });
        });
      }

      secretCandidates.sort((a, b) => b.count - a.count);

      if (secretCandidates.length > 0) {
        const sTarget = secretCandidates[0];
        const sKey = sTarget.key;
        gridData[sKey] = {
          active: true,
          name: "🗝️ Sala Secreta de Minos",
          role: "SECRET",
          notes: "Regla Isaac Pura: NUNCA colindante a Subdungeon. Sin pistas externas en paredes -> Bomba / EARTH Shatter."
        };

        sTarget.nbs.forEach(nKey => {
          const pairKey = getDoorPairKey(sKey, nKey);
          doorData[pairKey] = "Muro de Piedra Frágil [EARTH]";
        });
      }

      // SMALL KEYS PLACEMENT LOGIC:
      // Find all doors requiring "🗝️ Cerrojo de Latón [Small Key]"
      const lockedDoors = Object.keys(doorData).filter(pk => doorData[pk] === "🗝️ Cerrojo de Latón [Small Key]");
      const openActiveRooms = Object.keys(gridData).filter(k => gridData[k].active && gridData[k].role !== "SECRET" && gridData[k].role !== "SUBDUNGEON");

      lockedDoors.forEach((pk, idx) => {
        const candidates = openActiveRooms.filter(k => !gridData[k].hasSmallKey && k !== startKey);
        const poolKeys = candidates.length > 0 ? candidates : openActiveRooms.filter(k => !gridData[k].hasSmallKey);
        if (poolKeys.length > 0) {
          const chosenKeyRoom = poolKeys[Math.floor(Math.random() * poolKeys.length)];
          gridData[chosenKeyRoom].hasSmallKey = true;
          const keyNote = `[🗝️ Contiene Llave de Latón de la Mina para el Cerrojo (${pk})]`;
          gridData[chosenKeyRoom].notes = gridData[chosenKeyRoom].notes ? `${gridData[chosenKeyRoom].notes} | ${keyNote}` : keyNote;
        }
      });

      const subObj = SUBDUNGEONS[currentSubRoll];
      document.getElementById('info-dia').innerHTML = `Palabra: <strong>${subObj.code}</strong>`;
      document.getElementById('info-sub').innerHTML = `Subdungeon: <strong>${subObj.name}</strong>`;
      document.getElementById('info-align').innerHTML = `Alineamiento: <strong>[${currentAlign}]</strong>`;

      selectCell(startKey);
      updateOutputLog();
    }

    function updateOutputLog() {
      const subObj = SUBDUNGEONS[currentSubRoll];
      let log = `======================================================================\n`;
      log += `       MAPA Y CONEXIONES DEL LABERINTO DE MINOS (REJILLA 7x7)\n`;
      log += `======================================================================\n`;
      log += `SUBDUNGEON 1d8: [${currentSubRoll}] -> ${subObj.code} (${subObj.name})\n`;
      log += `GUARDIÁN DE ÁREA: ${subObj.boss}\n`;
      log += `ALINEAMIENTO: [${currentAlign}] ${ALIGNMENTS[currentAlign - 1]}\n`;
      log += `SALA SECRETA ISAAC PURA: NUNCA colindante a la Subdungeon. Sin pistas en paredes.\n`;
      log += `PERSISTENCIA: Mixta (Atajos de rejilla/muro bomba se guardan; cerrojos resetean)\n`;
      log += `----------------------------------------------------------------------\n`;
      log += `🗝️ RASTREO Y UBICACIÓN DE LLAVES DE LATÓN (SMALL KEYS):\n`;
      let keyCount = 0;
      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          if (gridData[k].active && gridData[k].hasSmallKey) {
            keyCount++;
            log += `  - Llave #${keyCount}: Ubicada en Celda [${k}] (${gridData[k].name})\n`;
          }
        });
      });
      if (keyCount === 0) log += `  (No hay Llaves de Latón requeridas en los cerrojos de esta incursión)\n`;
      log += `----------------------------------------------------------------------\n`;
      log += `🔗 CLUSTERS Y SALAS INTERCONECTADAS EN ESTA RUN:\n`;
      let clusterMap = {};
      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          if (gridData[k].active && gridData[k].clusterTag) {
            const ct = gridData[k].clusterTag;
            if (!clusterMap[ct]) clusterMap[ct] = [];
            clusterMap[ct].push(`[${k}] ${gridData[k].name}`);
          }
        });
      });
      const clusterKeys = Object.keys(clusterMap);
      if (clusterKeys.length === 0) {
        log += `  (No se han asignado Clusters Interconectados en esta run)\n`;
      } else {
        clusterKeys.forEach(ct => {
          log += `  - ${ct}: ${clusterMap[ct].join(" <---> ")}\n`;
        });
      }
      log += `----------------------------------------------------------------------\n`;
      log += `DETALLE DE CONEXIONES Y ESTADO DE SALAS ACTIVAS:\n\n`;

      ROWS.forEach(r => {
        COLS.forEach(c => {
          const k = `${r}${c}`;
          const cell = gridData[k];
          if (cell.active) {
            let elemStr = cell.elementTag ? ` [${cell.elementTag}]` : '';
            let clustStr = cell.clusterTag ? ` (🔗 ${cell.clusterTag})` : '';
            log += `* [${k}] ${cell.name}${elemStr}${clustStr} (${cell.role})\n`;
            ['N', 'S', 'W', 'E'].forEach(dir => {
              const nKey = getNeighborKey(k, dir);
              if (nKey && gridData[nKey].active) {
                const doorVal = getDoorState(k, dir);
                log += `  └─ (${dir}) -> [${nKey}] ${gridData[nKey].name} | ESTADO: ${doorVal}\n`;
              }
            });
            if (cell.notes) log += `     NOTAS / CAUSALIDAD: ${cell.notes}\n`;
            log += `\n`;
          }
        });
      });

      document.getElementById('output-log').value = log;
    }

    document.getElementById('inspect-active').onchange = (e) => {
      gridData[currentSelectedKey].active = e.target.value === "true";
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-role').onchange = (e) => {
      gridData[currentSelectedKey].role = e.target.value;
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-cluster').onchange = (e) => {
      gridData[currentSelectedKey].clusterTag = e.target.value;
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-element').onchange = (e) => {
      gridData[currentSelectedKey].elementTag = e.target.value;
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-has-key').onchange = (e) => {
      gridData[currentSelectedKey].hasSmallKey = e.target.checked;
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-preset').onchange = (e) => {
      const val = e.target.value;
      if (val === "CUSTOM") {
        document.getElementById('group-custom-name').style.display = "flex";
      } else {
        document.getElementById('group-custom-name').style.display = "none";
        gridData[currentSelectedKey].name = val;
        autoDetectTags(gridData[currentSelectedKey]);
        selectCell(currentSelectedKey);
        renderGrid();
        updateOutputLog();
      }
    };

    document.getElementById('inspect-custom-name').oninput = (e) => {
      gridData[currentSelectedKey].name = e.target.value;
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('inspect-notes').oninput = (e) => {
      gridData[currentSelectedKey].notes = e.target.value;
      updateOutputLog();
    };

    document.getElementById('btn-generate').onclick = generateDungeon;

    document.getElementById('btn-set-atrio').onclick = () => {
      Object.keys(gridData).forEach(k => {
        if (gridData[k].role === "ATRIO") gridData[k].role = "NORMAL";
      });
      gridData[currentSelectedKey].active = true;
      gridData[currentSelectedKey].role = "ATRIO";
      gridData[currentSelectedKey].name = "Sala 01: Atrio de Entrada";
      renderGrid();
      selectCell(currentSelectedKey);
      updateOutputLog();
      alert(`📍 Celda [ ${currentSelectedKey} ] configurada como Entrada (Atrio).`);
    };

    document.getElementById('btn-clear').onclick = () => {
      initGridData();
      renderGrid();
      updateOutputLog();
    };

    document.getElementById('btn-copy').onclick = () => {
      const log = document.getElementById('output-log');
      log.select();
      document.execCommand('copy');
      alert('¡Resumen de la run copiado al portapapeles!');
    };

    document.getElementById('btn-export').onclick = () => {
      const payload = {
        gridData,
        doorData,
        currentSubRoll,
        currentAlign
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `minos_dungeon_7x7.json`;
      a.click();
    };

    document.getElementById('btn-import').onclick = () => {
      document.getElementById('file-input').click();
    };

    document.getElementById('file-input').onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const payload = JSON.parse(evt.target.result);
          gridData = payload.gridData;
          doorData = payload.doorData;
          currentSubRoll = payload.currentSubRoll || 1;
          currentAlign = payload.currentAlign || 1;
          renderGrid();
          selectCell(currentSelectedKey);
          updateOutputLog();
          alert('¡Configuración del Laberinto cargada con éxito!');
        } catch (err) {
          alert('Error al leer el archivo JSON.');
        }
      };
      reader.readAsText(file);
    };

    populateDoorDropdowns();
    initGridData();
    generateDungeon();
  </script>
