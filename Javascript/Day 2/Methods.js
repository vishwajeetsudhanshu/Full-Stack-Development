//Array Methods
//Indexof
let primary=['red','yellow','blue'];
console.log(primary);
console.log("indexof",primary.indexOf('yellow'))
console.log("indexof",primary.indexOf('voilet'))
console.log("indexof",primary.indexOf('green'))
//Include methods

console.log("includes",primary.includes('yellow'));
console.log("includes",primary.includes('green'));
//concat
let secondary=['orange','green','black'];
console.log("Concat 2 Array",primary.concat(secondary));
//reverse
console.log("Reverse an array",primary.reverse());
//Slice
let colors=['red','yellow','blue','orange','pink','white'];
console.log("After slice",colors.slice());
console.log("After slice",colors.slice(2));
console.log("After slice",colors.slice(2,3));
console.log("After slice",colors.slice(-2));

//Splice Methods
console.log("After splice",colors.splice(4));
console.log("After splice",colors.splice(0,1));
console.log("After splice",colors.splice(0,1,'black','grey'));
console.log("After splice",colors);