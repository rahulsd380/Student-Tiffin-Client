import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "sonner";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
      </ModalProvider>
  </React.StrictMode>
);