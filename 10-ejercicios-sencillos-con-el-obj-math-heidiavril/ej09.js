/* Ejercicio 9: Simulación de mejora (arbitraria) de calificaciones

> Genera nuevas notas simulando una mejora de entre un 5% y un 15% de cada nota original. */

const notas = [5.6, 7.2, 8.5, 6.3, 9.1, 4.8, 7.7, 6.9, 5.4, 8.3, 7.0];

const notasMejoradas = notas.map(nota => nota + (nota * (Math.random() * (0.15 - 0.05) + 0.05)));
console.log(notasMejoradas);

/*let random = Math.random() * (0.15 - 0.05) + 0.05;
console.log(random);

esto lo hice para entender cómo obtener el porcentaje*/