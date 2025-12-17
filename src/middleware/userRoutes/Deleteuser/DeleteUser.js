import { DeleteUserQueries } from "../../../queries/queryDatabaseUser/userDeleteQueries.js";

export const DeleteUser = (req, res, next) => {
  const UserId = req.params.id;

  DeleteUserQueries(res, UserId);
};
