const { use } = require("react");

//This keyword-->used to tell about current context
const user={
    userName:"Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.userName="Sam"
// user.welcomeMessage()
console.log(this);//Empty