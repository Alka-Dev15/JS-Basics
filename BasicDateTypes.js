let currentDateType = new Date();

console.log(currentDateType);

console.log(currentDateType.toString());

console.log(currentDateType.toDateString());

console.log(currentDateType.toLocaleString());

console.log(currentDateType.toLocaleDateString());

let ownDateType = new Date(2023, 12, 24);

console.log(ownDateType);

console.log(ownDateType.toDateString());

let newDateValueAdded = new Date("2023-10-23")

console.log(newDateValueAdded);

let myTimeStamp = Date.now()

console.log(myTimeStamp);

// Convert this is minutes

console.log(newDateValueAdded.getTime());

console.log(Math.floor(Date.now() / 1000));