<template>
  <div
      w="100%"
      h="100%"
      p="y-20px"
      flex="~"
      justify="center items-center">
    <div
        w="500px"
        h="500px"
        flex="~ col">
      <h2 text="center">Example</h2>
      <a-button type="text" @click="router.push({name: 'swiper'})">Swiper</a-button>
      <a-button type="text" @click="router.push({name: 'confetti'})">Canvas Confetti</a-button>
    </div>
  </div>

  <RouterView/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<style scoped>

</style>