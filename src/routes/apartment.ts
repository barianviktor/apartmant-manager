import express, { Express } from "express";
import { jwtMiddleware } from "../middleware/jwt";
import { createApartment } from "../controllers/apartment";

export const setupApartmentRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/", (req, res) => {
    res.send("test");
  });
  router.post("/", jwtMiddleware, createApartment);

  app.use("/apartment", router);
};
