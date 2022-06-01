export default class Product{
    
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        
        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
        
        super.price
        super.totalBuy
        //super(prodId,prodName, category, price,totalBuy)
    }
    
    setPrice(price){  //buat set harga
        //price = 0 
        price = this.price
        return price ;
    }

    setTotalBuy(totalBuy){ //price x total buy
        //totalBuy = 1
        totalBuy = this.totalBuy
        return totalBuy ;
    }

    toString(){
     //  return `${this.firstName} ${this.lastName}, Gaji = Rp. ${this.salary}`
        return `id : ${this.prodId} , Nama : ${this.prodName} , Harga : ${this.price} , Total Pembelian : ${this.totalBuy}`;
    }

}