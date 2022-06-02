//soal 8
//buat isi function untuk menentukan nilai checkPermute di console jika length
//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
//jumlah kata dari masing2 inputan perjumlah sama atau tidak

const checkPermute = function (stringOne, stringTwo) {
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
console.log(checkPermute('aba', 'aaa')) //false;