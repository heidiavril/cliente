/* Ejercicio 7: Redondeo al múltiplo más cercano de 0.5

> Redondea cada nota a un múltiplo cercano de 0.5. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];

/*
Para este ejercicio hablé con Edu, para ver cómo podía hacerse. Él me dijo (y yo coincidía con eso) que lo que se le
ocurría era quitar la parte decimal e ir comparándola para ver si era superior a 0,25 o inferior, y en base a eso
asignarle un nuevo decimal (0.0 o 0.5);.
Pero eso se me hacía demasiado complejo, así que le pregunté a chatGPT y me dijo que multiplicase por 2 y luego dividiera
entre 2 (algo que se me hace muy parecido al apaño que se hace en la desviación media). Tras hablarlo con Edu y pensarlo,
tiene sentido: multiplica por 2 para obtener un número que sea "familia" del original, y lo redondea para quedarse con un
número entero. De esta forma, cuando luego ese número se divide entre 2, te aseguras que el resultado sea 0.0 o 0.5, ya
que, un número dividido entre 2 sólo puede tener dos restos: 0 y 1 (y como 1 es la mitad de 2, quedaría en 0.5).
*/

const notasAl5 = notas.map(nota => (Math.round(nota * 2) / 2));

console.log(notasAl5);