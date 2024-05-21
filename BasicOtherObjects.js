const tinderValue = new Object() // This is Singleton Object

const nextTinderValue = {} // This is literal Object

console.log(tinderValue);

console.log(nextTinderValue);

tinderValue.id = "1"
tinderValue.name = "Alka Thakur"
tinderValue.age = 29
tinderValue.goal = "Get Google"
tinderValue.isLoggedIn = false

console.log(tinderValue);

// Get Nested Object Values

const regularUserData = {
    email: "alka@google.com",
    fullname: {
        userfullname: {
            firstName: "Alka",
            lastName: "Thakur"
        }   
    },
    age: 29
}

console.log(regularUserData.fullname.userfullname.firstName);

// Merge Values of Objects

const obj1 = { 1: "Alka", 2: "Google Employee" }

const obj2 = { 3: "alka@google.com", 4: false }

const obj4 = { 5: 29, 6: "Full-Time Employee" }

const obj3 = { obj1, obj2 }

//console.log(obj3);

// Concatenate two objects

const obj5 = Object.assign({}, obj1, obj2, obj4)

const obj7 = { ...obj1, ...obj2, ...obj4 }

//console.log(obj5);

console.log(obj7);

// get keys of all objects

console.log(Object.keys(obj7));

console.log(Object.values(obj7));

console.log(Object.entries(obj7));

console.log(obj7.hasOwnProperty("isLoggedIn"));

console.log(obj7.toString());