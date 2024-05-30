let str="    apna   ";
str.trim();
//let msg=prompt("ENter your password");
//let pass=msg.trim();
//console.log(pass);
//console.log(msg);
let name="Apna college";
console.log(name.toUpperCase() );
let a="I Love Coding"
console.log(a.indexOf("Love"));
console.log(a.indexOf("o"));
console.log(a.indexOf("y"));
console.log(a.indexOf("ove"));
let msg="   Hello   ";
let newMsg=msg.trim();
console.log("after trim: ",newMsg);
newMsg=newMsg.toUpperCase();
console.log("agter upper",newMsg);
console.log(msg.trim().toUpperCase());
let string="ILoveCoding";
console.log(string.slice(2,4));
console.log(string.slice(4));
console.log(string.slice(-2));//11-2=9
//Replace Methods
console.log(string.replace("Coding","You"));
//repeat
console.log("repeat method",string.repeat(5));
