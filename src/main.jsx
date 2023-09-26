import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './MainLayout/MainLayout';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Donation from './Pages/Donation';
import Statistic from './Pages/Statistic';
import Details from './components/Details';
import Error from './components/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,
        loader:()=>fetch("data.json")
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/statistic",
        element:<Statistic></Statistic>,
        loader:()=>fetch("data.json")
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:()=>fetch("data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
