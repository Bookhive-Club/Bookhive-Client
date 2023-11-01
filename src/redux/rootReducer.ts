import { authReducer } from "./slice/auth";
import { usersReducer } from "./slice/users.slice";
export const rootReducer = {
  auth: authReducer,
  user: usersReducer
};
