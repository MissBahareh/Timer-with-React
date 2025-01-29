import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyTimer from "./components/Timer";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyTimer />
  </StrictMode>
);
