let btn=document.querySelector('button');
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button");
// })
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button");
// })
let inp=document.querySelector('input');
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("Key Pressed");
// })
// inp.addEventListener("keyup",function(){
//     console.log("Key released");
// })
inp.addEventListener("keydown",function(event){
    console.log("Code= ",event.code);
    if(event.code=="ArrowUp"){
        console.log("Character moves upward");
    }
    else if(event.code=="ArrowRight"){
        console.log("Character moves Right");
    }
    else if(event.code=="ArrowLeft"){
        console.log("Character moves left");
    }
    else {
        console.log("Character downward");
    }
});