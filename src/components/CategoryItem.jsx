import Image from "next/image";

import styles from "./categoryItem.module.css";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Image
        src={item.img}
        alt={item.title}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button className={styles.button}>SHOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
