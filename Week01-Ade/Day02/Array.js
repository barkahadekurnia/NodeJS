const foods = ['sup','pizza','pasta']
console.log(foods);

if (Array.isArray(foods)) {
    console.log('Foods is array');
}
console.log(foods[1]);

for (let index = 0; index < foods.length; index++) {
    console.log(foods[index]);
}

foods.push('Seblak') //memasukkan isi array dari yang terdepan
console.log(foods);
foods.pop() //mengeluarkan isi array dari terbelakang
console.log(foods);
foods.unshift('indomie') //memasukkan data ke array dari array terdepan
console.log(foods);
foods.shift()  //mengeluarkan isi array dari yg terdeoan
console.log(foods);
foods.sort()   //ngurutin array
console.log(foods);
foods.reverse()  //membalik isi array
console.log(foods);
console.log(foods.slice(0,2));

const foods1 = ['Snack','bakso']

const concat = foods.concat(foods1) //gabungin array

console.log(concat);