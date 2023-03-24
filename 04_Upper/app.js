import express from "express";
import path from "path";
import renderPage from "./util/templateEngine.js";
import fs from "fs";
import getJoke from "./util/jokes.js"
import templateEngine from "./util/templateEngine.js";
import escape from "escape-html"


const app = express();
app.use(express.static("public"));
/* console.log(await jokes.getJoke());
 */

const frontpage = templateEngine.readPage(`frontpage/frontpage.html`);
const frontpagePage = templateEngine.renderPage(frontpage, { tabTitle: "Upper | Motivation" });



const IRLQuests = templateEngine.readPage(`IRLQuests/IRLQuests.html`);
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, { tabTitle: "Upper | IRLQuests" });



// Components
// task read the navbar and the footer here

//Pages (routes)
// task read the other files and serve them




// Constructed pages

app.get('/', (req, res) => {
    res.send(frontpagePage);
});

app.get('/IRLQuests', (req, res) => {
    /* res.sendFile(path.resolve(pagesRoot, "IRLQuests/IRLQuests.html"));
     */
    res.send(IRLQuestsPage);

});

app.get('/jokes', async (req, res) => {
    /*     res.sendFile(path.resolve(pagesRoot, 'jokes/jokes.html'))
     */
    const joke = await getJoke();
    const jokes = templateEngine.readPage(`jokes/jokes.html`)
        .replace("$JOKE", JSON.stringify(joke));
    const jokespagePage = templateEngine.renderPage(jokes,
        {
            tabTitle: "Upper | Jokes",
            cssLink: '<link rel="stylesheet" href="/pages/jokes/jokes.css">'
        });

    res.send(jokespagePage);
});

//API





//Accessing environmental variables looks at script in package.json file
console.log(process.env.PORT);
//controlling what environment im in
console.log(process.env.ENV);


// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server running on port ", PORT);

});