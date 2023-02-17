<template>
  <div class="common-layout">
    <div class="flex flex-1">
      <Aside/>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>