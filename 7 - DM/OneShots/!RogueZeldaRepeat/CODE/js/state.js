// State Management & Persistence Module
let gridData = {}; 
let doorData = {}; 
let currentSelectedKey = "D1";
let currentSubRoll = 1;
let currentAlign = 1;

const LOCAL_STORAGE_KEY = 'minos_unlocked_room_names_v2';

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
        unlocked: false,
        combat: { hasCombat: false, cr: 7, monster: "" },
        clusterTag: "",
        elementTag: "",
        notes: ""
      };
    });
  });
}

function getUnlockedRoomNames() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(arr.map(item => (typeof item === 'object' && item.name) ? item.name : item));
  } catch (e) {
    return new Set();
  }
}

function saveUnlockedToLocalStorage() {
  const unlockedNames = new Set(getUnlockedRoomNames());
  
  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k = `${r}${c}`;
      const cell = gridData[k];
      if (cell && cell.active && cell.name) {
        if (cell.unlocked) {
          unlockedNames.add(cell.name);
        } else {
          unlockedNames.delete(cell.name);
        }
      }
    });
  });

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(unlockedNames)));
  updateUnlockedCounter();
}

function applyUnlockedFromLocalStorage() {
  const savedNames = getUnlockedRoomNames();
  
  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k = `${r}${c}`;
      const cell = gridData[k];
      if (cell) {
        // Strict room name matching: position key is ignored!
        cell.unlocked = cell.active && savedNames.has(cell.name);
      }
    });
  });
  updateUnlockedCounter();
}

function clearUnlockedLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  ROWS.forEach(r => {
    COLS.forEach(c => {
      if (gridData[`${r}${c}`]) gridData[`${r}${c}`].unlocked = false;
    });
  });
  renderGrid();
  updateUnlockedCounter();
  updateOutputLog();
}

function updateUnlockedCounter() {
  const savedNames = getUnlockedRoomNames();
  let activeUnlockedCount = 0;
  ROWS.forEach(r => {
    COLS.forEach(c => {
      const k = `${r}${c}`;
      if (gridData[k] && gridData[k].active && gridData[k].unlocked) {
        activeUnlockedCount++;
      }
    });
  });
  const counterEl = document.getElementById('unlocked-counter');
  if (counterEl) {
    counterEl.innerHTML = `🔓 Salas Desbloqueadas: <strong>${activeUnlockedCount}</strong> en mapa (<strong>${savedNames.size}</strong> en memoria global)`;
  }
}
