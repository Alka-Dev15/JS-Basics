// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     console.log("Promise Consumed");
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log("Async function is resolved");
//         resolve()
//     },1000)
// }).then(function () {
//     console.log("This is working");
// })

// promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Data Entered in Sync");
//         resolve({username:"Alka is in Google", age: "30"})
//     })
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })

// promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({username:"Alka is is google", designation: "SDE"})
//         } else {
//             reject("ERROR: Not Entered in the program")
//         }
//     },1000)
// })

// promiseFour.then(function (user) {
//     console.log(user);
//     return user.username
// }).then(function (username) {
//     console.log(username);
// }).catch(function (err) {
//     console.log(err);
// }).finally(function () {
//     console.log("This program is completed");
// })

// const promiseFive = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({username:"Javascript", designation: "SDE"})
//         } else {
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch(err) {
//         console.log(err);
//     }
    
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch(error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users").then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
}).catch(function(err){
    console.log("ERR: ",err);
})

