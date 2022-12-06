import React from "react";
import styles from "../styles/Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <h4 className={styles.item}>소프트웨어개발실습2</h4>
      <p className={styles.item}>20191575 장미루</p>
    </div>
  );
}

export default Footer;
