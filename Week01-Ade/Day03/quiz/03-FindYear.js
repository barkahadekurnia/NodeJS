// Remember, the Date constructor takes a zero-based month number, so a
// month value of 10 corresponds to the eleventh month, November
const dates = [new Date(2021, 10, 20), new Date(2020, 3, 12),
    new Date(2020, 5, 23), new Date(2022, 3, 18)
];
// Find the first date in 2020
/* const matchingDate = dates.find(date => date.getFullYear() === 2020);
console.log(matchingDate); */
//get fufullyear buat ambil tahun

function matchingDate(dates, year) {
    let Dates = dates  
    var panjangArray = Dates.length - 1;
    var newMonth = 12  //max bulan 11
    var newDay = 32  //max hari 31
    for (let i = 0; i < panjangArray; i++) { //ini niatnya buat looping cari data baru
        var tanggal = Dates.find(date => date.getFullYear() === year);
        var  bulan = tanggal.getMonth() //
        if (bulan<=newMonth) {
            var newMonth = bulan
            var hari = tanggal.getDate()
            if (hari<=newDay) {
                var newDay = hari
            }
        }
    }

    var output = new Date(year,newMonth,newDay) //bkin output date
    return output;

}

console.log(matchingDate(dates, 2020)); //Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)