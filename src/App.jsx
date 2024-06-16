import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Upload } from "./pages/Upload";
import { UploadLiver } from "./pages/Uploads/UploadLiver";
import { UploadLungs } from "./pages/Uploads/UploadLungs";
import { UploadBrain } from "./pages/Uploads/UploadBrain";
import { UploadBreast } from "./pages/Uploads/UploadBreast";

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
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "upload-liver",
          element: <UploadLiver />,
        },
        {
          path: "upload-lungs",
          element: <UploadLungs />,
        },
        {
          path: "upload-brain",
          element: <UploadBrain />,
        },
        {
          path: "upload-breast",
          element: <UploadBreast />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
