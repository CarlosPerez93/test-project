import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
export const getUsers = async () =>
  axios.get('/users').then((res) => {
    console.log(res.data)
  })
