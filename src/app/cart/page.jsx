"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>YOUR BAG</h1>
      <div className={styles.top}>
        <button
          className={styles.topButton}
          style={{ backgroundColor: "transparent" }}
        >
          CONTINUE SHOPPING
        </button>
        <div className={styles.topInfo}>
          <span className={styles.topText}>Shopping Bag (2)</span>
          <span className={styles.topText}>Your Whislist (0)</span>
        </div>
        <button
          className={styles.topButton}
          style={{ border: "none", backgroundColor: "black", color: "white" }}
        >
          CHECKOUT NOW
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInfo}>
          <div className={styles.product}>
            <div className={styles.productDetail}>
              <Image
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                width={150}
                height={150}
                className={styles.productImage}
              />
              <div className={styles.details}>
                <span className={styles.productName}>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </span>
                <span className={styles.productId}>
                  <b>ID:</b> 93813718293
                </span>
                <div
                  className={styles.productColor}
                  style={{ backgroundColor: "black" }}
                />
                <span className={styles.productSize}>
                  <b>Size:</b> 37.5
                </span>
              </div>
            </div>

            <div className={styles.priceDetail}>
              <div className={styles.productAmountContainer}>
                <Add />
                <div className={styles.productAmount}>2</div>
                <Remove />
              </div>
              <div className={styles.productPrice}>Rp.150K</div>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.product}>
            <div className={styles.productDetail}>
              <Image
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                width={150}
                height={150}
                className={styles.productImage}
              />
              <div className={styles.details}>
                <span className={styles.productName}>
                  <b>Product:</b> HAKURA T-SHIRT
                </span>
                <span className={styles.productId}>
                  <b>ID:</b> 93813718293
                </span>
                <div
                  className={styles.productColor}
                  style={{ backgroundColor: "green" }}
                />
                <span className={styles.productSize}>
                  <b>Size:</b> 80.5
                </span>
              </div>
            </div>

            <div className={styles.priceDetail}>
              <div className={styles.productAmountContainer}>
                <Add />
                <div className={styles.productAmount}>1</div>
                <Remove />
              </div>
              <div className={styles.productPrice}>Rp.230</div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSummary}>
          <h1 className={styles.summaryTitle}>ORDER SUMMARY</h1>
          <div className={styles.summaryItem}>
            <span className={styles.summaryItemText}>Subtotal</span>
            <span className={styles.summaryItemPrice}>Rp.15K</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryItemText}>Estimated Shipping</span>
            <span className={styles.summaryItemPrice}>Rp.15K</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryItemText}>Shipping Discount</span>
            <span className={styles.summaryItemPrice}>Rp.15K</span>
          </div>
          <div
            className={styles.summaryItem}
            style={{ fontWeight: "500", fontSize: "24px" }}
          >
            <span className={styles.summaryItemText}>Total</span>
            <span className={styles.summaryItemPrice}>Rp.235K</span>
          </div>
          <button className={styles.btn}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
