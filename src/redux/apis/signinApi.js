import { api, authHeader, qs } from "./api";

export const loginApi = (params) => {
  return api.post("/api/user/sign-in", JSON.stringify(params), {
    ...authHeader
  });
};

