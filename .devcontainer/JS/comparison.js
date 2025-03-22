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


const heros = ["Iron Man","Captain America","Thor"]
let myObj = {name:"Dhairya",age:22}

const myFun = function() {
    console.log("hello World!")
}

console.log(typeof heros)