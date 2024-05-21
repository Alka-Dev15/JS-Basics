const arrayValue = [12, 6, 7, 8, 10]


const newHeroes = ["Shaktimaan", "Pokemon", "Aryamaan"]

const secondArrayVal = new Array(1,2,3,4,5)

console.log(arrayValue[2]);

// Array methods

secondArrayVal.push("6")
secondArrayVal.push("9")
console.log(secondArrayVal);

secondArrayVal.pop();

console.log(secondArrayVal);

secondArrayVal.unshift("0")

console.log(secondArrayVal);

secondArrayVal.shift()

console.log(secondArrayVal);

console.log(secondArrayVal.includes(9));

console.log(secondArrayVal.indexOf("8"));

const eValue = secondArrayVal.join()

console.log(eValue);

console.log(typeof eValue);

// slice, splice

console.log("A ", secondArrayVal);

console.log(secondArrayVal.slice(1,3));

console.log("B ",secondArrayVal);