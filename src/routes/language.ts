import express, { Express } from "express";
import { getLanguages } from "../controllers/languages";

export const setupLanguageRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/", getLanguages);

  app.use("/languages", router);
};
