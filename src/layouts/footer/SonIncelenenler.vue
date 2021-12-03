<template>
  <div class="container">
    <p class="text-center mt-8 mb-2  ">
      <strong class="text-lg px-2 border-solid border-b-2 border-black"
        >EN SON İNCELEDİĞİNİZ ÜRÜNLER</strong
      >
    </p>
    <q-carousel
      v-model="firstCarousel"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      :arrows="true"
      control-color="black"
      class="rounded-borders customCarousel mx-4 "
      height="310px"
    >
      <q-carousel-slide
        v-for="(lastSawProductChunk, i) in lastSawProducts"
        :key="i"
        :name="i"
        class="column no-wrap "
      >
        <div class="flex flex-row justify-around">
          <router-link
            to="/empty"
            tag="div"
            v-for="(lastSawProduct, i) in lastSawProductChunk"
            :key="i"
            class="rounded-borders cursor-pointer text-center "
            style="width:190px"
          >
            <q-img style="height:250px" contain :src="lastSawProduct.src">
              <q-badge floating color="transparent" class="mr-1">
                <div
                  class=" rounded-full bg-gray-100 shadow-xs w-8 h-8 text-center"
                >
                  <q-icon
                    name="favorite_border"
                    size="17px"
                    class="pt-4"
                    id="fav-icon"
                    color="black"
                  ></q-icon>
                </div>
              </q-badge>
            </q-img>
            <p class="font-bold  mt-2">{{ lastSawProduct.brand }}</p>
          </router-link>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as _ from "lodash";
export default {
  data() {
    return {
      firstCarousel: 0
    };
  },
  computed: {
    ...mapState({
      lastSawProducts: state => {
        const chunkedArray = _.chunk(state.tryMe.lastSawProducts, 4);
        return chunkedArray;
      }
    })
  },
  // lastSawProducts() {
  //   return this.$store.state.tryMe.lastSawProducts;
  // }

  methods: {},
  created() {}
};
</script>

<style lang="scss">
.customCarousel {
  .q-icon {
    font-size: 40px;
  }
  #fav-icon{
     transition: transform .4s linear;
     box-sizing: border-box;
    &:hover{
      color: purple  !important; 
      transform: scale(1.1);
     
    }

  }
}
</style>
