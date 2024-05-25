// If condition

const isUserLoggedIn = true
if (isUserLoggedIn) { 
    console.log("Hello");
}

if (2 === "2") {
    console.log("Executed");
}

// Operators for Comparison (<,>,>=,<=,==,===,!=,)

const newArray = []

//  Check Array variable has some value or not

if (newArray.length === 0) {
    console.log("Array is empty");
} else { 
    console.log("Array is not empty");
}

const newObject = {}

// Check Object value has some value or not

if (Object.keys(newObject).length === 0) {
    console.log("Object is empty");
} else { 
    console.log("Object is not empty");
}

// Nullish Coaleshing Operator

let val1 = 10

val1 = 10 ?? 20

console.log(val1);
