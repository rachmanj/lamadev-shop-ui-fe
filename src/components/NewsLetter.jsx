"use client";

import { Send } from "@mui/icons-material";
import styles from "./newsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>
        Get timely update from your favorite products
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="Your Email" className={styles.input} />
        <button className={styles.btn}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
