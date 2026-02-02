// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)
//Avoid these
console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//The reason is that an equality check== and comparison
//>,<,>=,<= work diffrently 
//comparisons convert null to a number ,treating it as 0
//THat's why null>=0 is true and null>0 is false 

//=== strictly check
console.log("2"===2)

