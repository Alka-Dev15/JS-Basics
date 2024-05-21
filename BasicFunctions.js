// function sayMyName() {
//     console.log("A");
//     console.log("L");
//     console.log("K");
//     console.log("A");
// }

// sayMyName()

function addTwoNumber(firstNumber, secondNumber) { 
    const thirdNumber = firstNumber + secondNumber;
    console.log("heello here");
    return thirdNumber;
}

const datValue = addTwoNumber(3, 5)
console.log("Result is: ", datValue);

function userLogin(username) { 
    if (!username) { 
        console.log("Please Enter something");
        return
    }
    return `${username} Logged In`
}

console.log(userLogin("Alka"))

// Pass Object type in the Function

const firstObject = {
    name: "Famous Cap",
    price: 399
}

function displayObject(normalObject) { 
    console.log(`My item is: ${normalObject.name} and amount is ${normalObject.price}`);
}

displayObject(firstObject)

const displayArrayresults = [100, 200, 300, 400]

function printArrayResults(normalArray) { 
    return normalArray[1]
}

console.log(printArrayResults(displayArrayresults))
