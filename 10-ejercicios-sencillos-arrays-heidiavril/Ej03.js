/* 3. Sumar todos los elementos de un array

Enunciado: Dado un array de números, utiliza el método reduce() para calcular la suma de todos los elementos. */

const numeros = [10, 20, 30, 40, 60];

let numeros2 = numeros.reduce((e1, e2) => e1 + e2);
console.log(numeros2);

const n2 = [1, 2, 3, 4, 5, 6, 7, 8];
let n2sum = n2.reduce((e1, e2) => e1 + e2);
console.log(n2sum);