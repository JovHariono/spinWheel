"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export interface Struct {
  id: number;
  nama: string;
}

export default function ListAll() {
  const [data, setData] = useState<Struct[]>([]);
  const [dataAll, setDataAll] = useState<Struct[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [itemsToShow, setItemsToShow] = useState(15);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 30);
  };

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(`https://sodgroup.online/api/data2?_sort=id&_order=desc`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
      setIsLoaded(true);

      setInterval(() => {
        axios
          .get(`https://sodgroup.online/api/data2?_sort=id&_order=desc`)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, 5000);
    }

    if (!isLoaded) {
      axios
        .get(`https://sodgroup.online/api/data1`)
        .then((res) => {
          setDataAll(res.data);
        })
        .catch((err) => console.log(err));
      setIsLoaded(true);

      setInterval(() => {
        axios
          .get(`https://sodgroup.online/api/data1`)
          .then((res) => setDataAll(res.data))
          .catch((err) => console.log(err));
      }, 5000);
    }
  }, [isLoaded]);

  // console.log(dataAll)

  const handleDeleteAll = (req: "data1" | "data2") => {
    const deleteKataAll = window.confirm("Are you sure want to delete all?");

    if (deleteKataAll) {
      data.forEach((data) => {
        axios
          .delete(`https://sodgroup.online/api/${req}/${data.id}`)
          .catch((err) => console.log(err));
      });
      alert("berhasil delete data");
    }
  };

  const handleDelete = (req: "data1" | "data2", id: number) => {
    const deleteKata = window.confirm("Are you sure want to delete?");

    if (deleteKata) {
      axios
        .delete(`https://sodgroup.online/api/${req}/${id}`)
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = "none";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>All List</h1>
        <div className="row">
          <div className="list-holder">
            <h2>Winners</h2>
            <button onClick={() => handleDeleteAll("data2")}>
              Delete All Data
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "1rem",
              }}
            >
              {data.slice(0, itemsToShow).map((data) => (                
                <div
                  style={{ display: "flex", gap: "1rem" }}
                  className="data-item"
                  key={String(data.id)}
                >                  
                  {data.nama}
                  <button
                    // style={{ float: "right" }}
                    onClick={() => handleDelete("data2", data.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              {itemsToShow < data.length && (
                <button onClick={handleShowMore}>Load More</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>All List</h1>
        <div className="row">
          <div className="list-holder">
            <h2>Participant</h2>
            <button onClick={() => handleDeleteAll("data1")}>
              Delete All Data
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "1rem",
              }}
            > 
              {dataAll.map((data) => (
                <div
                  style={{ display: "flex", gap: "1rem" }}
                  className="data-item"
                  key={String(data.id)}
                >
                  {data.id} - {data.nama}
                  <button
                    // style={{ float: "right" }}
                    onClick={() => handleDelete("data1", data.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
