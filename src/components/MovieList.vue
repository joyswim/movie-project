<script setup lang="ts">
// import MovieItem from '~/components/MovieItem.vue'
import { useMoviesStore } from '~/store/movie'

const moviesStore = useMoviesStore()

</script>

<template>
  <div class="container">
    <div class="movielist">
      <ul>
        <li 
          v-for="movie in moviesStore.movies"
          :key="movie.imdbID">
          {{ console.log(movie) }}
          {{ movie.title }}
          {{ movie.Year }}
          {{ movie.Poster }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  background-color: #888888;
}
</style>