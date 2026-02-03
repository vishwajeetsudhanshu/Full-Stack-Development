/* Memory -two types 
1>Stack Memory--- Uses in Primitive Datatypes
(You Always get copy)
2>Heap Memory ----- uses in Non-Primitive Dataypes
(Always change in original Values)
*/
//Stack examples
let myyoutubename="Sudhanshoodotcom";
let anothername = myyoutubename;
anothername="youandme";
console.log(myyoutubename);
console.log(anothername);
//Heap Examples
let userOne={
    email:"User@gmail.com",
    upi:"user@upi"
}
let userTwo=userOne;
userTwo.email="Sudhanshoo@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


