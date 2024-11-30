import { Router } from "express";
import { getData, postData } from "../controllers/data.controller";

const router = Router();

router.get("/", getData); // GET HTTP verb
router.post("/", postData); // POST HTTP verb

export default router;
