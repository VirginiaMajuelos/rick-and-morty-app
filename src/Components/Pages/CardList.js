import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ApiServices from "../../services/api.services";
import CardDetails from "../Pages/CardDetails";
import "./CardList.css";

const CardList = () => {
  const apiServices = new ApiServices();
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rickmorty = () => {
    apiServices
      .getAllCharacter()
      .then((character) => {
        setInfo(character.data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    rickmorty();
  }, []);

  return (
    <div className="box">
      {info?.map((elm) => (
        <div className="card-item" key={elm.id}>
          <img
            style={{ borderRadius: 50, width: 80 }}
            src={elm.image}
            alt=""
          ></img>
          <h3>{elm.name}</h3>
          <h5>{elm.status}</h5>
          <h5>{elm.species}</h5>
          {/* <CardDetails props={{ ...elm }} /> */}
          <div>
            {/* <Button variant="outline-secondary" onClick={handleShow}>
              Click Here!
            </Button> */}
            {/* <CardDetails
              showIt={handleShow}
              notShow={handleClose}
              elm={{ ...elm }}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
