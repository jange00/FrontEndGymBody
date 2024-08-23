//@ts-ignore
import React, { Children, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
//@ts-ignore
import Error from "./Components/Error/ErrorPage";
import Landing from "./Components/Home/Landing";
import About from "./Components/Home/about";
import Plan from "./Components/Home/plan";
import Coaches from "./Components/Home/Coaches";
import Visit from "./Components/Home/visit";
//@ts-ignore
import Register from "./Components/Home/Register";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Login from "./Components/Admin/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Signup from "./Components/Admin/Signup/Signup";
import GymDetails from "./Components/Admin/Signup/GymDetails";
import ForgetPassword from "./Components/Admin/ForgetPassword/ForgetPassword";
import VerifyOTP from "./Components/Admin/ForgetPassword/VerifyOTP";
import UpdatePassword from "./Components/Admin/ForgetPassword/UpdatePassword";
import Master from "./Components/Admin/Dashboard";
import AdminProfile from "./Components/Admin/Dashboard/Main/Content/AdminProfile/AdminProfile";
import Registration from "./Components/Admin/Dashboard/Main/Content/Registration/Registration";
import Plans from "./Components/Admin/Dashboard/Main/Content/Plan/Plan";
import Payments from "./Components/Admin/Dashboard/Main/Content/Payments/Payments";
import ViewMembers from "./Components/Admin/Dashboard/Main/Content/ViewMembers/ViewMembers";
import Report from "./Components/Admin/Dashboard/Main/Content/Report/Report";
import Dues from "./Components/Admin/Dashboard/Main/Content/Dues/Dues";
import Renewal from "./Components/Admin/Dashboard/Main/Content/Renewal/Renewal";
import RenewalForm from "./Components/Admin/Dashboard/Main/Content/Renewal/Renewal";

//@ts-ignore
const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);
const queryClient = new QueryClient();
function App() {
  const routes = [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/abouts",
          element: <About />,
        },
        {
          path: "/plans",
          element: <Plan />,
        },
       
        {
          path: "/visit",
          element: <Visit />,
        },
      ],
    },
    {
      path: "/admin/login",
      element: <Login />,
    },
    {
      path: "/admin/Signup",
      element: <Signup/>,
    },
    {
      path: "/admin/Signup/gymdetails",
      element: <GymDetails/>,
    },
    {
      path: "/admin/ForgetPassword",
      element: <ForgetPassword/>,
    },
    {
      path: "/admin/ForgetPassword/verify",
      element: <VerifyOTP />,
    },
    {
      path: "/admin/ForgetPassword/updatePassword",
      element: <UpdatePassword />,
    },
    {
      path:"/admin",
      element:<Master/>,
      children:[
        {
          path: "/admin/dashboard",
          element:<Dashboard/>,
        },
        {
          path: "/admin/adminprofile",
          element:<AdminProfile/>,
        },
        {
          path: "/admin/registeration",
          element:<Registration/>,
        },
        {
          path: "/admin/plan",
          element:<Plans/>,
        },
        
        {
          path: "/admin/viewmembers",
          element:<ViewMembers/>,
        },
        
        {
          path: "/admin/report",
          element:<Report/>,
        },
      ]
    }
   
  ];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </QueryClientProvider>
    </>
  );
}

export default App;
