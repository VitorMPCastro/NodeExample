"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.findPersonById = exports.writePeople = exports.readPeople = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, "../data/people.json");
// Helper: Read people.json
const readPeople = async () => {
    const data = await promises_1.default.readFile(filePath, "utf-8");
    return JSON.parse(data);
};
exports.readPeople = readPeople;
// Helper: Write to people.json
const writePeople = async (people) => {
    await promises_1.default.writeFile(filePath, JSON.stringify(people, null, 2), "utf-8");
};
exports.writePeople = writePeople;
// Helper: Find person by ID
const findPersonById = (people, id) => {
    return people.findIndex((person) => person.id === id);
};
exports.findPersonById = findPersonById;
// Helper: Generate new ID
const generateId = (people) => {
    return people.length ? Math.max(...people.map((person) => person.id)) + 1 : 1;
};
exports.generateId = generateId;
