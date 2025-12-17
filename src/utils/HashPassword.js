import bcrypt from "bcrypt";

export const HashPassword = (password) => {
  const saltPassword = 10;

  const hash = bcrypt.hashSync(password, saltPassword);

  return hash;
};
