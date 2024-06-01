import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.vljpmj4.mongodb.net/`;

const Connection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("db connect");
  } catch (error) {
    console.log("Getting error :", error);
  }
};

export default Connection;
