import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Card = ({ video }) => (
  <Link to={`/watch?v=${video.id.videoId}`} className={styles.card}>
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt="Thumbnail"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </div>
    <p> {video.snippet.title} </p>
    <h5> {video.snippet.channelTitle} </h5>
  </Link>
);

export default Card;
