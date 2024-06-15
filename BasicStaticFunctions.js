class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Users are: ${this.username}`);
    }

    static createId() {
        return `123abc`
    }
}

const newUser = new User("hellouser")

// console.log(newUser.createId())

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const teachers = new Teacher("iphone", "i@phone.com")
teachers.logMe()

console.log(teachers.createId());