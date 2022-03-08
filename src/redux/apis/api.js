import axios from "axios";
import queryString from "query-string";
import { url, USER_DETAILS } from "../config";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
});

export const authHeader = {
  headers: {
    "x-access-token": USER_DETAILS.accessToken,
    "Content-Type": "application/json",
  },
};
export const qs = queryString;
