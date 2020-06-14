import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { Card } from "../../components";
import Api from "../../api/Api";

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

const API_KEY = "AIzaSyA10hbFRbqZtmMM8pXQrewK_pJnEyL4EqU";

const Home = () => {
  useEffect(() => {
    const loadVideos = async (search) => {
      const response = await Api.get("search", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: API_KEY,
          q: search,
        },
      });
      return response;
    };

    console.log(loadVideos("dogs"));

    // fetch(
    //   `/search?key=${process.env.API_KEY}&q=${searchTerm}&part=snippet&maxResults=10`
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  });

  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
};

export default Home;
