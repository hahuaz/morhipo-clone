<template>
  <router-link to="" tag="div" class="cursor-pointer container hover:bg-white">
    <q-img
      :src="'/img/' + promotionProp.img + '.jpg'"
      style="width=100%; height:200px"
      cover
      class="imgCustomer "
    />
    <div class="row justify-between items-center px-6 h-10" style="">
      <p>{{ promotionProp.title }}</p>
      <p>
        <strong>{{ promotionProp.expires }}</strong>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["promotionProp"]
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 14px;
}
</style>
