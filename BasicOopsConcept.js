// const userName = {
//     username: "Alka is in Google",
//     age: 29,
//     score: 300,
//     getUserDetails: function () {
//         //console.log("Git User details")
//         //console.log(`Username is: ${this.username}`);
//         console.log(this);
//     }
// }

// userName.getUserDetails()

function newUserCreation(username, loginCount, loggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = loggedIn
    this.greetings = () => {
        console.log(`Welcome here: ${this.username}`);
    }
    //return this
}

const newUserOne = new newUserCreation("Sham", 1, true)
const newUserTwo = new newUserCreation("Ram", 2, false)
console.log(newUserTwo.constructor);
console.log(newUserOne);
