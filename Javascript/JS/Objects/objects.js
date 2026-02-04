//Singleton 
//Declaring Symbol
const mySym=Symbol("Key1")
//Object Literals
const Jsuser={
    name:"Humpty",
    "full name":"Humpty Harsh",
    //mySym:"mykey1"//this is treat as a string not a symbol
    [mySym]:"mykey1",//this will treat as a symbol
    age:18,
    email:"humpty@google.com",
    location:"Bihar",
    isLoggedIn:false,
    lastLoginDays:["MOnday","Saturday"]
    
}
// console.log(Jsuser.email)//not possible for full name
console.log(Jsuser["full name"])
console.log(Jsuser["email"])
console.log(Jsuser[mySym])

//Manipulate or overitr
Jsuser.email="harsh@gmail.com";
console.log(Jsuser["email"])
//for lock we use
// Object.freeze(Jsuser)
Jsuser.email="sudh@gmail.com";
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js User");
}

Jsuser.greeting2=function(){
    console.log(`Hello Js User ,${this.name}`);
}
console.log(Jsuser.greeting)//[Function (anonymous)]
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())

