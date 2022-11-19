import { useState } from 'react'

import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'

import './App.css'

function App() {
  const [auth, setAuth] = useState(null)

  return <div className="App">{auth ? <Public /> : <Private />}</div>
}

export default App
