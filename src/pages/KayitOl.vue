<template>
  <div class="conventionalWidth container">
    <div class=" row justify-around">
      <div style="text-align:right">
        <div class="row">
          <div class="logo"></div>
          <span class="font-bold mt-2" style="margin-left:-36px">.com</span>
        </div>
        <q-separator></q-separator>
        <span class=" ml-2 text-gray-700" style="font-size:10px;"
          >Alışverişin kalbi
        </span>
        <q-icon name="favorite" size=""></q-icon>
      </div>

      <q-btn
        flat
        class="text-purple-700 capitalize underline text-bold self-start "
        >Üye Girişi</q-btn
      >
    </div>
    <div class="kayit-form mt-12">
      <div class="row justify-between">
        <q-input
          v-model="ad"
          label-slot
          label="Ad*"
          outlined
          dense
          color="black"
          type="text"
          style="width:220px"
        />
        <q-input
          v-model="soyad"
          label="Soyad*"
          outlined
          dense
          color="black"
          type="text"
          style="width:220px"
        />
      </div>
      <q-input
        v-model="email"
        label="Email*"
        outlined
        dense
        color="black"
        class="mt-3"
        type="email"
        style="width:400"
      />
      <q-input
        v-model="sifre"
        label="Şifre*"
        outlined
        dense
        color="black"
        class="mt-3"
        type="password"
        style="width:400"
      />
      <q-input
        v-model="telefon"
        label="Cep Telefonu*"
        outlined
        dense
        color="black"
        class="mt-3"
        type="tel"
        style="width:400"
      />
      <p class="mt-3 ml-6">
        Üye olmadan önce lütfen
        <span class="text-purple-700 cursor-pointer">Aydınlatma Metni</span>’ni
        okuyunuz.
      </p>
      <q-item>
        <q-checkbox v-model="sozlesme" color="--" />

        <q-item-label class="mt-1"
          ><span class="text-purple-700 cursor-pointer">Üyelik Sözleşmesi</span>
          ve<span class="text-purple-700 cursor-pointer"> Açık Rıza Metni</span
          >'ni okudum, onaylıyorum.</q-item-label
        >
      </q-item>
      <q-item>
        <q-checkbox v-model="subscribe" color="purple" />

        <q-item-label class="mt-1"
          >Tarafıma şirketiniz ve Hahuaz Şirketleri tarafından ticari elektronik
          ileti gönderilmesi için iznim vardır.</q-item-label
        >
      </q-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ad: "",
      soyad: "",
      email: "",
      sifre: "",
      telefon: "",
      sozlesme: false,
      subscribe: false
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
  width: 450px;
  margin: 3rem auto;
  .logo {
    width: 170px;
    height: 25px;

    background-image: url("~assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
