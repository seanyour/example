<template>
  <el-menu
      default-active="dashboard"
      router
      :collapse="isCollapse"
  >
    <el-menu-item index="dashboard">
      <div class="i-ic-outline-dashboard text-xl"></div>
      <template #title>{{t("route.dashboard")}}</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";
import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";
import {$ref} from "vue/macros";
import {onMounted, onUpdated} from "vue";

const {t} = useI18n();

const app = useAppStores();
const {isCollapse} = storeToRefs(app);

// const isCollapse = $ref(false);
//
// app.$patch((state) => {
//   state.isCollapse = isCollapse;
// })
// console.log(app.isCollapse)
</script>

<style scoped>

</style>