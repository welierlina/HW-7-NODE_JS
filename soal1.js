var calculate = require('./module');

var s = 6;
var p = 4;
var l = 8;

console.log("Luas persegi adalah " + calculate.luas(s));
console.log("Keliling persegi adalah " + calculate.keliling(s));


console.log("Luas persegi panjang adalah " + calculate.luasP(p, l));
console.log("Keliling persegi panjang adalah " + calculate.kelilingP(p, l));
