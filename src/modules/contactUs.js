import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";
const ContactUs = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const [color, setColor] = useState("#ccc");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  console.log(location.pathname);

  const increment = () => {
    setPage((prevState) => page + 1);
  };

  const handleClick = () => {
    axios.get(url).then((res) => setData(res.data));
  };

  let url =
    "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";
  console.log(data);
  return (
    <div className="container">
      <div className="d-flex">
        <div className="mt-5 mb-5 text-center">
          <input
            className="form-control"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn-primary btn" onClick={handleClick}>
            Fetch
          </button>
        </div>
      </div>
      <div>
        <input
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="type to search"
        />
      </div>
      <div className="row">
        {data?.jokes
          ?.filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.category
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return <Card color={color} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ContactUs;
