/* Ejercicio 6: Calificaciones al azar

> Genera 11 notas al azar entre 0 y 10 para simular calificaciones. */

let notasAzar = [];
for (let i = 0; i < 11; i++) {
    notasAzar.push(Math.random() * 10);
}

console.log(notasAzar);
// he estado investigando (preguntando a chatgpt) para averiguar cómo dar esos valores con únicamente dos decimales,
// y lo que me dice es que puedo pasarlo a string (con toFixed) o hacer lo siguiente, que me gusta más:

for (let i = 0; i < notasAzar.length; i++) {
    notasAzar[i] = Math.round(notasAzar[i] * 100) / 100;
}

console.log(notasAzar);