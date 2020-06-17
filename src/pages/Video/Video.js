import React, { useEffect, useState, useContext } from "react";
import queryString from "query-string";
import styles from "./Video.module.scss";
import { CardWide } from "../../components";
import { Context } from "../../context/context";

const Video = ({ location }) => {
  const { videos, video: currentVideo } = useContext(Context);
  const [video, setVideo] = useState(" ");
  const [data, setData] = useState({});

  useEffect(() => {
    setData(queryString.parse(location.search));
    setVideo(`https://www.youtube.com/embed/${data.v}`);
  }, [location.search, data.v]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.video}>
          <iframe
            title="Video"
            frameBorder="0"
            height="100%"
            width="100%"
            src={video}
          />
        </div>
        {currentVideo.snippet ? (
          <>
            <p> {currentVideo.snippet.title} </p>
            <h5> {currentVideo.snippet.channelTitle} </h5>
          </>
        ) : null}
      </div>
      <div className={styles.right}>
        {videos.map((video, i) =>
          video.id.videoId === data.v ? null : (
            <CardWide video={video} key={i} />
          )
        )}
      </div>
    </div>
  );
};

export default Video;
