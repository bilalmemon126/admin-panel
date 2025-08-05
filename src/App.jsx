import React from 'react'
import AdminLayout from './AdminLayout/AdminLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import ProductManagement from './pages/ProductManagement/ProductManagement'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import EditProduct from './pages/EditProduct/EditProduct'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import Category from './pages/Cartegory/Category'
import AddProduct from './pages/AddProduct/AddProduct'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/usermanagement",
          element: <UserManagement />
        },
        {
          path: "/productmanagement",
          element: <ProductManagement />
        },
        {
          path: "/productdetails/:id",
          element: <ProductDetails />
        },
        {
          path: "/edit/:id",
          element: <EditProduct />
        },
        {
          path: "/add",
          element: <AddProduct />
        },
        {
          path: "/ordermanagement",
          element: <OrderManagement />
        },
        {
          path: "/category",
          element: <Category />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App