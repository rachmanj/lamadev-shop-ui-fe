"use client";

import Link from "next/link";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>LOGIN</h1>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.btn} type="submit">
            Login
          </button>
          <Link className={styles.link} href="/forgot-password">
            Forgot Password
          </Link>
          <Link className={styles.link} href="/register">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
