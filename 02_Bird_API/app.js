// Import the library for express
const express = require("express");
// Instansiating express
const app = express();
// Instansiating the birds array
const birds = require("./birds");

// Adds a middleware function to the express application.
// The ´express.json()´ middleware parses incoming JSON payloads and
// Makes it available under the ´req.body´ property.
// It allows the server to accept and parse JSON data sent in the request body.
app.use(express.json());

app.get("/birds", (req, res) => {
    res.send({ data: birds })
})

// Defining the route for /birds/:id where :id is a dynamic route parameter that captures the bird id.
app.get('/birds/:id', (req, res) => {
    // Using req.params.id to get the id from the request url and wrapping it in Number() to make sure it is a number.
    const birdId = Number(req.params.id);
    // Using Array.prototype.find() to look for the bird in the birds array whose id property matches the captured id
    const bird = birds.find((bird) => bird.id === birdId);

    // If a bird is found, send bird back as a JSON response using res.send
    if (bird) {
        res.send({ data: bird });
    // If not found return a 404 status code and a message using res.status and res.send
    } else {
        res.status(404).send('Bird not found');
    }
});

app.post('/birds/', (req, res) => {
    const bird = req.body;
    //without using push:
    /* birds = [...birds, bird] */
    birds.push(bird);
    res.send({ data: bird });
});

function validateBirds(originalBirds, updatedBirds) {
    // Check if the updated array has the same length as the original array
    if (updatedBirds.length !== originalBirds.length) {
        return 'The number of birds in the updated array does not match the original array';
    }
    /*  Check if the updated array has the same properties as the original array
        Creating two arrays of strings for the original bird and the updated bird
        that contains the keys (property names) of the first object in the array.
        We are then calling the Object.keys() method that takes and object as an input
        and returns an array of its keys. 
        In this case, we are passing the first object in each of the each of the arrays using indexing. 
        We are then calling the sort method on each array to sort the keys alphabetically. */
    const originalBirdKeys = Object.keys(originalBirds[0]).sort();
    const updatedBirdKeys = Object.keys(updatedBirds[0]).sort();
    // We then join the arrays into a string using the join() method, 
    // so we can compare the resulting strings and see if they match.
    if (originalBirdKeys.join() !== updatedBirdKeys.join()) {
        return 'The properties of the birds in the updated array do not match the original array';
    }

    /*  Check if the updated array has the same nested object keys as the original array
        First we declare a variable to store the result of the every() method check.
        then we use the every() method to iterate over each bird in 'originalBirds' array,
        passing each birds and its index to the arrow function.
        This arrow function checks if the nested keys of the 'size' object for the current
        bird in 'originalBirds' match the corresponding nested keys in the 'updatedBirds'
        array for the same index.
    */
    const nestedKeysMatch = originalBirds.every((bird, i) => {
        /*  Here we get an array of the nested keys of the 'size' object 
            for the current bird in 'originalBirds', sorts them alphabetically,
            and assigns them to a variable. 
        */
        const originalBirdNestedKeys = Object.keys(bird.size).sort();
        /*  Here we get an array of the nested keys of the 'size object'
            for then current bird in the 'updatedBirds' array (at the same
            index as the current bird in 'originalBirds'), sorts them alphabetically
            and assigns then to a variable.

        */
        const updatedBirdNestedKeys = Object.keys(updatedBirds[i].size).sort();
        /*  returns a boolean value indicating whether the sorted joined nested keys
            of the 'size' object for the current bird in 'originalBirds' 
            match the corresponding nested keys in the 'updatedBirds' array
            for the same index.
            If they match every() continues to the next iteration, if they don't
            match, every() immediatly returns false.
        
        */
        return originalBirdNestedKeys.join() === updatedBirdNestedKeys.join();
    });

    if (!nestedKeysMatch) {
        return 'The properties of the nested objects in the birds array do not match the updated array';
    }


    return 'success';
}

app.put('/birds', (req, res) => {
    const updatedBirds = req.body;
    // calling a function for handling validation checks
    const validationResult = validateBirds(birds, updatedBirds);

    if (validationResult !== 'success') {
        return res.status(400).send(validationResult);
    }
    // Update the collection of birds in the data store using the new array of updatedBirds
    birds.splice(0, birds.length, ...updatedBirds);

    res.status(200).send(`Birds updated successfully`);
});

app.patch('/birds/:id', (req, res) => {
    const birdId = Number(req.params.id);
    const bird = birds.find(bird => bird.id === birdId);

    if (!bird) {
        res.status(404).send('Bird not found');
    } else {
        const updatedBird = {
            ...bird, // Use spread operator to copy existing bird properties
            ...req.body, // Overwrite any changed properties
            id: birdId // Ensure id remains the same
        };

        birds.splice(birds.indexOf(bird), 1, updatedBird);
        res.send({ data: updatedBird });
    }
});

app.delete('/birds/:id', (req, res) => {
    const birdId = Number(req.params.id);
    const bird = birds.find(bird => bird.id === birdId);
    if (bird === -1) {
      return res.status(404).send('Bird not found');
    }
    birds.splice(bird, 1);
    res.send(`Bird with id ${birdId} deleted`);
  });

//Listen for a connection and a callback function to log that the server is running
app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});