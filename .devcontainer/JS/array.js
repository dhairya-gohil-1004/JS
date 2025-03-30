const arr = [45,77,18,96,20]
//console.log(arr);
//console.log(arr[2]);

const array = new Array(1,2,3,4)
array.push(5)
//array.unshift(18)
//console.log(array);

const New = array.join()
//console.log(New);

//slice, splice
const array1 = array
//console.log("A",array1);
//console.log();

const heros = ["Iron Man","Thor","Hulk"]
const extra = ["Captain America","Red Hulk"]
heros.push(extra)

//console.log(heros);
//console.log(heros[3][1]);

const all = heros.concat(extra)
//console.log(all);
const all_new = [...heros,...extra]
//console.log(all_new);

const mix_array = [1,2,3,[4,[5,6]]]
const real_array = mix_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Dhairya"))
console.log(Array.from("Dhairya"))
console.log(Array.from({name:"Dhairya"}))

let score1 = 18
let score2 = 45

console.log(Array.of(score1,score2));
