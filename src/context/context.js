import React, { createContext, useState, useEffect } from "react";
import Api from "../api/Api";

const Context = createContext();

const Provider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Api.get("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        key: process.env.REACT_APP_API_KEY,
        q: "dogs",
      },
    });

    if (response.data) {
      setVideos(response.data.items);
    }
  };

  return (
    <Context.Provider value={{ videos, setVideos }}>
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
