/* 5. Estructuras de Control - Condicionales

Enunciado: Escribe una función que acepte un número y devuelva "par" si el número es par o "impar" si es impar. */

function parOno(a) {
    if (a % 2 == 0 || a == 0) {
        console.log(`Par`);
    } else {
        console.log(`Impar`);
    }
}

parOno(4);
parOno(5);
parOno(-3);
parOno(-8);
parOno(0);