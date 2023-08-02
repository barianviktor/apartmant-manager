import dotenv from "dotenv";
import { startServer } from "./server";
import { sequelize } from "./config/database";
import { Token } from "./models/token";
import { User } from "./models/user";
import { Role } from "./models/role";
import { Right } from "./models/right";
import { Apartment } from "./models/apartment";
import { Country } from "./models/country";
import { setupDefaultData } from "./utils/default-data";
import { UsersForRoles } from "./models/user-for-roles";
import { RightsForRoles } from "./models/rights-for-roles";
import { County } from "./models/counties";
import { Sequelize } from "sequelize";
import { Settlement } from "./models/settlement";
dotenv.config();
const port = parseInt(process.env.PORT) || 8080;
const setup = async () => {
  //await sequelize.sync({ alter: true });
  await Token.sync({ alter: true });
  await User.sync({ alter: true });
  await Role.sync({ alter: true });
  await Right.sync({ alter: true });
  await Apartment.sync({ alter: true });
  await Country.sync({ alter: true });
  await UsersForRoles.sync({ alter: true });
  await RightsForRoles.sync({ alter: true });
  await County.sync({ alter: true });
  await Settlement.sync({ alter: true });
  //await sequelize.sync({ alter: true });

  await User.hasOne(Token, {
    foreignKey: "userId",
  });
  await County.hasOne(Settlement, {
    foreignKey: "countyId",
  });
  /* await Country.hasOne(County, {
    foreignKey: "countryId",
  }); */
  await Right.belongsToMany(Role, { through: "Rights_For_Roles" });
  await User.belongsToMany(Role, { through: "Users_For_Roles" });

  await setupDefaultData();
};
/* Right.truncate({ cascade: true });
Role.truncate({ cascade: true });
 */

setup();

startServer(port);
