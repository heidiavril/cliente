function quehago2(str) {
    var arr = str.split(" ");    
    var woli = 0;
    for (var i = 0; i < arr.length; i++) {
        wol = arr[i].length
        if (wol > woli) {
            woli = wol;
        } else {
            wol = 0
        }
    }
    console.log(woli);
    return woli;
} //
