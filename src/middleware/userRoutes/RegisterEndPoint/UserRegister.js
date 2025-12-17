import { UserRegisterQuery } from "../../../queries/queryDatabaseUser/userRegisteQueries.js";
import { checkValidEmail } from "../../../utils/checkEmail.js";

export const UserRegister = (req, res, next) => {
  if (!req.body) {
    return res.status(500).json({ status: 500, message: "no fields send" });
  }

  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(401).json({
      status: 401,
      validasi: false,
      message: "fields harus diisi semua",
    });
  }

  const check = checkValidEmail(res, email, next);

  UserRegisterQuery(res, email, username, password, next);
};
