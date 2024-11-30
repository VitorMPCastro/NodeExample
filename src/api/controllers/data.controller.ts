import { Request, Response } from "express";
import { processAsyncData } from "../../services/async.service";

export const getData = (req: Request, res: Response): void => {
    const exampleCollection = { id: 1, name: "Example Object" };
    res.status(200).json(exampleCollection);
};

export const postData = async (req: Request, res: Response): Promise<void> => {
    const input = req.body.input;
    const result = await processAsyncData(input);
    res.status(201).json({ result });
};
