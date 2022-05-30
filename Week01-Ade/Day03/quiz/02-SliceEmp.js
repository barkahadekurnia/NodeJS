// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

// cek = cities.slice(3)
// console.log(cek);

function citiesSlice(arrays, cityBetween) {

    const indexKota = arrays.indexOf(cityBetween) // cek index
    const slice =  [...arrays.slice(0,indexKota), ...arrays.slice(indexKota + 1)] 
    // potong buat nampilin data index 0 - indexkota dan jg indexkota-end

    return  slice;

}

//console.log(citiesSliced);
console.log(citiesSlice(cities,"jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']