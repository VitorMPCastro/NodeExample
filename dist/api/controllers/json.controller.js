"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.addPerson = exports.getAllPeople = void 0;
const json_service_1 = require("../../services/json.service");
// GET: Retrieve all people
const getAllPeople = async (req, res) => {
    try {
        const people = await (0, json_service_1.readPeople)();
        res.status(200).json(people);
    }
    catch (err) {
        res.status(500).json({ message: "Error reading data" });
    }
};
exports.getAllPeople = getAllPeople;
// POST: Add a new person
const addPerson = async (req, res) => {
    const { name, dateOfBirth } = req.body;
    if (!name || !dateOfBirth) {
        res.status(400).json({ message: "Name and Date of Birth are required" });
        return;
    }
    try {
        const people = await (0, json_service_1.readPeople)();
        const newPerson = { id: (0, json_service_1.generateId)(people), name, dateOfBirth };
        people.push(newPerson);
        await (0, json_service_1.writePeople)(people);
        res.status(201).json(newPerson);
    }
    catch (err) {
        res.status(500).json({ message: "Error saving data" });
    }
};
exports.addPerson = addPerson;
// PUT: Update a person by ID
const updatePerson = async (req, res) => {
    const { id } = req.params;
    const { name, dateOfBirth } = req.body;
    try {
        const people = await (0, json_service_1.readPeople)();
        const personIndex = (0, json_service_1.findPersonById)(people, Number(id));
        if (personIndex === -1) {
            res.status(404).json({ message: "Person not found" });
            return;
        }
        people[personIndex] = { ...people[personIndex], name, dateOfBirth };
        await (0, json_service_1.writePeople)(people);
        res.status(200).json(people[personIndex]);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating data" });
    }
};
exports.updatePerson = updatePerson;
// DELETE: Remove a person by ID
const deletePerson = async (req, res) => {
    const { id } = req.params;
    try {
        const people = await (0, json_service_1.readPeople)();
        const personIndex = (0, json_service_1.findPersonById)(people, Number(id));
        if (personIndex === -1) {
            res.status(404).json({ message: "Person not found" });
            return;
        }
        const deletedPerson = people.splice(personIndex, 1)[0];
        await (0, json_service_1.writePeople)(people);
        res.status(200).json(deletedPerson);
    }
    catch (err) {
        res.status(500).json({ message: "Error deleting data" });
    }
};
exports.deletePerson = deletePerson;
