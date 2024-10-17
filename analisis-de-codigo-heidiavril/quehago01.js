// Comentar el código explicando su funcionamiento.
function diffArray(arr1, arr2) {
    var newArr = [];
    var len1 = arr1.length,
        len2 = arr2.length,
        target,
        source;
    if (len1 > len2) {
        target = arr2;
        source = arr1;
    } else {
        target = arr1;
        source = arr2;
    }
    for (var i = 0; i < source.length; i++) {
        if (target.indexOf(source[i]) < 0) {
            newArr.push(source[i]);
        }
    }
    for (var j = 0; j < target.length; j++) {
        if (source.indexOf(target[j]) < 0) {
            newArr.push(target[j]);
        }
    }
    console.log(newArr);
    return newArr;
}
//
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
