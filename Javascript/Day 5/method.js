const cal={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },

    mul:function(a,b){
         return a*b;
    },

}
console.log(cal);
console.log(cal.add(4,5));
console.log(cal.sub(9,5));
console.log(cal.mul(8,8));
//2nd method
const calc={
    aad(x,y){
        return x+y;
    }
}
console.log(calc.aad(8,9));