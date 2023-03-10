import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"));

import jokes from "./util/jokes.js"
console.log(await jokes.getJoke());

//Pages (routes)

const pagesRoot = "public/pages/"

app.get('/', (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get('/IRLQuests', (req, res) => {
res.sendFile(path.resolve(pagesRoot, "IRLQuests/IRLQuests.html"));
});

app.get('/jokes', (req, res) => {
    res.sendFile(path.resolve(pagesRoot, 'jokes/jokes.html'))
});

//API











// PORT
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server running on port ", PORT);

});