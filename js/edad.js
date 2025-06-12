//Pedir la edad y decir si es mayor de edad: Crear un algoritmo
//Si es mayor de edad (18 años o mas).
const edad = parseInt(prompt("Ingresa tu edad"))
console.log(edad)

//Si la edad esta entre 0 y 110 años
//&& AND
//|| OR
if(edad > 0 && edad <= 110){
    if (edad >= 18) {
        alert("Sos mayor de edad")
    } else {
        alert("Sos menor de edad")
    }
}else{
    alert("Valor erroneo")
}