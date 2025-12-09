require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../model/user"); 
const { seedUser } = require("../factory/seedFactory"); 

const uri =
  process.env.NODE_ENV === "test"
    ? process.env.MONGODB_TEST
    : process.env.MONGODB_DEV;

mongoose
  .connect(uri)
  .then(() => console.log("Database connected for seeding"))
  .catch((err) => console.log("DB connection error", err.message));

const seedDB = async () => {
  try {
    await User.deleteMany({}); 
    const users = await seedUser(10); 
    await User.insertMany(users);
    console.log("Users seeded successfully");
  } catch (err) {
    console.log("Error seeding users:", err.message);
  } finally {
    process.exit(0); 
   }
};

seedDB();
