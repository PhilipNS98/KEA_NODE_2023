const express = require("express");
const app = express();
// Tells the Express server to serve static files from the "public" directory.
app.use(express.static("public"));


const tanks = [
    { name: "Leopard", nationality: "Germany" },
    {name: "Tiger", nationality: "Germany", year: "1943" },
    {name: "M1 Abrams", version: "M1" }
];

// PAGES    

//GET ALL TIME
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time/time.html")
})
// GET ALL TANKS
app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
})

//API

//GET tanks
app.get("/api/tanks", (req, res) => {
res.send({data: tanks});
})


/* Time */
app.get("/time/time", (req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimeStamp: Date.now()
    });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/time/day", (req, res) => {
    res.send({ data: days[new Date().getDay()] });
})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "december"]
app.get("/time/month", (req, res) => {
    res.send({ data: months[new Date().getMonth()] });
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
