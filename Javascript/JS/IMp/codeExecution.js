//Execution
/*
js is single thread
Javascript Execution Context
(How it will run)
global execution context---->this keyword
in browser it will give window object

Execution context
1>Global Execution context
2>Function Execution COntext
3>Eval Execution context
GEC-->Memory Creation Phase
    -->Execution Phase
 
How js run code
let val1=10;
let val2=5;
function addnum(num1,num2){
    let total=num1+num2
    return total

}
let result1=addnum(val1,val2)
let result2=addnum(10,2)

step1->Global execution--->this keyword
step2->Memory  creation Phase(take all memory and put undefined)
val1->undefined
val2->undefined
addnum-defination of fun
result1->undefined
result->undefines
step3->Execution Phase
val1->10
val2->5
addnum---->make new execution context-->(new variable environment+execution thread)
                                        ->Again Step 2 Memory Phase
                                        val1-undefined
                                        val2-undefined
                                        total-undefined
                                        ->Step 3 Ecexution COntext
                                        num1-10
                                        num2-5
                                        total->10+5=15
                                        Now total will return in Global Execution Context
                                        after work it will delete
back to execution phase
result1=15
result2------>then again new execution context and same process then again total  will return in back to global execution phase

 */