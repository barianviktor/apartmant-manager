import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Right extends Model {
  public id: number;
  public rightName: string;
  public description: string;
}
Right.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rightName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

/* import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface RightAttributes {
  id: number;
  rightName: string;
  description: string | null;
}

interface RightCreationAttributes extends Optional<RightAttributes, "id"> {}

export const Right = sequelize.define<
  Model<RightAttributes, RightCreationAttributes>
>("Right", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rightName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
  },
});
 */
