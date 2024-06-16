let arrr=[2,4,9,8];
let mulof10=arrr.every((el)=>
     el%10==0
);
console.log(mulof10);
console.log("Min. no in an array");
let nums=[2,3,4,5,6,5,4,3,2];
let result =nums.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
});
console.log(result);