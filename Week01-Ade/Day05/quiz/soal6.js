
//soal 6
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
    //word=String(word); boleh diubah string dlu blh tdk
    var word=word.split('');
    var drow=word.reverse();

    if (word === drow) {
        return true;
    }
    //return drow;
    //return Array.isArray(word);
}
console.log(isPalindrome('kasur ini rUsak'));//true