const baseUrl = 'https://peticiones.online/api'

export const ApiFetchPet = async (params) => {
  console.log(params)
  if (params)
    return await fetch(`${baseUrl}/${params}`)
      .then((res) => res.json())
      .then((res) => {
        const { results } = res

        return results
      })
}
