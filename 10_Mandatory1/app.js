import express from "express";
import getJoke from "./util/jokes.js"
import templateEngine from "./util/templateEngine.js";
import session from "express-session";
const app = express();
app.use(express.static("public"));
//Used for api/contact
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true
}));

const homePage = templateEngine.readPage(`home/home.html`);
const homepagePage = templateEngine.renderPage(homePage, {
    tabTitle: "Mandatory | Home",
    cssLink: '<link rel="stylesheet" href="/assets/css/home.css">'
});

const expresspage = templateEngine.readPage(`express/express.html`);
const expresspagePage = templateEngine.renderPage(expresspage, {
    tabTitle: "Mandatory | Express",
    cssLink: '<link rel="stylesheet" href="/assets/css/express.css">'
});

const restapi = templateEngine.readPage(`restapi/restapi.html`);
const restapiPage = templateEngine.renderPage(restapi, {
    tabTitle: "Mandatory | Rest API",
    cssLink: '<link rel="stylesheet" href="/assets/css/express.css">'
});

const javascript = templateEngine.readPage(`javascript/javascript.html`);
const javascriptPage = templateEngine.renderPage(javascript, {
    tabTitle: "Mandatory | JavaScript",
    cssLink: '<link rel="stylesheet" href="/assets/css/express.css">'
});

const terminal = templateEngine.readPage(`terminal/terminal.html`);
const terminalPage = templateEngine.renderPage(terminal, {
    tabTitle: "Mandatory | Terminal Commands",
    cssLink: '<link rel="stylesheet" href="/assets/css/express.css">'
});

const IRLQuests = templateEngine.readPage(`IRLQuests/IRLQuests.html`);
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, { tabTitle: "Mandatory | IRLQuests" });

const contact = templateEngine.readPage("contact/contact.html");
const contactPage = templateEngine.renderPage(contact, { tabTitle: "Mandatory | Contact" });

const login = templateEngine.readPage("login/login.html");
const loginPage = templateEngine.renderPage(login, {
    tabTitle: "Mandatory | Login",
    cssLink: '<link rel="stylesheet" href="/assets/css/login.css">'
});

const adminPanel = templateEngine.readPage("adminPanel/adminPanel.html");
const adminPanelPage = templateEngine.renderPage(adminPanel, { tabTitle: "Mandatory | Admin Panel" });

// Constructed pages

app.get('/', (req, res) => {
    res.send(homepagePage);
});

app.get('/express', (req, res) => {
    res.send(expresspagePage);
});

app.get('/restApi', (req, res) => {
    res.send(restapiPage);
});

app.get('/javascript', (req, res) => {
    res.send(javascriptPage);
});

app.get('/terminal', (req, res) => {
    res.send(terminalPage);
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


app.get('/login', (req, res) => {
    res.send(loginPage);
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/adminPanel', (req, res) => {
    console.log(req.session)
    res.send(adminPanelPage);
});



//API

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    //  res.send(req.body);
    res.redirect("/");
})

import users from "./util/login.js";

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => username === user.username);

    if (user && user.password === password) {
        req.session.user = username;

        res.redirect('/adminPanel');
    } else {
        res.send("Failed login");
    }
});

app.get('/api/isLoggedIn', (req, res) => {
    const username = req.session.user;
    res.send({ isLoggedIn: Boolean(username) });
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