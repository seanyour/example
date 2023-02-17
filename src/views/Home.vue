<template>
  <RouterView/>
</template>

<script setup lang="ts">
import Language from 'components/Language/index.vue'
import {useI18n} from "vue-i18n";

const {t,locale} = useI18n();
</script>

<style scoped>

</style>