const marvel_heros = ["thor","shatkiman","spiderman",]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); 

// array ka andr array agya
// [ 'thor', 'shatkiman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//[ 'thor', 'shatkiman', 'spiderman', 'superman', 'flash', 'batman'

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const antoher_array = [1, 2, 3, [4, 5,], 7, [8, 3, [5, 2]]]

const real_another_array = antoher_array.flat(Infinity)   // flat is used for making the array in sequence
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

