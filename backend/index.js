import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

import foodRoute from "./routes/foodRoute.js";
import userRoute from "./routes/userRoute.js";
<<<<<<< HEAD
import cartRoute from "./routes/CartRoute.js";
=======
import cartRoute from "./routes/cartRoute.js";
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
<<<<<<< HEAD
const PORT = 2500;
=======
const PORT = process.env.PORT || 2500;
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067

// middleware
app.use(cors());
app.use(express.json());

// db
connectDB();

// routes
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRouter);

<<<<<<< HEAD
// static images
app.use("/images", express.static("uploads"));

// test route
app.get("/", (req, res) => {
  res.send("FoodHub Backend Running ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
=======
// test route
app.get("/", (req, res) => {
  res.send("FoodHub Backend Running");
});

// ⚡ server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
});