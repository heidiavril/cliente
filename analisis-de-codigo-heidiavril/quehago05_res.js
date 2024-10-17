// ¿Qué hace esta función?
function titleCase(str) {
    var arr = str.split(""); // crea un array con cada caracter del string
    var cap = false; // crea una variable booleana
    var CapStr = ""; // crea otro string, vacío
    for (var i = 0; i < arr.length; i++) { // recorre el array creado
        var wo = arr[i]; // crea una variable que adquiere el valor de la posición i del array en cada iteración
        if (i === 0) { // primera letra
        //    
            if (wo == wo.toLowerCase()) { // si la letra está en minúsculas
                CapStr = CapStr + wo.toUpperCase(); // la convierte en mayúsculas y la añade al string vacío
            } else { // si está en mayúsculas
                CapStr = CapStr + wo; // la añade directamente al string vacío
            }
        //
        } if (i>0) { // si no es el primer caracter

            if (wo === " ") { // si el caracter es un espacio
                cap = true; //space -> capitalize next!!
                CapStr = CapStr + wo; // añade el espacio al string vacío
                //console.log(i.toString() + " " + CapStr);
            }
            
            if (wo != " " && cap === false) { // si el caracter no es un espacio y no es la primera letra
                
                if (wo == wo.toLowerCase()) { // si la letra está en minúsculas
                    CapStr = CapStr + wo; // la añade al string
                } else { // si no está en minúsculas
                    CapStr = CapStr + wo.toLowerCase(); // la convierte en minúsculas y la añade al string
                }
            }
            if (wo != " " && cap === true) { // si el caracter no es un espacio y es la siguiente letra a un espacio
                
                if (wo == wo.toLowerCase()) { // si la letra está en minúsculas
                    CapStr = CapStr + wo.toUpperCase(); // la convierte en mayúsculas y la añade al string
                } else { // si no está en minúsculas
                    CapStr = CapStr + wo; // la añade al string
                }
                cap = false; // resetea la variable booleana
            }
        }
    }
    console.log(CapStr);
    return CapStr;
}
// el código toma un string y lo devuelve con la primera letra de cada palabra en mayúscula
titleCase("the quick brown fox jumps over the lazy dog");
titleCase("Hola holita caracolita");