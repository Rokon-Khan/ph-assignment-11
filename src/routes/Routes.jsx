import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import Assignments from "../pages/Assignments";
import ContactUs from "../pages/ContactUs";
import CookiePolicy from "../pages/CookiePolicy";
import CreateAssignment from "../pages/CreateAssignment";
import DetailAssignment from "../pages/DetailAssignment";
import Error from "../pages/Error";
import ForgetPassword from "../pages/ForgetPasssword";
import GiveMark from "../pages/GiveMark";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAttemptedAssignment from "../pages/MyAttemptedAssignment";
import MySubmittedAssignment from "../pages/MySubmittedAssignment";
import PendingAssignment from "../pages/PendingAssignment";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Register from "../pages/Register";
import TakeAssignment from "../pages/TakeAssignment";
import TermsOfUse from "../pages/TermsOfUse";
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
        path: "/takeassignment:id",
        element: (
          <PrivateRoute>
            <TakeAssignment></TakeAssignment>
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/allassignmnets`
          );
          const data = await response.json();
          return data;
        },
        // loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
  // {
  //   path: "/givemark",
  //   element: <MainLaout></MainLaout>,
  //   children: [
  //     {
  //       path: "/givemark:id",
  //       element: (
  //         <PrivateRoute>
  //           <GiveMark></GiveMark>
  //         </PrivateRoute>
  //       ),
  //       loader: async () => {
  //         const response = await fetch(
  //           `${import.meta.env.VITE_API_URL}/takeassignment`
  //         );
  //         const data = await response.json();
  //         return data;
  //       },
  //       // loader: () => fetch("http://localhost:5000/users"),
  //     },
  //   ],
  // },

  {
    path: "/givemark",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/givemark/:id", // Corrected path to include :id
        element: (
          <PrivateRoute>
            <GiveMark></GiveMark>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { id } = params; // Extract the id from params
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/takeassignment/${id}` // Fetch specific assignment
          );
          if (!response.ok) {
            throw new Error("Failed to fetch assignment");
          }
          const data = await response.json();
          return data;
        },
      },
    ],
  },

  {
    path: "/mysubmittedassinment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/mysubmittedassinment",
        element: (
          <PrivateRoute>
            <MySubmittedAssignment></MySubmittedAssignment>
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/takeassignment`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/pendingassignment",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/pendingassignment",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/takeassignment`
          );
          const data = await response.json();
          return data;
        },
      },
    ],
  },

  {
    path: "/terms-of-use",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/terms-of-use",
        element: <TermsOfUse></TermsOfUse>,
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
  {
    path: "/cookie-policy",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/cookie-policy",
        element: <CookiePolicy></CookiePolicy>,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/about-us",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  // {
  //   path: "/about-us",
  //   element: <MainLaout></MainLaout>,
  //   children: [
  //     {
  //       path: "/about-us",
  //       element: <AboutUs></AboutUs>,
  //     },
  //   ],
  // },

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
