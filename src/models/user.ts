import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseUser } from "src/interfaces/responses";
import { UsersForRoles } from "./user-for-roles";
import { Role } from "./role";

export class User extends Model {
  public id: number;
  public username!: string;
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public validated!: boolean;
  public getResponseData = async (): Promise<ResponseUser> => {
    const usersForRolesDB = await UsersForRoles.findAll({
      where: {
        UserId:this.id
      }
    })
    const roles:string[]=[] 

    for (let i = 0; i < usersForRolesDB.length; i++) {
      const role = await Role.findOne({
        where: {
          id: usersForRolesDB[i].RoleId
        }
      })
      if(!roles.includes(role.roleName)){
        roles.push(role.roleName)
      }
    }

    return {
      id: this.id,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      roles:  roles
    };
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);
