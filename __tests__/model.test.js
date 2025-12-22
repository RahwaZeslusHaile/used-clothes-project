import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../model/user.js";
import { userFactory, seedUser } from "../factory/seedFactory.js";

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});

test("can save a user to the database", async () => {
  const user = new User({
    firstName: "Rahwa",
    lastName: "Test",
    email: "rahwa@test.com",
  });

  const savedUser = await user.save();

  expect(savedUser._id).toBeDefined();
  expect(savedUser.firstName).toBe("Rahwa");

});

describe("seedFactory functions", () => {
  test("userFactory returns a user object with required fields", () => {
    const user = userFactory();
    expect(user).toHaveProperty("firstName");
    expect(user).toHaveProperty("lastName");
    expect(user).toHaveProperty("email");
    expect(typeof user.firstName).toBe("string");
    expect(typeof user.lastName).toBe("string");
    expect(typeof user.email).toBe("string");
  });

  test("seedUser generates correct number of users", async () => {
    const users = await seedUser(10);
    expect(users.length).toBe(10);
    users.forEach((user) => {
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("email");
    });
  });
});
