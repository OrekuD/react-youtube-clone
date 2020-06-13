import React from "react";
import styles from "./Home.module.scss";
import { Card } from "../../components";

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

const Home = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
};

export default Home;
