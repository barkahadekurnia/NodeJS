//soal 12
function range(startOrEnd, end, step) {
    var range = rangeFromStartToEnd(startOrEnd,end,step)

    return range
}

function rangeFromStartToEnd(start, end, step = 1){
    if (end==null) {   //kalo end kosong.. tuker ama start
        end = start 
        start = 0 
    }
    let range = []
    for (let i = start ; i < end ; i++) {
        range.push(i)
    }
    return range
};

console.log(range(9));//(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5,9));//(4) [5, 6, 7, 8]
