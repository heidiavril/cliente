/* 2. Filtrar números impares

Enunciado: Dado un array de números, utiliza el método filter() para obtener un array con los números impares. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numeros2 = numeros.filter(n => n % 2 !== 0); // dice "oye, coge el numeros y ve mirando uno por uno si se cumple lo de n%2 que no sea 0. Si es así, mételo en numeros2".
console.log(numeros2);

const n2 = [2, 1, 5, 4, 3, 1, 11, 367, 21, 22, 0];
let n2impar = n2.filter(n => n % 2 !== 0);
console.log(n2impar);
