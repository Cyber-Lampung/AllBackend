import mysql from "mysql2/promise";
import fs from "fs";

export const db = mysql.createPool({
  host: "gateway01.ap-northeast-1.prod.aws.tidbcloud.com",
  user: "2Fpn1n3RZSHNNkL.root",
  password: "qfucFMNJit6og0KA",
  database: "test",
  port: 4000,
  ssl: {
    ca: fs.readFileSync("./src/config/database/ca.pem"),
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
