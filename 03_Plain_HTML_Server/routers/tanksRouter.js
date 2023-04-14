import { Router } from "express";
const router = Router();

const tanks = [
    { name: "Leopard", nationality: "Germany" },
    { name: "Tiger", nationality: "Germany", year: "1943" },
    { name: "M1 Abrams", version: "M1" }
];

//GET tanks
router.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
})

export default router;