<template>
  <Tinymce v-model="content" :id="tinymceId" ref="editor"/>
  {{content}}

  <el-dialog
      v-model="insertCodeDialogVisible"
      :title="t('insert code')"
      width="30%"
  >
    <el-input type="textarea" v-model="code" :rows="3"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="insert">{{t('insert')}}</el-button>
        <el-button type="primary" @click="insertCodeDialogVisible = false">{{t('cancel')}}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Tinymce from "components/Tinymce/Tinymce.vue";
import {$ref} from "vue/macros";
import {nanoid} from "nanoid";
import tinymce from "tinymce/tinymce";
import {useI18n} from "vue-i18n";
import {useAppStores} from "stores/app";
import {storeToRefs} from "pinia";
import {ElMessage} from "element-plus";

const {t} = useI18n();
const content = $ref("");
const tinymceId = $ref("tinymce" + nanoid());

const app = useAppStores();
const {insertCodeDialogVisible} = storeToRefs(app);

let code = $ref("");

function insert(){
  if (code === "") return ElMessage.warning(t("content is null"));
  tinymce.get(tinymceId)?.insertContent(code);
  app.$patch((state) => {
    state.insertCodeDialogVisible = false;
  });
}
</script>

<style scoped>

</style>