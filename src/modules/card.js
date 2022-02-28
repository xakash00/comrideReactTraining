import axios from "axios";
import React, { useState, useEffect } from "react";
import CardImg from "../assets/logo512.png";
const Card = ({item}) => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((prevState) => state + 1);
  };
  const dec = () => {
    setState((prevState) => state - 1);
  };
console.log(item,"from card")
  const login = true;
  return (
    <div className="col">
      <div className="card">
        {/* <img src={item?.thumbnailUrl} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 style={{ color: "red" }} className="card-title">
           {item?.joke}
          </h5>
          <br />
          <hr />
          <img />
          <p className="card-text">{state}</p>
          <button onClick={increment}>inc</button>
          <button onClick={dec}>dec</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
