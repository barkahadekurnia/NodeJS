//soal 11
function startsWithE(animal) {
    const db = animal.filter(e => e.startsWith('e'), 0)

    return db;
}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'
];

var animalsE = startsWithE(animals);
console.log(animalsE); // ["elephant", "emu", "eel", "earwig"