import React, { lazy, Suspense } from 'react'
import styles from './styles/App.module.css'
import { createBrowserRouter, Navigate, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom'
import { SectionHeader } from './react/sections/common/sectionHeader/SectionHeader'
import { SectionFooter } from './react/sections/common/sectionFooter/SectionFooter'
import PrivateRoute from './scripts/utils/PrivateRoute'

const LazyMain = lazy(() => import("./react/pages/main/Main"))
const LazyCart = lazy(() => import("./react/pages/cart/Cart"))
const LazyFavorites = lazy(() => import("./react/pages/favorites/Favorites"))
const LazyProfile = lazy(() => import("./react/pages/profile/Profile"))
const LazyOrders = lazy(() => import("./react/pages/orders/Orders"))
const LazyPersonal = lazy(() => import("./react/pages/personal/PersonalLayout"))



const App = () => {
  return (
    <div className={styles.app}>
        <Router>
          <SectionHeader />
          <main className={styles.app_content}>
            <Routes>
              <Route path="/" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyMain />
                  </Suspense>
                } 
              />
              <Route path="/cart" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyCart />
                </Suspense>} 
              />
              <Route path="/favorites" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyFavorites />
                </Suspense>} 
              />
              <Route path='/personal' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyPersonal />
                </Suspense>
              }>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={
                  <Suspense fallback={<div>Loading...</div>}>
                      <LazyProfile />
                  </Suspense>} 
                />
                <Route path="order" element={
                  <Suspense fallback={<div>Loading...</div>}>
                      <LazyOrders />
                  </Suspense>} 
                />
              </Route>
            </Routes>
          </main>
          <SectionFooter />
        </Router>
    </div>
  )
}

export default App