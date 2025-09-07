import React, { useEffect } from "react";
import WOW from "wowjs";
import "./App.css";
import AppView from "./App.view";

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return <AppView />;
};

export default App;
