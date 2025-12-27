
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../model/user.js";
import { seedUser } from "../factory/seedFactory.js";

const seedUsers = async (count = 10) => {
 
  await User.deleteMany({});

  const users = await seedUser(count);

  await User.insertMany(users);

 
  return users.length;
};

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongo) await mongo.stop();
});

test("seeds 10 users into the test database", async () => {
  const count = await seedUsers(10);
  const usersInDb = await User.find({});

  expect(count).toBe(10);
  expect(usersInDb.length).toBe(10);
});

test("each seeded user has required fields", async () => {
  const usersInDb = await User.find({});
  usersInDb.forEach(user => {
    expect(user.firstName).toBeDefined();
    expect(user.lastName).toBeDefined();
    expect(user.email).toBeDefined();
  });
});
