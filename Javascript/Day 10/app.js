function hello(){
    console.log("Hello!");
}
hello();
function functionThree() {
    console.log("Inside functionThree");
}

function functionTwo() {
    console.log("Inside functionTwo");
    functionThree(); // This will push functionThree onto the call stack
    console.log("Back to functionTwo");
}

function functionOne() {
    console.log("Inside functionOne");
    functionTwo(); // This will push functionTwo onto the call stack
    console.log("Back to functionOne");
}

console.log("Starting execution");
functionOne(); // This will push functionOne onto the call stack
console.log("Execution finished");
