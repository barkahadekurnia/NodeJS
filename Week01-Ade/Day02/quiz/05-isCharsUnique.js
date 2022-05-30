function isCharsUnique(string) {
    split = string.split('')
    panjangSplit = split.length - 1
    for (i = 0; i < panjangSplit; i++) { //7  jadi looping mulai index 0
        for (j = 1; j < panjangSplit; j++) {
            if (split[i] == split[j]) { // bandingkan apakah split index ke i = j 
                cek = false;
            } else {
                cek = true;
            }
        }
    }
    return cek;

}
//apakah chart unik ? ga da yg sama
console.log(isCharsUnique('abcdefg')); //true
console.log(isCharsUnique('abcdefga')); //false