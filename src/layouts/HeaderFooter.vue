<template>
  <div class="headbarmini row">
    <router-link to="/" class="navs">Kampanyalar</router-link>

    <router-link to="/bu-sezon" class="navs" tag="div">
      Bu sezon
      <q-badge align="top" color="red ">yeni</q-badge>
    </router-link>
    <q-space></q-space>
    <router-link to="" class="navs">Sipariş Takibi</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headbarmini {
  height: 35px;
  background-color: #f4f4f4;
  .navs {
    height: 35px;
    display: inline-block;
    padding: 10px 10px 0;
    font-size: 11px;
    font-weight: 300;
    cursor: pointer;
  }
  .q-badge {
    font-size: 8.5px;
    padding: 0 3px;
    position: relative;
    top: -3px;
    left: -2px;
    letter-spacing: 0.5px;
  }
}
</style>
