console.log("foreach method");
let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
};
arr.forEach(print)
let aar=[4,5,6,7];
aar.forEach((le)=>{
    console.log(le);
})
let aaar=[{
    name: "Sanny",
    marks: 95,
},{
    name: "Sanni",
    marks: 85,
},{name: "Manny",
    marks: 99,},];
    aaar.forEach((student)=>{
        console.log(student.marks)
    })
console.log("Every Function");
let arrr=[2,4,9,8];
let alleven=arrr.every((el)=>
     el%2==0
);
console.log(alleven);
console.log("Some Function");
let arrr1=[2,4,9,8];
let someeven=arrr1.some((el)=>
     el%2==0
);
console.log(someeven);