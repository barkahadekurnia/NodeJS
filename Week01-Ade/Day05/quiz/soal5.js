//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

let penduduk = 30000  //penduduk bogor awal
let inflasiPenduduk = 3/100 // 3 persen
let count = 0
while (penduduk <= 100000) {
    penduduk = penduduk + (penduduk * inflasiPenduduk) 

    count = count + 1
} 
//console.log(penduduk);
console.log(`dibutuhkan waktu sebanyak ${count} tahun untuk mencapai jumlah penduduk 100.000 `);





//bisa juga dgn ini do while

// do {
//     penduduk = penduduk + (penduduk * inflasiPenduduk) 

//     count = count + 1
// } while (penduduk <= 100000) ;


