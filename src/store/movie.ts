import axios from 'axios'
import { defineStore } from 'pinia'

interface searchMoviesPayload {
  title: string,
  year?: string,
  page?: number
}
interface detailMoviePayload {
  id: string,
  plot?: 'short' | 'full'
}

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: []
  }),
  getters: {

  },
  actions: {
    async searchMovies({ title, year = '', page = 1 }: searchMoviesPayload) {
      const path = `&s=${title}${year ? `&y=${year}` : ''}${(page >= 1 && page <= 100) ? `&page=${page}` : '&page=1'}`
      console.log(path)
      await axios.post(path)
    },
    async getDetailMovie({ id, plot }: detailMoviePayload) {
      const path = `&i=${id}&plot=${plot ? 'short' : 'full'}`
      await axios.post(path)
    }
  }
})