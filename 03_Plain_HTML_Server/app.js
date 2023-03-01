const express = require("express");
const app = express();
const path = require("path");
// Tells the Express server to serve static files from the "public" directory.
app.use(express.static(path.join(__dirname, "public")));

const tanks = [
    { name: "Leopard", nationality: "Germany" },
    { name: "Tiger", nationality: "Germany", year: "1943" },
    { name: "M1 Abrams", version: "M1" }
];

let visitorCount = 0;

// PAGES    

//GET ALL FRONTAPGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/frontpage/frontpage.html"));
});
// GET ALL TANKS
app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
})

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
})

//API

//GET COUNTDOWN
app.get('/countdown', (req, res) => {
    const { targetDate } = req.query;

    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;

    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);

    const countdown = { days, hours, minutes, seconds };
    res.send({ data: countdown });
});

//GET tanks
app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
})

//GET visitor count
app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
})

//PUT increment visitor count
app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
})

//POST

//PUT

//Patch

//DELETE

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log("Server is running on port", PORT)
});
