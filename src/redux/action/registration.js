import { REGISTRATION } from "./types";

export const registration = (name, email, password, onSuccess, onError) => {
  return {
    type: REGISTRATION,
    name,
    email,
    password,
    onSuccess,
    onError,
  };
};
