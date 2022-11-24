import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('../../views/Login/Login'))
const Register = lazy(() => import('../../views/Register/Register'))
const Error404 = lazy(() => import('./../../components/Error404'))

const Public = () => {
  return (
    <Suspense fallback={<Spin style={{ display: 'flex', margin: 'center' }} />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="404" element={<Error404 />} />
      </Routes>
    </Suspense>
  )
}

export default Public
