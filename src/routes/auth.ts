import express, { Express } from "express";
import { login, refreshToken, register } from /*   validateUser,
 */ "../controllers/auth";

export const setupAuthRoutes = (app: Express): void => {
  const router = express.Router();
  router.post("/login", login);
  router.post("/register", register);
  router.post("/refresh-token", refreshToken);
  /*   router.get("/validate/:id", validateUser);
   */ app.use("/auth", router);
};
