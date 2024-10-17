// Comentar el código explicando su funcionamiento.
function diffArray(arr1, arr2) {
    var newArr = [];
    var peq, grande;

    if (arr1.length > arr2.length) {
        peq = arr2;
        grande = arr1;
    } else {
        grande = arr2;
        peq = arr1;
    }

    for (var i = 0; i < grande.length; i++) { // recorre el array grande
        if (peq.indexOf(grande[i]) < 0) { // si el array pequeño no contiene el elemento i del array grande
            newArr.push(grande[i]); // añade el elemento i al array newArr
        }
    }
    for (var j = 0; j < peq.length; j++) { // recorre el array pequeño
        if (grande.indexOf(peq[j]) < 0) { // si el array grande no contiene el elemento i del array pequeño
            newArr.push(peq[j]); // añade el elemento i al array newArr
        }
    }
    console.log(newArr); // lo muestra por pantalla
    return newArr;
}
// la función devuelve un array con los elementos que no están repetidos en ambos arrays
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
