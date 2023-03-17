const express = require("express");
const app = express();
const path = require("path");

const https = require('https');


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

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
})
//proxy server
// ANOTHER WAY TO PROXY SERVE GOOGLE.COM!

/*
This endpoint '/proxy' makes a GET request to the 'https://www.google.com' URL.
It uses the https module to send the request and receive the response.
The response is retrieved in chunks through the 'data' event and concatenated into a string.
When the response ends, the resulting string is sent back as a response to the client using the res.send() method.
If there's an error during the request, it is logged to the console and an error message is sent back to the client.
*/
/* app.get('/proxy', (req, res) => {
    https.get('https://www.google.com', (response) => {
      let data = '';
  
      response.on('data', (chunk) => {
        data += chunk;
      });
  
      response.on('end', () => {
        res.send(data);
      });
    }).on('error', (error) => {
      console.error(error);
      res.send('Error occurred while making request to Google');
    });
  }); */
  app.get('/proxy', (req, res) => {
    // task make a request to https://www.google.com
    // task serve the text data
    fetch('https://www.google.com')
    .then(response => response.text())
    .then(result => res.send(result));
  });


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

//Server side redirection
app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
       return res.redirect("/api/tanks");
    } 
        res.send({ message: "You are not allowed to see the tanks. Give us the secret in the query string  with the key being passport" })
    
});
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
