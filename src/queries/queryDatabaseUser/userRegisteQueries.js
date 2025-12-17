import { db } from "../../config/database/db.js";
import { HashPassword } from "../../utils/HashPassword.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const UserRegisterQuery = async (
  res,
  email,
  username,
  password,
  next
) => {
  const hashPassword = HashPassword(password);

  const id = uuidv4();

  // payload session jsonwebtoken

  const payload = { id: id, username: username };
  const secretPrivateKey = "rahasiaUserIniMah";

  // membuat session

  const session = jwt.sign(payload, secretPrivateKey, { algorithm: "none" });

  // user query database

  const [result] = await db.execute(
    "insert into USER (id, email, username, password, session) values (?, ?, ?, ?, ?)",
    [id, email, username, password, session]
  );

  console.log(result);
};
