/* Ejercicio 2: Redondeo hacia abajo de notas

> Dada una lista de notas, redondea cada nota al número entero inferior. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
let notasRedondeadasAbajo = [];

for (let i = 0; i < notas.length; i++) {
    notasRedondeadasAbajo.push(Math.floor(notas[i]));
}

console.log(notasRedondeadasAbajo);

