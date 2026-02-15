const elements = [
  [1, "H", "Hydrogen"],
  [2, "He", "Helium"],
  [3, "Li", "Lithium"],
  [4, "Be", "Beryllium"],
  [5, "B", "Boron"],
  [6, "C", "Carbon"],
  [7, "N", "Nitrogen"],
  [8, "O", "Oxygen"],
  [9, "F", "Fluorine"],
  [10, "Ne", "Neon"],
  [11, "Na", "Sodium"],
  [12, "Mg", "Magnesium"],
  [13, "Al", "Aluminum"],
  [14, "Si", "Silicon"],
  [15, "P", "Phosphorus"],
  [16, "S", "Sulfur"],
  [17, "Cl", "Chlorine"],
  [18, "Ar", "Argon"],
  [19, "K", "Potassium"],
  [20, "Ca", "Calcium"],
  [21, "Sc", "Scandium"],
  [22, "Ti", "Titanium"],
  [23, "V", "Vanadium"],
  [24, "Cr", "Chromium"],
  [25, "Mn", "Manganese"],
  [26, "Fe", "Iron"],
  [27, "Co", "Cobalt"],
  [28, "Ni", "Nickel"],
  [29, "Cu", "Copper"],
  [30, "Zn", "Zinc"],
  [31, "Ga", "Gallium"],
  [32, "Ge", "Germanium"],
  [33, "As", "Arsenic"],
  [34, "Se", "Selenium"],
  [35, "Br", "Bromine"],
  [36, "Kr", "Krypton"],
  [37, "Rb", "Rubidium"],
  [38, "Sr", "Strontium"],
  [39, "Y", "Yttrium"],
  [40, "Zr", "Zirconium"],
  [41, "Nb", "Niobium"],
  [42, "Mo", "Molybdenum"],
  [43, "Tc", "Technetium"],
  [44, "Ru", "Ruthenium"],
  [45, "Rh", "Rhodium"],
  [46, "Pd", "Palladium"],
  [47, "Ag", "Silver"],
  [48, "Cd", "Cadmium"],
  [49, "In", "Indium"],
  [50, "Sn", "Tin"],
  [51, "Sb", "Antimony"],
  [52, "Te", "Tellurium"],
  [53, "I", "Iodine"],
  [54, "Xe", "Xenon"],
  [55, "Cs", "Cesium"],
  [56, "Ba", "Barium"],
  [57, "La", "Lanthanum"],
  [58, "Ce", "Cerium"],
  [59, "Pr", "Praseodymium"],
  [60, "Nd", "Neodymium"],
  [61, "Pm", "Promethium"],
  [62, "Sm", "Samarium"],
  [63, "Eu", "Europium"],
  [64, "Gd", "Gadolinium"],
  [65, "Tb", "Terbium"],
  [66, "Dy", "Dysprosium"],
  [67, "Ho", "Holmium"],
  [68, "Er", "Erbium"],
  [69, "Tm", "Thulium"],
  [70, "Yb", "Ytterbium"],
  [71, "Lu", "Lutetium"],
  [72, "Hf", "Hafnium"],
  [73, "Ta", "Tantalum"],
  [74, "W", "Tungsten"],
  [75, "Re", "Rhenium"],
  [76, "Os", "Osmium"],
  [77, "Ir", "Iridium"],
  [78, "Pt", "Platinum"],
  [79, "Au", "Gold"],
  [80, "Hg", "Mercury"],
  [81, "Tl", "Thallium"],
  [82, "Pb", "Lead"],
  [83, "Bi", "Bismuth"],
  [84, "Po", "Polonium"],
  [85, "At", "Astatine"],
  [86, "Rn", "Radon"],
  [87, "Fr", "Francium"],
  [88, "Ra", "Radium"],
  [89, "Ac", "Actinium"],
  [90, "Th", "Thorium"],
  [91, "Pa", "Protactinium"],
  [92, "U", "Uranium"],
  [93, "Np", "Neptunium"],
  [94, "Pu", "Plutonium"],
  [95, "Am", "Americium"],
  [96, "Cm", "Curium"],
  [97, "Bk", "Berkelium"],
  [98, "Cf", "Californium"],
  [99, "Es", "Einsteinium"],
  [100, "Fm", "Fermium"],
  [101, "Md", "Mendelevium"],
  [102, "No", "Nobelium"],
  [103, "Lr", "Lawrencium"],
  [104, "Rf", "Rutherfordium"],
  [105, "Db", "Dubnium"],
  [106, "Sg", "Seaborgium"],
  [107, "Bh", "Bohrium"],
  [108, "Hs", "Hassium"],
  [109, "Mt", "Meitnerium"],
  [110, "Ds", "Darmstadtium"],
  [111, "Rg", "Roentgenium"],
  [112, "Cn", "Copernicium"],
  [113, "Nh", "Nihonium"],
  [114, "Fl", "Flerovium"],
  [115, "Mc", "Moscovium"],
  [116, "Lv", "Livermorium"],
  [117, "Ts", "Tennessine"],
  [118, "Og", "Oganesson"]
].map(([number, symbol, name]) => ({ number, symbol, name }));

const bySymbol = new Map(elements.map((el) => [el.symbol, el]));

const periodicLayout = [
  ["H", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "He"],
  ["Li", "Be", null, null, null, null, null, null, null, null, null, null, "B", "C", "N", "O", "F", "Ne"],
  ["Na", "Mg", null, null, null, null, null, null, null, null, null, null, "Al", "Si", "P", "S", "Cl", "Ar"],
  ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
  ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
  ["Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
  ["Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"]
];

const lanthanides = ["Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
const actinides = ["Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];

const subshellOrder = [
  [1, 2],
  [2, 2],
  [2, 6],
  [3, 2],
  [3, 6],
  [4, 2],
  [3, 10],
  [4, 6],
  [5, 2],
  [4, 10],
  [5, 6],
  [6, 2],
  [4, 14],
  [5, 10],
  [6, 6],
  [7, 2],
  [5, 14],
  [6, 10],
  [7, 6]
];

const atomSvg = document.getElementById("atomSvg");
const picker = document.getElementById("elementPicker");
const periodicGrid = document.getElementById("periodicGrid");
const lanthanidesRow = document.getElementById("lanthanidesRow");
const actinidesRow = document.getElementById("actinidesRow");
const atomicNumberEl = document.getElementById("atomicNumber");
const elementNameEl = document.getElementById("elementName");
const shellConfigEl = document.getElementById("shellConfig");

let selectedSymbol = "C";

function calcShells(atomicNumber) {
  let remaining = atomicNumber;
  const shells = Array(8).fill(0);

  for (const [n, capacity] of subshellOrder) {
    if (remaining <= 0) break;
    const used = Math.min(capacity, remaining);
    shells[n] += used;
    remaining -= used;
  }

  while (shells.length && shells[shells.length - 1] === 0) {
    shells.pop();
  }

  return shells.slice(1);
}

function createSvg(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs)) {
    node.setAttribute(key, value);
  }
  return node;
}

function renderAtom(element) {
  atomSvg.innerHTML = "";
  const cx = 300;
  const cy = 300;
  const shells = calcShells(element.number);

  const startRadius = 72;
  const maxRadius = Math.min(252, 150 + shells.length * 18);
  const step = shells.length > 1 ? (maxRadius - startRadius) / (shells.length - 1) : 0;

  shells.forEach((electronCount, index) => {
    const radius = startRadius + step * index;
    const ring = createSvg("circle", {
      cx,
      cy,
      r: radius,
      class: "ring"
    });
    atomSvg.appendChild(ring);

    const orbitGroup = createSvg("g", {
      class: "orbit",
      style: `animation-duration:${14 + index * 3}s;animation-direction:${index % 2 ? "reverse" : "normal"};`
    });

    for (let i = 0; i < electronCount; i++) {
      const angle = (Math.PI * 2 * i) / electronCount;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const electron = createSvg("circle", {
        cx: x.toFixed(2),
        cy: y.toFixed(2),
        r: Math.max(2.6, 5.4 - index * 0.42),
        class: "electron"
      });
      orbitGroup.appendChild(electron);
    }

    atomSvg.appendChild(orbitGroup);
  });

  const nucleusGlow = createSvg("circle", {
    cx,
    cy,
    r: 49,
    class: "nucleus-core"
  });

  const nucleusText = createSvg("text", {
    x: cx,
    y: cy,
    class: "nucleus-text"
  });
  nucleusText.textContent = element.symbol;

  atomSvg.appendChild(nucleusGlow);
  atomSvg.appendChild(nucleusText);

  atomicNumberEl.textContent = element.number;
  elementNameEl.textContent = `${element.name} (${element.symbol})`;
  shellConfigEl.textContent = shells.join(" - ");
}

function tile(symbol, isSeries = false) {
  if (!symbol) {
    const spacer = document.createElement("div");
    spacer.className = "spacer";
    return spacer;
  }

  const el = bySymbol.get(symbol);
  const button = document.createElement("button");
  button.className = "ptile";
  button.type = "button";
  button.dataset.symbol = symbol;
  button.title = `${el.number}. ${el.name}`;
  button.textContent = symbol;

  if (isSeries) {
    button.style.background = "#171717";
  }

  button.addEventListener("click", () => setSelected(symbol));
  return button;
}

function renderPeriodicTable() {
  periodicGrid.innerHTML = "";
  periodicLayout.forEach((row) => {
    row.forEach((symbol) => periodicGrid.appendChild(tile(symbol)));
  });

  lanthanidesRow.innerHTML = "";
  actinidesRow.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    lanthanidesRow.appendChild(tile(null));
    actinidesRow.appendChild(tile(null));
  }

  lanthanides.forEach((symbol) => lanthanidesRow.appendChild(tile(symbol, true)));
  actinides.forEach((symbol) => actinidesRow.appendChild(tile(symbol, true)));

  while (lanthanidesRow.children.length < 18) lanthanidesRow.appendChild(tile(null));
  while (actinidesRow.children.length < 18) actinidesRow.appendChild(tile(null));
}

function syncSelectedUi() {
  document.querySelectorAll(".ptile.active").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(`.ptile[data-symbol='${selectedSymbol}']`).forEach((el) => el.classList.add("active"));
  picker.value = selectedSymbol;
}

function setSelected(symbol) {
  selectedSymbol = symbol;
  const element = bySymbol.get(symbol);
  renderAtom(element);
  syncSelectedUi();
}

function initPicker() {
  picker.innerHTML = "";
  elements.forEach((el) => {
    const option = document.createElement("option");
    option.value = el.symbol;
    option.textContent = `${el.number}. ${el.name} (${el.symbol})`;
    picker.appendChild(option);
  });

  picker.addEventListener("change", (event) => {
    setSelected(event.target.value);
  });
}

initPicker();
renderPeriodicTable();
setSelected(selectedSymbol);
