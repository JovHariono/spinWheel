"use client";

import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FormData } from "../type";
import componentSpin from "@/../public/assets/components/spinImg.png";

export default function SpinWheel() {
  const [formData, setFormData] = useState<FormData>({
    jumlahPemenang: "",
    hadiah: "",
  });

  const [image, setImage] = useState("/assets/components/logoParagon.png");

  useEffect(() => {
    switch (formData.hadiah) {
      case "1":
        setImage("/assets/lambo.png");
        break;
      case "2":
        setImage("/assets/avanza.png");
        break;
      case "3":
        setImage("/assets/kerupuk.png");
        break;

      default:
        setImage("/assets/components/logoParagon.png");
        break;
    }
  }, [formData.hadiah]);

  return (
    <div className="divSpinWheel">
      <Header formData={formData} setFormData={setFormData} />
      <main>
        <div className="containerMainComponent">
          <Image
            alt=""
            src={image}
            className="imageHadiah"
            width={300}
            height={50}
            objectFit="contain"
          />

          {parseInt(formData.jumlahPemenang) > 2 ? (
            <Form.Control
              className="textAreaB"
              as="textarea"
              placeholder="Nama Pemenang"
            />
          ) : (
            <Form.Control
              className="textArea"
              as="textarea"
              placeholder="Nama Pemenang"
            />
          )}

          <Button variant="link">
            <Image alt="" src={componentSpin} width={150} />
          </Button>
        </div>
      </main>
    </div>
  );
}
