function maxWordLength(params) {
    var  arrayPerkata = params.split(" "); //pisah dlu perkata

    var  more = 0 // tmp
    var   jumlahArray = arrayPerkata.length  //index
    for (let i = 0; i<jumlahArray; i++ ) {  //mau dapetin nilai panjang maksimal
        var panjang = arrayPerkata[i].length   //hitung panjang kata per isi array  
        if (more < panjang) {
        //kalo lebih banyak masuk ke variabel more
        more = panjang 
        var  kataTerpanjang = arrayPerkata[i] //ambil data kata terpanjang
        } 
    }
    return "kata terpanjang adalah " + kataTerpanjang;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp