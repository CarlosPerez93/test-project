import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../../views/Home/Home'))

const Private = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="...loading">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Private
