import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./modules/card";
import { cityData } from "./components/cityData";

const App = () => {
  const [state2, setState2] = React.useState("something");
  const alpha = "a";
  return (
    <div className="container-fluid">
      <div className="row">
        {cityData.map((item) => {
          return <Card item={item} state2={state2} alpha={alpha} />;
        })}
      </div>
    </div>
  );
};

export default App;
