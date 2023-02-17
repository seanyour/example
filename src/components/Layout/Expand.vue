<template>
  <div :class="{'rotate-icon': !isCollapse}" class="i-ep-expand text-2xl cursor-pointer" @click="toggleClick"></div>
</template>

<script setup lang="ts">

import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";

const app = useAppStores();
const {isCollapse} = storeToRefs(app);

function toggleClick(){
  app.toggle();
}

</script>

<style scoped>
.rotate-icon {
  transform: rotate(180deg);
}
</style>