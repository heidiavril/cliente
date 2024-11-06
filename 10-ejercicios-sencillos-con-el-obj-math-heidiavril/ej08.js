/* Ejercicio 8: Desviación estándar de las notas

> Calcula la desviación estándar de un conjunto de notas. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
const media = notas.reduce((aux, nota) => aux + nota, 0) / notas.length; // necesario

console.log(media);

let sumaCuadrados = notas.map(nota => (nota - media) ** 2);

let desviacionMedia = (sumaCuadrados.reduce((aux, nota) => aux + nota, 0) / notas.length) ** 0.5;

console.log(desviacionMedia);