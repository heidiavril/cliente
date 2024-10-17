function quehago3(str) {
    var p = str.charCodeAt(str[0]), // p es el valor ASCII del primer carácter
        q = str.charCodeAt(str.length - 1); // q es el valor ASCII del último carácter
    //console.log("|xtremes -> " + p + " and " + q);
    for (i = p; i < q; i++) { // recorre los caracteres entre p y q (excluyendo p y q)
        if (str.charCodeAt(i-p) != i) { // si el valor ASCII del carácter en la posición i no coincide con su índice
            res = String.fromCharCode(i); // res es la letra que no coincide con su índice
            break; // sale del bucle
        } else {
            res = undefined; // si el valor ASCII coincide con su índice, res es undefined
        }
    }
    console.log(res);
    return res;
}
// esta función devuelve la letra que no coincide con su índice en un string dado
quehago3("abcd");
quehago3("abad");
quehago3("abada");
quehago3("loco");
quehago3("apriciot");