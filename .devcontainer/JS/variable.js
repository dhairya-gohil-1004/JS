const accountId = "1004"
let accountEmail = "dhairya1004@gohil.com"
var accountPassword = "1234"
accountCity = "Vadodara"

accountEmail = "dhairya@rajput.com"
accountPassword = "1004"
accountCity = "Bengaluru"

//avoid using of var
//because of issue in block scope and functional scope

console.log(accountEmail)
console.log(accountCity)

console.table([accountId,accountEmail,accountPassword,accountCity])