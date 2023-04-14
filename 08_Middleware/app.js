import express from "express";
const app = express();


//Middleware that happens before our callback.
function houseButler(req, res, next) {
    console.log("This way...");
    next();
}
//applying middleware to specific route, if "/room" is obmitted it applies to all routes.
app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);


function guard(req, res, next) {
    if (req.query.name === "Philip") {
        req.myName = "Philip";
        next();
    } else {
        res.send({ message: "You are not allowed" })
    }
};


app.get("/frontdoor", guard, (req, res) => {
    res.send({ message: `Please enter, ${req.myName}` });
});

app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>");
})











const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));