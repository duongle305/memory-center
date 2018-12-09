<template>
  <div class="product-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-12">
          <div class="product-detail__header">
            <ul class="nav-detail">
              <li class="nav-detail__item" id="tab-1-toggle">
                <a class="nav-detail__link" href="javascript:void();">Mô tả sản phẩm</a>
                <i class="ti-angle-down nav-detail__icon"></i>
              </li>
              <li class="nav-detail__item" id="tab-2-toggle">
                <a class="nav-detail__link" href="javascript:void();">tab tùy chỉnh</a>
                <i class="ti-angle-down nav-detail__icon"></i>

              </li>
              <li class="nav-detail__item" id="tab-3-toggle">
                <a class="nav-detail__link" href="javascript:void();">Đánh giá</a>
                <i class="ti-angle-down nav-detail__icon"></i>
              </li>
            </ul>
          </div>
          <div class="product-detail__tab" v-show="load">
            <product-detail-tab-1 :isLoaded="isLoaded"></product-detail-tab-1>
            <product-detail-tab-2></product-detail-tab-2>
            <product-detail-tab-3></product-detail-tab-3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductDetailTab1 from '@/components/pages/product/ProductDetailTab1';
  import ProductDetailTab2 from '@/components/pages/product/ProductDetailTab2';
  import ProductDetailTab3 from '@/components/pages/product/ProductDetailTab3';
  export default {
    props:['isLoaded'],
    components:{
      'product-detail-tab-1':ProductDetailTab1,
      'product-detail-tab-2':ProductDetailTab2,
      'product-detail-tab-3':ProductDetailTab3,
    },
    computed:{
      load(){
        if(this.isLoaded){
          for (let i =1 ;i<=3;i++){
            let a = document.getElementById(`tab-${i}-toggle`);
            $(a).click(event=> {
              let tmp = document.getElementsByClassName(`tab-${i}`);
              let productDetailTabItem = document.getElementsByClassName('product-detail__tab__item');
              $(tmp).show();
              $(productDetailTabItem).not($(tmp)).hide();
            })
          }
        }
        return this.isLoaded;
      }
    }
  }
</script>
