"use client";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const openHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  return (
    <>
      <header className="header">
        <FontAwesomeIcon className="iconSettings" icon={faGear} onClick={openHandler} />
      </header>

      <Modal show={visible} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Spin Wheel Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah Pemenang</Form.Label>
              <Form.Control type="number" placeholder="Jumlah Pemenang" min={1}/>
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pilihan Hadiah</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">example 1</option>
                <option value="2">example 2</option>
                <option value="3">example 3</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
