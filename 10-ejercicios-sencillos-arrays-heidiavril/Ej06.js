/* 6. Calcular las medias aritmética y geométrica de un array de números

Enunciado:

A) Dado un array de números, utiliza los métodos reduce() y length para calcular la media aritmética de los elementos.
B) Usando el mismo array de números, utiliza los métodos reduce(), length y Math.pow para calcular la media geométrica
de los elementos.

*/

const numeros = [5, 10, 50, 95];
let a = numeros.reduce((e1, e2) => e1 + e2) / numeros.length;
console.log(a);
let b = Math.pow(numeros.reduce((e1, e2) => e1 * e2), (1/numeros.length));
console.log(b);

