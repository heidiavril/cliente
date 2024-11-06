/* Ejercicio 10: Promedio ponderado de notas

> Calcula el promedio ponderado de una lista de notas. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
const pesos = [0.1, 0.1, 0.15, 0.05, 0.2, 0.05, 0.1, 0.05, 0.1, 0.05, 0.05];
// Cada peso representa la importancia de cada nota.
/*
let total = pesos.reduce((aux, peso) => aux + peso, 0);
console.log(total);
*/
//Tengo que multiplicar cada nota por el peso; comparten índice. La opción más fácil es un for:

let notasPonderadas = [];
for (let i = 0; i < notas.length; i++) {
    notasPonderadas.push(notas[i] * pesos[i]);
}
// console.log(notasPonderadas);
const total = notasPonderadas.reduce((aux, nota) => aux + nota, 0);
console.log(total);