import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"));

import jokes from "./util/jokes.js"
/* console.log(await jokes.getJoke());
 */

const pagesRoot = "public/pages/"



import fs from "fs";
// Components
// task read the navbar and the footer here
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

//Pages (routes)
const frontpage = fs.readFileSync(`${pagesRoot}frontpage/frontpage.html`).toString();
// task read the other files and serve them
const IRLQuests = fs.readFileSync(`${pagesRoot}IRLQuests/IRLQuests.html`).toString();
const jokespage = fs.readFileSync(`${pagesRoot}jokes/jokes.html`).toString();




// Constructed pages
const frontpagePage = navbar.replace("%%DOCUMENTTITLE%%", "Upper | Motivation") + frontpage + footer;
const IRLQuestsPage = navbar.replace("%%DOCUMENTTITLE%%", "Upper | IRLQuests") + IRLQuests + footer;
const jokespagePage = navbar.replace("%%DOCUMENTTITLE%%", "Upper | Jokes") + jokespage + footer;


app.get('/', (req, res) => {
   res.send(frontpagePage);
});

app.get('/IRLQuests', (req, res) => {
/* res.sendFile(path.resolve(pagesRoot, "IRLQuests/IRLQuests.html"));
 */
res.send(IRLQuestsPage);

});

app.get('/jokes', (req, res) => {
/*     res.sendFile(path.resolve(pagesRoot, 'jokes/jokes.html'))
 */
res.send(jokespagePage);
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