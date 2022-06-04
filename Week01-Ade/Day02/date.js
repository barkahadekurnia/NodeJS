const today = new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

const now = new Date('2021-05-05')
console.log(now);

const now1 = new Date(2021,4,5)
console.log(now1);

const format = new Intl.DateTimeFormat('id-ID').format(today)
console.log(format);   //29/5/2022

console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString()); //mengubah ke UTC 0 
console.log(today.toDateString()); // hari bulan tanggal tahun
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString()); //waktu sekarang 

console.log(now1.getTime());   // time dimulai dari  1 januari 1970

// Calculate milliseconds in a year
const minute = 1000 * 60
const hour = minute * 60
const day = hour * 24
const year = day * 365