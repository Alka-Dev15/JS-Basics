function multipleby5(num) {
    return num * 5
}

multipleby5.power = 2

console.log(multipleby5(4));
console.log(multipleby5.power);
console.log(multipleby5.prototype);


function createUsers(username, age, scores) {
    this.username = username
    this.age = age
    this.scores = scores
    console.log(`Username is: ${this.username}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Scorecard is: ${this.scores}`);
}

createUsers.prototype.incrementscores = function () {
    console.log(`Print age is: ${this.age++}`)
}

createUsers.prototype.printMe = function () {
    console.log(`Print username is: ${this.username}`);
    console.log(`Print score is: ${this.scores}`);
}

const tea = new createUsers("Tea", 29, 399)
const coffee = new createUsers("Coffee", 30, 599)

tea.incrementscores()
tea.printMe()

coffee.incrementscores()
coffee.printMe()