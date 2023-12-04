import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

require('dotenv').config()
const { API_KEY } = process.env

export interface RequestBody {
  id: string
  title: string
  page: string
  plot: string
}

export default async function (request: VercelRequest, response: VercelResponse) {
  const { title, page = '1', id, plot } = request.body as Partial<RequestBody>
  const { data: reponseValue } = (
    id
      ? await axios(`https://omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=${plot}`)
      : await axios(`https://omdbapi.com/?apikey=${API_KEY}&s=${title}&page=${page}`)
  )
  response.status(200).json(reponseValue)
}