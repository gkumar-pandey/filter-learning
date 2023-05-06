import { faker } from "@faker-js/faker";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.image(),
            inStock: faker.datatype.boolean(),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
          }))
        });
      } else {
        reject({
          status: 404,
          message: "Food list not found."
        });
      }
    }, 2000);
  });
};
