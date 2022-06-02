//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9


for (let a = 1; a <= 5; a++) {
    let printAngka = ''
    for (let b = 1; b <= a; b++) {
       
        printAngka = printAngka + " " + b
        // console.log(" "+ b);
    }

    console.log(printAngka);
}

console.log("\n");
for (let a = 1; a <= 5; a++) {
    let printAngka = ''
    for (let b = a; b <= a+4; b++) { //a 1 
    
        printAngka = printAngka + " " + b
        // for (let c = 1 ; c <= 9; c++) {
        //     printAngka = printAngka + " " + b
        // }
    }

    console.log(printAngka);
}