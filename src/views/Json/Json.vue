<template>
<!--    <div ref="jsoneditor" style="width: 400px; height: 400px;"></div>-->
<!--  <div class="w-700px h-200px">-->
<!--    <el-upload-->
<!--        class="upload-demo"-->
<!--        drag-->
<!--        action=""-->
<!--        multiple-->
<!--    >-->
<!--      <el-icon class="el-icon&#45;&#45;upload"><div class="i-ep-upload-filled"></div></el-icon>-->
<!--      <div class="el-upload__text">-->
<!--        Drop file here or <em>click to upload</em>-->
<!--      </div>-->
<!--    </el-upload>-->
<!--  </div>-->

  <Monaco language="json" :model-value="content" ref="monacoEditor"></Monaco>

</template>

<script setup lang="ts">
import {$ref} from "vue/macros";
import Monaco from "components/Monaco/Monaco.vue";
let monacoEditor = $ref();

const content = $ref('{"name": "app", "desc": "this is app"}');

</script>