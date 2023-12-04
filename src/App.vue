<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="app__inner">
    <div class="app__header">
      <Header />
    </div>
    <div class="app__container">
      <RouterView />
    </div>
    <div class="app__footer">
      <Footer />
    </div>
  </div>
</template>