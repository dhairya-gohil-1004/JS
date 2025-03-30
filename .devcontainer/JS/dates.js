let date = new Date()
//console.log(date);
//console.log(date.toDateString()); 
//console.log(date.toLocaleDateString()); 
//console.log(date.toLocaleDateString());

let createDate = new Date("2025-04-10")
let createDate2 = new Date("2025-04-10")
//console.log(createDate.toLocaleDateString());
//console.log(createDate2.toLocaleDateString());

let TimeStamp = Date.now()
console.log(TimeStamp);

newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday: "long"
})