let n = parseInt(prompt("Ingresa un número:"));
let mensaje = `El ${n}`;
let tieneDivisor = false;

if (n % 2 === 0) {
    mensaje += " es divisible por 2";
    tieneDivisor = true;

    if (n % 3 === 0) {
        mensaje += " y por 3";

        if (n % 5 === 0) {
            mensaje += " y por 5";

            if (n % 7 === 0) {
                mensaje += " y por 7.";
            } else {
                mensaje += ".";
            }

        } else if (n % 7 === 0) {
            mensaje += " y por 7.";
        } else {
            mensaje += ".";
        }

    } else if (n % 5 === 0) {
        mensaje += " y por 5";

        if (n % 7 === 0) {
            mensaje += " y por 7.";
        } else {
            mensaje += ".";
        }

    } else if (n % 7 === 0) {
        mensaje += " y por 7.";
    } else {
        mensaje += ".";
    }

} else if (n % 3 === 0) {
    mensaje += " es divisible por 3";
    tieneDivisor = true;

    if (n % 5 === 0) {
        mensaje += " y por 5";

        if (n % 7 === 0) {
            mensaje += " y por 7.";
        } else {
            mensaje += ".";
        }

    } else if (n % 7 === 0) {
        mensaje += " y por 7.";
    } else {
        mensaje += ".";
    }

} else if (n % 5 === 0) {
    mensaje += " es divisible por 5";
    tieneDivisor = true;

    if (n % 7 === 0) {
        mensaje += " y por 7.";
    } else {
        mensaje += ".";
    }

} else if (n % 7 === 0) {
    mensaje += " es divisible por 7.";
    tieneDivisor = true;

} else {
    mensaje = `El ${n} no es divisible entre 2, 3, 5 o 7.`;
}

alert(mensaje);
