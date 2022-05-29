/** input 4 digit, cek apakah angka palindrome */
//palindrome tu kalo dibolak balik sama

function isPalindrome(angka) {
    if (isNaN(angka)) {
        return angka + " is not a number";
    }
    string=String(angka);

    reverseString = string.split('').reverse().join('');

    if(string == reverseString) {
        return angka + ' is a palindrome';
    }
    else {
        return angka + ' is not a palindrome';
    }

    // const arrayValues = string.split('');

    // reverse the array values
    // const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    // const reverseString = reverseArrayValues.join('');
    
    // strAngka = "" + angka;
    // arrAngka = strAngka.split("");
    // arrResult = [];

    // for (i = arrAngka - 1; i >= 0; i--) {
    //     arrResult.push(arrAngka[i]);
    // }

    // strResult = arrResult.join("");
    // if (strAngka === strResult) {
    //     return strAngka + " is palindrome";
    // } else {
    //     return strAngka + " is not palidrome";
    // }

}


console.log(isPalindrome("abcd")); //abcd is not an number
console.log(isPalindrome("123a")); //123a is not an number
console.log(isPalindrome("1234")); //1234 is not palindrome
console.log(isPalindrome(1221)); //1221 is palindrome
console.log(isPalindrome("8888")); //8888 is palindrome