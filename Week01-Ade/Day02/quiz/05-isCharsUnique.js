function isCharsUnique(string) {
    var split = string.split('')
    var panjangSplit = split.length - 1
    for (let i = 0; i < panjangSplit; i++) { //7  jadi looping mulai index 0
        for (let j = 1; j < panjangSplit; j++) {
            if (split[i] == split[j]) { // bandingkan apakah split index ke i = j 
                var cek = false;
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