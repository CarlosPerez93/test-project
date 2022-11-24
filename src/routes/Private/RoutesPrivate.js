import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../../views/Home/Home'))
const Error404 = lazy(() => import('./../../components/Error404'))

const Private = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Private

{
  /*   <Suspense
  fallback={<Spin style={{ display: 'flex', margin: 'center' }} />}
> */
}
{
  /*  </Suspense> */
}
