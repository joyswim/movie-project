<script setup lang="ts">
  defineProps<{
    active?: boolean
  }>()
</script>

<template>
  <div class="icon">
    <span class="material-symbols-rounded">
      <slot></slot>
    </span>
  </div>
</template>
<style scoped lang="scss">
.icon {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
}
</style>