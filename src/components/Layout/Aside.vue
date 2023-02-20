<template>
  <el-menu
      :default-active="activeRoute"
      router
      :collapse="isCollapse"
  >
    <el-menu-item index="/dashboard">
      <div class="i-ic-outline-dashboard text-xl px-10px"></div>
      <template #title>{{ t("route.dashboard") }}</template>
    </el-menu-item>
    <el-menu-item index="/clipboard">
      <div class="i-mdi-clipboard-check-multiple-outline text-xl px-10px"></div>
      <template #title>{{ t("route.clipboard") }}</template>
    </el-menu-item>
    <el-menu-item index="/guide">
      <div class="i-ep-guide text-xl px-10px"></div>
      <template #title>{{ t("route.guide") }}</template>
    </el-menu-item>
    <el-menu-item index="/theme">
      <div class="i-icon-park-outline-theme text-xl px-10px"></div>
      <template #title>{{ t("route.theme") }}</template>
    </el-menu-item>
    <el-menu-item index="/i18n">
      <div class="i-ion-earth text-xl px-10px"></div>
      <template #title>{{ t("route.i18n") }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";
import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {watch} from "vue";
import {$ref} from "vue/macros";

const {t} = useI18n();

const app = useAppStores();
const {isCollapse} = storeToRefs(app);
const route = useRoute();
let activeRoute = $ref("/dashboard")

watch(
    route,
    () => {
      activeRoute = route.path;
    },
    {
      deep: true,
      immediate: true
    }
)
</script>

<style scoped>

</style>