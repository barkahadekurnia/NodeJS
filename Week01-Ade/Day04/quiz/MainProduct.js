import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [prod1,prod2,prod3,prod4,prod5];
//let subTotal = listCart.setTotalBuy()
//let subTotal = prod1.setTotalBuy() * prod1.setPrice() ;
//let subTotal = listCart.reduce(({price} , {totalBuy} ) => price * totalBuy,0)
//let subTotal = prod1.price * prod1.totalBuy
let subTotal = 0 
const indexCart = listCart.length

for (let i=0 ; i < indexCart ; i++ ){
    subTotal = subTotal + (listCart[i].price * listCart[i].totalBuy)
}
const totalTagihan = subTotal
// console.log(subTotal);
// console.log(listCart[4]);

//const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal,0)
//const totalTagihan = listCart.reduce((sum, {price}) => sum + price.subTotal,0)

console.log(`Total Tagihan = ${totalTagihan}`);//Total Tagihan =64700000

const totalTagihanDiscount = (discount) => {
    const totalAfterDiskon = totalTagihan - (totalTagihan* discount / 100)
    return totalAfterDiskon;
}
//console.log(prod1.setPrice());
//console.log(prod1.toString());
//console.log(prod1);

console.log(`Total Tagihan discount = ${totalTagihanDiscount(10)}`);//Total Tagihan discount=58580000