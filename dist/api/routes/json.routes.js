"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const json_controller_1 = require("../controllers/json.controller");
const router = (0, express_1.Router)();
router.get("/", json_controller_1.getAllPeople); // Retrieve all
router.post("/", json_controller_1.addPerson); // Add new
router.put("/:id", json_controller_1.updatePerson); // Update by ID
router.delete("/:id", json_controller_1.deletePerson); // Delete by ID
exports.default = router;
