const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays){
    var maxnumber = 0 
    var panjangArray = arrays.length - 1 //index array 

    for (let i=1 ; i<panjangArray ; i++) {
        if (arrays[i] > maxnumber) {
        maxnumber = arrays[i] ;   //masukin variabel tmp
        }
    }

    return "Angka terbesar adalah " + maxnumber; //output
}

console.log(maxNumber(numbers));