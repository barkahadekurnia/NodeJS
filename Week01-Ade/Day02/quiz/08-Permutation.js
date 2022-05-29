const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false

  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)

  if (stringOne.length != stringTwo.length) {
    return false;
  } else {
    split1 = stringOne.split('');
    split2 = stringTwo.split('');
    sort1 = split1.sort();
    sort2 = split2.sort();
    join1 = sort1.join('');
    join2 = sort2.join('');

    if (join1 == join2) {
      return true;
    }
  }



};


console.log(checkPermute('aba', 'aab')) //true;
console.log(checkPermute('aba', 'aaba')) //false;
console.log(checkPermute('aba', 'aa')) //false;