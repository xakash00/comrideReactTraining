import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as DictionaryAction from "../redux/action/fetchWord";
const Dictionary = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState({
    word: "",
    meaning: "",
  });

  useEffect(() => {
    dispatch(DictionaryAction.requestDictionaryData(onSuccess, onError));
  }, []);

  const onSuccess = (data) => {
    console.log(data[0].meanings);
    setWord({meaning:data[0].meanings})
  };
  const onError = (data) => {
    console.log(data);
  };

  return (
    <div>
      {Object.values(word.meaning).map((item) => {
          return(
              <li>{item.definitions[0].definition}</li>
          )
      })}
    </div>
  );
};

export default Dictionary;
