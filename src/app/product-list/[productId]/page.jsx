"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Add, Remove } from "@mui/icons-material";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Denim Jumpsuit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            magnam voluptates, neque autem nisi consectetur. Accusantium quis
            iure aut commodi cumque itaque illum, quia nam atque dicta quo minus
            reprehenderit!
          </p>
          <span className={styles.price}>Rp. 250.000,00</span>

          <div className={styles.filterContainer}>
            <div className={styles.filterType}>
              <span className={styles.filterTitle}>Color</span>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "black" }}
              />
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "darkblue" }}
              />
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "gray" }}
              />
            </div>

            <div className={styles.filterType}>
              <span className={styles.filterTitle}>Size</span>
              <select className={styles.filterSize}>
                <option className={styles.sizeOption}>XS</option>
                <option className={styles.sizeOption}>S</option>
                <option className={styles.sizeOption}>M</option>
                <option className={styles.sizeOption}>L</option>
                <option className={styles.sizeOption}>XL</option>
              </select>
            </div>
          </div>

          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.btn}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
