/* 9. Crear un array de nombres a partir de objetos

Enunciado: Dado un array de objetos que representan personas con nombre y edad, utiliza el método map() para
devolver un array con solo los nombres de las personas. */

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 21 },
    { nombre: "María", edad: 30 }
  ];

const personasSoloNombre = personas.map(persona => persona.nombre);
console.log(personasSoloNombre);