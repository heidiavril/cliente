/* 6. Bucles

Enunciado: Crea una función que reciba un número y devuelva la suma de
todos los números desde 1 hasta ese número usando un bucle for. 
le doy 6 y hace 1 + 2 + 3 + 4 + 5 + 6*/


function factorialPeroNoPorqueEsSumaxD(num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    }

    console.log(suma);
    return suma;
}

factorialPeroNoPorqueEsSumaxD(6);