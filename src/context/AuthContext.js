import axios from 'axios'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
const tokenStorage = localStorage.getItem('token')
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(tokenStorage)
  const navigate = useNavigate()

  const logIn = async (values) => {
    const x = await axios
      .post('http://localhost:4000/login/login', values)
      .then((res) => {
        const { token } = res.data
        localStorage.setItem('token', token)
        setAuth(tokenStorage)

        navigate('home')
      })
  }

  const logOut = () => {
    setAuth(null)
    localStorage.clear()
    navigate('/')
  }

  const onFinishFailed = (errorInfo) => console.log('Failed:', errorInfo)
  return (
    <AuthContext.Provider
      value={{ auth, logIn, onFinishFailed, logOut, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
