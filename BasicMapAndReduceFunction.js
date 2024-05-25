const languageNames = ["Ruby","JS","Java","Python","C++"]

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 56]

const returnFilterValue = num.filter((num) => num > 4)

const returnFilterSecondValue = num.filter((num) => {
    return num > 4
})

// console.log(returnFilterValue);

// console.log(returnFilterSecondValue);

const newNum = []

num.forEach((item) => {
    if (item > 4) {
        newNum.push(item)
    }
})

// console.log(newNum);

// Map Function

const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumsVal = myNumb.map((num) => {
    return num + 10
})

//console.log(newNumsVal);

const valuesAfterIteration = []

myNumb.forEach((nums) => {
    let newVals = nums + 10
    valuesAfterIteration.push(newVals)
})

//console.log(valuesAfterIteration);

// Chaining

const newValuesAfterMutiplication = myNumb.map((val) => {
    return val * 10
}).map((newval) => {
    return newval + 2
}).filter((secNewValue) => {
    return secNewValue > 40
})

//console.log(newValuesAfterMutiplication);

// Reduce Functionality

const myNewNumsVals = [1, 2, 3, 4]

const myTotal = myNewNumsVals.reduce((prev, newVals) => {
    console.log(`Accumulator value is: ${prev} and Current Value is: ${newVals}`);
    return prev + newVals
}, 4)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalShoppingAmount = shoppingCart.reduce((prevCart, newCart) => (prevCart + newCart.price), 0)
console.log(totalShoppingAmount);