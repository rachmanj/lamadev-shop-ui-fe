"use client";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input className={styles.searchInput} />
            <SearchIcon
              style={{ color: "gray", fontSize: "16px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>WHAAN</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>REGISTER</div>
          <div className={styles.menuItem}>SIGN IN</div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
