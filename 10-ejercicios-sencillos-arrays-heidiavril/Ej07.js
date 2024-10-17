/* 7. Crear un array de objetos con el nombre y la longitud de cada palabra

Enunciado: Dado un array de palabras, utiliza el método map() para devolver un nuevo array de objetos.
Cada objeto debe contener la palabra original y su longitud. */

const palabras = ["avión", "barco", "tren", "automóvil"];

let palmapeao = palabras.map(word => {
    return {
        Palabra: word ,
        Longitud: word.length
    }
});
console.log(palmapeao);