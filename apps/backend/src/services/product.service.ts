import { prisma } from "../lib/prisma";

export const getAllProductsService = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return products;
};