/* Ejercicio 3: Redondeo hacia arriba de notas

> Redondea las notas decimales de los alumnos al número entero superior. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];
let notasRedondeadasArriba = [];

for (let i = 0; i < notas.length; i++) {
    notasRedondeadasArriba.push(Math.ceil(notas[i]));
}

console.log(notasRedondeadasArriba);
