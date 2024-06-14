import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";

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
        {
          path: "upload",
          element: <Upload />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
