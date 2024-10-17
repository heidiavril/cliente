// ¿Qué hace esta función?
function titleCase(str) {
    var arr = str.split("");
    var cap = false;
    var CapStr = "";
    for (var i = 0; i < arr.length; i++) {
        var wo = arr[i];
        if (i === 0) {
        //    
            if (wo == wo.toLowerCase()) {
                CapStr = CapStr + wo.toUpperCase();
            } else {
                CapStr = CapStr + wo;
            }
        //
        } if (i>0) {

            if (wo === " ") {
                cap = true; //space -> capitalize next!!
                CapStr = CapStr + wo;
                //console.log(i.toString() + " " + CapStr);
            }
            
            if (wo != " " && cap === false) {
                
                if (wo == wo.toLowerCase()) {
                    CapStr = CapStr + wo;
                } else {
                    CapStr = CapStr + wo.toLowerCase();
                }
            }
            if (wo != " " && cap === true) {
                
                if (wo == wo.toLowerCase()) {
                    CapStr = CapStr + wo.toUpperCase();
                } else {
                    CapStr = CapStr + wo;
                }
                cap = false;
            }
        }
    }
    console.log(CapStr);
    return CapStr;
}
