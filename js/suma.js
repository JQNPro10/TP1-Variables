//realizar una suma de dos numeros: crear un algoritmo que permita al usuario ingresar dos numeros, realizar la suma de ambos y mostrar el resultado

const num1 = parseInt(prompt('Ingresar el primer numero: '));
const num2 = parseInt(prompt('Ingresar el segundo numero: '));

suma = num1 + num2;

document.writeln(`La suma de ${num1} y ${num2} da como resultado ${suma}`);