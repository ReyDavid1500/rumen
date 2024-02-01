import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/App";
import "./styles/index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </NextUIProvider>
  </React.StrictMode>
);
