//import and instansiate
/* const app = require("express")(); */

 const express = require("express");
 const app = express();

 app.use(express.json())

// route (entire thing)
// HTTP method
//  |   endpoint    callback function
app.get("/", (req, res) => {
    res.send({ message: "Our first route" });
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({
        message: `People have spun the bicycle wheel 
    ${bicycleSpins} times`
    });
});

app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>
    <h3>This is my about page.</h3>
    `);
});


// /bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query)
    res.send({ message: `The bat is ` });
})

// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize });
})







/**assignment
 *  create a new route that kicks the dinosaur
 *  and the n the dinosaur says ow ow ow
 */
let kicks = 0
let ows = 0;
app.get("/kickthedinosaur", (req, res) => {
    kicks += 1;
    ows += 1;
    res.send({
        message: `Dinosaur has been kicked 
        ${kicks} times`,
        dinosaur: `dinosaur said ow ow ow ${ows} times`
    }); 
});




app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({ message: req.body });
})

//listen to the port 8080 (dev port)
app.listen(8080);
