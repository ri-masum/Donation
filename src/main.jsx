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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/statistic",
        element:<Statistic></Statistic>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
