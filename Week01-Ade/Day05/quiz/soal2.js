//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15

function okYes(nilai) {
    let printAngka = `angka kelipatan 1 s/d ${nilai} adalah`
    for (let i = 1; i <= nilai; i++) {
        if (i % 4 == 0 && i % 3 == 0) {
            printAngka = printAngka + " " + "OKYES"
        } else
        if (i % 3 == 0) {
            printAngka = printAngka + " " + "OK"
        } else
        if (i % 4 == 0) {
            printAngka = printAngka + " " + "YES"
        } else {
            printAngka = printAngka + " " + i
        }
    }



    return printAngka;
}

const n = 15
console.log(okYes(n));