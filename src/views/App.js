import { useState } from 'react'

import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'

import './App.css'

function App() {
  const [auth, setAuth] = useState(null)
  //setAuth(localStorage.getItem('token'))

  const token = localStorage.getItem('token')

  console.log(auth)
  return <div className="App">{token ? <Private /> : <Public />}</div>
}

export default App
