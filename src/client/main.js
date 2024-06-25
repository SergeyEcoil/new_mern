import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container); // Используем createRoot вместо ReactDOM.render
root.render(<App />);
