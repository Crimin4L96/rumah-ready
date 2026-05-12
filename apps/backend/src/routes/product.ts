import express from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

// create product
router.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;

    const product =
      await prisma.product.create({
        data: {
          name,
          price,
        },
      });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

// get all product
router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

export default router;