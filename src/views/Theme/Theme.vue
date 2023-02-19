<template>
  <el-color-picker v-model="color" @change="changeColor"/>
</template>

<script setup lang="ts">
import {$ref} from "vue/macros";

const color = $ref('');
function changeColor(){
  const el = document.documentElement;
  getComputedStyle(el).getPropertyValue('--el-color-primary');
  el.style.setProperty('--el-color-primary', color)
}
</script>

<style scoped>

</style>