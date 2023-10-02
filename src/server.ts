import express from "express";
import { setupAuthRoutes } from "./routes/auth";
import { json } from "body-parser";
import { setupUserRoutes } from "./routes/user";
import { setupLocationRoutes } from "./routes/location";
import { setupTypesRoutes } from "./routes/types";
import path from "path";
import { setupFileRoutes } from "./routes/file";
import { setupApartmentRoutes } from "./routes/apartment";
import cors from "cors";
import { setupStringRoutes } from "./routes/string";
import { setupLanguageRoutes } from "./routes/language";
export function startServer(port: number): void {
  const app = express();
  app.use(json());
  app.use(cors());
  setupAuthRoutes(app);
  setupUserRoutes(app);
  setupLocationRoutes(app);
  setupTypesRoutes(app);
  setupFileRoutes(app);
  setupApartmentRoutes(app);
  setupStringRoutes(app);
  setupLanguageRoutes(app);
  //static files
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  app.listen(port, () => {
    console.log(`Application started on port ${port}!`);
  });
}
