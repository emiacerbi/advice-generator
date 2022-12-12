import { BASE_URL } from '../constants'

type Response = {
  slip: {
    id: number
    advice: string
  }
}

export const getQuote = async (): Promise<Response> => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}
