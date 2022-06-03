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
    
    } 
    
    function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){
    
        
    }
    
    function differenceInDays(startDate,endDate){
    
    }
    
    console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
    console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
    console.log(payment("09/27/2021","09/27/2021",3500000));
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