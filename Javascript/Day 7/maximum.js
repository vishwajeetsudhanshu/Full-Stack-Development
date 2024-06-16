let nums=[2,3,4,5,6,5,4,3,2];
let result =nums.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});
console.log(result);