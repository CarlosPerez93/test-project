import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Login = lazy(() => import('../../views/Login/Login'))
const Register = lazy(() => import('../../views/Register/Register'))

const Public = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="...loading">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Public
