const prompt=require("prompt-sync")({sigint:true});

function falseMathfloor(a) {
    let numToSTR = a + "";
    let arraynumToSTR = numToSTR.split(".");
    let integ = Number(arraynumToSTR[0]);
    return integ;
}

function modulo1(a, b) { // método con la fórmula oficial y Math.floor()
    let resto = a - (Math.floor(a / b)) * b;
    return resto;
}

function modulo2(a, b) { // método con la fórmula oficial pero sin el Math.floor() (pero con MI Math.floor xD)
    let resto = a - (falseMathfloor(a / b)) * b;
    return resto;
}

/*
                            LA COMENTO PORQUE NO FUNCIONA :((((( Al menos, no funciona bien

function modulo3(a, b) { // método con una fórmula que me he inventado yo, si se le puede llamar fórmula, que consiste
                         // en quedarse con la parte decimal del resultado de la división y multiplicarlo por el
                         // dividendo. Uso Math.ceil() para cuando hay divisiones cuya parte decimal del resultado es
                         // x.3333333333333333, ó x.66666666666666667. Sin Math.floor().
    let resto = Math.ceil(b * ((a / b) - falseMathfloor(a / b)));
    return resto;
}*/

function modulo4(a, b) { // el anterior (modulo3) pero sin usar ni Math.floor() ni Math.ceil()
    let resto = b * ((a / b) - falseMathfloor(a / b));
    if (resto > (falseMathfloor(resto) + 0.999)) {
        return falseMathfloor(resto) + 1;
    }
    return falseMathfloor(resto);
}

let aaa = prompt("Indica el dividendo: ");
let bbb = prompt("Indica el divisor: ")
console.log(modulo1(aaa, bbb));
console.log(modulo2(aaa, bbb));
//console.log(modulo3(aaa, bbb));
console.log(modulo4(aaa, bbb));
console.log(aaa % bbb);