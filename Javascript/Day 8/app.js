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
para.innerText="Hi I'm Peter";
para.innerHTML="Hi I'm <b>Peter Parkar</b>";
let  head=document.querySelector('h1');
//head.innerHTML="<u>Spider-Man</u>";
head.innerHTML=`<u>${head.innerText}</u>`;
let img=document.querySelector('img');
console.log(img);
console.dir(img);
img.getAttribute('id');
img.setAttribute('id','Spider-Man');
img.setAttribute('src','img/1.jpg');
console.log("Manipulating Styles");
console.log(img.style);
console.log(head.style);
console.log(head.style.color='green');
console.log(head.style.backgroundColor='pink')
let links=document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++){
    console.log(links[i].style.color='purple');//inline style
}