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
                {/* <option key={1} value="Headphone">Headphone</option> */}
                <option key={1} value="Tumbler">Tumbler</option>
                <option key={2} value="Rice Cooker">Rice Cooker</option>
                <option key={3} value="Kompor Listrik">Kompor Listrik</option>
                <option key={4} value="Emas Antam 0.5gr">Emas Antam 0.5gr</option>
                <option key={5} value="Air Fryer">Air Fryer</option>

                <option key={6} value="Air Cooler">Air Cooler</option>
                <option key={7} value="Emas Antam 1gr">Emas Antam 1gr</option>
                <option key={8} value="Sepeda Lipat">Sepeda Lipat</option>
                <option key={9} value="TV 32inch">TV 32inch</option>
                <option key={10} value="Mesin Cuci">Mesin Cuci</option>
                <option key={111} value="Handphone">Handphone</option>
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
