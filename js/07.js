const n1 = prompt("di un numero")
const n2 = prompt("di otro numero")
const n3 = prompt("di otro numero")
if (n1 > n2 && n1 > n3){
    alert("El numero mas grande es: " + n1)
}else if (n2 > n3 && n2 > n3){
    alert("El numero mas grande es: " + n2)
}else {
    alert("El numero mas grande es: " + n3)
}