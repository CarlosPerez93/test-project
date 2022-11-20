import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url, options) {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null
  })

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(url, options)
        setData({ loading: false, error: false, data: await res.json() })
      } catch (err) {
        setData({ error: err, loading: false, data: null })
      }
    })()
  }, [url, options])
  return { ...data }
}
