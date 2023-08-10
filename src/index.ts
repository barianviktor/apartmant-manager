import { sequelize } from "./config/database";
import { Token } from "./models/token";
import { User } from "./models/user";
import { startServer } from "./server";
import dotenv from "dotenv";
import { createRefreshToken, hashPassword } from "./utils/helpers";
import { Country } from "./models/country";
import { County } from "./models/county";
import { Settlement } from "./models/settlement";
import { Right } from "./models/right";
import { Role } from "./models/role";
import { setupDefaultData } from "./utils/default-data";
import { Language } from "./models/language";
import { String } from "./models/string";
import { PropertyType } from "./models/property-type";
import { Apartment } from "./models/apartment";
import { Room } from "./models/room";
import { RoomType } from "./models/room-type";
import { ApartmentStatus } from "./models/apartment-status";
import { Image } from "./models/image";
dotenv.config();

const setup = async () => {

  await User.hasMany(Image, { foreignKey: "uploader" });
  await Image.belongsTo(User, { foreignKey: "uploader" });

  await User.hasMany(Token, { foreignKey: "userId" });
  await Token.belongsTo(User, { foreignKey: "userId" });

  await PropertyType.hasMany(Apartment, { foreignKey: "type" });
  await Apartment.belongsTo(PropertyType, { foreignKey: "type" });

  await User.hasMany(Apartment, { foreignKey: "creator" });
  await Apartment.belongsTo(User, { foreignKey: "creator" });

  await ApartmentStatus.hasMany(Apartment, { foreignKey: "status" });
  await Apartment.belongsTo(ApartmentStatus, { foreignKey: "status" });

  await Settlement.hasMany(Apartment, { foreignKey: "settlementId" });
  await Apartment.belongsTo(Settlement, { foreignKey: "settlementId" });

  await Apartment.hasMany(Room, { foreignKey: "apartmentId" });
  await Room.belongsTo(Apartment, { foreignKey: "apartmentId" });

  await RoomType.hasMany(Room, { foreignKey: "type" });
  await Room.belongsTo(RoomType, { foreignKey: "type" });

  await Country.hasMany(County, { foreignKey: "countryId" });
  await County.belongsTo(Country, { foreignKey: "countryId" });

  await County.hasMany(Settlement, { foreignKey: "countyId" });
  await Settlement.belongsTo(County, { foreignKey: "countyId" });

  await Right.belongsToMany(Role, { through: "Rights_For_Roles" });
  await Role.belongsToMany(Right, { through: "Rights_For_Roles" });

  await User.belongsToMany(Role, { through: "Users_For_Roles" });
  await Role.belongsToMany(User, { through: "Users_For_Roles" });

  await Language.hasMany(String, { foreignKey: "language", sourceKey: "key" });
  await String.belongsTo(Language, {
    foreignKey: "language",
  });

  await sequelize.sync({ alter: true });
  await setupDefaultData();

  /*  const hashedPassword = await hashPassword("test");
  const [user, exits] = await User.findOrCreate({
    where: {
      username: "john_doe",
      firstName: "john",
      lastName: "doe",
      password: hashedPassword,
    },
  });
  const longToken = await createRefreshToken(
    createResponseUser(user),
    200000000000000
  );

  const token1 = await Token.create({
    tokenValue: "token_value_1",
    token: longToken,
    userId: user.id,
  });
 */
  // Retrieve user with associated tokens
  /* const userWithTokens = await User.findByPk(user.id, {
    include: Token,
  }); */
};
setup();

const port = parseInt(process.env.PORT) || 8080;
startServer(port);
