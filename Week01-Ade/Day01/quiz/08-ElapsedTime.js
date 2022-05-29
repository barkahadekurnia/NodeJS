/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (isNaN(seconds)) {
        return seconds + ' is not number';
    } else {

        var hari = Math.floor(seconds / 86400);
        var jam = Math.floor(seconds / 3600) - (hari*24);
        var menit = Math.floor(seconds / 60) - (hari*24*60) - (jam*60);
        var detik = seconds % 60;

        // return Math.floor(hari) + ' hari ' + Math.floor(jam) + ' jam ' + Math.floor(menit) + ' menit ' + Math.floor(detik) + ' detik ';
        return hari +" hari "+jam+" jam "+menit +" menit " + detik +" detik";
    }

}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik