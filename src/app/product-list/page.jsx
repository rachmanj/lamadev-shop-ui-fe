import styles from "./page.module.css";

import Products from "@/components/Products";

const ProductList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Product List</h1>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <span className={styles.filterText}>Filter Products</span>
            <select className={styles.select}>
              <option className={styles.option} disabled selected>
                Color
              </option>
              <option className={styles.option}>Red</option>
              <option className={styles.option}>Blue</option>
              <option className={styles.option}>Green</option>
              <option className={styles.option}>Yellow</option>
              <option className={styles.option}>Black</option>
              <option className={styles.option}>White</option>
            </select>
            <select className={styles.select}>
              <option className={styles.option} disabled selected>
                Size
              </option>
              <option className={styles.option}>XS</option>
              <option className={styles.option}>S</option>
              <option className={styles.option}>M</option>
              <option className={styles.option}>L</option>
              <option className={styles.option}>XL</option>
              <option className={styles.option}>XXL</option>
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterText}>Sort Products</span>
            <select className={styles.select}>
              <option className={styles.option} selected>
                Newest
              </option>
              <option className={styles.option}>Price (asc)</option>
              <option className={styles.option}>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default ProductList;
