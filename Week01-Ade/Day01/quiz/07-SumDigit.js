/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
if (n>10000) {
    return n + " harus lebih kecil dari 10000";
} else if (isNaN(n)) {
    return n + " is not number, try again...";
}
else {
   var  total = 0
    for (let i=0;i<4;i++) {
        //lastNumber = n - 10 * Math.floor(n / 10)
        var lastNumber = n % 10; //4
        total = total + lastNumber  // 0+4
        //biar geser angka ke indeks sebelummny
        var n = (n-lastNumber)/10
        
    }
    //return lastNumber;
    return total;
}
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...