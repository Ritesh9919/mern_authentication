import dotenv from "dotenv";
dotenv.config();
import express from "express";
const PORT = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
