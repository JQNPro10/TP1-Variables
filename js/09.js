const palabra = prompt("Ingresa una palabra de 4 letras").toLowerCase();

const l1 = palabra[0];
const l2 = palabra[1];
const l3 = palabra[2];
const l4 = palabra[3];

let vocales = "";

if (l1 === "a" || l1 === "e" || l1 === "i" || l1 === "o" || l1 === "u") {
  vocales = vocales + l1;
}
if (l2 === "a" || l2 === "e" || l2 === "i" || l2 === "o" || l2 === "u") {
  vocales = vocales + l2;
}
if (l3 === "a" || l3 === "e" || l3 === "i" || l3 === "o" || l3 === "u") {
  vocales = vocales + l3;
}
if (l4 === "a" || l4 === "e" || l4 === "i" || l4 === "o" || l4 === "u") {
  vocales = vocales + l4;
}

console.log("Vocales encontradas:", vocales);
