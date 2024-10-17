function quehago2(str) {
    var arr = str.split(" "); // crea un array con las palabras del string    
    var woli = 0;
    let wol;
    for (var i = 0; i < arr.length; i++) {
        wol = arr[i].length // asigna a wol la longitud de la palabra en la posición i
        if (wol > woli) { // si la longitud de la palabra en la i posición es mayor que la longitud de woli (empezando con que woli es 0)
            woli = wol; // woli es la longitud de la palabra más larga encontrada hasta ahora
        }/* else {
            wol = 0;
        }*/ // esta parte de código no es necesario, ya que la variable wol se reinicia en cada iteración
    }
    console.log(woli); // saca por pantalla el valor de woli
    return woli;
}
// la función devuelve la longitud de la palabra más larga en el string que se pasa como argumento
quehago2("The quick brown fox jumps over the lazy dog");
quehago2("Rock inclusivo y otras mamarrachadas");
quehago2("qué es lo que hace esto");