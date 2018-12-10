<template>
  <div>
    <Product v-for="(product,index) in twoProducts"
             :key="index"
             :title="product.title"
             :thumbnail="product.thumbnail"
             :price="product.price"
             :discount="product.discount"
             :stars="product.stars"
             :id="product.id"
             :slug="product.slug"
    ></Product>
  </div>
</template>
<script>
  import Product from '@/components/Product'
  export default {
    props:{
      twoProducts: Array,
    },
    components:{
      Product,
    },
    data(){
      return {
      };
    }
  }
</script>
