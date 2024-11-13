import Image from "next/image";
import styles from "../page.module.css";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <Image alt="" src="/next.svg" width={180} height={32} />

          <Form.Control as="textarea" placeholder="Nama Pemenang" />

          <Button>SPIN</Button>
        </div>
      </main>
    </div>
  );
}
