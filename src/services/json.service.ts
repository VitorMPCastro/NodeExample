import fs from "fs/promises";
import path from "path";

const filePath = path.resolve(__dirname, "../data/people.json"); // Path to people.json

// Helper: Read people.json
export const readPeople = async (): Promise<any[]> => {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

// Helper: Write to people.json
export const writePeople = async (people: any[]): Promise<void> => {
    await fs.writeFile(filePath, JSON.stringify(people, null, 2), "utf-8");
};

// Helper: Find person by ID
export const findPersonById = (people: any[], id: number): number => {
    return people.findIndex((person) => person.id === id);
};

// Helper: Generate new ID
export const generateId = (people: any[]): number => {
    return people.length ? Math.max(...people.map((person) => person.id)) + 1 : 1;
};
