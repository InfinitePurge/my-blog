import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import NotFoundPage from './Pages/NotFoundPage'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contacts from './Pages/Contacts'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path="*" element={<NotFoundPage />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contacts />} />
  </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
}

export default App