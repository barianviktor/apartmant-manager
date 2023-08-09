import express, { Express } from "express";
import {
  getCounties,
  getCountries,
  getSettlements,
} from "../controllers/location";

export const setupLocationRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/countries", getCountries);
  router.get("/counties", getCounties);
  router.get("/settlements", getSettlements);

  app.use("/location", router);
};
