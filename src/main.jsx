import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/auth.context.jsx";
import { StratagemProvider } from "../context/stratagem.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StratagemProvider>
          <App />
        </StratagemProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
