/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if (isNaN(start) || isNaN(end)) {
        return start + " or " + end +" harus dalam angka ";
    } else if (start<end){
        var perubahan = (end/start*100)-100;
        return "Total kenaikan income " + Math.ceil(perubahan) + " %";
    } else {
        perubahan = 100-(end/start*100);
        return "Total penurunan income " + Math.ceil(perubahan) + " %";
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


