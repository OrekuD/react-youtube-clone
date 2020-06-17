import React, { createContext, useState, useEffect } from "react";
import Api from "../api/Api";

const Context = createContext();

const Provider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("funny");
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetchData();
  }, [search]);

  const fetchData = async () => {
    const response = await Api.get("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        key: process.env.REACT_APP_API_KEY,
        q: search,
      },
    });

    if (response.data) {
      setVideos(response.data.items);
    }
  };

  return (
    <Context.Provider value={{ videos, setVideos, setSearch, video, setVideo }}>
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
