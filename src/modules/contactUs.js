import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "./card";
import * as jokeAction from "../redux/action/jokesAction";
const ContactUs = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const [color, setColor] = useState("#000");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const increment = () => {
    setPage((prevState) => page + 1);
  };

  useEffect(() => {
    dispatch(jokeAction.requestApiData(onSuccess, onError));
  }, []);

  const onSuccess = (data) => {
    console.log(data);
    setData(data)
  };
  const onError = (data) => {
    console.log(data);
  };
  let url =
    "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=20";
  console.log(data);
  return (
    <div className="container">
      <div className="d-flex">
        <div className="mt-5 mb-5 text-center"></div>
      </div>
      <div className="d-flex">
        <input
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search"
        />
        <input
          className="form-control"
          type="text"
          value={color}
          placeholder="Type to change color"
          onChange={(e) => setColor(e.target.value)}
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
          .map((item, index) => {
            return <Card key={index} index={index} color={color} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ContactUs;
