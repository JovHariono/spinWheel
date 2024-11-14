"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FormData } from "../type";

export default function SpinWheel() {
  const [formData, setFormData] = useState<FormData>({
    jumlahPemenang: "",
    hadiah: "",
  });

  const [image, setImage] = useState("/next.svg")

  useEffect(() => {
    switch (formData.hadiah) {
      case "1":
        setImage("/assets/lambo.png")
        break;
      case "2":
        setImage("/assets/avanza.png")
        break;
      case "3":
        setImage("/assets/kerupuk.png")
        break;
    
      default:
        setImage("/next.svg")
        break;
    }
  }, [formData.hadiah]);

  return (
    <div>
      <Header formData={formData} setFormData={setFormData} />
      <main>
        <div>
          <p>Jumlah Pemenang: {formData.jumlahPemenang}</p>
          <p>Pilihan Hadiah: {formData.hadiah}</p>
        </div>
        <div className={styles.container}>
          <Image alt="" src={image} width={180} height={32} />

          <Form.Control as="textarea" placeholder="Nama Pemenang" />

          <Button>SPIN</Button>
        </div>
      </main>
    </div>
  );
}
