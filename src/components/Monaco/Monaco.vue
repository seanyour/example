<template>
  <div ref="monacoEditor" class="h-100%"></div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import {onMounted, ref} from "vue";
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  language: {
    type: String,
    default: '',
    required: true,
  },
  theme: {
    type: String,
    default: 'vs-dark',
  },
  readonly: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits(['update:modelValue'])

const monacoEditor = ref();


onMounted(() => {
  const  editor = monaco.editor.create(
      monacoEditor.value,
      {
        value: props.modelValue,
        language: props.language,
        theme: props.theme,
        readOnly: props.readonly,
        selectOnLineNumbers: true,
      }
  );

  editor.onDidChangeModelContent(() => {
    emits('update:modelValue',editor.getValue())
  })

});
</script>

<style scoped>

</style>