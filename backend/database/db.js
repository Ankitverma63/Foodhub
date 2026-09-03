import mongoose from "mongoose";

export const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
=======
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI not found in environment variables");
    }

    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
  }
};