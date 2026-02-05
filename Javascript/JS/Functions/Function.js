//Functions
// function sayMyNAme(){
//     console.log('H');
//     console.log('h')
// }
// sayMyNAme()

const { use } = require("react")

//number 1 number 2 is parameters
function addTwoNumbers(number1, number2){
    console.log(number1+number2)
}
//3,4 arguments
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
const result=addTwoNumbers(3,5)
console.log("Result ",result)
//Method 1
function addTwoNumbers2(number1, number2){
    let result=(number1+number2)
    console.log('Sudhanshu')
    return result
    console.log('Hitesh')
}
const result2=addTwoNumbers2(3,5)
console.log("Result 2 ",result2)
//Method 3
function addTwoNumbers3(number1,number2){
    return number1+number2;
}
const result3=addTwoNumbers3(3,5)
console.log("Result 3 ",result3)
//Ways to take value
function loginUserMessage(username="Sam"){
    if(username===undefined){//(!username) both same
        console.log("Plese ENter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())//undefined
console.log(loginUserMessage('Hitesh'))
