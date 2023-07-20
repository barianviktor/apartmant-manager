import express, { Express } from "express";
import { login, register } from "../controllers/auth";

export const setupAuthRoutes = (app: Express): void => {
  const router = express.Router();
  router.post("/login", login);
  router.post("/register", register);
  app.use("/auth", router);
};
