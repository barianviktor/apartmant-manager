import express, { Express } from "express";
import { getUsers } from "../controllers/user";

export const setupUserRoutes = (app: Express): void => {
  const router = express.Router();
  router.get("/", getUsers);

  app.use("/user", router);
};
