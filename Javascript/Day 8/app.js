let smallimg=document.getElementsByClassName("oldImg");
for(let i=0;i<smallimg.length;i++){
    console.dir(smallimg[i]);
    console.dir(smallimg[i].src);
    smallimg[i].src="img/Spider.jpg";
    console.log(smallimg[i]);
    console.log(`value of image no. ${[i]} is changed`)

}     
console.log("Selecting elements by Tag Name");                                                   
let id=document.getElementsByTagName("p");
console.dir(id);
console.log("Query Selector");
let firp=document.querySelector("h1");
console.dir(firp);
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll("div a"));
console.log("Manipulating the object");
let para=document.querySelector('p');
console.log(para);
console.dir(para);
//para.innerText="Hi I'm Peter";
//para.innerHTML="Hi I'm <b>Peter Parkar</b>";
let  head=document.querySelector('h1');
//head.innerHTML="<u>Spider-Man</u>";
//head.innerHTML=`<u>${head.innerText}</u>`;
let img=document.querySelector('img');
console.log(img);
console.dir(img);
img.getAttribute('id');
img.setAttribute('id','Spider-Man');
img.setAttribute('src','img/1.jpg');
console.log("Manipulating Styles");
console.log(img.style);
console.log(head.style);
//console.log(head.style.color='green');
console.log(head.style.backgroundColor='pink')
//let links=document.querySelectorAll(".box a");
//for(let i=0;i<links.length;i++){
    //console.log(links[i].style.color='purple');//inline style
//}
console.log(img.classList);
head.classList.add("green");
head.classList.add("under");
head.classList.remove("green");
//head.setAttribute('class','green');
console.log(head.classList.contains("green"));

console.log(head.classList.toggle("under"));
let box=document.querySelector('.box');
box.classList.add("yellow");
let h4=document.querySelector('h1');
console.log(h4.parentElement);
console.log(h4.children);
console.log(box.children);
let ul=document.querySelector('ul');
console.log(ul.children);
console.log(ul.children[1].previousElementSibling);

img.previousElementSibling;
console.log(img.previousElementSibling.style);
console.log(img.previousElementSibling.style.color="green");
let p=document.createElement('p');
console.dir(p);
p.innerText="Hi Im new Paragraph";
let body=document.querySelector('body');
body.appendChild(p);
box.appendChild(p);
let btn=document.createElement("button");
btn.innerText='New Button';
box.appendChild(btn);
p.append("this is new text & Don't click this button");
p.append(btn);
p.prepend(btn)
let btn2=document.createElement("button");
btn2.innerText='New Button2';
let btn3=document.createElement("button");
btn3.innerText='New Button3';
let btn4=document.createElement("button");
btn4.innerText='New Button4';
para.insertAdjacentElement('beforebegin',btn);
para.insertAdjacentElement('afterbegin',btn2);
para.insertAdjacentElement('beforeend',btn3);
para.insertAdjacentElement('afterend',btn4);
body.removeChild(btn);