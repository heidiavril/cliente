/* 1. Valores y tipos

Enunciado: Dado un array de valores de diferentes tipos (number, string, boolean, undefined), crea una función que recorra el array e imprima el tipo de cada valor. */

function deQueTipo (array) {
    array.forEach(element => {
        console.log(`El elemento ${element} es de tipo ${typeof element}`); 
    });
};

deQueTipo([1, "hellooo", true, null, undefined, "perrete", 10.5]);
deQueTipo([0, false, "goal"]);
