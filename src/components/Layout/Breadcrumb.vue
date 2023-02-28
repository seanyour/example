<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index"  :to="item.path">{{t('route.' + item.meta.title)}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">

import {type RouteLocationMatched, useRoute, useRouter} from "vue-router";
import {$ref} from "vue/macros";
import {watch} from "vue";
import {useI18n} from "vue-i18n";

const route = useRoute();
const router = useRouter();
let breadcrumbList: RouteLocationMatched[] = $ref([]);

const {t} = useI18n();

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
  let matched = route.matched.filter(el => el.meta && el.meta.title);

  if (!isDashboard(matched[0])){
    matched = ([{path: '/dashboard', meta: {title: 'dashboard'}}] as unknown as RouteLocationMatched[]).concat(matched);
  }

  breadcrumbList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
};

function isDashboard(route: any){
  const name = route && route.name;
  if (!name){
    return false;
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
}



</script>

<style scoped>

</style>