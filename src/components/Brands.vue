<template>
  <div class="container row justify-center">
    <router-link to="" v-for="(logo, index) in logos" :key="index">
      <q-img
        :src="require(`../assets/brandsLogo/${logo}`)"
        style="height: 80px; width:80px"
        contain
        img-class="rounded-full whiteBack"
        class="my-1 mx-2"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "altinyildiz.png",
        "columbia.png",
        "defacto.jpg",
        "divarese.png",
        "inci.png",
        "jack.png",
        "koton.png",
        "levis.jpg",
        "ltb.png",
        "nike.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  /deep/ .whiteBack {
    background-color: white;
  }
}
</style>
