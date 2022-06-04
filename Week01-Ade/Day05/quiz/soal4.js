//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

console.log(" ========= A ========= \n");
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
const n = 5

for (let a = 1; a <= n; a++) {
    let printAngka = ''
    for (let b = 1; b <= a; b++) {
        printAngka = printAngka + " " + a
        // console.log(" "+ b);
    }

    console.log(printAngka);
}

console.log("\n ========= B ========= \n");
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

for (let a = 1; a <= n; a++) {
    let printAngka = ''
    for (let b = a; b > a - n; b--) {
        if (b > 0) {
            printAngka = printAngka + " " + b
        }
    }

    console.log(printAngka);
}

console.log("\n ========= C ========= \n");
// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

//bikin looping 1-5 dlu .. simpen di array
//bikin output dengan \n setiap i+1

var angka = [1]
let c = 1
while (c < 5) {
    var last = angka.length - 1
    var x = angka[last]
    if (x == 1) {
        for (let k = 2; k <= 5; k++) {
            angka.push(k);
        }
    }

    if (x == 5) {
        for (let j = 4; j >= 1; j--) {
            angka.push(j);
        }
    }
    c = c + 1
}

console.log(angka);

for (let a = 0; a <= 4; a++) {
    let printAngka = ''
    for (let b = 0; b <= a; b++) {
        printAngka = printAngka + " " + angka[(b + a)]
        //    console.log(angka[(b+a)]);
        // console.log(" "+ b);
    }
    console.log(printAngka);
}

console.log("\n ========= D ========= \n");

// 1 10 11 20 21    //+9    +1
// 2 9 12 19 22     //+7    +3
// 3 8 13 18 23     //+5    +5
// 4 7 14 17 24
// 5 6 15 16 25

var Angka = []
for (let a = 1; a <= n * 5; a++) {
    Angka.push(a);
}
console.log(Angka);

// var wadah = [5,5]
// let xx = 1;
// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0) {
//         for (let j = 0; j < 5; j++) {
//            // wadah.push(wadah[j,i])
//            wadah[j,i]=xx
//         }
//     } else {
//         for (let j = 4; j >= 0; j--) {
//           //  wadah.push(wadah[j,i])
//             wadah[j,i]=xx
//         }
//     }
// }

// for (let a = 0; a < 5; a++) {
//     for (let b = 0; b < 5; b++) {
//         console.log(`${wadah[a,b]} `);
//     }
//     console.log("\n");
// }

// for (let b = 8; b > 1; b+=2) {

//     console.log(Angka[b]);
// }