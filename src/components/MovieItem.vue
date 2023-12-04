<script setup lang="ts">
import type { Movie } from '~/store/movie.ts'

const props = defineProps<Movie>()
</script>

<template>
  <div class="movie-item">
    <div class="image"
      style="background-image: url(`${props.Poster}`);">
    </div>
    <div class="title">{{ props.Title }}</div>
    <div class="movie-year">{{ props.Year }}</div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 50px;
  height: 100px;
}
</style>