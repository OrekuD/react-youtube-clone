import React, { useContext } from "react";
import styles from "./Home.module.scss";
import { Card, LoadingScreen } from "../../components";
import { Context } from "../../context/context";

const Home = () => {
  const { videos } = useContext(Context);

  if (!videos.length) {
    return (
      <div className={styles.container}>
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {videos.map((video, i) => (
        <Card video={video} key={i} />
      ))}
    </div>
  );
};

export default Home;
