import dotenv from "dotenv";
import { startServer } from "./server";
import { sequelize } from "./config/database";
import { Token } from "./models/token";
import { User } from "./models/user";
dotenv.config();
const port = parseInt(process.env.PORT) || 8080;
sequelize.sync({ alter: true });

User.hasOne(Token, {
  foreignKey: "userId",
});

startServer(port);
