import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard/home"} />,
  },
  {
    path:"/dashboard",
    element:<DashboardLayout/>,
    children:[
        {
            path:"home",
            element:<HomePage/>
        }
    ]
  }
]);

export default router;