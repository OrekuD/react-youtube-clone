import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const CardWide = ({ video }) => (
  <Link to={`/watch?v=${video.id.videoId}`} className={styles.wide}>
    <div className={styles.left}>
      <img
        src={video.snippet.thumbnails.high.url}
        alt="Thumbnail"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </div>
    <div className={styles.right}>
      <p> {video.snippet.title} </p>
      <h5> {video.snippet.channelTitle} </h5>
    </div>
  </Link>
);

export default CardWide;
