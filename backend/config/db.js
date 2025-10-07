import mongoose from "mongoose";

const string =
  "mongodb+srv://animeshsamantaray2_db_user:1111@myfood.jhvq86p.mongodb.net/?retryWrites=true&w=majority&appName=myFood";

 async function connectDB() {
  try {
    await mongoose.connect(string);
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
}

export default connectDB;
