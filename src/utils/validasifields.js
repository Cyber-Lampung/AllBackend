import { checkEmail } from "./checkEmail.js";

export const validasiFields = (res, email, username, password, next) => {
  const emailCheck = checkEmail(email, next);

  if (!email || !username || !password) {
    return res.send({
      status: 401,
      valid: false,
      next: false,
      checkEmail: emailCheck,
      message: "invalid inputan",
    });
  } else {
    res.send({
      status: 200,
      valid: true,
      next: true,
      checkEmail: emailCheck,
      message: "succes created account",
    });
    next();
  }
};
