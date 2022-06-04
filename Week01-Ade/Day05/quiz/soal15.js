//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);
    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */

    function payment(tglBayar,tglJatuhTempo,cicilan){
         
         if (cicilan < 3500000 ) {
            return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran` ;
         }

         var bayar = new Date(tglBayar) ;
         var jatuhTempo = new Date(tglJatuhTempo);

         let bulan = jatuhTempo.getMonth() ;  //karena bulan dimulai dari 0 = ambil bulan sebelumnya
         let tahun = jatuhTempo.getFullYear() ;
         let perbedaanHari = differenceInDays(bayar,jatuhTempo)
         if (perbedaanHari < 0 ) {
            return `Tagihan bulan ${bulan} belum tersedia` ;
         }

         const angsuran = 3500000;
         let denda = 2/1000 * angsuran * perbedaanHari
         
         let totalTagihan = showTagihan(tglBayar,tglJatuhTempo,angsuran,cicilan,perbedaanHari,denda)

         return `
         --------------------------
         Tanggal Bayar : ${tglBayar}
         Jatuh Tempo :  ${tglJatuhTempo}
         --------------------------
         Tagihan bulan ${bulan+1},${tahun} = Rp.${cicilan} 
         Denda = Rp.${denda} (terlambat ${perbedaanHari} hari)
         Total = Rp.${totalTagihan} (lunas)
         --------------------------
         Kwitansi ini sebagai alat bukti pembayaran
         `;
    } 
    
    function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){
        let totalTagihan = 0

        totalTagihan = denda + angsuran
        return totalTagihan;
    }
    
    function differenceInDays(startDate,endDate){

    //var startDate = new Date(startDate) ;
    //var endDate = new Date(endDate);
    // Calculate milliseconds in a year
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const year = day * 365

    let differenceInDays = startDate/day - endDate/day
    return differenceInDays;
    }
    
    console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
    console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
    console.log(payment("09/27/2021","09/27/2021",3500000));
    //console.log(payment("09/29/2021","09/27/2021",3500000));
    /**
     --------------------------
            Tanggal Bayar : 27/9/2021
            Jatuh Tempo :  27/9/2021
            --------------------------
            Tagihan bulan 9,2021 = Rp.3500000 
            Denda = Rp.0 (terlambat 0 hari)
            Total = Rp.3500000 (lunas)
            --------------------------
            Kwitansi ini sebagai alat bukti pembayaran
     */