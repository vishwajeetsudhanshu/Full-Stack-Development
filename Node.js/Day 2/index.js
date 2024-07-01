// const express=require("express");
// const app=express();

// console.dir(app);

// let port=8080;
// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`);
// });

// app.use((req,res) => {
//     console.log("request received");

// });
const express = require("express");
const app = express();

console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req, res, next) => {
    console.log("request received");
    res.send("Request received");
    next();
});

// Example of handling a specific route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
