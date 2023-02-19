<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <el-result icon="error" title="404" :sub-title="t('not found')">
      <template #extra>
        <el-button type="primary" @click="router.push('/')">{{t('back home')}}</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const router = useRouter();
const {t} = useI18n();
</script>