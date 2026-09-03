import orderModel from "../models/orderModel.js";
import { userModel } from "../models/userModel.js";
import dotenv from "dotenv";
import Stripe from "stripe";
<<<<<<< HEAD
=======
import env from "dotenv";
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
<<<<<<< HEAD
  const frontend_url = "http://localhost:5173";

  try {
=======
  try {
    const frontend_url = process.env.FRONTEND_URL;

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
<<<<<<< HEAD
      payment: req.body.payment,
=======
      payment: false,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    });

    await newOrder.save();

<<<<<<< HEAD
=======
    const orderId = newOrder._id.toString(); // ✅ IMPORTANT

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    await userModel.findByIdAndUpdate(req.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
<<<<<<< HEAD
        unit_amount: item.price * 100 * 80,
=======
        unit_amount: item.price * 100,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
<<<<<<< HEAD
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
=======
        product_data: { name: "Delivery Charges" },
        unit_amount: 5 * 100,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
<<<<<<< HEAD
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
=======
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${orderId}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${orderId}`,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
<<<<<<< HEAD
    console.log(error);
    res.json({ success: false, message: "Error placing order" });
  }
};

=======
    console.error("ORDER ERROR:", error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};


>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    console.log(success);

    if (success === "true" || success === true) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error verifying order" });
  }
};

// user orders from frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching orders" });
  }
};

// Listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in list." });
  }
};

// api for updating
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in status update" });
  }
};

<<<<<<< HEAD
export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
=======
export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
