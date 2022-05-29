/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(wg1, wg2, wg3) {
    let wg = 0;
    if (wg1 > wg2) {
        wg=wg1;
    } else if (wg2>wg3) {
        wg=wg2
    } else {
        wg=wg3
    }
    return wg;
}

console.log(getHeavier(12, 45, 70)); //70