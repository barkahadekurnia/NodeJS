//soal 14
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
    var pinjam = new Date(tglPinjam)
    var kembali = new Date(tglKembali)
    if (pinjam == 'Invalid Date' && kembali == 'Invalid Date') {
        return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`;
    } else if (pinjam == 'Invalid Date') {
        return `Tgl.Pinjam ${tglPinjam} not valid formated date`;
    } else if (kembali == 'Invalid Date') {
        return `Tgl.Kembali ${tglKembali} not valid formated date`;
    }
    //return pinjam + kembali;

    // Calculate milliseconds in a year
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const year = day * 365

    const harga = 2500 
    let hari = ( kembali.getTime() - pinjam.getTime() ) / day
    let totalTagihan = hari * totalkomik * harga
    return `\nTotal Hari = ${hari} \nTotal Komik = ${totalkomik} x ${harga} \n------------------------ \nTotal Tagihan = Rp.${totalTagihan} \n    
    `;

/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */
}


console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021", 4)); //Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021", 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021", 4));


// let days = new Date("09-03-2021") 

// console.log(days.getTime()/day);


/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */