<template>
  <div class="flex w-100% h-100%">
    <Aside :class="isCollapse ? 'w-64px' : 'w-200px'"/>
    <main class="flex-1">
      <Header class="w-100%"/>
      <div class="content w-100% h-100%">
        <RouterView/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";

const app = useAppStores();
const {isCollapse} = storeToRefs(app);
</script>

<style scoped>
.content {
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
}
</style>