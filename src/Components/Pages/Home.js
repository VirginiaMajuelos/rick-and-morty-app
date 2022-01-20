import React, { useState } from "react";
import CardList from "./CardList";
import rick from "../UI/assets/rick.png";
import "./Home.css";
// import Button from "../UI/Button";
// import Card from "../UI/Card";

const Home = () => {
  const [list, setList] = useState(false);

  const showList = () => {
    setList(!list);
  };

  return (
    <div className="container-home">
      <h1 className="titles">API PROJECT:</h1>
      <h2 className="titles-h2">Rick and Morty</h2>
      <img className="img-rick" src={rick} alt="logo"></img>

      {list ? (
        <div>
          <button className="button-home" onClick={showList}>
            CLOSE!
          </button>
          <CardList />
        </div>
      ) : (
        <div>
          <button className="button-home" onClick={showList}>
            CLICK HERE!
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
