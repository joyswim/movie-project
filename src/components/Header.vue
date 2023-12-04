
<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header__nav">
      <div class="logo">OMDb API</div>
      <div class="home">Search</div>
      <div class="movie">Movie</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  color: white;
  font-size: 14px;
  font-weight: 100;
  .header__nav {
    display: flex;
    align-items: center;
    div {
      padding: 0 10px;
      cursor: pointer;
    }
    .logo {
      font-size: 18px;
      font-weight: 300;
    }
  }
}
</style>