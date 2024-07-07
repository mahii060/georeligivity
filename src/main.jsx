import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Media from './component/Media/Media.jsx'
import App from './App.jsx'
import History from './component/History/History.jsx'
import Series from './component/Series/Series.jsx'
import Parenting from './component/Parenting/Parenting.jsx'
import HiddenPearls from './component/HiddenPearls/HiddenPearls.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/media',
        element: <Media />
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/parenting',
        element: <Parenting />
      },
      {
        path: '/hidden-pearls',
        element: <HiddenPearls />
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
