import axios from 'axios'
import { defineStore } from 'pinia'

export interface RequestBody {
  id: string
  title: string
  page: string
  plot: string
}

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type?: string
  Poster: string
}
interface searchMoviesPayload {
  title: string,
  year?: string,
  page?: string
}
interface detailMoviePayload {
  id: string,
  plot?: 'short' | 'full'
}

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movies,
    detailMovie: {} as Movie,
    page: 1
  }),
  getters: {},
  actions: {
    async fetchMovies({ title, year, page = '1' }: searchMoviesPayload) {
      try {
        const { data } = await axios('/api/movies', {
          params: {
            title,
            page,
            year
          }
        })

        const { Search } = data
        this.movies = Search
      } catch(e) {
        console.error('Error: fetchMovies')
      }
    },
    async fetchMovieDetail({ id, plot = 'short' }: detailMoviePayload) {
      try {
        const { data } = await axios('/api/movies', {
          params: {
            id,
            plot
          }
        })
        this.detailMovie = data
      } catch(e) {
        console.error('Error: fetchMovieDetail')
      }
    }
  }
})