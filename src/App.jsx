import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
