import React, { useEffect, useState, useContext } from "react";
import queryString from "query-string";
import styles from "./Video.module.scss";
import { CardWide, LoadingScreen } from "../../components";
import { Context } from "../../context/context";

const Video = ({ location }) => {
  const { videos } = useContext(Context);
  const [video, setVideo] = useState(" ");

  useEffect(() => {
    const params = queryString.parse(location.search);
    setVideo(`https://www.youtube.com/embed/${params.v}`);
  }, [location.search]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.video}>
          {video === " " ? (
            <LoadingScreen />
          ) : (
            <iframe
              title="Video"
              frameBorder="0"
              height="100%"
              width="100%"
              src={video}
            />
          )}
        </div>
      </div>
      <div className={styles.right}>
        {videos.map((video, i) => (
          <CardWide video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Video;
