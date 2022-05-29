
function isPalindrome(word){
    //word=String(word); boleh diubah string dlu blh tdk
    word=word.split('');
    drow=word.reverse();

    if (word == drow) {
        return true;
    }
    //return drow;
    //return Array.isArray(word);
}

console.log(isPalindrome('kasur ini rUsak'));//true
//console.log(isPalindrome('121'));//true