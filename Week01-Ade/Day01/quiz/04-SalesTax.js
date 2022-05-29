/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    if (isNaN(price) && isNaN(tax)){ // jika price dan pajak bukan angka
        return "Price & Pajak harus dalam angka";
    } 
    else if (isNaN(price)) {  // jika price bukan angka
        return "Price harus dalam angka" ;
    }
    else if (isNaN(tax)) {  // jika pajak bukan angka
        return "Pajak harus dalam angka" ;
    }
    else {
        total = price+tax 
        return "Total Sales : Rp." + price + "\nPajak : " + tax/100 + "\nTotalHarga+Pajak : Rp." + total ;
    }
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
*/

