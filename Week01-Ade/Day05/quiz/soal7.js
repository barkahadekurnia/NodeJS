//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
	var s = s.split('');
	let nilai = 0
	for (let i = 0 ; i < s.length ; i++) {
		if(s[i] == 'D') {
			nilai = nilai - 1 
		} else if (s[i] == 'U') {
			nilai = nilai + 1
		}
	}
	if (nilai == 0 && s[(s.length-1)]) {
		nilai = nilai + 1
	}
	//return s 
	return nilai 
}
console.log(countingValleys('UDDDUDUU'));//1