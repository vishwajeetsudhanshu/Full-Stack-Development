let div=document.querySelector("div");
let ul=document.querySelector("ul");
//let lis=document.querySelectorAll("li");
let btn=document.querySelector('button');
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Remove";
    delbtn.classList.add("remove");
    item.appendChild(delbtn);

    ul.appendChild(item);
    //console.log(inp.value);
    inp.value="";
})

// let delbtns=document.querySelectorAll(".remove");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("Deleted");
    }

    
})