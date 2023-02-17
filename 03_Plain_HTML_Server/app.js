const express = require("express");
const app = express();
// Tells the Express server to serve static files from the "public" directory.
app.use(express.static("public"));

//GET ALL FRONTAPGE
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})
// GET ALL TANKS
app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
})

//GET BY ID
app.get("/:id", (req, res) => {

})
//POST

//PUT

//Patch

//DELETE

const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return;
    }
    console.log("Server is running on port", PORT)
});