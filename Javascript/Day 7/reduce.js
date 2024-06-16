console.log("Reduce Function");
let arrr=[2,4,9,8];
let reduce=arrr.reduce((red,el)=>{
     console.log(red);
     return red+el
});
console.log(reduce);