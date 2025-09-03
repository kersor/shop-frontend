import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { SectionHeader } from './react/sections/common/sectionHeader/SectionHeader'

const LazyMain = lazy(() => import("./react/pages/main/Main"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>}><LazyMain /></Suspense>
  },

])

const App = () => {
  return (
    <React.Fragment>
      <SectionHeader />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App