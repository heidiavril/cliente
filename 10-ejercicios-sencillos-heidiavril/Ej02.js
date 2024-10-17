/* 2. Operadores

Enunciado: Crea una función que acepte dos números y devuelva un objeto con el resultado de las
siguientes operaciones: suma, resta, multiplicación, división, y módulo. */

function operaciones (a, b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let modulo = a % b; // resto
    
    const arr = [suma, resta, multiplicacion, division, modulo];
    console.log(`Suma: ${a} + ${b} = ${arr[0]}`);
    console.log(`Resta: ${a} - ${b} = ${arr[1]}`);
    console.log(`Muliplicación: ${a} x ${b} = ${arr[2]}`);
    console.log(`División: ${a} / ${b} = ${arr[3]}`);
    console.log(`Módulo: ${a} % ${b} = ${arr[4]}`);

    return arr;
}

operaciones(8, 2);
operaciones(7, 3);