//SIngleton objects
// const tinderUser=new Object()//singleton object
const tinderUser={}//Non singleton object
tinderUser.id="12345ert";
tinderUser.name="Sanny";
tinderUser.isLoggeIn=false;
// console.log(tinderUser);


const regularUser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sanny",
            lastname:"Sudhansoo"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname?.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)
 const obj1={
    1:"a",2:"b"
 }
 const obj2={
    3:"c",4:"d"
 }
 const obj5={
    5:"e",6:"f"
 }
// //  const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj6=Object.assign({},obj1,obj2,obj5)
// console.log(obj3)
//  console.log(obj4)
//  console.log(obj6)
//Spread operator
const obj3={...obj1,...obj2,...obj5}
console.log(obj3)

//value from database
const users=[
    {
        id:1,
        email:"Sanny@gmail.com"
    },
    {
        id:2,
        email:"Manny@gmail.com"
    },
    {
        id:3,
        email:"Danny@gmail.com"
    }
]
// console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));//output will be in array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggeIn'))
//ANd mamy more object methods 
