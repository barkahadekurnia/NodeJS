/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    if (year1>year2) {   //buat logika if buat cari tahun yang lebih besar
        const jumkabisat = isKabisat(year1) - isKabisat(year2)
        return "banyak tahun kabisat antara "+year1+" ke "+year2+" adalah " + jumkabisat;
    } else { 
        const jumkabisat = isKabisat(year2) - isKabisat(year1)
        return "banyak tahun kabisat antara "+year1+" ke "+year2+" adalah " + jumkabisat;
    }
}

function isKabisat(year){
        //Satu tahun adalah tahun kabisat jika kondisi berikut dipenuhi:

        // Tahun adalah kelipatan dari 400. ||
        // Tahun adalah kelipatan dari 4 dan bukan kelipatan 100.

        //year = Number(year); //biar pasti jdi nuumber
        let jum = 0 ; //tmp
        for (i=0;i<year;i++) { // looping dari tahun 0 sampai tahun ke (year)
            
            if ((0 == i % 4) && (0 != i % 100) || (0 == i % 400)) {
                //ya = 1;
               jum  = jum + 1 ;
            } 
        }
        return jum;       
}

console.log(howManyKabisat(1997,2021));
//console.log(isKabisat(8));