require('dotenv').config();
import mongoose from 'mongoose';
import User from '../model/user.js';
import { seedUser } from '../factory/seedFactory';

const uri =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGODB_TEST
    : process.env.MONGODB_DEV;

const seedDB = async () => {
  // Connect only if not already connected (tests may manage the connection)
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(uri);
  }

  await User.deleteMany({});
  const users = await seedUser(10);
  await User.insertMany(users);
  return users.length;
};
export default seedDB;
