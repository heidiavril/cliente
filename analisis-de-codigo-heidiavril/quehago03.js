function quehago3(str) {
    var p = str.charCodeAt(str[0]),
        q = str.charCodeAt(str.length - 1);
    //console.log("|xtremes -> " + p + " and " + q);
    for (i = p; i < q; i++) {
        if (str.charCodeAt(i-p) != i) {
            res = String.fromCharCode(i);
            break;
        } else {
            res = undefined;
        }
    }
    console.log(res);
    return res;
}
