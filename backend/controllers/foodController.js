import foodModel from "../models/foodModel.js";
import fs from "fs";

// ADD FOOD
const addFood = async (req, res) => {
<<<<<<< HEAD
  let image_filename = `${req.file.filename}`;
=======
  const image_url = req.file.path;
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
<<<<<<< HEAD
    image: image_filename,
=======
    image: image_url,
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Item Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error in adding food item" });
<<<<<<< HEAD

    // delete uploaded image if error
    fs.unlink(`uploads/${image_filename}`, (err) => {
      if (err) console.log("Error deleting file:", err);
      else console.log("file deleted successfully")
    });
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error in fetching food items" });
  }
};

const removeFood = async (req, res) => {
  try {
    const foodId = req.body.id;

<<<<<<< HEAD
    // check id
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    if (!foodId) {
      return res.status(400).json({
        success: false,
        message: "Food ID is required",
      });
    }

<<<<<<< HEAD
    // find food
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

<<<<<<< HEAD
    // delete 
    if (food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) {
          console.log("Error deleting image file:", err);
        }
      });
    }

    // delete food from DB
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    await foodModel.findByIdAndDelete(foodId);

    res.json({
      success: true,
      message: "Food item removed successfully",
    });
<<<<<<< HEAD
=======

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error removing food item",
    });
  }
};

export { addFood, listFood, removeFood };