import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createProductController } from "../controllers/product.controller";
import { getAllProductsController } from "../controllers/product.controller";

const router = Router();

router.post(
  "/products",
  authMiddleware,
  createProductController
);

router.get(
  "/products",
  authMiddleware,
  getAllProductsController
);

export default router;