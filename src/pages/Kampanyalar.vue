<template>
  <div>
    <brands></brands>
    <div class="row ">
      <div class="col-sm-8 ">
        <promotion
          v-for="(promotion, i) in promotions"
          :key="i"
          :promotionProp="promotion"
          class="my-2"
        ></promotion>
      </div>
      <div class="col-sm-4 ">
        <router-link
          to="/#"
          v-for="(sidebarPromotion, i) in sidebarPromotions"
          :key="i"
          ><sidebar-promotion
            :sidebarPromotionProp="sidebarPromotion"
          ></sidebar-promotion
        ></router-link>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 mt-12 mb-2 ">
        <strong class="border-b-2 border-black border-solid px-4 text-lg"
          >DEVAM EDEN KAMPANYALAR</strong
        >
      </div>
      <div class="col-4 p-2 " v-for="(ongoing, i) in ongoings" :key="i">
        <router-link to=""
          ><q-img :src="'/img/' + ongoing + '.jpg'" class="rounded-lg"></q-img
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Brands from "src/components/Brands";
import Promotion from "src/components/Promotion";
import SidebarPromotion from "src/components/SidebarPromotion";

export default {
  components: {
    Brands,
    Promotion,
    SidebarPromotion
  },
  data() {
    return {
      promotions: [
        {
          img: "promotion01",
          title: "DOLAR SİT AMET ",
          expires: "Son 3 Gün"
        },
        {
          img: "promotion02",
          title: "FABOULUS AKASET - 140 TL",
          expires: "Son 3 Gün"
        },
        {
          img: "promotion03",
          title: "SAMANT AMET & KESET - %30 DISCOUNT ",
          expires: "Son 1 Gün"
        }
      ],
      sidebarPromotions: ["sidebarPromotion01", "sidebarPromotion02"],
      ongoings: [
        "ongoing01",
        "ongoing02",
        "ongoing03",
        "ongoing04",
        "ongoing05",
        "ongoing06",
        "ongoing07",
        "ongoing08",
        "ongoing09"
      ]
    };
  }
};
</script>

<style></style>
