import axios from 'axios'

const baseUrl = 'https://peticiones.online/api'
export class Api {
  get(url, params) {
    url = new URL(`${baseUrl}${url}`)
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      )
    return fetch(url, {
      method: 'GET'
    })
      .then((response) => {
        response.payload = response.json()
        return response
      })
      .then((response) => console.log(response, '22'))
      .catch((err) => err)
  }
}

export default new Api()
