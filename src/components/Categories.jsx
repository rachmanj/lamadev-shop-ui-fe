import styles from "./categories.module.css";

import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </div>
  );
};

export default Categories;
