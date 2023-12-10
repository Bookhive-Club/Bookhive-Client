import { authReducer } from "./slice/auth";
import { combineReducers } from "redux";
import { usersReducer } from "./slice/users.slice";
import { locationReducer } from "./slice/location";
export const rootReducer = combineReducers({
  // auth: authReducer,
  user: usersReducer,
  location: locationReducer,
});
