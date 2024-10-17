// 9. Validar contraseña

// Enunciado: Crea una función que valide si una contraseña cumple ciertos criterios.
// Tip: usar Regex -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions

console.log("La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, un número, y un símbolo.");
function validarContr(str) {
    let contnum = 0, contcaracteres = str.length; contsimb = 0, contmayus = 0, contminus = 0;

    if (contcaracteres < 8 && contcaracteres > 16) {
        if (contcaracteres > 16) {
            console.log("Contraseña demasiado larga");
            return;
        } else if (contcaracteres < 8) {
            console.log("Contraseña demasiado corta");
            return;
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            if (/\d/.test(str[i])) {
                contnum++;
            } else if (/[a-z]/.test(str[i])) {
                contminus++;
            } else if (/[A-Z]/.test(str[i])) {
                contmayus++;
            } else if (/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(str[i])) {
                contsimb++;
            }
        }

        if (contnum > 0 && contminus > 0 && contmayus > 0 && contsimb > 0) {
            console.log("Contraseña válida");
        } else {
            console.log("Contraseña no válida:");
            if (contnum == 0) {
                console.log("   -No tiene al menos un número");
            }
            if (contsimb == 0) {
                console.log("   -No tiene al menos un símbolo");
            }
            if (contmayus == 0) {
                console.log("   -No tiene al menos una mayúscula");
            }
            if (contminus == 0) {
                console.log("   -No tiene al menos una minúscula");
            }
        }
    }
}

validarContr("a");
console.log("****");
validarContr("rdqsabs0_");
console.log("****");
validarContr("RDQSABS-");
console.log("****");
validarContr("Pedosatope97-");