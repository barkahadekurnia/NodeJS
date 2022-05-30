/** buat segitiga  */

for (i = 5; i > 1; i--) {
   str = ""
    for (let j = 1; j < i; j++) {
        str = str + " " + j
    }
    console.log(str);
}

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


for (i = 5; i > 0; i--) {
     str2 = ""
     for (let j = i; j >= 1; j--) {
         str2 = str2 + " " + j
     }
     console.log(str2);
 }

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  