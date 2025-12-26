import { faker } from "@faker-js/faker";

export const productFactory = (sellerId) => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price({ min: 5, max: 200 })),
    condition: faker.helpers.arrayElement([
      "new",
      "like new",
      "good",
      "fair",
    ]),
    category: faker.commerce.department(),
    size: faker.helpers.arrayElement(["XS", "S", "M", "L", "XL"]),
    brand: faker.company.name(),
    images: [faker.image.url()],
    seller: sellerId,
  };
};
