const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false

  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)

  if (stringOne.length != stringTwo.length) {
    return false; //panjang ga sama dah jelas false
  } else {
    var split1 = stringOne.split('');
    var split2 = stringTwo.split('');
    var sort1 = split1.sort();
    var sort2 = split2.sort();
    var join1 = sort1.join('');
    var join2 = sort2.join('');

    if (join1 == join2) {
      return true;
    } else {
      return false;
    }
  }
};


console.log(checkPermute('aba', 'aab')) //true;
console.log(checkPermute('aba', 'aaba')) //false;
console.log(checkPermute('aba', 'aa')) //false;