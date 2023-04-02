import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import VideoDetails from './routes/VideoDetails'
import ChannelDetails from './routes/ChannelDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/video/:id',
    element: <VideoDetails />,
  },
  {
    path: '/channel/:id',
    element: <ChannelDetails />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
