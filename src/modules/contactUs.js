import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";
const ContactUs = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const location = useLocation();
  console.log(location.pathname);

  const increment = () => {
    setPage((prevState) => page + 1);
  };

  const handleClick = () => {
    axios.get(url).then((res) => setData(res.data));
  };

  let url = "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"

  

  useEffect(() => handleClick(), [page]);

  return (
    <div>
        {page}
        <button onClick={increment}>increse</button>
      {Object.values(data?.jokes).map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default ContactUs;
