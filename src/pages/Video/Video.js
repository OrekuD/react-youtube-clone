import React from "react";
import styles from "./Video.module.scss";
import { CardWide } from "../../components";

const cards = [
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
];

const Video = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.video}></div>
      </div>
      <div className={styles.right}>
        {cards.map((card) => (
          <CardWide />
        ))}
      </div>
    </div>
  );
};

export default Video;
