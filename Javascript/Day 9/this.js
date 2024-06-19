let h1=document.querySelector('h1');
let h3=document.querySelector('h3');
let para =document.querySelector('p');
let btn=document.querySelector('button');
btn.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h3.addEventListener("click",function(){
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor='blue';
});
para.addEventListener("click",function(){
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor='blue';
});
function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor='blue';


}