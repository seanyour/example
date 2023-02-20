<template>
  <div class="w-300px">
    <el-input v-model="value" class="foo" >
      <template #append>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="Copied"
            placement="bottom"
            :visible="visible"
            ref="tooltip"
        >
          <el-button @click="copy('.foo')" @mouseleave="visible = false">
            <template #icon>
              <div class="i-ph-clipboard-text"></div>
            </template>
          </el-button>
        </el-tooltip>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import ClipboardJS from "clipboard";
import {$ref} from "vue/macros";

const value = $ref("https://github.com/seanyour");
let visible = $ref(false);

function copy(el: string) {
  const clipboard = new ClipboardJS(el, {
    text: function () {
      return value;
    }
  });

  clipboard.on("success", function (e) {
    e.clearSelection();
    visible = true;
  });

  clipboard.on("error", function (e) {
    e.clearSelection();
  })
};


</script>

<style scoped>

</style>