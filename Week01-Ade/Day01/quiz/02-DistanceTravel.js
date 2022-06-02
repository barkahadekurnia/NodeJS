/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t), 
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t){
    if (isNaN(a,t)) {
        return "input must an number";
    } else if (a < 0 || t < 0) {
        return "Accelaration or time must be >= 0";
    } 
    else  {
        let S = 1/2*a*t**2
        //S =  Math.pow(1/2*a*t,2)
        return "Jarak yang ditempuh adalah " + S + " meter/s";
    } 
}
console.log(calculateDistance("a","t"));//input must an number
console.log(calculateDistance(-1,9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50,60)); //Jarak yang ditempuh adalah 90000 meter/s
