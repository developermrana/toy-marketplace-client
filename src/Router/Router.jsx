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
import Error from "../Pages/error/Error";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: () =>
          fetch(
            "https://assinment-elevent-server-mrana565.vercel.app/products"
          ),
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
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assinment-elevent-server-mrana565.vercel.app/products/${params.id}`
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
      {
        path: "products/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://assinment-elevent-server-mrana565.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
