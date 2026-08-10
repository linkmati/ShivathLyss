// Procedural Maze Generator & Topology Algorithm Module

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
  cell.elementTag = "";
  if (typeof SET_ROOMS !== 'undefined' && SET_ROOMS["GENERIC"] && SET_ROOMS["GENERIC"].includes(cell.name)) return;
  const n = cell.name;
  if (n.includes("Magma") || n.includes("Horno") || n.includes("Antorchas") || n.includes("Forja") || n.includes("Caldera") || n.includes("Vapor")) cell.elementTag = "FIRE";
  else if (n.includes("Cisterna") || n.includes("Agua") || n.includes("Acuífero") || n.includes("Esclusas") || n.includes("Balsas") || n.includes("Hidráulico")) cell.elementTag = "WATER";
  else if (n.includes("Viento") || n.includes("Vela Solar") || n.includes("Gaseosas") || n.includes("Venturi") || n.includes("Planeador")) cell.elementTag = "AIR";
  else if (n.includes("Basalto") || n.includes("Catapulta") || n.includes("Piedra") || n.includes("Telúricos") || n.includes("Rodillo") || n.includes("Anclas")) cell.elementTag = "EARTH";
  else if (n.includes("Hongo") || n.includes("Vides") || n.includes("Esporas") || n.includes("Flora") || n.includes("Bulbo")) cell.elementTag = "LIFE";
  else if (n.includes("Espejos") || n.includes("Sombras") || n.includes("Anamórfica") || n.includes("Prisma") || n.includes("Penumbra")) cell.elementTag = "LIGHT";
}

function getNormalRandomCR(mean = 7, stdDev = 1.8) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  let cr = Math.round(num * stdDev + mean);
  return Math.max(3, Math.min(12, cr));
}

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

  let pool = [...SET_ROOMS["GENERIC"], ...activeElementalRooms];
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

  // Conexiones de Adyacencia: Salas que acabaron tocándose en la rejilla
  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k1 = `${r}${c}`;
      if (gridData[k1].active) {
        ['N', 'S', 'W', 'E'].forEach(dir => {
          const k2 = getNeighborKey(k1, dir);
          if (k2 && gridData[k2].active) {
            const pairKey = getDoorPairKey(k1, k2);
            if (!doorData[pairKey]) {
              if (Math.random() < 0.25) {
                doorData[pairKey] = "🧱 Muro Sólido (Bloqueado)";
              } else {
                doorData[pairKey] = Math.random() < 0.65 ? "Puerta Abierta de Par en Par" : DOOR_TYPES[Math.floor(Math.random() * (DOOR_TYPES.length - 2))];
              }
            }
          }
        });
      }
    });
  });

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
        clusterTag: "",
        elementTag: "",
        hasSmallKey: false,
        notes: `Subdungeon: ${subInfo.name} - Guardián: ${subInfo.boss} (Distancia <= 3)`
      };
    }
  }

  // ISAAC SECRET ROOM GENERATION:
  // Must NOT be adjacent to the Subdungeon room!
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

        if (!touchesSubdungeon && activeNb.length >= 2) {
          secretCandidates.push({ key: k, count: activeNb.length, nbs: activeNb });
        }
      }
    });
  });

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
      clusterTag: "",
      elementTag: "",
      hasSmallKey: false,
      notes: "Regla Isaac Pura: NUNCA colindante a Subdungeon. Sin pistas externas en paredes -> Bomba / EARTH Shatter."
    };

    sTarget.nbs.forEach(nKey => {
      const pairKey = getDoorPairKey(sKey, nKey);
      doorData[pairKey] = "Muro de Piedra Frágil [EARTH]";
    });
  }

  // SMALL KEYS PLACEMENT LOGIC
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

  // DEDICATED COMBAT ROOMS (20% - 50% of active rooms placed in separate grid locations)
  const candidateCombatKeys = Object.keys(gridData).filter(k => gridData[k].active && gridData[k].role === "NORMAL");
  const combatPercent = 0.20 + (Math.random() * 0.30);
  const numCombatRooms = Math.max(1, Math.round(candidateCombatKeys.length * combatPercent));

  const shuffledForCombat = [...candidateCombatKeys].sort(() => Math.random() - 0.5);
  const chosenCombatKeys = shuffledForCombat.slice(0, numCombatRooms);

  chosenCombatKeys.forEach(k => {
    const cr = getNormalRandomCR(7, 1.8);
    const monster = CR_MONSTER_CATALOG[cr] || "Guardián del Laberinto";
    gridData[k].role = "COMBAT";
    gridData[k].name = `⚔️ Sala de Combate: ${monster} (CR ${cr})`;
    gridData[k].combat = {
      hasCombat: true,
      cr: cr,
      monster: monster
    };
    gridData[k].notes = `Sala de Combate dedicada de Minos en posición independiente. Enemigo: ${monster} (CR ${cr}). Exige victoria en combate para avanzar.`;
  });

  document.getElementById('info-dia').innerHTML = `Palabra: <strong>${subObj.code}</strong>`;
  document.getElementById('info-sub').innerHTML = `Subdungeon: <strong>${subObj.name}</strong>`;
  document.getElementById('info-align').innerHTML = `Alineamiento: <strong>[${currentAlign}]</strong>`;

  applyUnlockedFromLocalStorage();

  selectCell(startKey);
  updateOutputLog();
}
