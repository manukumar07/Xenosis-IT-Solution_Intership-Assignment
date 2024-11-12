import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { ActivityProvider } from "./context/ActivityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ActivityProvider>
        <App />
      </ActivityProvider>
    </ThemeProvider>
  </StrictMode>
);
