"use client"

import React, { useEffect, useState } from "react";
import componentSpin from "@/../public/assets/components/spinImg.png";
import axios from "axios";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { FormData } from "../type";

export interface Struct {
  id: number;
  nama: string;
}

export default function SpinWheel() {
  const [formData, setFormData] = useState<FormData>({
    jumlahPemenang: "",
    hadiah: "",
  });

  const [image, setImage] = useState("/assets/components/logoParagon.png");
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const [choosen, setChoosen] = useState<Struct>();
  const [data, setData] = useState<Struct[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [winners, setWinners] = useState<Struct[]>([]);
  const [showWinners, setShowWinners] = useState(false); // Track visibility

  useEffect(() => {
    switch (formData.hadiah) {
      case "Headphone":
        setImage("/assets/doorPrizeKecil/headphone.png");
        break;
      case "Emas Antam 0.5gr":
        setImage("/assets/doorPrizeKecil/emasAntam.png");
        break;
      case "Kompor Listrik":
        setImage("/assets/doorPrizeKecil/komporListrik.png");
        break;
      case "Rice Cooker":
        setImage("/assets/doorPrizeKecil/riceCooker.png");
        break;
      case "Air Fryer - Kecil":
        setImage("/assets/doorPrizeKecil/airFryer.png");
        break;
      case "Tumbler":
        setImage("/assets/doorPrizeKecil/tumbler.png");
        break;
      case "Handphone":
        setImage("/assets/doorPrizeBesar/handphone.png");
        break;
      case "Mesin Cuci":
        setImage("/assets/doorPrizeBesar/mesinCuci.png");
        break;
      case "TV 32inch":
        setImage("/assets/doorPrizeBesar/tv.png");
        break;
      case "Emas Antam 1gr":
        setImage("/assets/doorPrizeBesar/emasAntam1.png");
        break;
      case "Air Cooler":
        setImage("/assets/doorPrizeBesar/airCooler.png");
        break;
      case "Air Fryer":
        setImage("/assets/doorPrizeBesar/airFryer.png");
        break;
      case "Sepeda Lipat":
        setImage("/assets/doorPrizeBesar/sepedaLipat.png");
        break;
      default:
        setImage("/assets/components/logoParagon.png");
        break;
    }

    if (Number(formData.jumlahPemenang) > 0) {
      setShowBtn(true);
    }
  }, [formData]);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(`https://sodfestival.store/api/data1?_sort=id&_order=asc`)
        .then((res) => {
          setData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    setWinners([]);
    setChoosen({ id: 0, nama: "" });
    setShowWinners(false); // Reset visibility
  }, [formData.hadiah]);

  const spin = (count: number) => {
    if (count === 1) {
      setWinners([]);
    }
    if (count <= Number(formData.jumlahPemenang)) {
      setShowBtn(false);
      const bjir = document.getElementById("bjir");
      bjir?.classList.add("lineUp");
      let next = data[Math.floor(Math.random() * data.length)];
      setTimeout(() => {
        setChoosen(next);
        next = data[Math.floor(Math.random() * data.length)];
        setTimeout(() => {
          setChoosen(next);
          next = data[Math.floor(Math.random() * data.length)];
          setTimeout(() => {
            setChoosen(next);
            next = data[Math.floor(Math.random() * data.length)];
            setTimeout(() => {
              setChoosen(next);
              bjir?.classList.remove("lineUp");
              setWinners((oldArray) => [...oldArray, next]);
              axios
                .post(
                  "https://sodfestival.store/api/data2",
                  {
                    nama: `${next.id} - ${next.nama} - ${formData.hadiah}`,
                  },
                  {
                    headers: { "Content-Type": "application/json" },
                  }
                )
                .then(() => {
                  axios.delete(
                    `https://sodfestival.store/api/data1/${next.id}`
                  );
                });
              setTimeout(() => {
                setShowWinners(true); // Show winners smoothly
                spin(count + 1);
              }, 3000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    } else {
      if (!isLoaded) {
        axios
          .get(`https://sodfestival.store/api/data1?_sort=id&_order=asc`)
          .then((res) => {
            setData(res.data);
            setIsLoaded(true);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div className="divSpinWheel">
      <Header formData={formData} setFormData={setFormData} />
      <main>
        <div className="containerMainComponent">
          <Image
            alt=""
            src={image}
            className="imageHadiah"
            width={600}
            height={400}
            objectFit="contain"
          />

          {winners.length !== 0 && (
            <div className={`winners ${showWinners ? "show" : ""}`}>
              <p>Pemenang : </p>
              {winners.map((winner) => (
                <div key={`winner-${winner.id}`}>
                  <p>{winner.nama}</p>
                </div>
              ))}
            </div>
          )}

          <div className="textArea">
            <span id="bjir">{choosen?.nama}</span>
          </div>

          {showBtn && (
            <Button variant="link" onClick={() => spin(1)}>
              <Image alt="" src={componentSpin} width={150} />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
