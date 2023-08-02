import express, { Express } from "express";
import { tests } from "../controllers/location";

export const setupLocationRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/", tests);
  app.use("/location", router);
};
