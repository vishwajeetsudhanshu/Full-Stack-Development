const sum=(a,b)=>{
    console.log(a+b);
}
sum(2,3);
const cube=n=>{
    return n*n*n;
}
console.log(`The cube  is `,cube(2));
const pow=(x,y)=>{
    return x**y;

}
console.log(pow(2,3));

const hello=()=>{
    console.log("Hello");
}
hello();
console.log("Implict return in arrow Functions");
const mul=(a,b)=>(
    a*b
);
console.log(mul(4,5));