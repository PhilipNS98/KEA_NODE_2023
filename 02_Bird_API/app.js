const express = require("express");
const app = express();
const birds = require("./birds");

app.get("/birds", (req,res) =>{
    res.send({birds})
})

//defining the route for /birds/:id where :id is a dynamic route parameter that captures the bird id.
app.get('/birds/:id', (req, res) => {
    //using rew.params.id to get the id from the request url and wrapping it in Number() to make sure it is a number.
    const birdId = Number(req.params.id);
    //using Array.prototype.find() to look for the bird in the birds array whose id property matches the captured id
    const bird = birds.find((b) => b.id === birdId);
  
    //if a bird is found, send bird back as a JSON response using res.send
    if (bird) {
      res.send(bird);
      // if not found return a 404 status code and a message using res.status and res.send
    } else {
      res.status(404).send('Bird not found');
    }
  });

app.listen(8080);