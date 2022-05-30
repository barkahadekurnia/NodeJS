function maxWordLength(params) {
    arrayPerkata = params.split(" "); //pisah dlu perkata

    more = 0 // tmp
    jumlahArray = arrayPerkata.length - 1  //index
    for (i = 0; i<jumlahArray; i++ ) {  //mau dapetin nilai panjang maksimal
        panjang = arrayPerkata[i].length   //hitung panjang kata per isi array  
        if (more < panjang) {
        //kalo lebih banyak masuk ke variabel more
        more = panjang 
        kataTerpanjang = arrayPerkata[i] //ambil data kata terpanjang
        } 
    }
    return "kata terpanjang adalah " + kataTerpanjang;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp