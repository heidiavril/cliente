/* Ejercicio 4: Nota máxima y mínima

> Dada una lista de notas, encuentra la nota máxima y la nota mínima. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
let notaMaxima = Math.max(...notas);
let notaMinima = Math.min(...notas);

console.log("La nota máxima es " + notaMaxima);
console.log("La nota mínima es " + notaMinima);



