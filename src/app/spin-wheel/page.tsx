"use client"

import React, { useEffect, useRef, useState } from "react";
import componentSpin from "@/../public/assets/components/spinImg.png";
// import congratz from "@/../public/assets/congratz.png";
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
  const [choosen2, setChoosen2] = useState<Struct>();
  const [data, setData] = useState<Struct[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [winners, setWinners] = useState<Struct[]>([]);
  const [showCongratz, setShowCongratz] = useState<boolean>(false);
  const [showWinners, setShowWinners] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef?.current) {
      audioRef?.current.play();
    }
  };

  useEffect(() => {
    switch (formData.hadiah) {
      // case "Headphone":
      //   setImage("/assets/doorPrizeKecil/headphone.png");
      //   break;
      case "Emas Antam 0.5gr":
        setImage("/assets/doorPrizeKecil/emasAntam.png");
        break;
      case "Kompor Listrik":
        setImage("/assets/doorPrizeKecil/komporListrik.png");
        break;
      case "Rice Cooker":
        setImage("/assets/doorPrizeKecil/riceCooker.png");
        break;
      // case "Air Fryer - Kecil":
      //   setImage("/assets/doorPrizeKecil/airFryer.png");
      //   break;
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

    setShowWinners(false);
    setShowCongratz(false);
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
    setShowWinners(false);
  }, [formData.hadiah]);

  const randomNext = () => data[Math.floor(Math.random() * data.length)];

  const spin = (count: number) => {
    if (count === 1) {
      setWinners([]);
    }
    if (count <= Number(formData.jumlahPemenang)) {
      setChoosen({ id: 0, nama: "" });
      setShowCongratz(false);
      playAudio();
      setShowBtn(false);
      let next = randomNext();
      setTimeout(() => {
        let bjir = document.getElementById("bjir");
        bjir?.classList.add("lineUp");
        setChoosen(next);
        next = randomNext();
        setTimeout(() => {
          setChoosen(next);
          next = randomNext();
          setTimeout(() => {
            setChoosen(next);
            next = randomNext();
            setTimeout(() => {
              setChoosen(next);
              next = randomNext();
              setTimeout(() => {
                setChoosen(next);
                next = randomNext();
                setTimeout(() => {
                  setChoosen(next);
                  next = randomNext();
                  setTimeout(() => {
                    setChoosen(next);
                    next = randomNext();
                    setTimeout(() => {
                      setChoosen(next);
                      next = randomNext();
                      setTimeout(() => {
                        setChoosen(next);
                        next = randomNext();
                        setTimeout(() => {
                          setChoosen(next);
                          next = randomNext();
                          setTimeout(() => {
                            setChoosen(next);
                            next = randomNext();
                            setTimeout(() => {
                              setChoosen(next);
                              next = randomNext();
                              setTimeout(() => {
                                setChoosen(next);
                                next = randomNext();
                                setTimeout(() => {
                                  setChoosen(next);
                                  next = randomNext();
                                  setTimeout(() => {
                                    setChoosen(next);
                                    next = randomNext();
                                    setTimeout(() => {
                                      setChoosen(next);
                                      next = randomNext();
                                      setTimeout(() => {
                                        setChoosen(next);
                                        next = randomNext();
                                        setTimeout(() => {
                                          setChoosen(next);
                                          next = randomNext();
                                          setTimeout(() => {
                                            setChoosen(next);
                                            next = randomNext();
                                            setTimeout(() => {
                                              setChoosen(next);
                                              next = randomNext();
                                              setTimeout(() => {
                                                setChoosen(next);
                                                next = randomNext();
                                                setTimeout(() => {
                                                  setChoosen(next);
                                                  next = randomNext();
                                                  setTimeout(() => {
                                                    setChoosen(next);
                                                    next = randomNext();
                                                    setTimeout(() => {
                                                      setChoosen(next);
                                                      next = randomNext();
                                                      setTimeout(() => {
                                                        setChoosen(next);
                                                        next = randomNext();
                                                        setTimeout(() => {
                                                          setChoosen(next);
                                                          next = randomNext();
                                                          setTimeout(() => {
                                                            setChoosen(next);
                                                            next = randomNext();
                                                            setTimeout(() => {
                                                              setChoosen(next);
                                                              next = randomNext();
                                                              setTimeout(() => {
                                                                setChoosen(next);
                                                                next = randomNext();
                                                                setTimeout(() => {
                                                                  setChoosen(next);
                                                                  next = randomNext();
                                                                  setTimeout(() => {
                                                                    setChoosen(next);
                                                                    next = randomNext();
                                                                    setTimeout(() => {
                                                                      setChoosen(next);
                                                                      next = randomNext();
                                                                      setTimeout(() => {
                                                                        setChoosen(next);
                                                                        next = randomNext();
                                                                        setTimeout(() => {
                                                                          setChoosen(next);
                                                                          next = randomNext();
                                                                          setTimeout(() => {
                                                                            setChoosen(next);
                                                                            next = randomNext();
                                                                            setTimeout(() => {
                                                                              setChoosen(next);
                                                                              next = randomNext();
                                                                              setTimeout(() => {
                                                                                setChoosen(next);
                                                                                next = randomNext();
                                                                                setTimeout(() => {
                                                                                  setChoosen(next);
                                                                                  next = randomNext();
                                                                                  setTimeout(() => {
                                                                                    setChoosen(next);
                                                                                    next = randomNext();
                                                                                    setTimeout(() => {
                                                                                      setChoosen(next);
                                                                                      next = randomNext();
                                                                                      setTimeout(() => {
                                                                                        setChoosen(next);
                                                                                        next = randomNext();
                                                                                        setTimeout(() => {
                                                                                          setChoosen(next);
                                                                                          next = randomNext();
                                                                                          setTimeout(() => {
                                                                                            setChoosen(next);
                                                                                            next = randomNext();
                                                                                            setTimeout(() => {
                                                                                              setChoosen(next);
                                                                                              setTimeout(() => {
                                                                                                bjir = document.getElementById("bjir");
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
                                                                                                    // axios.delete(
                                                                                                    //   `https://sodfestival.store/api/data1/${next.id}`
                                                                                                    // );
                                                                                                  });
                                                                                              }, 1000);
                                                                                              setTimeout(() => {
                                                                                                setShowBtn(true);
                                                                                                setShowWinners(true);
                                                                                                setShowCongratz(true);
                                                                                                spin(count + 1);
                                                                                              }, 2500);
                                                                                            }, 250);
                                                                                          }, 250);
                                                                                        }, 250);
                                                                                      }, 250);
                                                                                    }, 250);
                                                                                  }, 250);
                                                                                }, 250);
                                                                              }, 250);
                                                                            }, 250);
                                                                          }, 250);
                                                                        }, 250);
                                                                      }, 250);
                                                                    }, 250);
                                                                  }, 250);
                                                                }, 250);
                                                              }, 250);
                                                            }, 250);
                                                          }, 250);
                                                        }, 250);
                                                      }, 250);
                                                    }, 250);
                                                  }, 250);
                                                }, 250);
                                              }, 250);
                                            }, 250);
                                          }, 250);
                                        }, 250);
                                      }, 250);
                                    }, 250);
                                  }, 250);
                                }, 250);
                              }, 250);
                            }, 250);
                          }, 250);
                        }, 250);
                      }, 250);
                    }, 250);
                  }, 250);
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);

      setTimeout(() => {
        let bjir2 = document.getElementById("bjir2");
        bjir2?.classList.add("lineUp");
        setChoosen2(next);
        next = randomNext();
        setTimeout(() => {
          setChoosen2(next);
          next = randomNext();
          setTimeout(() => {
            setChoosen2(next);
            next = randomNext();
            setTimeout(() => {
              setChoosen2(next);
              next = randomNext();
              setTimeout(() => {
                setChoosen2(next);
                next = randomNext();
                setTimeout(() => {
                  setChoosen2(next);
                  next = randomNext();
                  setTimeout(() => {
                    setChoosen2(next);
                    next = randomNext();
                    setTimeout(() => {
                      setChoosen2(next);
                      next = randomNext();
                      setTimeout(() => {
                        setChoosen2(next);
                        next = randomNext();
                        setTimeout(() => {
                          setChoosen2(next);
                          next = randomNext();
                          setTimeout(() => {
                            setChoosen2(next);
                            next = randomNext();
                            setTimeout(() => {
                              setChoosen2(next);
                              next = randomNext();
                              setTimeout(() => {
                                setChoosen2(next);
                                next = randomNext();
                                setTimeout(() => {
                                  setChoosen2(next);
                                  next = randomNext();
                                  setTimeout(() => {
                                    setChoosen2(next);
                                    next = randomNext();
                                    setTimeout(() => {
                                      setChoosen2(next);
                                      next = randomNext();
                                      setTimeout(() => {
                                        setChoosen2(next);
                                        next = randomNext();
                                        setTimeout(() => {
                                          setChoosen2(next);
                                          next = randomNext();
                                          setTimeout(() => {
                                            setChoosen2(next);
                                            next = randomNext();
                                            setTimeout(() => {
                                              setChoosen2(next);
                                              next = randomNext();
                                              setTimeout(() => {
                                                setChoosen2(next);
                                                next = randomNext();
                                                setTimeout(() => {
                                                  setChoosen2(next);
                                                  next = randomNext();
                                                  setTimeout(() => {
                                                    setChoosen2(next);
                                                    next = randomNext();
                                                    setTimeout(() => {
                                                      setChoosen2(next);
                                                      next = randomNext();
                                                      setTimeout(() => {
                                                        setChoosen2(next);
                                                        next = randomNext();
                                                        setTimeout(() => {
                                                          setChoosen2(next);
                                                          next = randomNext();
                                                          setTimeout(() => {
                                                            setChoosen2(next);
                                                            next = randomNext();
                                                            setTimeout(() => {
                                                              setChoosen2(next);
                                                              next = randomNext();
                                                              setTimeout(() => {
                                                                setChoosen2(next);
                                                                next = randomNext();
                                                                setTimeout(() => {
                                                                  setChoosen2(next);
                                                                  next = randomNext();
                                                                  setTimeout(() => {
                                                                    setChoosen2(next);
                                                                    next = randomNext();
                                                                    setTimeout(() => {
                                                                      setChoosen2(next);
                                                                      next = randomNext();
                                                                      setTimeout(() => {
                                                                        setChoosen2(next);
                                                                        next = randomNext();
                                                                        setTimeout(() => {
                                                                          setChoosen2(next);
                                                                          next = randomNext();
                                                                          setTimeout(() => {
                                                                            setChoosen2(next);
                                                                            next = randomNext();
                                                                            setTimeout(() => {
                                                                              setChoosen2(next);
                                                                              next = randomNext();
                                                                              setTimeout(() => {
                                                                                setChoosen2(next);
                                                                                next = randomNext();
                                                                                setTimeout(() => {
                                                                                  setChoosen2(next);
                                                                                  next = randomNext();
                                                                                  setTimeout(() => {
                                                                                    setChoosen2(next);
                                                                                    next = randomNext();
                                                                                    setTimeout(() => {
                                                                                      setChoosen2(next);
                                                                                      next = randomNext();
                                                                                      setTimeout(() => {
                                                                                        setChoosen2(next);
                                                                                        next = randomNext();
                                                                                        setTimeout(() => {
                                                                                          setChoosen2(next);
                                                                                          next = randomNext();
                                                                                          setTimeout(() => {
                                                                                            setChoosen2(next);
                                                                                            next = randomNext();
                                                                                            setTimeout(() => {
                                                                                              setChoosen2(next);
                                                                                              setTimeout(() => {
                                                                                                setChoosen2({ id: 0, nama: "" });
                                                                                                bjir2 = document.getElementById("bjir2");
                                                                                                bjir2?.classList.remove("lineUp");
                                                                                              }, 1000);
                                                                                            }, 250);
                                                                                          }, 250);
                                                                                        }, 250);
                                                                                      }, 250);
                                                                                    }, 250);
                                                                                  }, 250);
                                                                                }, 250);
                                                                              }, 250);
                                                                            }, 250);
                                                                          }, 250);
                                                                        }, 250);
                                                                      }, 250);
                                                                    }, 250);
                                                                  }, 250);
                                                                }, 250);
                                                              }, 250);
                                                            }, 250);
                                                          }, 250);
                                                        }, 250);
                                                      }, 250);
                                                    }, 250);
                                                  }, 250);
                                                }, 250);
                                              }, 250);
                                            }, 250);
                                          }, 250);
                                        }, 250);
                                      }, 250);
                                    }, 250);
                                  }, 250);
                                }, 250);
                              }, 250);
                            }, 250);
                          }, 250);
                        }, 250);
                      }, 250);
                    }, 250);
                  }, 250);
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 375);
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
          <audio ref={audioRef} src='/assets/roll.mp3' />
          {!showCongratz && (
            <Image
              alt=""
              src={image}
              className="imageHadiah"
              width={600}
              height={400}
              objectFit="contain"
            />
          )}

          {showCongratz && (
            <div className="congretz">
              <h2>Congratulation!</h2>
              {winners?.map((winner) => (
                <div key={`winner-${winner.id}`}>
                  <h3>{winner.nama}</h3>
                </div>
              ))}
              <Image
                alt=""
                src={image}
                className="imageHadiah"
                width={450}
                height={200}
              />
            </div>
          )}

          {winners.length !== 0 && !showCongratz && (
            <div className={`winners ${showWinners ? "show" : ""}`}>
              <p>Pemenang : </p>
              {winners.map((winner) => (
                <div key={`winner-${winner.id}`}>
                  <p>{winner.nama}</p>
                </div>
              ))}
            </div>
          )}

          {!showCongratz && (
            <div className="textArea">
              <span id="bjir">{choosen?.nama}</span>
              <span id="bjir2">{choosen2?.nama}</span>
            </div>
          )}

          {showBtn && (
            <Button variant="link" onClick={() => spin(1)}>
              <Image alt="" src={componentSpin} width={300} />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
