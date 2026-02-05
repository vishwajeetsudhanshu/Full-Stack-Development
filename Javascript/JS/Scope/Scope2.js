// //Nested Scope and closeure
// // let a=10
// // const b=20
// // var c=30 not use 
// // console.log(a);
// // console.log(b);
// // console.log(c);
// let a=300;//global scope
// if(true){
//     let a=10//block scope
//     const b=20
//     var c=30
//     console.log("Inner: ",a)
// }
// // console.log(a);not defined
// // console.log(b); not defined
// console.log(c); //it will give output that biggest mistake
// console.log(a);

//Nested Scope
function one(){
    const userName="Hitesh"
    function two(){
        const Website="Youtube"
        console.log(userName)
    }
    // console.log(Website)//cannot access due to out of scope

    two()
}
one()

//Example2
if(true){
    const username="Sanny"
    if(username==="Sanny"){
        const Website='youtube'
        console.log(username+Website)
    }
    //console.log(website)//gives error due to scope

}
//console.log(username)//gives error due to scope
//****************************IMportant********************* */
console.log(addone(5))
function addone(num){
    return num+1
}
addone(5)

//Other ways of functions
console.log(addTwo(5))//Not able to access
const addTwo=function(num){
    return num+2
}
addTwo(5)