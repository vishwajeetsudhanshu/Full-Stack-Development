console.log("Map Function");
let num=[1,2,3,4];
let double=num.map(function(el){
    return el*2;
});
console.log(double);
let stds=[
    {name: "Sanny",
    marks: 95,
    },
    {
    name: "Sanny",
    marks: 95,
    },{
    name: "Sanny",
    marks: 95,
}];
let gpa=stds.map((el)=>{
    return (el.marks)/10;
});
console.log(gpa);
console.log("Filter function");
let nums=[4,5,6,7,8,9,0,1,2,34,56,76,54,55,43,67];
let even=nums.filter((num)=>{
    return num%2==0;
});
console.log(even);