"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

import styles from "./slider.module.css";

import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrow}
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(-${slideIndex * 100}vw)`,
        }}
      >
        {sliderItems.map((item) => (
          <div
            className={styles.slide}
            key={item.id}
            style={{ backgroundColor: item.bg }}
          >
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                className={styles.image}
                alt="image"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <button className={styles.button}>SHOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.arrow}
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
