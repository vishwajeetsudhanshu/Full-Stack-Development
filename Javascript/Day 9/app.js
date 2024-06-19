// let btn=document.querySelector( 'button');
// console.dir(btn);
// btn.onclick=function(){
//     alert("Button was Clicked");
//     console.log("Button was click");
// }
 function say(){
     alert("Hello")
}
// btn.onclick=say;
// //let btns=document.querySelectorAll('button');
// //for(btn of btns){
//   //  btn.onclick=say;
    
// //}
// let btns=document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick=say;
//     btn.onmouseenter=function(){
//         console.log("Buttons was clicked");
//     };
    
// }
let btn=document.querySelector( 'button');
let btns=document.querySelectorAll('button');
    for(btn of btns){
        // btn.addEventListener("click",say);
        // btn.addEventListener("click",function(){
        //     alert("Sudhansoo");
        // });
        btn.addEventListener("dblclick",function(){
            console.log("Yo Sudhanso dblclick");
        });
    }
let para=document.querySelector('p');
para.addEventListener("mouseenter",function(){
    alert("Para was on mouse enter");
})
let box=document.querySelector('div');
    box.addEventListener("mouseenter",function(){
        alert("That's the div");
    })
