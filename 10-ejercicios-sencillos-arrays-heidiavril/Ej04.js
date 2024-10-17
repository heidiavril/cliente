/* 4. Convertir array de cadenas a mayúsculas

Enunciado: Dado un array de strings, utiliza el método map() para devolver un nuevo array donde cada cadena esté en mayúsculas. */

const palabras = ["hola", "mundo", "javascript"];

let palabrasMayus = palabras.map(elemento => elemento.toUpperCase());
console.log(palabrasMayus);

const p2 = ["it's", "written", "in", "the", "stars", "and", "our", "cars", "have", "all", "been", "keeyed"];
let p2mayus = p2.map(function(elemento) {return elemento.toUpperCase()}).filter(function(e, index) {return index % 2 == 0}); // pasa todo a mayús y luego quita las palabras en posición par
console.log(p2mayus);