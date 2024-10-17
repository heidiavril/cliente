// 7. Palíndromos

// Enunciado: Crea una función que determine si una palabra es un palíndromo.
// Tip: usar Regex -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions

function palin(str) { // acepto palabras o frases
    let auxa = "", auxb = "";

    for (let i = 0; i < str.length; i++) { // quito los espacios y lo meto todo en minúsculas
        if (str[i] != " ") {
            auxa += str[i].toLowerCase();
        }
    }

    for (let i = auxa.length - 1; i >= 0; i--) { // recorro la palabra al revés
        auxb += auxa[i];
    }

    if (auxa === auxb) { // comparo
        console.log(`Es palíndromo`);
    } else {
        console.log(`No es palíndromo`);
    }
}

palin("eco eco");
palin("anilina");
palin("dabale Arroz a la Zorra el abad")