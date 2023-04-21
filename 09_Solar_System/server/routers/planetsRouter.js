import {Router} from "express"
const router = Router();
import db from "../databases/connection.js"

router.get("/planets", async (req, res) => {
    const planets = await db.all("SELECT * FROM planets;");    
    console.log(planets)
    res.send({ data: planets });
});


// task Create a new router called people where tyou can add new people 
// task and add a row in the people table that points to the id of the planets (FOREIGN KEY)

router.post("/planets")

export default router