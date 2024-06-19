let inp=document.querySelector("#text");
let para=document.querySelector('p')
inp.addEventListener("input",function(){
    console.log(inp.value);
    para.innerText=inp.value;
})