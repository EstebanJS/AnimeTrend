import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/App.sass";

ReactDOM.render(<App />, document.getElementById("app"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
