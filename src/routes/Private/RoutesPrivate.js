import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../../views/Home/Home'))

const Private = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Spin style={{ display: 'flex', margin: 'center' }} />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Private
