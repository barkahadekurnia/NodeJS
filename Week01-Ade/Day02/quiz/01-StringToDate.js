/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
   
    seplit = s.split(''); //s isi 12/30/2021 bikin jd array
    seplit.splice(2,1);  //buang / pertama di index 2   1230/2021  /splice buat buang isi array index ke , brapa yg dibuang
    seplit.splice(4,1);  //buang / kedua
    sjoin = seplit.join(''); //gabungin jd variabel biasa
    if (isNaN(sjoin)){ //cek angka bukan
       return s + " bad format date";
    } else {
    const today = new Date(s); //keluarin detail tanggal sekarang
    return today; 
    }   
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date