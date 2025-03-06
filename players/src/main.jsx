import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Players from "./Players.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Players />
  </StrictMode>
);
