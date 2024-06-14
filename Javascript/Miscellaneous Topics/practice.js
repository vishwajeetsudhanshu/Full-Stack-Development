console.log("Square of n");
const sqr=n=>{
    return n*n;
}
console.log(sqr(5));
console.log("Hello World 2s interval");
let id=setInterval(()=>{
    console.log("Hello World")
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval run");
},10000);
