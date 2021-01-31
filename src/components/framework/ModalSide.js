import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modalRight.css";
function ModalSide({ children, show, onModalHide, title }) {
  return (
    <Modal show={show} onHide={() => onModalHide()} dialogClassName="right">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default ModalSide;
