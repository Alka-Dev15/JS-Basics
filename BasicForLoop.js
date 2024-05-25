// For of Loop

const arr = [1, 2, 3, 4, 5]
for (const iterator of arr) {
    console.log(iterator);
}

const greeting = "Hello World !"
for (const greet of greeting) {
    if(greet ===  ' '){
        continue;
    }
    console.log(`Each character value of String is: ${greet}`);
}

// Map Function

const map = new Map()
map.set('IN','INDIA')
map.set('USA', 'United States Of America')
map.set('CAD', 'Canada')
map.set('AUS', 'Australia')
console.log(map);
for (const [key,itr] of map) {
    console.log(`Value of this is: ${key} - ${itr}`);
}

const languages = {
    js: 'Javascript',
    cp: 'C++',
    rb: 'Ruby',
    Swift: 'IOS'
}

for (const key in languages) {
    console.log(`Shortcut for language ${key} : ${languages[key]}`);
}

// For in Loop for Array variable

const languageVal = ["Ruby", "Java", "Go Lang", "C++", "Javascript"]

for (const key in languageVal) {
    console.log(languageVal[key]);
}

// For Each Loop

const coding = ["JS","Python","Ruby","Java","C++"]

// coding.forEach(item => {
//     console.log(item);
// });

// coding.forEach(function (item) {
//     console.log(item);
// })

function printMe(item) {
   console.log(item); 
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(`Language Name - ${item.languageName} and File Name - ${item.languageFileName}`);
})