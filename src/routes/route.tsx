import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SupplyDetails from "../components/home/SupplyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllSupplies from "../pages/AllSupplies";
import DashboardLayout from "../layout/DashboardLayout";
import AllSuppliesDash from "../dashboard/AllSuppliesDash";
import CreateSupply from "../dashboard/CreateSupply";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../layout/PrivateRoute";
import VolunteerSignup from "../pages/VolunteerSignup";
import AboutUsVolun from "../pages/AboutUsVolun";
import LeaderBoard from "../dashboard/LeaderBoard";
import Community from "../pages/Community";
import InteractiveTestimonial from "../dashboard/InteractiveTestimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-supplies",
        element: <AllSupplies />,
      },
      {
        path: "/supplies/:id",
        element: (
          <PrivateRoute>
            <SupplyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/virtual-volunteer-signup",
        element: (
          <PrivateRoute>
            <VolunteerSignup />
          </PrivateRoute>
        ),
      },
      {
        path: "/community",
        element: (
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUsVolun />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/chart",
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <AllSuppliesDash />,
      },
      {
        path: "create-supplies",
        element: <CreateSupply />,
      },
      {
        path: "leader-board",
        element: <LeaderBoard />,
      },
      {
        path: "create-testimonial",
        element: <InteractiveTestimonial />,
      },
    ],
  },
]);

export default router;
