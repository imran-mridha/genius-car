import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service/Service";
import Services from "../../Pages/Home/Services/Services/Services";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders/Orders";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/service/:id',
        loader: ({params})=> fetch(`https://genius-car-server-ashy.vercel.app/service/${params.id}`),
        element: <Service />
      }
      ,
      {
        path: '/checkout/:id',
        loader: ({params})=> fetch(`https://genius-car-server-ashy.vercel.app/checkout/${params.id}`),
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders /></PrivateRoute>
      }
    ]
  }
 
])

export default router;