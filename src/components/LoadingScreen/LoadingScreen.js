import React from "react";
import Gif from "../../gifs/1.gif";

const LoadingScreen = () => (
  <>
    <img src={Gif} alt="Loading" style={{ width: "30px", height: "30px" }} />
  </>
);

export default LoadingScreen;
