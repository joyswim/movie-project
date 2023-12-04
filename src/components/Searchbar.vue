<script setup lang="ts">
import Icon from '~/components/Icon.vue'
import { useMoviesStore } from '~/store/movie.ts'
import { ref } from 'vue'

const moviesStore = useMoviesStore()
const title = ref('')

async function searchMovies(event: MouseEvent | KeyboardEvent) {
  if (event instanceof KeyboardEvent && event.isComposing) return
  if (!title.value.trim()) return
  try {
    await moviesStore.fetchMovies({
      title: title.value
    })
  } catch(e) {
    console.error('Error! /components/Searchbar')
  }
}

</script>

<template>
  <div class="search">
    <input 
      :value="title"
      placeholder="영화 제목을 입력하세요."
      @input="title = ($event.target as HTMLInputElement).value"
      @keydown.enter = "searchMovies" />
    <div class="search_icon">
      <Icon @click="searchMovies">search</Icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-top: 50px;
  display: flex;
  align-items: center;
  position: relative;
  input {
    flex-grow: 1;
    padding: 15px;
    border: 1px solid #cccccc;
    border-radius:50px;
    &::placeholder {
      color: #bbbbbb;
    }
  }
  .search_icon {
    position: absolute;
    right: 15px;
  }
}
</style>