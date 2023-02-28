<template>
  <el-menu
      :default-active="activeRoute"
      :collapse="isCollapse"
  >
      <AsideItem v-for="route in router.options.routes[0].children" :key="route.path" :route="route"/>
  </el-menu>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";
import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";
import {type RouteRecordName, useRoute, useRouter} from "vue-router";
import {watch, onMounted} from "vue";
import {$ref} from "vue/macros";

const {t} = useI18n();

const app = useAppStores();
const {isCollapse} = storeToRefs(app);
const route = useRoute();
const router = useRouter();
let activeRoute: RouteRecordName = $ref("Dashboard");

watch(
    route,
    () => {
      activeRoute = route.name!;
    },
    {
      deep: true,
      immediate: true
    }
)
</script>

<style scoped>

</style>