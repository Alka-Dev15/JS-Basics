const user = {
    username: "Google",
    price: "999",
    welcomeMessage: function () { 
        console.log(`Welcome to Website: ${this.username}`);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

const value = () => { 
    const userName = "Alka"
    console.log(this);
}
value()

const dataOne = (num1, num2) => { 
    return num1 + num2
}
console.log(dataOne(4, 5));

const addThree = (num3, num4) => num3 + num4 

console.log(addThree(10, 20));

const addFour = (num7, num8) => (num7 + num8)

console.log(addFour(30,40));