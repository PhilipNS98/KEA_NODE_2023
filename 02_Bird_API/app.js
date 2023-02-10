const express = require("express");
const app = express();
const birds = require("./birds");

app.get("/birds", (req,res) =>{
    res.send({birds})
})

app.listen(8080);