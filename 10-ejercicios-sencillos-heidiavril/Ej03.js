/* 3. Funciones

Enunciado: Escribe una función que acepte una cadena como parámetro y devuelva la cadena invertida. */

function cadInvertida(str) {
    let final = "";
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }

    console.log(`${final}`);
    return final;
}

cadInvertida("hola");
cadInvertida("roma");