<template>
  <q-layout view="lHh Lpr lFf">
    <header-footer class="conventionalWidth "></header-footer>

    <header class="border-b border-grey-100">
      <navbar class="conventionalWidth "></navbar>
    </header>
    <q-page-container class="conventionalWidth ">
      <router-view />
    </q-page-container>
    <footer>
      <custom-footer ></custom-footer>
    </footer>
  </q-layout>
</template>

<script>
import Navbar from "./navbar";
import CustomFooter from "./footer";

// seperated for backcolor grey
import HeaderFooter from "./HeaderFooter";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    HeaderFooter,
    CustomFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: #f4f4f4;
}

header {
  background-color: white;
}
</style>
