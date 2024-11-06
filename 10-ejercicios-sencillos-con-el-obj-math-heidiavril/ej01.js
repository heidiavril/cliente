/* Ejercicio 1: Redondeo de notas

Dada una lista de notas decimales, redondea cada una al número entero más cercano. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
let notasRedondeadas = [];

for (let i = 0; i < notas.length; i++) {
    notasRedondeadas.push(Math.round(notas[i]));
}

console.log(notasRedondeadas);