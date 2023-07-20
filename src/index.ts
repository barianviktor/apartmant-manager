import dotenv from "dotenv";
import { startServer } from "./server";
import { sequelize } from "./config/database";
dotenv.config();
const port = parseInt(process.env.PORT) || 8080;

startServer(port);

sequelize.sync({ alter: true });
