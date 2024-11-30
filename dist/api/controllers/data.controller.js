"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = exports.getData = void 0;
const async_service_1 = require("../../services/async.service");
const getData = (req, res) => {
    const exampleCollection = { id: 1, name: "Example Object" };
    res.status(200).json(exampleCollection);
};
exports.getData = getData;
const postData = async (req, res) => {
    const input = req.body.input;
    const result = await (0, async_service_1.processAsyncData)(input);
    res.status(201).json({ result });
};
exports.postData = postData;
