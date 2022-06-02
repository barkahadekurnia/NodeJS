/** hitung total gaji karyawan */
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
function totalGaji(gaji1, gaji2, gaji3) {
    var tax1 = taxGaji(gaji1) 
    var gp1= gaji1+tax1*gaji1 //gp tu gaji + pajak
    var tax2 = taxGaji(gaji2) 
    var gp2= gaji2+tax2*gaji2
    var tax3 = taxGaji(gaji3) 
    var gp3= gaji3+tax3*gaji3
    var total = gp1 + gp2 + gp3
    
    return "\nEmp1 : Rp." + gaji1 +" + Pajak("+(tax1*100)+"%)=Rp." + gp1+ "\nEmp1 : Rp." + gaji2 +" + Pajak("+(tax2*100)+"%)=Rp." + gp2+"\nEmp1 : Rp." + gaji3 +" + Pajak("+(tax3*100)+"%)=Rp." + gp3+"\nTotal : Rp. " + total ;

}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
