import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword: string) => {
  const hash = await bcrypt.hash(plainPassword, 10);
  return hash;
};
export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};
