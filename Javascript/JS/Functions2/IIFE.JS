//Immediately Invoved Function Expressions (IIFE)
function chai(){
    console.log(`DB Connected`);
}
chai();
//IIFE
(function chai2(){
    //Named IIFE
    console.log(` Not Connected`);
})();


//()()
((name)=>{//always make sure last code end
    //Unmaed IIFE
    console.log(`hfjsbfhbf ${name}`)
})('Sanny')
