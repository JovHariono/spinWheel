import Image from "next/image";
import Link from "next/link";
import { Button, Table } from "react-bootstrap";

import componentNext from "../../public/assets/components/nextImg.png"

const Home = () => {
  
  const data = [
    { id: 1, nama: "lalala" },
    { id: 2, nama: "bababa" },
    { id: 3, nama: "jejeje" },
    { id: 4, nama: "wawa" },
    { id: 5, nama: "bebe" },
    { id: 6, nama: "lele" },
    { id: 7, nama: "jiji" },
    { id: 8, nama: "gigi" },
    { id: 9, nama: "haha" },
    { id: 10, nama: "mimi" },
    { id: 11, nama: "waaw" },
    { id: 12, nama: "wooo" },
  ];
  
  const generateTable = () => {
    const rows = [];
    let cellIndex = 0;

    for (let i = 0; i < 10; i++) {
      const cells = [];
      for (let j = 0; j < 10; j++) {
        
        const cellData = data[cellIndex] || { id: "", nama: "" };
        cells.push(
          <td key={j}>
            {cellData.id ? `${cellData.nama}` : "-"}
          </td>
        );
        cellIndex++;
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div className="containerTable">
      <Table bordered>
        <tbody>{generateTable()}</tbody>
      </Table>
      
      <Link href="/spin-wheel" className="" >
      <Image className="imageNext" alt="" src={componentNext} width={200} />
      </Link>
    </div>
  );
};

export default Home;
