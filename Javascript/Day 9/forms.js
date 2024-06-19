let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
//     console.dir(form);
//     let user=this.elements[0];//form.elements[0] both are equal
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value}, your pass is set to ${pass.value}`);
    

    // let input=document.querySelector('input');
    // console.dir(input);
    // console.log(input.value);

});
let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("Change event");
    console.log("final value=",user.value);

});
user.addEventListener("input",function(){
    console.log("Input event");
    console.log("final value=",user.value);

});
