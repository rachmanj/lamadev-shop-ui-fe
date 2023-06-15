"use client";

import Image from "next/image";

import styles from "./product.module.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <Image
        src={item.img}
        alt={item.title}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icon}>
          <SearchOutlined />
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
