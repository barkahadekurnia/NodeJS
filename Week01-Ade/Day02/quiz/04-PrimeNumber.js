function showPrimeNumber(n) {
    prima = ''
    for (let i=1 ; i < n ; i++) {
        if ( isPrime(i) == true ) {  //kalo true masukin ke variabel prima angkanya
            prima = prima + " " + i  //harusnya nyimpen 2 3 5 ... 
        } 
    }
    
    return prima;
}

function isPrime(n) { //cari bilangan prima
    bagi = 0;
    for (let i = 1; i <= n; i++) {
        if (n % 1 == 0) { //cari yg habis di bagi 1 dan bil itu sendiri
            bagi = bagi + 1;
        }
    }
    if (bagi == 2)  { //cek bilangan prima ato bukan
        return true;
    }  else {
        return false;
    }    
}

console.log(showPrimeNumber(100));
// bilangan prima adalah bilangan yang habis di bagi 1 dan bilangan itu sendiri

/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */