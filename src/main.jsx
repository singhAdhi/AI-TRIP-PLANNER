import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ShowTrip from "./showTrip/ShowTrip.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CreateTrip",
    element: <CreateTrip />,
  },
  {
    path: "/ShowTrip",
    element: <ShowTrip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
  </Provider>
);
