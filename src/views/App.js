import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'

import './App.css'

function App() {
  const token = localStorage.getItem('token')
  return <div className="App">{token ? <Private /> : <Public />}</div>
}

export default App
