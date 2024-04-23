<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .container {
    width: 100%;
    max-width: 1040px;
    min-height: 100vh;
    margin: 0 auto;
    padding: $p-64;
  }
</style>
