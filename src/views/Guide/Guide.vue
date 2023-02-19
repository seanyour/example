<template>
  <el-button @click="tour.start()">{{ t("start") }}</el-button>
</template>

<script setup lang="ts">
import Shepherd from "shepherd.js";
import {useI18n} from "vue-i18n";
import 'shepherd.js/dist/css/shepherd.css';

const {t} = useI18n();

const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark shepherd-theme-custom',
    scrollTo: true
  }
})


tour.addSteps([
  {
    id: 'example-step',
    text: t('this is menu'),
    attachTo: {
      element: '.el-menu',
      on: 'right'
    },
    classes: 'menu-step',
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ],
    arrow: true
  },
  {
    text: t('this is nav'),
    attachTo: {
      element: 'nav',
      on: 'bottom'
    },
    classes: 'nav-step',
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  }
]);
</script>

<style scoped>
:global(.menu-step){
  left: 170px !important;
}

:global(.nav-step) {
  top: 65px !important;
}
</style>