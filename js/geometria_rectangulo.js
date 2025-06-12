//Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. 
//Las fórmulas son:
//Perímetro: P = 2*(largo+ancho)
//Área: A=largo×ancho

const largo = parseInt(prompt('Ingrese el largo: '));
const ancho = parseInt(prompt('Ingrese el ancho: '));

perimetro = 2 * (largo + ancho);
area = largo * ancho;

document.writeln(`El perimetro del rectangulo es: ${perimetro} y su area es: ${area}`);