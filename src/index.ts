import dotenv from "dotenv";
import { startServer } from "./server";
import { sequelize } from "./config/database";
import { Token } from "./models/token";
import { User } from "./models/user";
import { Role } from "./models/role";
import { Right } from "./models/right";
import { setupDefaultData } from "./utils/default-data";

dotenv.config();
const port = parseInt(process.env.PORT) || 8080;
sequelize.sync({ alter: true });
/* Right.truncate({ cascade: true });
Role.truncate({ cascade: true });
 */
User.hasOne(Token, {
  foreignKey: "userId",
});
Right.belongsToMany(Role, { through: "Rights_For_Roles" });
User.belongsToMany(Role, { through: "Users_For_Roles" });

setupDefaultData();

startServer(port);
