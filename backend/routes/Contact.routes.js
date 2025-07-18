import express from "express";
import { handleContactForm } from "../controllers/Contact.controllers.js";

const router = express.Router();

router.post("/", handleContactForm);

export default router;
