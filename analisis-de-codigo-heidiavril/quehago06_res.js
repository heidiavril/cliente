// ¿Qué hace esta función?
function getIndexToIns(arr, num) {
    var idx = 0; // crea una variable idx para almacenar el índice
    arr = arr.sort((function (a, b) { // ordena el array en orden ascendente utilizando una función de comparación
        return a - b;
    }));
    console.log("Sorted array: " + arr, "number: " + num); // muestra el array ordenado por pantalla
    
    for (var i = 0; i < arr.length; i++) { // recorre el array
        if (num > Number(arr[i])) { // si el número es mayor que el elemento en la posición i del array
            idx = i + 1; // le asigna el valor del índice siguiente, que es donde debería ir
        }
    }
    console.log("index is: " + Number(idx)); // muestra el índice por pantalla, casteándolo a número
    console.log("--");
    return idx;
}
/*
este código toma un array y un número y devuelve el índice en el que habría que insertar ese número
para guardarlo en orden
*/
getIndexToIns([5, 7, 3, 1, 2], 1);
getIndexToIns([5, 6, 7], 7);
getIndexToIns([5, 3, 2, 8], 6);