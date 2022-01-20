import React from "react";
import "./CardList.css";
import { Button, Modal } from "react-bootstrap";

const CardList = (props) => {
  console.log(props);
  return (
    <Modal show={props.showIt} onHide={props.notShow}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.elm.id}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.notShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardList;
