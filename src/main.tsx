import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './pages/Home/home.tsx'
import App from './App.tsx'
import Error from './pages/404/error.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
