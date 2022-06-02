//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9


for (let a = 1; a <= 5; a++) {
    let printAngka = ''
    for (let b = 0; b <= (a-1); b++) {
        printAngka = printAngka + " " + (b+a)
        // console.log(" "+ b);
    }

    console.log(printAngka);
}
