let btn=document.querySelector('button');
btn.addEventListener("click",function(){
   let h3=document.querySelector("h3");
   let random=getrandom();
   h3.innerText=random;
   let div=document.querySelector("div");
   div.style.backgroundColor=random;
});
function getrandom(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let Color=`rgb( ${red},${green},${blue})`;
    return Color;


}
