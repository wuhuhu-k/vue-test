<template>
  <div class="home">
    <PortalHeader />
    <div class="main">
      <SideMenu></SideMenu>
      <MarkDown></MarkDown>
    </div>
  </div>
</template>

<script setup>
import PortalHeader from '../components/PortalHeader.vue'
import SideMenu from '../components/SideMenu.vue'
import MarkDown from '../components/MarkDown.vue'
</script>

<style lang="scss" scoped>
.home {
  .main {
    width: 100%;
    display: flex;
    .content {
      flex: 1 auto;
      background: rgba(242, 192, 192, 0.5);
    }
  }
}
</style>