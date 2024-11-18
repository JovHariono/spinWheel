"use client";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FormData } from "../type";

interface HeaderProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  formData,
  setFormData,
}) => {
  const [visible, setVisible] = useState(false);

  const openHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const handleSubmit = () => {
    setVisible(false);
  };

  return (
    <>
      <header className="header">
        <FontAwesomeIcon
          className="iconSettings"
          icon={faGear}
          onClick={openHandler}
        />
      </header>

      <Modal show={visible} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Spin Wheel Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah Pemenang</Form.Label>
              <Form.Control
                type="number"
                placeholder="Jumlah Pemenang"
                min={1}
                value={formData.jumlahPemenang}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    jumlahPemenang: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pilihan Hadiah</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={formData.hadiah}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, hadiah: e.target.value }))
                }
              >
                <option key={0} value="">Open this select menu</option>
                <option key={1} value="1">example 1</option>
                <option key={2} value="2">example 2</option>
                <option key={3} value="3">example 3</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button variant="danger" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
