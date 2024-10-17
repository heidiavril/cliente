/* 5. Filtrar palabras que tienen más de 5 letras

Enunciado: Dado un array de strings, utiliza el método filter() para devolver un nuevo array con las palabras que tienen más de 5 letras. */

const palabras = ["elefante", "gato", "hipopótamo", "ratón", "cabra"];

let palabrasfilt = palabras.filter(
    function(word) {
        return word.length > 5
    });
console.log(palabrasfilt);