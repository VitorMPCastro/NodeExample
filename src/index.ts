import express, { Application } from "express";
import dotenv from "dotenv";
import dataRoutes from "./api/routes/data.routes";
import jsonRoutes from "./api/routes/json.routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("src/public"));

// Routes
app.use("/api/data", dataRoutes);
app.use("/api/json", jsonRoutes);

// Server setup
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
