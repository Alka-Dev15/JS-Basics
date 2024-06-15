class User{
    constructor(username) {
        this.username = username
        // this.password = password
        // this.username = username
    }

    logMe() {
        console.log(`User details are: ${this.username}`);
    }
    // encryptPassword() {
    //     return this.password
    // }    
    // changeUserName() {
    //     return this.username.toUpperCase()
    // }
}

// const newUserOne = new User("Chai", "chai@gmail.com", "Text@12345")
// console.log(newUserOne.encryptPassword());
// console.log(newUserOne.changeUserName());

class Teachers extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`Course added is: ${this.username}`);
    }
}

const teacher = new Teachers("hello","hello@gmail.com","Test@123")
teacher.addCourse();
// teacher.logMe()

const newUser = new User("hello user")
newUser.logMe()

console.log(teacher === newUser);

console.log(teacher === Teachers);

console.log(teacher instanceof Teachers);