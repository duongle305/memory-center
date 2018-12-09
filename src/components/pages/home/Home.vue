<template>
    <div>
        <Banner @finish="finish"></Banner>
        <HotSale @finish="finish"></HotSale>
        <ProductCategory :category="'ssd'"></ProductCategory>
        <ProductCategory :category="'ram-may-tinh'"></ProductCategory>
        <Brand @finish="finish"></Brand>
    </div>
</template>
<script>
    import Helpers from '@/helpers/helpers';
    import Banner from '@/components/pages/home/Banner'
    import Brand from '@/components/pages/home/Brand'
    import HotSale from '@/components/pages/home/HotSale'
    import ProductCategory from '@/components/pages/home/ProductCategory'
    export default {
        components:{
            Banner,
            Brand,
            HotSale,
            ProductCategory},
      data(){
        return{
          total:0
        }
      },
      mounted(){

      },
      methods:{
        finish(){
          this.total++;
          if(this.total === 3){
            Helpers.closeLoading();
          }
        }
      }
    }
</script>
