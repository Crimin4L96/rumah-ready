import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
// import productRoutes from "./routes/product";

import productRoute from "./routes/product.route";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://rumah-ready-frontend.vercel.app"
  ]
}));

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "API running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api", productRoute);
// app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});