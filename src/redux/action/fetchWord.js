import { FETCH_WORD } from "./types";

export const requestDictionaryData = (onSuccess, onError) => {
  return {
    type: FETCH_WORD,
    onSuccess,
    onError,
  };
};
