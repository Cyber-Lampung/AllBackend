import express from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./src/config/database/db.js";
import { UserRegister } from "./src/middleware/userRoutes/RegisterEndPoint/UserRegister.js";
import { DeleteUser } from "./src/middleware/userRoutes/Deleteuser/DeleteUser.js";

// create app req and res

const app = express();
app.use(express.json());
app.use(
  helmet({
    hsts: true,
    contentSecurityPolicy: false,
    xPoweredBy: false,
  })
);
app.use(cors());

// testing db production
(async () => {
  try {
    await db.query("select 1");
    console.log("database connect");
  } catch (err) {
    console.log("database error", err.message);
    process.exit(1);
  }
})();

// home index

app.get("/", (req, res) => {
  res.json({ message: "succes create server", status: "okee" });
});

// route for check user

app.get("/api/user", helmet(), cors(), async (req, res) => {
  const [row, fields] = await db.execute("select * from USER");

  res.json({ data: row });
});

// get data untuk endpoint Register
app.get("/api/user/Register", UserRegister);

// delete data untuk endpoint delete

app.delete("/api/user/delete/:id", DeleteUser);

// app.listen(3000);
