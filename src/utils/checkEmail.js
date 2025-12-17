import { db } from "../config/database/db.js";

export const checkEmail = (email, next) => {
  const regexEmail = /@/;

  const checkEmail = regexEmail.test(email);

  if (checkEmail) {
    return true;
  } else {
    return false;
  }
};

export const checkValidEmail = async (res, email, next) => {
  const [hasil] = await db.execute("select * from USER");

  const check = Object.values(hasil).map((user) => {
    return user.email;
  });

  const emailCheck = check.find((emailUser) => {
    return emailUser === email;
  });

  if (emailCheck) {
    res.json({ message: "email sudah ada" });
  } else {
    next();
  }
};
