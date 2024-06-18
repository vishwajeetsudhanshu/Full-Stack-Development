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