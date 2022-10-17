import React from "react";
import "./assets/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/redux-store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
