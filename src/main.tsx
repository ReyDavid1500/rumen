import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/App";
import "./styles/index.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShoppingCartProvider>
);
