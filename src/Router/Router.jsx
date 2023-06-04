import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login&Logout/Login";
import Register from "../Pages/Login&Logout/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/Mytoys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
