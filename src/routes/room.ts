import express, { Express } from "express";
import { createRooms } from "../controllers/room";
import { jwtMiddleware } from "../middleware/jwt";

export const setupRoomRoutes = (app: Express): void => {
  const router = express.Router();

  router.post("/", jwtMiddleware, createRooms);

  app.use("/rooms", router);
};
