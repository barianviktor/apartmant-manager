import express from "express";
import { setupAuthRoutes } from "./routes/auth";
import { json } from "body-parser";
import { setupUserRoutes } from "./routes/user";
import { setupLocationRoutes } from "./routes/location";

export function startServer(port: number): void {
  const app = express();
  app.use(json());
  setupAuthRoutes(app);
  setupUserRoutes(app);
  setupLocationRoutes(app);
  app.listen(port, () => {
    console.log(`Application started on port ${port}!`);
  });
}
