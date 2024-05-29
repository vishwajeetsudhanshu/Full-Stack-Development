//console.log("Hello world")
//console.log("Sudhansoo")
let a=10;
let b=5;
console.log(" Sum is: ", a+b );
//this is comment
let pencilPrice=10;
let erasorPrice=5;
//let output("the total price is :"+(pencilPrice+erasorPrice)+"Rupees. ");
let output=`the total price is: ${pencilPrice+erasorPrice} Rupees.`;
console.log(output); 
//Arithmetic Operators
let p=15;
let q=5;
console.log(`sum is ${p+q}`);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p % q);
console.log(p ** q);
console.log(p++);//15
console.log(++p);//17

//comparison operator > < >= <= == !=
let age=18;
//== compare value not type whereas === compares types and values both
//comparison for non-numbers 'a'->61.........,'A'->41
console.log('a'>'A')//true
console.log('a'>'b')//false
console.log('b'>'c')//false
console.log('B'>'C')//false
console.log('*'>'&')//true
//Conditional Statement
console.log("before my if statement")
let age2=13;
if(age2>=18){
    console.log("you can vote");
    console.log("you can drive")
}
else{
    console.log("You are not elligible")
}
console.log("After my if statement")
//else if
let Age=14;
if(Age>=18){
    console.log("you can vote")
}
else if(Age<18){
    console.log("you cannot vote")
}





