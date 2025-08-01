import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Layout from "./LAYOUT/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import AdminPanel from "./pages/AdminPanel";
import DriverPanel from "./pages/DriverPanel";
import Logout from "./pages/Logout";


function App(){
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/AdminPanel",
        element: <AdminPanel/>,
      },
      {
        path: "/DriverPanel",
        element: <DriverPanel/>,
      }
      ]
      }
    ]
  )
  return (
    <RouterProvider router = {router} />
  );
}

export default App