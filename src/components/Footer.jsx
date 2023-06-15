"use client";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>WHAAN</h1>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto fugit perspiciatis. Itaque vel quia atque expedita maiores
          nobis tenetur repellat? Vero atque excepturi molestias nihil ullam,
          libero voluptatem veritatis?
        </div>
        <div className={styles.socialContainer}>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#3b5999" }}
          >
            <Facebook />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e4405f" }}
          >
            <Instagram />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#55acee" }}
          >
            <Twitter />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e60023" }}
          >
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h1 className={styles.title}>Useful Links</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.contactItem}>
          <Room style={{ marginRight: "10px" }} />
          Sillicon Valey Road, California
        </div>
        <div className={styles.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +1 123 427000
        </div>
        <div className={styles.contactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> www.softmaker.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
