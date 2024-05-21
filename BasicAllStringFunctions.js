// Length function of JS

let value = "Alka Google SDE"

let stringLength = value.length

console.log(stringLength);

// Prototype Iterator Function

let newUpdatedValue = value[Symbol.iterator]()

for (const data of newUpdatedValue) { 
    console.log(data);
}

//  Prototype At Function

let index = 10

let displayIndexValue = value.at(index)

console.log(displayIndexValue);

// Prototype CharAt function

let valueDisplayAt = value.charAt(index)

console.log(`Value display at: ${valueDisplayAt}`);

// Prototype CharCodeAt Function

let displaycharcode = value.charCodeAt(index)

console.log(`Display Char Code at: ${displaycharcode}`);

// Prototype Concat Function

let displayconcat = "Alka is"

console.log(`Data is ${value.concat(',', displayconcat)}`);

// Prototype endsWith Function

console.log(`Is this exists ${value.endsWith("Alka", 4)}`);

// Prototype includes Function

console.log(`Value exist in string or not: ${value.includes("Microsoft")}`);

// Prototype indexOf Function

console.log(`Index of Value in String is: ${value.indexOf("Google")}`);

// Prototype lastIndexOf Function

console.log(`Last Index of variable is: ${value.lastIndexOf("Google")}`);

// Prototype localeCompare Function

let firstValue = "hello"

let secondValue = "hello"

console.log(`Comparsion result is ${firstValue.localeCompare(secondValue)}`); 

// Prototype match Function

let regexValue = /23/g

console.log(`Check match found: ${firstValue.match(regexValue)}`);

// Prototype Match All Function

const str = "Hello world. Alka in Google";

const regex = /[a-zA-Z]+/g;

let checkMatchVal = str.matchAll(regex)

for (const dataval of checkMatchVal) { 
    console.log(dataval);
}

// Prototype padEnd Function

let mainValue = "Alka is a Google Employee"

console.log(`Main Data is: ${mainValue.padEnd(30, '.')}`);

let secondMainValue = '200'

console.log(secondMainValue.padEnd(5, '-'));

// Prototype padStart Function

let thisValue = "maindata"

console.log(`Value is: ${thisValue.padStart(10, "*")}`);

// Prototype repeat Function

let displayRepeatValue = "Alka is happy in Google. He loves her job in Google"

console.log(displayRepeatValue.repeat(2));

// Prototype replace Function

let replaceDataValue = "Alka was ex Grazitti employee. Earlier she is in Grazitti But now she is perfectly set in Google"

console.log(replaceDataValue.replace("Grazitti", "Grazitti Interactive"));

// Prototype replaceAll function

let replaceAllDataValue = "Alka was ex Grazitti employee. Earlier she is in Grazitti But now she is perfectly set in Google"

console.log(replaceAllDataValue.replaceAll('Grazitti','Grazitti Interactive'));

// Prototype Search Function

let searchValue = "Now Alka Perfectly Set in Google"

console.log(searchValue.search("Google"));

// Ptototype Slice Function

console.log(searchValue.slice(4, 20));
console.log(searchValue.slice(-9, -4));

// Prototype Split function

console.log(searchValue.split(' '));

// Prototype startsWith function

console.log(searchValue.startsWith("Now", 1));

// Prototype Substring Function

console.log(searchValue.substring(0, 29));

// Prototype toLowerCase Function

console.log(searchValue.toLowerCase());

// Prototype toUpperCase Function

console.log(searchValue.toUpperCase());

// Prototype toString Function

let toStringValue = new String("Hello Welocome to Google")

console.log(toStringValue.toString());

// Prototype Trim Function

let trimValue = "             Alka in Google"

console.log(trimValue.trim());

// Prototype trimEnd Function

let trimEndValue = "Hello Alka in Google           "

console.log(trimEndValue.trimEnd());

// Prototype trimStart Function

let trimStartValue = "       Hello Alka in Google"

console.log(trimStartValue.trimStart());

// Prototype valueOf Function

let valueOfData = new String("Google")

console.log(valueOfData.valueOf());/////////