import React from "react";
import styles from "./Header.module.scss";

const Header = ({ value, setValue }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.logoText}> YouTube </h5>
      <input className={styles.input} />
    </div>
  );
};

export default Header;
