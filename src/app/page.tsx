"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import componentNext from "../../public/assets/components/nextImg.png";

export interface Struct {
  id: number;
  nama: string;
}

const Home = () => {
  const [data, setData] = useState<Struct[]>([]);
  const [iter, setIter] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoaded) {
      axios
        // .get(`https://sodfestival.store/api/data1?_sort=id&_order=asc`)
        .get(`http://localhost:3001/data1?_sort=id&_order=asc`)
        .then((res) => {
          setData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      if (data.length > 0) {
        if (100 * (iter + 1) < data.length) {
          setIter((prevIter) => prevIter + 1);
        } else {
          setIter(0);
        }
      }
    }, 5000);
  }, [data, iter]);

  const generateTable = (iter: number) => {
    const rows = [];
    let cellIndex = 100 * iter;

    for (let i = 0; i < 10; i++) {
      const cells = [];
      for (let j = 0; j < 10; j++) {
        const cellData = data[cellIndex] || { id: "", nama: "" };
        cells.push(<td key={j}>{cellData.id ? `${cellData.nama}` : ""}</td>);
        cellIndex++;
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div className="containerTable">
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && (
        <Table bordered>
          <tbody>{generateTable(iter)}</tbody>
        </Table>
      )}

      <Link href="/spin-wheel" className="">
        <Image className="imageNext" alt="" src={componentNext} width={200} />
      </Link>
    </div>
  );
};

export default Home;
