import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import VConsole from "vconsole";
import { App } from "./App";
import { config } from "@/config";
import "./index.css";

const main = () => {
  if (config.stageName !== "PRD" && config.stageName !== "TEST") {
    new VConsole();
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
};

void main();
