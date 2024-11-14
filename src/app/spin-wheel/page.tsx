"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import { useState } from "react";
import { FormData } from "../type";

export default function SpinWheel() {
  const [formData, setFormData] = useState<FormData>({
    jumlahPemenang: "",
    hadiah: "",
  });

  return (
    <div>
      <Header formData={formData} setFormData={setFormData} />
      <main>
        <div>
          <p>Jumlah Pemenang: {formData.jumlahPemenang}</p>
          <p>Pilihan Hadiah: {formData.hadiah}</p>
        </div>
        <div className={styles.container}>
          <Image alt="" src="/next.svg" width={180} height={32} />

          <Form.Control as="textarea" placeholder="Nama Pemenang" />

          <Button>SPIN</Button>
        </div>
      </main>
    </div>
  );
}
