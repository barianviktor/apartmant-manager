import express, { Express } from "express";
import { getPropertyTypes, getRoomTypes } from "../controllers/types";

export const setupTypesRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/room", getRoomTypes);
  router.get("/property", getPropertyTypes);

  app.use("/type", router);
};
