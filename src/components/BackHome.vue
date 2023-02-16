<template>
    <div class="i-ant-design-left-outlined text-xl cursor-pointer" @click="router.push('/')"></div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<style scoped></style>
