// Two Types of data types (Primitive and Non Primitive Types)

// Primitive 7 types

// String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol is wrap as unique

const score = 100

const scoreValue = 100.33

const isPersonLoggedIn = true

const outsideTemperature = null

let userAdded

const sectionId = Symbol('123')

const anotherSectionId = Symbol('123')

console.log(sectionId === anotherSectionId);

const bigNumberValue = 6565767576257652765n

console.log(typeof bigNumberValue);

// Non Primtive (Reference Types)

// Array, Objects, Functions

let mySuperHeroes = ["Mummy","Papa","Brother","Sister"];

let mySpecificObj = {
    name: "Nothing",
    age: "30",
    married: true
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);