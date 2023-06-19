const margherita = {
  flower: 250,
  water: 150,
  salt: 5,
  oil: 16,
  yeast: 3,
  tomatoSauce: 250,
  mozzarella: 200,
  basil: 1,
};

const romana = {
  flower: 250,
  water: 150,
  salt: 5,
  oil: 16,
  yeast: 3,
  tomatoSauce: 350,
  mozzarella: 200,
  oregan: 10,
  anchovies: 5,
};

const focaccia = {
  flower: 470,
  water: 230,
  salt: 12,
  sugar: 16,
  oil: 55,
  yeast: 3,
};

let orders = [
  "margherita",
  "romana",
  "focaccia",
  "romana",
  "focaccia",
  "margherita",
];

// Definisco dei contatori, delle variaibili che possono accumulare gli ingredienti man mano che ci servono per ognunga delle pizze
let totalFlower = 0;
let totalWater = 0;
let totalSalt = 0;
let totalOil = 0;
let totalYeast = 0;
let totalTomatoSauce = 0;
let totalMozzarella = 0;
let totalBasil = 0;
let totalOregan = 0;
let totalAnchovies = 0;

// Dobbiamo fare una condizione in cui capiamo quanta farina o quanto ingrediente aggiungere alla nostra variabile che contiene il totale

orders.forEach((order) => {
  if (order === "margherita") {
    totalFlower += margherita.flower; //il totale della farina che ci serve è uguale al totale che avevamo in precedenza + la quantità di farina che è necessaria a realizzare questa pizza definita all'interno di questo oggetto (notazione del punto per accedere alla properità flower dell'oggetto margherita)
    totalWater += margherita.water;
    totalSalt += margherita.salt;
    totalOil += margherita.oil;
    totalYeast += margherita.yeast;
    totalTomatoSauce += margherita.tomatoSauce;
    totalMozzarella += margherita.mozzarella;
    totalBasil += margherita.basil;
  } else if (order === "romana") {
    totalFlower += romana.flower;
    totalWater += romana.water;
    totalSalt += romana.salt;
    totalOil += romana.oil;
    totalYeast += romana.yeast;
    totalTomatoSauce += romana.tomatoSauce;
    totalMozzarella += romana.mozzarella;
    totalOregan += romana.oregan;
    totalAnchovies += romana.anchovies;
  } else if (order === "focaccia") {
    totalFlower += focaccia.flower;
    totalWater += focaccia.water;
    totalSalt += focaccia.salt;
    totalOil += focaccia.oil;
    totalYeast += focaccia.yeast;
  } else {
    console.log("Scusa ma non possiamo realizzare questa pizza: " + order); // se riceviamo una pizza che non abbiamo
  }

  
});

console.log("Ecco la lista della spesa:");

  console.log(totalFlower + " grammi di farina 00");
  console.log(totalWater + " ml di acqua");
  console.log(totalSalt + " grammi di sale");
  console.log(totalOil + " ml di olio");
  console.log(totalYeast + " grammi di lievito");
  console.log(totalTomatoSauce + " ml di salsa di pomodoro");
  console.log(totalMozzarella + " grammi di mozzarella");

  // un if per controllare che gli ingredienti che non sono in tutte le ricette come il basilico siano diversi da zero

  if (totalBasil !== 0) {
    console.log(totalBasil + " foglie di basilico");
  }

  if (totalOregan !== 0) {
    console.log(totalOregan + " grammi di origano");
  }

  if (totalAnchovies !== 0) {
    console.log(totalAnchovies + " acciughe");
  }
