import styles from "./products.module.css";

import Product from "./Product";

import { popularProducts } from "../data";

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
