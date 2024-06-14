function hello(){
    console.log("Hello !");
}
hello();

function priName(){
    console.log("Sudhansoo")
}
priName();
function pri1to5(){
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
pri1to5();
function isAdult(){
    let age=25;
    if(age>=18){
        console.log("Adult")
    }
    else{
        console.log("Not Eligible")
    }
}
isAdult();

console.log("Function Expressions");
const sum=function(a,b){
    return a+b;
}
console.log(sum(4,5));


console.log("High Order Functions");
function multiplegreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multiplegreet(greet,10);

console.log("High Order Functions-Reurns a functions");
function oddeventest(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request=="even"){
       let even= function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Error");
    }
     
}
let testOdd = oddeventest("odd");
let testEven = oddeventest("even");
testOdd(3);
testEven(9);