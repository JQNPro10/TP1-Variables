const n = parseInt(prompt("Ingresa un número"));
let divisibles = [];

if (n % 2 === 0) {
  divisibles.push(2);
}
if (n % 3 === 0) {
  divisibles.push(3);
}
if (n % 5 === 0) {
  divisibles.push(5);
}
if (n % 7 === 0) {
  divisibles.push(7);
}

if (divisibles.length > 0) {
  alert(n + " es divisible entre: " + divisibles)
} else {
  alert(n + " no es divisible entre 2, 3, 5 o 7");
}