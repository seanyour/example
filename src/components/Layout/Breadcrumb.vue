<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to="item.path">{{t('route.' + item.meta.title)}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">

import {type RouteLocationMatched, useRoute} from "vue-router";
import {$ref} from "vue/macros";
import {watch} from "vue";
import {useI18n} from "vue-i18n";

const route = useRoute();
let breadcrumbList: RouteLocationMatched[] = $ref([]);

watch(
    route,
    () => {
      getBreadcrumb();
    },
    {
      deep: true,
      immediate: true
    }
);

function getBreadcrumb(){
  breadcrumbList = route.matched.filter(el => el.meta && el.meta.title && el.meta.breadcrumb !== false);
}

const {t} = useI18n();

console.log(route)
</script>

<style scoped>

</style>