<template>
  <div>
    <breadcurmb></breadcurmb>
    <product-container :isLoaded="isLoaded"></product-container>
    <product-detail :isLoaded="isLoaded"></product-detail>
  </div>
</template>
<script>
  import ProductContainer from '@/components/pages/product/ProductContainer';
  import ProductDetail from '@/components/pages/product/ProductDetail';
  import BreadCurmb from '@/components/pages/product/BreadCurmb';
  import Helpers from '@/helpers/helpers';

  export default {
    data() {
      return {
        id: '',
        slug: '',
        isLoaded: false
      }
    },
    components: {
      'product-container': ProductContainer,
      'breadcurmb': BreadCurmb,
      'product-detail':ProductDetail
    },
    mounted() {
      this.id = this.$route.params.id;
      this.slug = this.$route.params.slug;
      this.getProduct();
      this.scrollTop();
    },
    methods: {
      getProduct: function () {
        Helpers.showLoading();
        this.$store.dispatch('getSingleProduct', this.id).then(resp => {
          this.isLoaded = true;
        })
      },
      scrollTop: function () {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style src="@/assets/css/product.css"></style>

