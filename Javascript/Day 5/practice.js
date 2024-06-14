function priPoem(){
    console.log("Jhonny Jhonny yes Papa!")
    console.log("Eating sugar No Papa !");
    console.log("Telling a Lie No Papa!");
    console.log("Open your mouth Ha HA Ha!");
}
priPoem();

function rollDice(){
    let rad=Math.floor(Math.random()*6)+1;
    console.log(rad);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


function avg(num1,num2,num3){
    
    console.log((num1+num2+num3)/3);
}
console.log("Avg of 3 num 4,6,8 is");
avg(4,6,8)


function table(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
console.log("The table of 4 is");
table(4);


function getsum(n){
    let sum=0;
    for(i=0;i<=n;i=i+1){
        sum=sum+i
    }
    return sum;
}
console.log(getsum(3));
console.log("Create a Function that returns the concatenation of all strings in an array");
let str=["hello","hii "," sunny"," !"];
function concat(str){
    let result="";
    for (let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(concat(str));

console.log("7");
let greet="Hello";
function changegreet(){
    let greet="Namaste";
    console.log(greet);
    function innerfunc(){
        console.log(greet);
    }
}
console.log(greet);
changegreet();