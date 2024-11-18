"use client";

import componentSpin from "@/../public/assets/components/spinImg.png";
import axios from 'axios';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { FormData } from "../type";

export interface Struct {
  id: Number;
  nama: string;
}

export default function SpinWheel() {
  const [formData, setFormData] = useState<FormData>({
    jumlahPemenang: "",
    hadiah: "",
  });

  const [image, setImage] = useState("/assets/components/logoParagon.png");
  const [showBtn, setShowBtn] = useState<Boolean>(false);

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

    if (Number(formData.jumlahPemenang) > 0) {
      setShowBtn(true);
    }
  }, [formData]);

  const [choosen, setChoosen] = useState<Struct>();
  const [data, setData] = useState<Struct[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [winners, setWinners] = useState<Struct[]>([]);

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

  const spin = (count: number) => {
    if (count === 1) {
      setWinners([]);
    }
    if (count <= Number(formData.jumlahPemenang)) {
      setShowBtn(false);
      var bjir = document.getElementById("bjir");
      bjir?.classList.add("lineUp");
      var next = data[Math.floor(Math.random() * data.length)];
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
              setWinners(oldArray => [...oldArray, next]);
              axios.post(
                "https://sodfestival.store/api/data2",
                {
                  nama: `${next.id} - ${next.nama} - ${formData.hadiah}`
                },
                {
                  headers: { "Content-Type": "application/json" },
                }
              ).then(() => {
                axios.delete(`https://sodfestival.store/api/data1/${next.id}`)
              });
              setTimeout(() => {
                spin(count + 1);
              }, 3000)
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
            width={300}
            height={50}
            objectFit="contain"
          />

          <div className="winners">
            {winners.map(winner => (
              <div key={`winner-${winner.id}`}>
                <span>{winner.nama}</span>
                <br />
              </div>
            ))}
          </div>

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
