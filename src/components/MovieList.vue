<script setup lang="ts">
import MovieItem from '~/components/MovieItem.vue'
</script>

<template>
  <div class="container">
    <div class="movielist">
      <ul>
        <li>
          <MovieItem />
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