import axios from "axios";
import React, { useState, useEffect } from "react";
import CardImg from "../assets/logo512.png";
const Card = ({ item, color }) => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((prevState) => state + 1);
  };
  const dec = () => {
    setState((prevState) => state - 1);
  };
  const login = true;
  return (
    <div className="col">
      <div className="card mt-4">
        <div className="card-body">
          <h5 style={{ color: `${color}` }} className="card-title lead">
            {item?.joke}
          </h5>
          <br />
          <hr />
          {item.category}
          <img />
        </div>
      </div>
    </div>
  );
};

export default Card;
