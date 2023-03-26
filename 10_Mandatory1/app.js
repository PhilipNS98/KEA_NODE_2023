import express from "express";
import getJoke from "./util/jokes.js"
import templateEngine from "./util/templateEngine.js";

const app = express();
app.use(express.static("public"));
//Used for api/contact
app.use(express.urlencoded({ extended: true }));


const frontpage = templateEngine.readPage(`frontpage/frontpage.html`);
const frontpagePage = templateEngine.renderPage(frontpage, { tabTitle: "Mandatory | Express",
cssLink: '<link rel="stylesheet" href="/assets/css/frontpage.css">' });

const IRLQuests = templateEngine.readPage(`IRLQuests/IRLQuests.html`);
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, { tabTitle: "Mandatory | IRLQuests" });

const contact = templateEngine.readPage("contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {tabTitle: "Mandatory | Contact"});


// Constructed pages

app.get('/', (req, res) => {
    res.send(frontpagePage);
});

app.get('/IRLQuests', (req, res) => {
    res.send(IRLQuestsPage);

});

app.get('/jokes', async (req, res) => {
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

app.get("/contact", (req, res) => {
res.send(contactPage);
})

//API

app.post("/api/contact", (req, res) => {
    console.log(req.body);
//  res.send(req.body);
    res.redirect("/");
})




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