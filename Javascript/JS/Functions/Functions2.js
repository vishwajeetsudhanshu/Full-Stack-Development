//Functions with objects and array i js
///...---> rest operator
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200,400,500))
//... Rest operator
function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(2))
console.log(calculateCartPrice2(200,400,500))

//M-3
function calculateCartPrice3(val1,val2, ...num1){//it returns only 500 and 2000
    return num1
}
console.log(calculateCartPrice3(200,400,500,2000))

const user={
    username:"Hitesh",
    price:199
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobj(user)
handleobj({
    username:"Sam",
    price:875
})
//Passing Array
const myNewArry=[200,400,500,600]
function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(myNewArry))
console.log(returnSecValue([1,2,3,4,5,6,7,8,9,75]))
