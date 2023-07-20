import express from "express";
import { setupAuthRoutes } from "./routes/auth";
import { json } from "body-parser";

export function startServer(port: number): void {
  const app = express();
  app.use(json());
  setupAuthRoutes(app);
  app.listen(port, () => {
    console.log(`Application started on port ${port}!`);
  });
}
