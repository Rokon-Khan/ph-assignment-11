import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import DetailAssignment from "../pages/DetailAssignment";
import Error from "../pages/Error";
// import ForgetPassword from "../pages/ForgetPassword";
import ForgetPassword from "../pages/ForgetPasssword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAttemptedAssignment from "../pages/MyAttemptedAssignment";
import Register from "../pages/Register";
import TakeAssignment from "../pages/TakeAssignment";
import UpdateAssignment from "../pages/UpdateAssignment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/allassignmnets`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },

  {
    path: "/assignments",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/allassignmnets`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/create-assignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/myattempted-assignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/myattempted-assignment",
        element: <MyAttemptedAssignment></MyAttemptedAssignment>,
      },
    ],
  },

  {
    path: "/updateassignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/updateassignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/allassignmnets`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },

  {
    path: "/detailassignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/detailassignment:id",
        element: (
          <PrivateRoute>
            <DetailAssignment></DetailAssignment>
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/allassignmnets`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/takeassignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/takeassignment",
        element: (
          <PrivateRoute>
            <TakeAssignment></TakeAssignment>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  //   {
  //     path: "/update-profile",
  //     element: <UpdateProfile></UpdateProfile>,
  //   },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export { router };
