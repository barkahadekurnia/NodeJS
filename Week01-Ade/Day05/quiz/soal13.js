// //soal 13

const findSum = (arr, weight) => {
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < i; j++) {
            if (arr[i] + arr[j] == weight) {
                num1 = arr[j]
                num2 = arr[i]  
            } 
        }
    }
    return `${num1} & ${num2}`;
}

console.log(findSum([1, 2, 3, 4, 5], 9)); // 4 & 5

//sum biasa
// const sum = arr.reduce((tmp,a) => tmp + a,0 ) ;
//     return sum;