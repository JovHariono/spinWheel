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
                <option key={0} value="">
                  Open this select menu
                </option>
                {/* <option key={1} value="Headphone">Headphone</option> */}
                {/* <option key={1} value="Tumbler">
                  Mini Grand Prize - Tumbler
                </option> */}
                <option key={1} value="Galaxy Tab">
                  Galaxy Tab
                </option>
                <option key={2} value="Galaxy A05s">
                  Galaxy A05s
                </option>
                <option key={3} value="Logam Mulia 1gr">
                Logam Mulia 1gr
                </option>
                <option key={4} value="Bank Saqu g">
                  Bank Saqu Rp. 200.000
                </option>
                <option key={5} value="Astra Pay g">
                  Astra Pay Rp. 200.000
                </option>
                <option key={6} value="Bank Saqu k">
                Bank Saqu Rp. 100.000
                </option>
                <option key={7} value="Astra Pay k">
                Astra Pay Rp. 100.000
                </option>              
                {/* <option key={12} value="Air Fryer">Air Fryer</option> */}
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
