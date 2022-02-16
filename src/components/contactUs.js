import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../modules/card";
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

  let url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  

  useEffect(() => handleClick(), [page]);

  return (
    <div>
        {page}
        <button onClick={increment}>increse</button>
      {Object.values(data).map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default ContactUs;
