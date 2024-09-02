import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./App.css";
import "./components/navbar/Navbar";

import MainPage from "./pages/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/MainPage",
          element: <MainPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
