import { Right } from "../../models/right";
import { RightsForRoles } from "../../models/rights-for-roles";
import { Role } from "../../models/role";

export interface IRight {
  rightName: string;
  description: string;
}
export interface IRole {
  roleName: string;
  description: string;
}
export interface IRightsForIRoles {
  rightName: string;
  roleName: string;
}
export const rights: IRight[] = [
  {
    rightName: "canCreateApartment",
    description: "RIGHT_FOR_CAN_CREATE_APARTMENT",
  },
  {
    rightName: "canEditApartment",
    description: "RIGHT_FOR_CAN_EDIT_APARTMENT",
  },
  {
    rightName: "canDeleteApartment",
    description: "RIGHT_FOR_CAN_DELETE_APARTMENT",
  },
];
export const roles: IRole[] = [
  {
    roleName: "MODERATOR",
    description: "ROLE_FOR_APARTMENT_MODERATOR",
  },
];
export const rights_for_roles: IRightsForIRoles[] = [
  {
    rightName: "canDeleteApartment",
    roleName: "MODERATOR",
  },
  {
    rightName: "canCreateApartment",
    roleName: "MODERATOR",
  },
  {
    rightName: "canEditApartment",
    roleName: "MODERATOR",
  },
];

export const setupRolesAndRights = async () => {
  /* Right.truncate({ cascade: true });
    Role.truncate({ cascade: true }); */
  await roles.forEach(async (role: IRole) => {
    const value = await Role.findOrCreate({
      where: {
        roleName: role.roleName,
        description: role.description,
      },
    });
  });

  await rights.forEach(async (right: IRight) => {
    const value = await Right.findOrCreate({
      where: {
        rightName: right.rightName,
        description: right.description,
      },
    });
  });

  await rights_for_roles.forEach(async (rfr: IRightsForIRoles) => {
    const role = await Role.findOne({
      where: {
        roleName: rfr.roleName,
      },
    });
    const right = await Right.findOne({
      where: {
        rightName: rfr.rightName,
      },
    });
    if (right && role) {
      const value = await RightsForRoles.findOrCreate({
        where: {
          RoleId: role.id,
          RightId: right.id,
        },
      });
    }
  });
};
