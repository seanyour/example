<template>
  <el-dropdown @command="switchLanguage">
    <span class="el-dropdown-link">
      <div class="i-iconoir-language text-xl cursor-pointer"></div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="locale === 'cn'" command="cn">中文</el-dropdown-item>
        <el-dropdown-item :disabled="locale === 'en'" command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n();
function switchLanguage(command: string){
  switch (command) {
    case "en":
      locale.value = 'en';
      break;
    case 'cn':
      locale.value = 'cn';
      break;
  }
};



</script>

<style scoped>

</style>