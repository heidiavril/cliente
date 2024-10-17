/* 8. Filtrar objetos por propiedad

Enunciado: Dado un array de objetos que representan personas con nombre y edad,
utiliza el método filter() para devolver un nuevo array con las personas que sean mayores de 18 años. */

const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 21 },
    { nombre: "María", edad: 16 },
    { nombre: "Carlos", edad: 30 }
  ];

let gentejoven = personas.filter(persona => persona.edad > 18);

console.log(gentejoven);