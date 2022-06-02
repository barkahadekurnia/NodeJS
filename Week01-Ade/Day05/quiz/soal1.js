//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas
let printAngka = 12
for(let i=2 ; i<=5 ; i++) {
    const angka = i * 12
    printAngka = printAngka + "," + angka ;
}
console.log(printAngka);

//cara2

// let printAngka2 = 12
// for(let i=24 ; i<=60 ; i+=12) {
//     printAngka2 = printAngka2 + "," + i ;
// }

// console.log(printAngka2);