import { authReducer } from "./slice/auth";
import { combineReducers } from 'redux';
import { usersReducer } from "./slice/users.slice";
export const rootReducer = combineReducers ({
  // auth: authReducer,
  user: usersReducer,
});

