<template>
  <div class="side-menu">侧边菜单</div>
</template>
  
<script setup>
console.log(import.meta, 'import.meta');
const searchFiles = function () {
  const files = import.meta.glob('@public/static/*.md', { eager: true })
  // const files = import.meta.glob('@/views/*', { eager: true })
  console.log('files', files)
  const result = []
  Object.keys(files).forEach((fileName) => {
    console.log('fileName',fileName);
    result.push({
      label: fileName.replace(/(\.\/|\.vue)/g, ''),
      value: fileName.replace(/(\.\/|\.vue)/g, '')
    })
  })
  console.log('vue files', result)
}
searchFiles();
</script>
  
  <style lang="scss" scoped>
.side-menu {
  width: 200px;
  min-height: 500px;
  background: rgba(23, 234, 83, 0.5);
}
</style>