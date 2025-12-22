import { faker } from "@faker-js/faker";
export const userFactory = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
  };
};

export const seedUser = async (count = 5) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push(userFactory());
  }

  return users;
};
