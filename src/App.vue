<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created() {
    // assign title to html from vue
    // document.title = "Hahuaz eCommerce";
  }
};
</script>
<style lang="scss">
.router-link-exact-active {
  background-color: white;
  font-weight: 500 !important;
}

.conventionalWidth {
  // conventional max-with
  max-width: 1170px;
  margin: 0 auto;
}
</style>
