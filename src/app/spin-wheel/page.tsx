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

  const [image, setImage] = useState("/assets/doorPrizeAstra/awalDoorprize.png");
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

      case "Galaxy Tab":
        setImage("/assets/doorPrizeAstra/Tab.png");
        break;
      case "Galaxy A05s":
        setImage("/assets/doorPrizeAstra/Hp.png");
        break;
      case "Logam Mulia 1gr":
        setImage("/assets/doorPrizeAstra/Emas.png");
        break;
      case "Bank Saqu g":
        setImage("/assets/doorPrizeAstra/bankSaquB.png");
        break;
      case "Astra Pay g":
        setImage("/assets/doorPrizeAstra/astraPayB.png");
        break;
        case "Bank Saqu k":
        setImage("/assets/doorPrizeAstra/bankSaquK.png");
        break;
      case "Astra Pay k":
        setImage("/assets/doorPrizeAstra/astraPayK.png");
        break;

      default:
        setImage("/assets/doorPrizeAstra/awalDoorprize.png");
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
        .get(`https://sodgroup.online/api/data1?_sort=id&_order=asc`)
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
                                                                                                    "https://sodgroup.online/api/data2",
                                                                                                    {
                                                                                                      nama: `${next.id} - ${next.nama} - ${formData.hadiah}`,
                                                                                                    },
                                                                                                    {
                                                                                                      headers: { "Content-Type": "application/json" },
                                                                                                    }
                                                                                                  )
                                                                                                  .then(() => {
                                                                                                    axios.delete(
                                                                                                      `https://sodgroup.online/api/data1/${next.id}`
                                                                                                    );
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
          .get(`https://sodgroup.online/api/data1?_sort=id&_order=asc`)
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
              <Image alt="" src={componentSpin} width={150} />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
