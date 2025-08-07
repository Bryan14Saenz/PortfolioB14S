// Import Strict Mode For React
import { StrictMode } from "react";
// Import Create Root For React DOM
import { createRoot } from "react-dom/client";
// Import BrowserRouter For React Router DOM
import { BrowserRouter } from "react-router-dom";
// Import Principal App
import App from "./App.tsx";
// Import For Style
import "./styles/index.css";

// Create For App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
