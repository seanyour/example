<template>
  <div class="flex w-100% h-100%">
    <Aside/>
    <main class="w-100%">
      <Header class="w-100%"/>
      <div class="content w-100%">
        <RouterView/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.content {
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
}
</style>