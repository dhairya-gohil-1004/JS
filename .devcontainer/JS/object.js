//singleton
//object literals
const simple = Symbol("key1")

const Juser = {
    name: "Dhairya",
    age: 20,
    email: "dhairya@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(Juser.name);
console.log(Juser["name"]);


//masssive objects
const course = {
    course_name: "JS",
    price : "999",
    courseInstructor: "Dhairya"
}
const {courseInstructor: instructor} = course
//console.log(courseInstructor);

console.log(instructor);

[
    {},
    {},
    {}
]