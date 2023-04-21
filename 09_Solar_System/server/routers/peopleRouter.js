import {Router} from "express"
import db from "../databases/connection.js"
const router = Router();

router.get("/people", async (req, res) => {
    const people = await db.all("SELECT * FROM people;");
    res.send({ data: people });
})

router.post("/people", async (req, res) => {
   if (!req.body.name) {
    return res.status(400).send({ message: "Missing the key (name) in the body" })
    
   }
   const {lastID} = await db.run("INSERT INTO people (name, planet_id) VALUES (?, 3)",[req.body.name]);

    res.send({ 
        id: lastID,
        name: req.body.name
    });
});


export default router