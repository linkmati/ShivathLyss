// UI Renderer & Event Listeners Module

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
      let unlockedClass = cell.unlocked ? 'unlocked-cell' : '';

      div.className = `cell ${cell.active ? 'active' : 'empty'} ${cell.role.toLowerCase()} ${subClass} ${setClass} ${clusterClass} ${unlockedClass}`;
      if (k === currentSelectedKey) div.classList.add('selected');
      div.onclick = () => selectCell(k);

      let icon = cell.active ? "🚪" : "⚪";
      if (cell.role === "ATRIO") icon = "🏛️";
      if (cell.role === "SUBDUNGEON") icon = "👑";
      if (cell.role === "SECRET") icon = "🗝️";
      if (cell.role === "COMBAT") icon = "⚔️";

      let keyTag = cell.hasSmallKey ? `<span class="cell-key-tag" title="Contiene Llave de Latón (Small Key)">🗝️ LLAVE</span>` : '';
      let unlockedTag = cell.unlocked ? `<span class="cell-unlocked-tag" title="Sala Desbloqueada (Persistente)">🔓 UNLOCKED</span>` : '';
      let combatTag = (cell.combat && cell.combat.hasCombat) ? `<span class="cell-combat-tag" title="Combate Añadido (CR ${cell.combat.cr}: ${cell.combat.monster})">⚔️ CR ${cell.combat.cr}</span>` : '';
      let clusterTagHtml = cell.clusterTag ? `<span class="cell-cluster-tag ${clusterTagClass}">🔗 ${cell.clusterTag}</span>` : '';
      let elementTagHtml = cell.elementTag ? `<span class="cell-element-tag elem-tag-${cell.elementTag.toLowerCase()}">${cell.elementTag}</span>` : '';

      div.innerHTML = `
        <span class="cell-coord">${k}</span>
        ${elementTagHtml}
        ${keyTag}
        ${unlockedTag}
        ${combatTag}
        <div class="cell-icon">${icon}</div>
        <div class="cell-name">${cell.active ? cell.name : 'VACÍO'}</div>
        ${clusterTagHtml}
      `;

      if (cell.active) {
        ['N', 'S', 'W', 'E'].forEach(dir => {
          const doorState = getDoorState(k, dir);
          if (doorState !== "Sin Pasadizo (Muro Macizo)") {
            const doorInd = document.createElement('div');
            let dClass = 'door-locked';
            if (doorState === 'Puerta Abierta de Par en Par') dClass = 'door-open';
            else if (doorState === '🧱 Muro Sólido (Bloqueado)') dClass = 'door-wall';
            doorInd.className = `door-indicator ${dir} ${dClass}`;
            div.appendChild(doorInd);
          }
        });
      }

      container.appendChild(div);
    });
  });
  updateUnlockedCounter();
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
  if (!cell.combat) cell.combat = { hasCombat: false, cr: 7, monster: "" };

  document.getElementById('inspect-title').textContent = `Celda [ ${key} ]`;
  document.getElementById('inspect-active').value = cell.active ? "true" : "false";
  document.getElementById('inspect-role').value = cell.role;
  document.getElementById('inspect-has-key').checked = cell.hasSmallKey || false;
  document.getElementById('inspect-unlocked').checked = cell.unlocked || false;

  document.getElementById('inspect-has-combat').checked = cell.combat.hasCombat || false;
  document.getElementById('group-combat-details').style.display = cell.combat.hasCombat ? "flex" : "none";
  document.getElementById('inspect-combat-cr').value = cell.combat.cr || 7;
  document.getElementById('inspect-combat-monster').value = cell.combat.monster || "";

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
  log += `🔓 SALAS DESBLOQUEADAS PERSISTENTES EN MEMORIA GLOBAL:\n`;
  const savedNames = getUnlockedRoomNames();
  if (savedNames.size > 0) {
    Array.from(savedNames).forEach(rName => {
      const activeCellKey = Object.keys(gridData).find(k => gridData[k].active && gridData[k].name === rName);
      const locStr = activeCellKey ? `📍 En mapa hoy [${activeCellKey}]` : `⚪ No generada hoy`;
      log += `  - 🔓 ${rName} (${locStr})\n`;
    });
  } else {
    log += `  (No hay salas desbloqueadas guardadas en memoria)\n`;
  }
  log += `----------------------------------------------------------------------\n`;
  log += `⚔️ SALAS DE COMBATE DEDICADAS EN EL MAPA (20-50% DE LAS SALAS):\n`;
  let combatCount = 0;
  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k = `${r}${c}`;
      const cell = gridData[k];
      if (cell.active && (cell.role === "COMBAT" || (cell.combat && cell.combat.hasCombat))) {
        combatCount++;
        log += `  - Combate #${combatCount}: Celda [${k}] ${cell.name} -> ⚔️ CR ${cell.combat.cr} (${cell.combat.monster})\n`;
      }
    });
  });
  if (combatCount === 0) log += `  (No hay salas de combate dedicadas en esta incursión)\n`;
  log += `----------------------------------------------------------------------\n`;
  log += `DETALLE DE CONEXIONES Y ESTADO DE SALAS ACTIVAS:\n\n`;

  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k = `${r}${c}`;
      const cell = gridData[k];
      if (cell.active) {
        let elemStr = cell.elementTag ? ` [${cell.elementTag}]` : '';
        let combatStr = (cell.combat && cell.combat.hasCombat) ? ` | ⚔️ COMBATE CR ${cell.combat.cr}` : '';
        log += `* [${k}] ${cell.name}${elemStr} (${cell.role})${combatStr}\n`;
        ['N', 'S', 'W', 'E'].forEach(dir => {
          const nKey = getNeighborKey(k, dir);
          if (nKey && gridData[nKey].active) {
            const doorVal = getDoorState(k, dir);
            let stateStr = doorVal;
            if (doorVal === "🧱 Muro Sólido (Bloqueado)") stateStr = "❌ MURO SÓLIDO (BLOQUEADO)";
            log += `  └─ (${dir}) -> [${nKey}] ${gridData[nKey].name} | ESTADO: ${stateStr}\n`;
          }
        });
        if (cell.notes) log += `     NOTAS / CAUSALIDAD: ${cell.notes}\n`;
        log += `\n`;
      }
    });
  });

  document.getElementById('output-log').value = log;
}

// Bind DOM Events
document.addEventListener('DOMContentLoaded', () => {
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

  document.getElementById('inspect-unlocked').onchange = (e) => {
    gridData[currentSelectedKey].unlocked = e.target.checked;
    saveUnlockedToLocalStorage();
    renderGrid();
    updateOutputLog();
  };

  document.getElementById('inspect-has-combat').onchange = (e) => {
    if (!gridData[currentSelectedKey].combat) gridData[currentSelectedKey].combat = { hasCombat: false, cr: 7, monster: "" };
    gridData[currentSelectedKey].combat.hasCombat = e.target.checked;
    document.getElementById('group-combat-details').style.display = e.target.checked ? "flex" : "none";
    renderGrid();
    updateOutputLog();
  };

  document.getElementById('inspect-combat-cr').onchange = (e) => {
    if (!gridData[currentSelectedKey].combat) gridData[currentSelectedKey].combat = { hasCombat: true, cr: 7, monster: "" };
    gridData[currentSelectedKey].combat.cr = parseInt(e.target.value) || 7;
    renderGrid();
    updateOutputLog();
  };

  document.getElementById('inspect-combat-monster').oninput = (e) => {
    if (!gridData[currentSelectedKey].combat) gridData[currentSelectedKey].combat = { hasCombat: true, cr: 7, monster: "" };
    gridData[currentSelectedKey].combat.monster = e.target.value;
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

  document.getElementById('btn-toggle-unlocked').onclick = () => {
    const cell = gridData[currentSelectedKey];
    cell.unlocked = !cell.unlocked;
    saveUnlockedToLocalStorage();
    renderGrid();
    selectCell(currentSelectedKey);
    updateOutputLog();
  };

  document.getElementById('btn-save-persistent').onclick = () => {
    saveUnlockedToLocalStorage();
    const saved = getUnlockedRoomNames();
    alert(`💾 ¡Se han guardado ${saved.size} salas desbloqueadas de forma persistente!`);
  };

  document.getElementById('btn-clear-persistent').onclick = () => {
    if (confirm("¿Seguro que deseas borrar la memoria de salas desbloqueadas en este navegador?")) {
      clearUnlockedLocalStorage();
      alert("🧹 Memoria persistente limpiada.");
    }
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

  // Initialize
  populateDoorDropdowns();
  initGridData();
  generateDungeon();
});
