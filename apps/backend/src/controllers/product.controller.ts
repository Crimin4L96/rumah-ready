import { Request, Response } from "express";
import { getAllProductsService } from "../services/product.service";


export const createProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const body = req.body;

    return res.status(201).json({
      message: "Product created",
      data: body,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAllProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const products =
      await getAllProductsService();

    return res.status(200).json({
      message: "Success",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};