/* 
first Global execution Context
then again function by function and after execution it will delete
in this there is also a LIFO where last in first out
in global execution

*/
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one();
two();
three();
