let para =document.createElement('p');
para.innerText="Hey I'm red!";
document.querySelector("body").append(para);
para.classList.add('red');

let h3 =document.createElement('h3');
h3.innerText="Hey I'm blue h3!";
document.querySelector("body").append(h3);
h3.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
h1.innerText="I'm in a div";
let p=document.createElement('p');
p.innerText="ME TOO";
div.append(h1);
div.append(p);
document.querySelector('body').append(div);
div.classList.add('div')