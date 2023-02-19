<template>
  <div class="py-40px">
    <el-card class="box-card w-600px mx-auto">
      <template #header>
        <div class="card-header">
          <span>{{ t('switch language') }}</span>
        </div>
      </template>

      <el-radio-group v-model="radio" @change="switchLanguage">
        <el-radio v-for="(item,index) in language" :key="index" :label="item.value">{{ item.name }}</el-radio>
      </el-radio-group>
    </el-card>
  </div>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";
import {$ref} from "vue/macros";

const {t, locale} = useI18n();
const radio = $ref("en");
const language = [
  {
    name: '中文',
    value: 'cn'
  },
  {
    name: 'English',
    value: 'en'
  }
];

function switchLanguage(val: string) {
  locale.value = val;
}
</script>

<style scoped>

</style>