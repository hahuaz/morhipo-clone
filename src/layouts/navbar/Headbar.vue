<template>
  <div class="headbarLarge row justify-between items-center pt-1 ">
    <div class="headbarLarge__logo "></div>
    <q-form @submit="onSubmit">
      <q-input
        standout
        v-model="searchBar"
        dense
        class="searchBar"
        outlined
        color="black"
        placeholder="Marka, kategori veya ürün ara"
        s
        style="width:400px"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-btn class="searchBtn" flat @click="onSubmit">
            ara
          </q-btn>
        </template>
      </q-input>
    </q-form>
    <div class="headbarLarge__navs row">
      <q-btn flat stack size="10px">
        <q-icon name="favorite" size="22px" class="paddingForFavIcon"> </q-icon>
        Favorilerim
      </q-btn>
      <q-btn flat stack size="10px">
        <q-icon name="shopping_basket" size="25px"> </q-icon>
        Sepetim
        <q-menu ref="sepetimMenu">
          <q-list
            class="text-medium border-solid border-gray00 border-b pl-2 pt-2"
            >Sepetim</q-list
          >
          <q-list class="text-center px-3 pt-3 pb-1">
            <q-icon name="shopping_cart" size="1.8rem"></q-icon>
            <p class="text-xs">Sepetinizde ürün bulunmamakta.</p>
            <p class="text-xs text-mygray mt-1 font-light">
              Hemen ürünleri sepete ekleyin ve hızlıca satın alın.
            </p>
            <p
              @click="hideSepetimMenu"
              class="underline pt-3 text-purple-500 cursor-pointer"
            >
              Alışverişe Devam Et
            </p>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat stack size="10px">
        <q-icon name="person" size="25px"> </q-icon>
        Hesabım
        <q-menu>
          <q-list dense separator style="min-width:160px; ">
            <q-item
              class="row justify-around items-center "
              style="font-weight:500"
            >
              <router-link to="kayit-ol" class="hover:text-purple-700"
                >Kayit Ol</router-link
              >
              <q-separator vertical inset></q-separator>
              <router-link to="" class="hover:text-purple-700"
                >Üye Girişi</router-link
              >
            </q-item>
            <q-item
              class="items-center text-gray-700 cursor-pointer hover:bg-pink-100 "
            >
              <q-icon name="shopping_cart" size="16px" class="px-2"></q-icon>
              Siparişlerim
            </q-item>
            <q-item
              class="items-center text-gray-700 cursor-pointer hover:bg-pink-100 text-center"
            >
              <q-icon name="message" size="16px" class="px-2"></q-icon>

              Mesajlarım
            </q-item>
            <q-item
              class="items-center text-gray-700 cursor-pointer hover:bg-pink-100"
            >
              <q-icon name="shopping_cart" size="16px" class="px-2"></q-icon>

              Hediye Çeklerim
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBar: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("there was a submit");
    },
    hideSepetimMenu() {
      this.$refs.sepetimMenu.hide();
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
// deep styles for child componenets
.data-sepetim-menu {
  padding: 10px !important;
}

.searchBar /deep/ {
  .q-field__control {
    padding: 0 0 0 5px;
  }
  .searchBtn {
    background-color: black;
    color: white;
    border: 1px solid black;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.q-item {
  font-size: 12px;
}
.headbarLarge {
  height: 50px;

  // override default q-btn
  .q-btn {
    font-weight: normal;
    text-transform: none;
  }

  &__logo {
    width: 170px;
    height: 25px;
    margin-top: 10px;
    background-image: url("~assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .paddingForFavIcon {
    padding-bottom: 3px;
  }
}
</style>
