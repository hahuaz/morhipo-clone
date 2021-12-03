<template>
  <div>
    <div class="flex flex-row flex-no-wrap justify-around space-x-6 my-8 benefits">
      <div >
        <q-icon name="security" 
        ></q-icon>
        <p class="font-bold p-2">Güvenli Alışveriş</p>
        <p class="small">Alışverişinizi daha güvenli yapabilmeniz için morhipo.com SSL güvenlik sertifikası kullanmaktadır.</p>
      </div>
       <div >
        <q-icon name="stars" 
        ></q-icon>
        <p class="font-bold p-2">%100 Orijinal Ürün</p>
        <p class="small">Boyner Holding güvencesiyle tüm ürünlerimiz %100 orijinal ürün garantisine sahiptir.</p>
      </div>
       <div >
        <q-icon name="reply" 
        ></q-icon>
        <p class="font-bold p-2">Ücretsiz İade</p>
        <p  class="small">Boyner Holding güvencesiyle tüm ürünlerimizi 15 gün içerisinde iade edebilirsiniz.</p>
      </div>
       <div >
        <q-icon name="storefront" 
        ></q-icon>
        <p class="font-bold p-2">Tıkla Gel ile Mağazadan Teslimat</p>
        <p class="small">Morhipo’dan satın aldığınız ürünleri Boyner & YKM Mağazaları’ndaki "Tıkla Gel" noktalarından teslim alabilirsiniz.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.benefits {
  > div {
    text-align: center;
    p.small {
    font-size: .75rem;
    color: #4f4f4f;
    }
  }
  .q-icon {
    font-size: 32px;
    color: #4f4f4f;
  }
}

</style>