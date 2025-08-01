import express from "express";
import { promptController } from "../controllers/prompt-controller.js";

const router = express.Router();

router.post("/api/prompt", promptController);

export default router;
