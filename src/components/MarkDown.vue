<template>
  <div class="markdown">
    <div v-html="markdown.render(markdownContent)"></div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
// import { $req } from "../services/index";
import MarkdownIt from 'markdown-it'
import mdData from '@public/static/markdown测试.md?raw'
const markdown = new MarkdownIt()

let markdownContent = ref('')
markdownContent.value = mdData
</script>
  
<style lang="scss" scoped>
.markdown {
  flex: 1 auto;
  width: 200px;
  min-height: 500px;
  border: 1px solid #ccc;
}
</style>