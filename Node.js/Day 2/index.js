const express=require("express");
const app=express();

console.dir(app);

let port=8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});

app.use((req,res) => {
    console.log("request received");

});