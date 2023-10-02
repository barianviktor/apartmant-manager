import express, { Express } from "express";
import { getStrings } from "../controllers/string";

export const setupStringRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/:locale", getStrings);

  app.use("/strings", router);
};
