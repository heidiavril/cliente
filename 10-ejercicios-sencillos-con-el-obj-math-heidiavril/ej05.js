/* Ejercicio 5:

> Dada una lista de notas, calcula el promedio. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
let media = notas.reduce((aux, nota) => aux + nota, 0) / notas.length;

console.log(media);
