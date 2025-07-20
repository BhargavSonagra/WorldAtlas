import React from 'react'
import './app.css'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Country from './pages/Country'
import CountryDetails from './pages/CountryDetails'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children: [ 
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "country",
    element: <Country />,
  },
  {
    path: "country/:id",
    element: <CountryDetails />,
  }
]
}

 
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
