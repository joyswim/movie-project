import axios from 'axios'
import { VercelRequest, VercelResponse } from '@vercel/node'

const { API_KEY } = process.env

interface ResponseValue {
  Search: Search
  totalResults: string
  Response: string
}
interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const { path = '' } = req.body
  console.log(req.body)
  const { data: responseValue } = await axios({
    url: ` https://omdbapi.com/?apikey=${API_KEY}${path}`,
    method: 'GET'
  })
  res.status(200).json(responseValue)
}