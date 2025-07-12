
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoaderWrapper from "./LoaderWrapper.jsx";   // ← add this line
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoaderWrapper>          {/* 🔒 shows loader until ready */}
      <App />
    </LoaderWrapper>
  </React.StrictMode>
);
