import { Request, Response } from "express";
import {
    readPeople,
    writePeople,
    findPersonById,
    generateId,
} from "../../services/json.service";

// GET: Retrieve all people
export const getAllPeople = async (req: Request, res: Response): Promise<void> => {
    // try to pull in all the people in the json file
    try {
        const people = await readPeople();
        res.status(200).json(people);
    } catch (err) {
        res.status(500).json({ message: "Error reading data" });
    }
};

// POST: Add a new person
export const addPerson = async (req: Request, res: Response): Promise<void> => {
    const { name, dateOfBirth } = req.body;

    if (!name || !dateOfBirth) {
        res.status(400).json({ message: "Name and Date of Birth are required" });
        return;
    }

    try {
        const people = await readPeople();
        const newPerson = { id: generateId(people), name, dateOfBirth };
        people.push(newPerson);
        await writePeople(people);

        res.status(201).json(newPerson);
    } catch (err) {
        res.status(500).json({ message: "Error saving data" });
    }
};

// PUT: Update a person by ID
export const updatePerson = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, dateOfBirth } = req.body;

    try {
        const people = await readPeople();
        const personIndex = findPersonById(people, Number(id));

        if (personIndex === -1) {
            res.status(404).json({ message: "Person not found" });
            return;
        }

        people[personIndex] = { ...people[personIndex], name, dateOfBirth };
        await writePeople(people);

        res.status(200).json(people[personIndex]);
    } catch (err) {
        res.status(500).json({ message: "Error updating data" });
    }
};

// DELETE: Remove a person by ID
export const deletePerson = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const people = await readPeople();
        const personIndex = findPersonById(people, Number(id));

        if (personIndex === -1) {
            res.status(404).json({ message: "Person not found" });
            return;
        }

        const deletedPerson = people.splice(personIndex, 1)[0];
        await writePeople(people);

        res.status(200).json(deletedPerson);
    } catch (err) {
        res.status(500).json({ message: "Error deleting data" });
    }
};
