var val = document.getElementById("numrom").value;
function convertToRoman(val) {
// A/B=C => A = B*C + A % B
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
    roman = "",
    i;
    for ( i in lookup ) {
        while ( val >= lookup[i] ) {
        roman += i;
        val -= lookup[i];
        }
    }
console.log(roman);
document.getElementById("res1").innerHTML = roman; // inyección de resultado en html
return false;
}
// Convierte números romanos a arábigos 
function deromanize( numrom ) {
    var numrom = numrom.toUpperCase(),
    lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
    arabic = 0,
    i = numrom.length;
    while (i--) {
        if ( lookup[numrom[i]] < lookup[numrom[i+1]] ) arabic -= lookup[numrom[i]];
        else arabic +=lookup[numrom[i]];
    }
console.log(arabic);
document.getElementById("res2").innerHTML = arabic; // inyección de resultado en html
return false;
}