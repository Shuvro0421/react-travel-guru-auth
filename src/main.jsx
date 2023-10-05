import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/Root';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import News from './components/News';
import Destination from './components/Destination';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Booking from './components/Booking';
import PrivateRoute from './components/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path : "/",
        loader : () =>fetch('/tours.json'),
        element :<News></News>
      },
      {
        path : "/destination",
        element : <Destination></Destination>
      },
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/booking/:id",
        loader : () =>fetch('/tours.json'),
        element : <Booking></Booking>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
