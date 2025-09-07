import React, { lazy, Suspense, useEffect } from 'react'
import styles from './styles/App.module.css'
import { createBrowserRouter, Navigate, Route, BrowserRouter as Router, RouterProvider, Routes, useSearchParams } from 'react-router-dom'
import { SectionHeader } from './react/sections/common/sectionHeader/SectionHeader'
import { SectionFooter } from './react/sections/common/sectionFooter/SectionFooter'
import PrivateRoute from './scripts/utils/PrivateRoute'
import { useSelfQuery } from './scripts/api/auth'
import { useUser } from './store/user'
import { getToken } from './scripts/utils/token'
import { ToastContainer } from 'react-toastify'
import { SectionLoading } from './react/sections/common/sectionLoading/SectionLoading'
import { useGetProductCountCartQuery } from './scripts/api/cart'

const LazyMain = lazy(() => import("./react/pages/main/Main"))
const LazyCart = lazy(() => import("./react/pages/cart/Cart"))
const LazyFavorites = lazy(() => import("./react/pages/favorites/Favorites"))
const LazyProfile = lazy(() => import("./react/pages/profile/Profile"))
const LazyOrders = lazy(() => import("./react/pages/orders/Orders"))
const LazyPersonal = lazy(() => import("./react/pages/personal/PersonalLayout"))


const App = () => {
  const {setUser} = useUser(state => state)
  const {data} = useSelfQuery({}, {
    skip: !getToken().isAuth
  })

  const {data: countCart} = useGetProductCountCartQuery({}, {
    skip: !getToken().isAuth
  })

  useEffect(() => {
    if (data) setUser(data)
  }, [data])



  return (
    <div className={styles.app}>
        <Router>
          <SectionHeader countCart={countCart || 0}/>
          <ToastContainer />
          <main className={styles.app_content}>
            <Routes>
              <Route path="/" element={
                  <Suspense fallback={<SectionLoading />}>
                    <LazyMain />
                  </Suspense>
                } 
              />
              <Route path="/cart" element={
                <Suspense fallback={<SectionLoading />}>
                  <LazyCart />
                </Suspense>} 
              />
              <Route path="/favorites" element={
                <Suspense fallback={<SectionLoading />}>
                  <LazyFavorites />
                </Suspense>} 
              />
              <Route path='/personal' element={
                <Suspense fallback={<SectionLoading />}>
                    <LazyPersonal />
                </Suspense>
              }>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={
                  <Suspense fallback={<SectionLoading />}>
                      <LazyProfile />
                  </Suspense>} 
                />
                <Route path="order" element={
                  <Suspense fallback={<SectionLoading />}>
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