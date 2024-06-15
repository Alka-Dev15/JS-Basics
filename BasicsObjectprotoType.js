// let heroes = ["spidreman", "superman", "batman", "thor"]

// let superHeroes = {
//     firstHero: "Spiderman",
//     secondHero: "Batman",
//     getHeroValue: function () {
//         console.log(`My Superhero is: ${this.firstHero}`);
//     }
// }

// Object.prototype.usermine = function () {
//     console.log(`I entered in the loop`);
// }

// superHeroes.usermine()
// heroes.usermine()

// Array.prototype.usermine = function () {
//     console.log(`This is the Superhero`);
// }

// heroes.usermine()
//superHeroes.usermine()

// Inheritance

// const User = {
//     username: "Alka in Google",
//     email: "alka@google.com"
// }


// const Teacher = {
//     teacherName: "Radhe Krishan"
// }

// const Teachings = {
//     teachings: "Radhe Krsihna Radhe Krishna"
// }

// // Old Syntax

// // Teacher.__proto__ = User
// // User.__proto__ = Teacher

// //console.log(Teacher.username)

// Object.setPrototypeOf(Teacher,User)

// console.log(Teacher.username)

let anotherUserName = "Hare Ram Hare Ram            "

String.prototype.actualLength = function () {
    console.log(this);
    console.log(`Total Length is: ${this.trim().length}`);
}

anotherUserName.actualLength()
"ShreeJi".actualLength()
"Priyapritam".actualLength()