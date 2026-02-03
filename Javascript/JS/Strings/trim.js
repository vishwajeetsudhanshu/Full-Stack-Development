const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
trimStart()

trimLeft()
String.prototype.trimLeft.name === "trimStart";
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
let str2 = "   foo  ";

console.log(str2.length); // 8

str2 = str2.trimEnd();
console.log(str2.length); // 6
console.log(str2); // '   foo'