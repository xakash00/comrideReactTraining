import { FETCH_JOKES } from "./types";

export const requestApiData = (onSuccess, onError) => {
  return {
    type: FETCH_JOKES,
    onSuccess,
    onError,
  };
};
