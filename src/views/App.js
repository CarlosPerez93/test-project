import { useState } from 'react'
import './App.css'

import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'
function App() {
  const [auth, setAuth] = useState(null)

  return <div className="App">{auth ? <Private /> : <Public />}</div>
}

export default App
