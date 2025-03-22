//console.log(2>1)
//console.log(2>=1)

//console.log(null==0)
//console.log(undefined==0)

//datatypes summary
/* premitive
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

Non-premitive (reference)
types: Array, Objects, Functions*/

const score = 100
const value = 100.3

const isLogin = false
const outside = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId)


const heros = ["Iron Man","Hulk","Thor"]
let myObj = {name:"Dhairya",age:22}

const myFun = function() {
    console.log("hello World!")
}

//console.log(typeof heros)
//console.log(heros)


//memory types: stack and heap
//premitive->stack & non-premitive->heap

let anotherName = "ROYAL_D"
anotherName = "ROYAL_DRAGON"

//console.log(anotherName)

let user1 = {name: "Dragon",pt:20}
let user2 = user1

user2.name = ("PEKKA")

//console.log(user1.name)
//console.log(user2.name)




//string in JavaScript: use " " or ' '
const name = "Dhairya";
const no = 10;
//console.log(name+no);
//console.log(`My name is ${name}`);

const gameName = new String('Dhairya-10')
/*console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))*/
const newStr = gameName.substring(0,9)
console.log(newStr)

const new2 = gameName.slice(0,4)
console.log(new2)
const new3 = gameName.slice(-8,4)
console.log(new3)

const newString = '    Dhairya      '
console.log(newString)
console.log(newString.trim()) //trim used for white spaces

const url = "https://dhairya.com/dhairya%20gohil"
console.log(url.replace('%','-'))
console.log(url.includes('dhairya'))

console.log(gameName.split('-'))