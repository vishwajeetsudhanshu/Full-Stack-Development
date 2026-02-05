// let a=10
// const b=20
// var c=30 not use 
// console.log(a);
// console.log(b);
// console.log(c);
let a=300;//global scope
if(true){
    let a=10//block scope
    const b=20
    var c=30
    console.log("Inner: ",a)
}
// console.log(a);not defined
// console.log(b); not defined
console.log(c); //it will give output that biggest mistake
console.log(a);
