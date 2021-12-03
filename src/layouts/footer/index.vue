<template>
  <div>
    <son-incelenenler class="conventionalWidth"></son-incelenenler>
    <benefits class="conventionalWidth"></benefits>
    <div class=" bg-fadedBlack ">
      <div
        class="flex flex-row flex-no-wrap space-x-24 py-8  mx-auto"
        style="width:1170px"
        id="footerNav"
      >
        <div class="w-2/12">
          <h6>Bize Ulaşın</h6>
          <router-link to="/empty"><span>İletişim</span></router-link>
          <router-link to="/empty">
            <span>Sıkça Sorulan Sorular</span>
          </router-link>
          <router-link to="/empty">
            <span>
              Gizlilik Kuralları, Site Kullanım Şartları ve İletişimler ile
              Kişisel Verilerinize İlişkin Bilgilendirme
            </span>
          </router-link>
          <router-link to="/empty"><span>Kariyer Olanakları</span></router-link>
          <router-link to="/empty"><span>İş Ortaklığı</span></router-link>
        </div>

        <div class="w-2/12">
          <h6>Hahuaz.com</h6>
          <router-link to="/empty"><span>Hakkımızda</span></router-link>
          <router-link to="/empty"><span>Taksit Seçenekleri</span></router-link>
          <router-link to="/empty"><span>Güvenli Alışveriş</span></router-link>
          <router-link to="/empty"><span>Markalar</span></router-link>
          <router-link to="/empty">
            <span
              >İşlem Rehberi - Kişisel Verilere İlişkin Bilgilendirme ve
              Gizlilik Kuralları
            </span>
          </router-link>
          <router-link to="/empty"><span>Davet Gönder</span></router-link>
          <router-link to="/empty">
            <span>Bilgi Güvenliği Politikamız</span>
          </router-link>
          <router-link to="/empty"><span>Tüm Kategoriler</span></router-link>
          <router-link to="/empty"><span>Kampanyalar</span></router-link>
        </div>
        <div>
          <h6>Bize Takip Edin</h6>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-facebook-f"
              size="18px"
              color="white"
            ></q-icon>
            <span>Facebook</span>
          </router-link>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-twitter"
              size="18px"
              color="white"
            ></q-icon>
            <span>Twitter</span>
          </router-link>
          <router-link to="/empty"
            ><q-icon
              class="pr-2"
              name="fab fa-youtube"
              size="18px"
              color="white"
            ></q-icon>
            <span>Youtube</span>
          </router-link>
          <router-link to="/empty"
            ><q-icon
              class="pr-2"
              name="fab fa-instagram"
              size="18px"
              color="white"
            ></q-icon>
            <span>Instagram</span>
          </router-link>
          <router-link to="/empty"
            ><q-icon
              class="pr-2"
              name="fab fa-pinterest"
              size="18px"
              color="white"
            ></q-icon>
            <span>Pinterest</span>
          </router-link>
        </div>
        <div>
          <h6>Mobil Alışveriş</h6>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-apple"
              size="18px"
              color="white"
            ></q-icon>
            <span>App Store</span>
          </router-link>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-android"
              size="18px"
              color="white"
            ></q-icon>
            <span>Google Play</span>
          </router-link>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-envira"
              size="18px"
              color="white"
            ></q-icon>
            <span>App Gallery</span>
          </router-link>
        </div>
        <div>
          <h6 class="invisible">SPECİAL?</h6>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="fab fa-gratipay"
              size="24px"
              color="white"
            ></q-icon>
            <span>paylaşınca güzel</span>
          </router-link>
          <router-link to="/empty">
            <q-icon
              class="pr-2"
              name="far fa-flag"
              size="24px"
              color="white"
            ></q-icon>
            <span>Türkiye Markası</span>
          </router-link>
        </div>
      </div>
      <div
        style="width:1170px"
        class="mx-auto py-4 flex flex-row justify-between"
      >
        <q-img src="/payment-logos.png" width="380px" height="100%"></q-img>
        <router-link to="/" class=" bg-myDarkGray">
          <q-img
            src="/footer-hahuaz.png"
            width="110px"
            contain
            height="100%"
          ></q-img>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SonIncelenenler from "./SonIncelenenler";
import Benefits from "./Benefits";

export default {
  components: {
    SonIncelenenler,
    Benefits
  }
};
</script>

<style scoped lang="scss">
#footerNav {
  h6 {
    color: white;
    font-weight: bolder;
  }
  a {
    margin: 8px 0;
    font-size: 0.77rem;
    color: white;
    display: block;
    &:hover > span {
      text-decoration: underline;
    }
  }
}
</style>
