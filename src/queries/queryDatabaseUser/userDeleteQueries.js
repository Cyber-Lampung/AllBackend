import { db } from "../../config/database/db.js";

export const DeleteUserQueries = async (res, id) => {
  const [rows] = await db.execute("delete from USER where id = ?", [id]);

  if (rows.affectedRows > 0) {
    res.status(200).json({ message: "berhasil delete user" });
  } else {
    res.status(404).json({ message: "user tidak ditemukan" });
  }
};
