import React, { lazy, Suspense } from 'react'
import styles from './styles/App.module.css'
import { createBrowserRouter, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom'
import { SectionHeader } from './react/sections/common/sectionHeader/SectionHeader'
import { SectionFooter } from './react/sections/common/sectionFooter/SectionFooter'

const LazyMain = lazy(() => import("./react/pages/main/Main"))
const LazyCart = lazy(() => import("./react/pages/cart/Cart"))


const App = () => {
  return (
    <div className={styles.app}>
        <Router>
          <SectionHeader />
          <main className={styles.app_content}>
            <Routes>
              <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyMain /></Suspense>} />
              <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><LazyCart /></Suspense>} />
            </Routes>
          </main>
          <SectionFooter />
        </Router>
    </div>
  )
}

export default App