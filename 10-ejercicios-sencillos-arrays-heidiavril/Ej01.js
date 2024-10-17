/* 1. Elevar al cubo los elementos de un array

Enunciado: Dado un array de números, utiliza el método map() para devolver un nuevo array donde
cada elemento sea el cubo del elemento original. */

const numeros = [2, 4, 6, 8, 10, 12];

const numerosCubo = numeros.map(elemento => Math.pow(elemento, 3));
console.log(numeros + " ---> " + numerosCubo);

const n2 = [2, 5, 3, 2, 5, 3];
const n2Cubo = n2.map(elemento => Math.pow(elemento, 3));
console.log(n2 + " ---> " + n2Cubo);

const n3 = [-2, -4, -5, -100, -1];
const n3Cubo = n3.map(elemento => Math.pow(elemento, 3));
console.log(n3 + " ---> " + n3Cubo);