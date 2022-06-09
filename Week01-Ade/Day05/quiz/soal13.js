// //soal 13

const findSum = (arr, weight) => {
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] == weight) {
                num1 = arr[i]
                num2 = arr[j]  
                console.log(`${num1} & ${num2}`);
                //return `${num1} & ${num2}`;
            }             
        }
    }
    return `a + b = ${weight}`;
   // return `${num1} & ${num2}`;
}

console.log(findSum([1, 2, 3, 4, 5], 5)); // 4 & 5

//sum biasa
// const sum = arr.reduce((tmp,a) => tmp + a,0 ) ;
//     return sum;