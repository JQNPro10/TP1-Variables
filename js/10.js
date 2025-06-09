let n = parseInt(prompt("Ingresa un número:"));

if (n % 2 === 0) {
  alert(`El numero es divisible entre 2.`);
} else if (n % 3 === 0){
  alert(`El numero es divisible entre 3.`);
} else if (n % 5 === 0){
  alert(`El numero es divisible entre 5.`);
} else if (n % 7 === 0){
  alert(`El numero es divisible entre 7.`);
} else {
    alert(`El numero no es divisible entre 2, 3, 5 o 7.`);
}