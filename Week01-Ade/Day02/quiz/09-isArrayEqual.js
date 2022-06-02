function isArraysEqual(arrayA, arrayB) {
    //hitung panjang array  -1 buat index
    var panjangA = arrayA.length - 1;
    var panjangB = arrayB.length - 1;

    if (panjangA == panjangB) {
        for (let i = 0; i < panjangA; i++) {
            if (arrayA[i] == arrayB[i]) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false + "jumlah array tydack sama"; // ni klo jumlah array beda dah jelas ga equal
    }


}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false