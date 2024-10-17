// ¿Qué hace esta función?
function slasher(arr, howMany) {
    arr.splice(0, howMany); // modifica el array eliminando los elementos que van de la posición 0 hasta la posición "howMany"
    console.log(arr); // muestra por pantalla el array modificado
    return arr;
}
// esta función elimina del array indicado los primeros "howMany" elementos
slasher([1, 2, 3], 2);
slasher(["Hola", "estado", "rock", "mapache", "ascii", "heidiavril"], 3);
