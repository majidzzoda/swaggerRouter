import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/layout'
import Home from './pages/home'
import About from './pages/about'
import Todo from './pages/todo'
import UserById from './pages/userById'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "todo",
          element: <Todo />
        },
        {
          path: "userById/:id",
          element: <UserById />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App