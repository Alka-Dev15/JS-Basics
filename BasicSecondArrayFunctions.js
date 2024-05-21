const marvelHeroes = ["spiderman", "superman", "shaktimaaan"]

const otherHeroes = ["ironman", "pokemon", "bongo"]

//marvelHeroes.push(otherHeroes)

//console.log(marvelHeroes);

let displayValue = marvelHeroes.concat(otherHeroes)

console.log(displayValue);


const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const useRealArray = anotherArray.flat(Infinity)

console.log(useRealArray);

console.log(Array.isArray("Alka"));

console.log(Array.from("Alka"));

// Convert string object to array

console.log(Array.from({ name: "Alka" }));

let score1 = 100

let score2 = 200

let score3 = 500

console.log(Array.of(score1, score2, score3));