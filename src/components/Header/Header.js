import React, { useState, useContext } from "react";
import styles from "./Header.module.scss";
import { Search } from "../../svg/Svgs";
import { Context } from "../../context/context";

const Header = () => {
  const [text, setText] = useState("");
  const { setSearch, setVideos } = useContext(Context);

  const searchVideo = () => {
    setVideos([]);
    setSearch(text);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.logoText}> YouTube </h5>
      <div className={styles.searchbar}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? searchVideo() : null)}
          placeholder="Search"
        />
        <button onClick={searchVideo}>
          <Search color="grey" size="15px" />
        </button>
      </div>
    </div>
  );
};

export default Header;
