import React from "react";
import "./App.scss";
import { Header } from "./components";
import { Home, Video } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Video />
    </div>
  );
}

export default App;
