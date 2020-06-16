import React, { useEffect, useState, useContext } from "react";
import queryString from "query-string";
import styles from "./Video.module.scss";
import { CardWide } from "../../components";
import { Context } from "../../context/context";

const Video = ({ location }) => {
  const { videos } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.video}></div>
      </div>
      <div className={styles.right}>
        {console.log(videos)}
        {videos.map((video, i) => (
          <CardWide video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Video;
