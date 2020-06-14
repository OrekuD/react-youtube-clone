import React from "react";
import "./App.scss";
import { Header } from "./components";
import { Home, Video } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/watch" exact component={Video} />
    </>
  );
}

export default App;
