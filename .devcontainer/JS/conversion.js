let score = "18"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

/*  in JS it converts all in number
if score is 18abc -> number will be Nan
true -> 1 false -> 0
18 -> 18
null -> Object
undefined -> undefoned*/

let boolean = ""
let length = Boolean(boolean)
console.log(length)
/*1->true  0-> false
"dhairya"->true   ""->false*/

//why string to number
console.log(2+2)
console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2") //not assuming to string

console.log()
