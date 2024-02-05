

import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/Login'
import Error404 from '@/views/Error404'
import Welcome from '@/views/Welcome'
import Error403 from '@/views/Error403'
const routers = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  },
]

export default createBrowserRouter(routers)
