// 01-centigradoAFahrenheit.js
// Calcula cuantos grados fahrenheit son grados centígrados
document.writeln("<br>Ejercicio 14<br>");
const gradoCentigrado = parseInt(prompt("Ingrese los grados centígrados"));
const gradoFahrenheit = (gradoCentigrado * 9/5) + 32;
document.writeln("Los grados centígrados: " + gradoCentigrado + "°C equivalen a: " + gradoFahrenheit + "°F grados fahrenheit");
//ventana emergente para mostrar un mensaje
alert("Los grados centígrados: " + gradoCentigrado + "°C equivalen a " + gradoFahrenheit + "°F grados fahrenheit");