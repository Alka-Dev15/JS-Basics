// Singleton type of object is created when constructor type object is created

Object.create // is type of constructor

// Objects literals type of object

const myArray = {
    name: "Alka",
    "full name": "Alka Thakur",
    company: "Google",
    age: 29,
    location: "Noida",
    email: "alka.thakur@google",
    isLoggedIn: false,
    lastLoginDetails: ["Tuesday","Monday","Added"]
}

console.log(myArray["full name"]);

console.log(myArray["lastLoginDetails"]);

// Use Symbol in the Object

const mySym = Symbol("testings")

const myMainObject = {
    name: "Alka",
    company: "Google",
    age: 29,
    [mySym]: "tests"
}

console.log(typeof myMainObject[mySym]);

// Freeze an object to stop changing values

//Object.freeze(myMainObject)

myMainObject.name = "Alka Thakur"

console.log(myMainObject);

// Add an object in the function

myMainObject.greetings = function() {
    console.log("Hello Welcome to Google");
}

myMainObject.greetingsTwo = function() {
    console.log(`Hello User Welcome Here: ${this.name}`);
}

console.log(myMainObject.greetings());
