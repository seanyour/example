<template>
  <RouterLink v-if="!route.children" :to="{name: route.name}" class="no-underline">
      <el-menu-item :index="route.name">
        <div class="text-xl px-10px" :class="route.meta.icon"></div>
        <template #title>{{ t("route." + route.meta.title) }}</template>
      </el-menu-item>
  </RouterLink>

  <el-sub-menu v-else :index="route.name">
    <template #title>
      <div :class="route.meta.icon" class="text-xl px-10px"></div>
      <span>{{ t("route." + route.meta.title) }}</span>
    </template>
    <AsideItem v-for="item in route.children" :key="item.path" :route="item"/>
  </el-sub-menu>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {useI18n} from "vue-i18n";

const {t} = useI18n();
defineProps(['route']);
</script>