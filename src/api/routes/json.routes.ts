import { Router } from "express";
import {
    getAllPeople,
    addPerson,
    updatePerson,
    deletePerson,
} from "../controllers/json.controller";

const router = Router();

router.get("/", getAllPeople); // Retrieve all
router.post("/", addPerson); // Add new
router.put("/:id", updatePerson); // Update by ID
router.delete("/:id", deletePerson); // Delete by ID

export default router;
