import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
<<<<<<< HEAD
=======
// cartRouter.post("/get", authMiddleware, getCart);
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
cartRouter.get("/get", authMiddleware, getCart);

export default cartRouter;