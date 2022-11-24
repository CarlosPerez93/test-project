import { useContext, useEffect, useState } from 'react'

import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'
import AuthContext from '../context/AuthContext'
import './App.css'

function App() {
  const { auth } = useContext(AuthContext)

  return <div className="App">{auth ? <Private /> : <Public />}</div>
}

export default App
