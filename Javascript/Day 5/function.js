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