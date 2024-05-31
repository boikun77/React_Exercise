import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./pages/coin";
import Coins from "./pages/coins";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
      },
    ],
  },
]);
export default router;
