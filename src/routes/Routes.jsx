import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";
import Error from "../pages/Error";
// import ForgetPassword from "../pages/ForgetPassword";
import ForgetPassword from "../pages/ForgetPasssword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: async () => await fetch("http://localhost:5000/addnewcampaign"),
        // loader: async () => {
        //   const response = await fetch("http://localhost:5000/addnewcampaign");
        //   const data = await response.json();
        //   return data;
        // },
      },
    ],
  },

  //   {
  //     path: "/allcampaign",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/allcampaign",
  //         element: <AllCampaign></AllCampaign>,
  //         // loader: () => fetch("http://localhost:5000/addnewcampaign"),
  //         loader: async () => {
  //           const response = await fetch("http://localhost:5000/addnewcampaign");
  //           const data = await response.json();
  //           return data; // Ensure the data is an array of campaigns
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     path: "/mycampaign",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/mycampaign",
  //         element: (
  //           <PrivateRoute>
  //             <MyCampaign></MyCampaign>,
  //           </PrivateRoute>
  //         ),
  //         loader: async () => {
  //           const response = await fetch("http://localhost:5000/addnewcampaign");
  //           const data = await response.json();
  //           return data;
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     path: "/updateCampaign",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/updateCampaign/:id",
  //         element: (
  //           <PrivateRoute>
  //             <UpdateCampaign />,
  //           </PrivateRoute>
  //         ),
  //         loader: async () => {
  //           const response = await fetch("http://localhost:5000/addnewcampaign");
  //           const data = await response.json();
  //           return data;
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     path: "/mydonation",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/mydonation",
  //         element: (
  //           <PrivateRoute>
  //             <MyDonation></MyDonation>,
  //           </PrivateRoute>
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     path: "/detailcampaign",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/detailcampaign:id",
  //         element: (
  //           <PrivateRoute>
  //             <DetailCampain></DetailCampain>,
  //           </PrivateRoute>
  //         ),
  //         loader: async () => {
  //           const response = await fetch("http://localhost:5000/addnewcampaign");
  //           const data = await response.json();
  //           return data;
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     path: "/addnewcampaign",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/addnewcampaign",
  //         element: (
  //           <PrivateRoute>
  //             <AddNewCampaign></AddNewCampaign>,
  //           </PrivateRoute>
  //         ),
  //         loader: () => fetch("http://localhost:5000/users"),
  //       },
  //     ],
  //   },

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
