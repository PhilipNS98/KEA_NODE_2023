// Import the library for express
const express = require("express");
// instansiating express
const app = express();
// instansiating the birds array
const birds = require("./birds");

// adds a middleware function to the express application.
// the ´express.json()´ middleware parses incoming JSON payloads and
// makes it available under the ´req.body´ property.
// it allows the server to accept and parse JSON data sent in the request body.
app.use(express.json());

app.get("/birds", (req,res) =>{
    res.send({ data: birds})
})

//defining the route for /birds/:id where :id is a dynamic route parameter that captures the bird id.
app.get('/birds/:id', (req, res) => {
    //using req.params.id to get the id from the request url and wrapping it in Number() to make sure it is a number.
    const birdId = Number(req.params.id);
    //using Array.prototype.find() to look for the bird in the birds array whose id property matches the captured id
    const bird = birds.find((bird) => bird.id === birdId);
  
    //if a bird is found, send bird back as a JSON response using res.send
    if (bird) {
      res.send({data: bird});
      // if not found return a 404 status code and a message using res.status and res.send
    } else {
      res.status(404).send('Bird not found');
    }
  });

  app.post('/birds/', (req, res) => {
      const bird = req.body;
      birds.push(bird);
    res.send({data: bird});
  });

  app.put('/birds/:id', (req, res) => {
    const birdId = Number(req.params.id);
    const updatedBird = req.body;
  
    // Update the bird in the data store using birdId and updatedBird in the splice method
    birds.splice(birdId, 1, updatedBird);
    
    res.status(200).send(`Bird with ID ${birdId} updated successfully`);
  });

 //Listen for a connection and a callback function to log that the server is running
app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});