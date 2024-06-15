function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const shamUser = new createUser("Sham", "shamuser@gmail.com", "Password@123")
console.log(shamUser);