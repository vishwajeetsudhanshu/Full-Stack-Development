console.log("Function Scope-Not accessible from the outside of function");
function calsum(a,b){
    let sum=a+b;//Function Scope
    console.log(sum)
}
calsum(1,2);
let sum=54;//Global Sum
console.log(sum);
console.log("BLock Scope-variable declared in {} can't be accessed from outside");

let age =25;
if(age>=18){
    let str="adult";//Block Scope
    console.log(str)
}
//console.log(str)//gives error

console.log("Lexical Scope");
function outerfunc(){
    let x=5;
    let y=10;
    function Innerfunc(){
        console.log(x);
        console.log(y);
    }
    Innerfunc();
}
