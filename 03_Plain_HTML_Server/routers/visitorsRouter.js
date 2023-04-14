import { Router } from "express";
const router = Router();
let visitorCount = 0;

//GET visitor count
router.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
})

//PUT increment visitor count
router.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
})


export default router;