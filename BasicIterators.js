/* For Loops */

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

let myArray = ["Apple", "Mango", "Banana", "Papaya", "Orange"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// Break Statement

for (let index = 1; index <= 20; index++) {
    if (index === 5) { 
        console.log(`Value detected: ${index}`);
        break;
    }
    console.log(`Value of index is: ${index}`);
}

// Continue Statement

for (let index = 1; index <= 20; index++) {
    if (index === 5) { 
        console.log(`Value detected: ${index}`);
        continue;
    }
    console.log(`Value of index is: ${index}`);
}

/* While and Do-While */

let value = 1

while (value <= 10) {
    console.log(`Loop value is: ${value}`);
    value = value + 2;
}

let arrValue = ["Apple", "Banana", "Pineapple", "Papaya", "Orange"]

let arr = 0

while (arr < arrValue.length) {
    console.log(`Value is : ${arrValue[arr]}`);
    arr++;
}


let score = 1
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);