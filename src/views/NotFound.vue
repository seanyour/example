<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <el-result icon="error" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <el-button type="primary" @click="router.push('/')">Back Home</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<style scoped>

</style>