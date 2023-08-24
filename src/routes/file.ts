import express, { Express } from "express";
import { upload, handleUploadImage } from "../controllers/file";
import { jwtMiddleware } from "../middleware/jwt";

export const setupFileRoutes = (app: Express): void => {
  const router = express.Router();

  router.post(
    "/image",
    jwtMiddleware,
    upload.single("file"),
    handleUploadImage
  );

  app.use("/uploads", router);
};
