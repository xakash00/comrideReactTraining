import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as DictionaryAction from "../redux/action/fetchWord";
import ReactAudioPlayer from "react-audio-player";
const Dictionary = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("welcome");
  const [wordFromClick, setWordFromClick] = useState("welcome");
  const [word, setWord] = useState({
    word: "",
    meaning: "",
    phonetics: "",
    audio: "",
  });
  const handleClick = () => {
    setWordFromClick(search);
  };
  const wordSearch = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordFromClick}`
    );
    console.log(response.data[0]);
    setWord({
      word: response.data[0].word,
      meaning: response.data[0].meanings[0].definitions[0].definition,
      phonetics: response.data[0].phonetic,
      audio: response.data[0].phonetics[0].audio,
    });
  };

  useEffect(() => {
    wordSearch();
  }, [wordFromClick]);
  console.log(word);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control me-3"
              placeholder="type to search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleClick} className="btn btn-primary">
              Search
            </button>
          </div>
          <div className="mt-4">
            <p>
              Word:<span> {word.word}</span>
            </p>
            <p>
              Meaning:<span> {word.meaning}</span>
            </p>
            <p>
              phonetic:<span> {word.phonetics}</span>
            </p>
            <ReactAudioPlayer src={word.audio} autoPlay controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
