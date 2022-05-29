function isCharsUnique(string){
   split = string.split('') 
    panjangSplit = split.length - 1 
    for (i = 0 ; i < panjangSplit ; i++) {  //7  jadi looping mulai index 0
        
        j = i + 1      //for 2 lapis
        if (  split [i] == split [j]  ) {
            return false;  
        } else {
            return true;
        }
    }

}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false