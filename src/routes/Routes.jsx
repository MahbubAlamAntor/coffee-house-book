import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Pages/CoffeeCards";
import CoffeeDetail from "../Pages/CoffeeDetail";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children: [
            {
              path: '/',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')
            },
            {
              path: '/category/:category',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')
            }
          ]
        },
        {
          path: '/coffees',
          element: <Coffees></Coffees>,
          loader: () => fetch('../coffees.json')
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/coffees/:id',
          element: <CoffeeDetail></CoffeeDetail>,
          loader: () => fetch('../coffees.json')
        }
      ],
    },
  ]);

export default routes;