"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_controller_1 = require("../controllers/data.controller");
const router = (0, express_1.Router)();
router.get("/", data_controller_1.getData); // GET HTTP verb
router.post("/", data_controller_1.postData); // POST HTTP verb
exports.default = router;
