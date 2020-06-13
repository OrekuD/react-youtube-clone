import React from "react";
import styles from "./Header.module.scss";
import { Search } from "../../svg/Svgs";

const Header = ({ value, setValue }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.logoText}> YouTube </h5>
      <div className={styles.searchbar}>
        <input />
        <button>
          <Search color="grey" size="15px" />
        </button>
      </div>
    </div>
  );
};

export default Header;
