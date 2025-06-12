//calcular el precio con descuento: crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

let precInicial = parseFloat(prompt('Ingrese el precio del producto: '));

if( precInicial > 1000 ){
    precFinal = precInicial * 0.85;

    document.writeln(`El precio final del producto es: $${precFinal}`);
}else{
    document.writeln(`El precio final del producto es: $${precInicial}`);
}