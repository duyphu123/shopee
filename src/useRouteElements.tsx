import Login from './pages/Login'
import ProducList from './pages/ProductList'
import Register from './pages/Register'
import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout>
        <ProducList />
      </MainLayout>
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          {' '}
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          {' '}
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
