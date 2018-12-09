<template>
    <carousel v-if="loaded" :items="1" :slideSpeed="2000" :nav="false" :dots="true" :loop="true" :responsiveRefreshRate="200">
      <img v-for="(image,index) in getProductImage" :src="image.url" :alt="getProductName">
    </carousel>
</template>
<script>
  import carousel from 'vue-owl-carousel';
  import {mapGetters} from 'vuex';
  import Helpers from '@/helpers/helpers';
  export default {
    props:['isLoaded'],
    components:{
      carousel
    },
    mounted(){
    },
    computed:{
      loaded(){
        if(this.isLoaded) Helpers.closeLoading();
        return this.isLoaded
      },
      ...mapGetters([
        'getProductImage',
        'getProductName'
      ])
    }
  }
</script>
