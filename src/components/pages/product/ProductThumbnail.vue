<template>
  <carousel id="#sync2"  v-if="loaded" :items="4" :slideSpeed="2000" :nav="true" :dots="false" :loop="true" :responsiveRefreshRate="200" style="width: 400px; transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
    <img v-for="image in getProductImage" :src="image.url" :alt="getProductName" style="width: 98.875px;">
  </carousel>
</template>
<script>
  import carousel from 'vue-owl-carousel';
  import {mapGetters} from 'vuex';
  export default {
    props:['isLoaded'],
    components:{
      carousel
    },
    computed:{
      loaded(){
        return this.isLoaded
      },
      ...mapGetters([
        'getProductImage',
        'getProductName'
      ])
    }
  }
</script>
<style>
  .product-container .product-show__carousel #sync2 {
    border: dashed 1px #005bb2;
  }
</style>
