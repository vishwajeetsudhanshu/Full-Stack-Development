// function chai(){
//     let userName="Sanny"
//     console.log(this.userName);//we cannot use
    
// }
// chai()
//Declaring Functions
// const chai=function(){
//     let userName="Sanny"
//     console.log(this.userName);//we cannot use
    
// }
// chai()
//Arrow Function
const chai=()=>{
    let username="Sanny"
    console.log(this.username);//undefined
    // console(this);//empty {}
}
chai()

//Syntax of Arrow Function ()=>{}
const addTwo=(num1, num2)=>{
    return num1+num2
}
console.log(addTwo(8,7))
//Implicit Return 2nd way
const addTwo2=(num1, num2)=> num1+num2

console.log(addTwo2(8,8))
//Implicit Return 3nd way
const addTwo3=(num1, num2)=> (num1+num2)

console.log(addTwo3(8,9))
//4th way
const two=(num1,num2)=>({username:"Hitesh"})
console.log(two(3,4))

// const myNewArry=[2,5,6,8]
// myNewArry.forEach()
