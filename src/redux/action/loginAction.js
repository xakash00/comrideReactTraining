import { LOGIN, LOGOUT } from "./types";

export const login = (email, password, onSuccess, onError) => {
  return {
    type: LOGIN,
    email,
    password,
    onSuccess,
    onError,
  };
};

export const logout = () => {
    return {
      type: LOGOUT,
    };
  };
  