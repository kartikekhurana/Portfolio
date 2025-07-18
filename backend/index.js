import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ContactRoutes from "./routes/Contact.routes.js";

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/v1/contact", ContactRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is working on port : ${process.env.PORT}`);
});
