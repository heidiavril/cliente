/* 4. Estructuras de datos - Arrays

Enunciado: Dado un array de números, escribe una función que devuelva un nuevo array
con los números multiplicados por 2. */

function porDos(arr) {
    const lol = [];
    arr.forEach(element => {
        lol.push(element*2)
    });

    console.log(lol);
    return lol;
}

porDos([1, 2, 3, 4, 5]);
