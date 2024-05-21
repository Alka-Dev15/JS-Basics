const score = 400

console.log(score);

const balance = new Number(100)

console.log(balance);

// Convert Number to String

console.log(balance.toString());

// Make that as fixed value

console.log(balance.toFixed(2));

// Round about a number but according to the given limit

const preciseVal = 455.876

console.log(preciseVal.toPrecision(3));

// According to the standard value

const standardValue = 10000000

console.log(standardValue.toLocaleString('en-IN'));

// MAX_VALUE  and MIN VALUE

// ------------------  MATH OPERATIONS ----------------------

console.log(Math);

console.log(Math.abs(-1));

console.log(Math.round(7.8));

console.log(Math.ceil(6.2));

console.log(Math.floor(6.2));

console.log(Math.sqrt(25));

console.log(Math.min(4, 10, 9, 7));

console.log(Math.max(4, 10, 7, 11));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10 ) + 1);

const minValue = 50

const maxValue = 60

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);


