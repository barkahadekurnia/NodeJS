//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let a = 1; a <= 5; a++) {
    let printAngka = ''
    for (let b = 1; b <= a; b++) {
        printAngka = printAngka + " " + a
        // console.log(" "+ b);
    }

    console.log(printAngka);
}

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

console.log("\n");

for (let a = 1; a <= 5; a++) {
    let printAngka2 = ''
    for (let b = a; b > a-5; b--) {
        if ( b > 0 ) {
        printAngka2 = printAngka2 + " " + b
        }
     }

    console.log(printAngka2);
}

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25