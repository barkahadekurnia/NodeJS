let m;
let n;
let o = 1;
let p = 0;
for (m = 0; m < 5; m++) {
    let printAngka = ''
    let print = ''
    for (n = 0; n <= m; n++) {
        //console.log(o)  ;
        if (o > p && o != 5 || o == 1) {
            printAngka = o
            p = o;
            o++;
        } else {
            printAngka = o
            p = o;
            o--;
        }
        print = print + " " + printAngka;
        printAngka = ''
        //print=''
    }
    console.log(print);
}


// let s=1;
// let i;
// let j;
// let  a = [5][5];
// for(i = 0;i < 5;i++){
// 	if(i % 2 == 0){
// 		for(j = 0;j < 5;j++,s++){
// 			a = [j][i] 
// 			a= s;
// 		}
// 	}else {
// 		for(j = 4;j >= 0;j--,s++){
// 			a = [j][i] 
// 			a= s;
// 		}
// 	}
// }

// for(i = 0;i < 5;i++){
// 	for(j = 0;j < 5;j++){
// 	console.log (a[i][j]);
// 	}
// 	console.log( "\n" );
// }