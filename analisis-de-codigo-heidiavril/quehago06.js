// ¿Qué hace esta función?
function getIndexToIns(arr, num) {
    var idx = 0;
    arr = arr.sort((function (a, b) {
        return a - b;
    }));
    console.log("Sorted array: " + arr, "number: " + num);
    for (var i = 0; i < arr.length; i++) {
        if (num > Number(arr[i])) {
            idx = i + 1;
        }
    }
    console.log("index is: " + Number(idx));
    console.log("--");
    return idx;
}
