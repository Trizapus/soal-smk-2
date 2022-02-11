function Manggil (array) {
    var a = Math.min(...array);
    var b = Math.max(...array);
    console.log(a + ", " + b);
}

Manggil([1, 2, 3, 4, 5]);
Manggil([2334454, 5]);
Manggil([1]);
