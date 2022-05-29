function isArraysEqual(arrayA, arrayB) {

    //split array
    splitA = arrayA.split('');
    splitB = arrayB.split('');
    //hitung panjang array  -1 buat index
    panjangA = arrayA.length - 1;
    panjangB = arrayB.length - 1;

    for (i = 0; i < panjangA; i++) {  
        if (panjangA == panjangB) {
            return true
        } else {
            return false
        }
    }


}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false