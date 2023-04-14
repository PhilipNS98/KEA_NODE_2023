import { Router } from "express";
const router = Router();

//GET tanks
router.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
})

export default router;