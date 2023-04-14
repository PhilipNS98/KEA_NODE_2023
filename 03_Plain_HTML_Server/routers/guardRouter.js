import { Router } from "express";
const router = Router();

//Server side redirection
router.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
       return res.redirect("/api/tanks");
    } 
        res.send({ message: "You are not allowed to see the tanks. Give us the secret in the query string  with the key being passport" })
    
});


export default router;