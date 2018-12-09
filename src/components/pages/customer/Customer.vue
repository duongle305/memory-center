<template>
  <div>
    <section class="bread-crumb">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item breadcrumb-home"><a href="#">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Khách hàng</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <div class="container customer">
      <div class="row">
        <div class="col-lg-9 col-12 customer__left-status">
          <h5>Trang khách hàng</h5>
          <span>Xin chào , <strong class="customer__name" >{{ getCustomer.name }}</strong></span>
          <table class="customer__tab-cart">
            <tr>
              <th>Đơn hàng</th>
              <th>Ngày</th>
              <th>Địa  chỉ</th>
              <th>Giá trị đơn hàng</th>
              <th>Tình trạng thanh toán</th>
              <th>Trạng thái</th>
            </tr>
            <tr v-if="getCustomer.orders && !getCustomer.orders.length">
              <td colspan="6" class="text-center empty-tab">Không có đơn hàng nào</td>
            </tr>
            <tr v-else v-for="(item, index) in getCustomer.orders">
              <td>123</td>
              <td>4/11/2018</td>
              <td></td>
              <td><span class="price">1000000</span></td>
              <td> Thanh toán khi nhận hàng</td>
              <td>Đang giao hàng</td>
            </tr>
          </table>
        </div>
        <div class="col-lg-3 col-12 customer__right-info">
          <h6 class="text-uppercase">Tài khoản của tôi</h6>
          <span>Tên tài khoản: <strong class="customer__name" >{{ getCustomer.name }}</strong></span>
          <div class="row">
            <div class="customer__ul-info col-12">
              <table>
                <tr>
                  <td class="customer__ul-info__title">
                    <i class="fa fa-home"></i>
                    Địa chỉ: {{ getCustomer.address ? getCustomer.address : 'Không' }}
                  </td>
                </tr>

                <tr>
                  <td class="customer__ul-info__title"><i class="fas fa-map-marker-alt"></i> Địa chỉ 1: {{ getCustomer.another_address }}</td>
                </tr>
                <tr>
                  <td class="customer__ul-info__title"><i class="fas fa-mobile-alt"></i> Điện thoại: {{ getCustomer.phone }}</td>
                </tr>
                <tr>
                  <td class="customer__ul-info__title"><i class="fab fa-yelp"></i> Công ty: {{ getCustomer.company }}</td>
                </tr>
                <tr>
                  <td class="customer__ul-info__title"><i class="fa fa-plane"></i> Quốc gia: {{ getCustomer.country }}</td>
                </tr>
                <tr>
                  <td class="customer__ul-info__title"><i class="fa fa-code"></i> Zip code: {{ getCustomer.zip_code }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="btn-success btn customer__add-address">Sổ địa chỉ (0)</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import Helpers from '@/helpers/helpers';
  export default {
    data(){
      return{
      };
    },
    mounted(){
      Helpers.closeLoading();
    },
    computed:{
      ...mapGetters([
        'getCustomer'
      ])
    }
  }
</script>
<style src="@/assets/css/customer.css" scoped></style>
<style src="@/assets/css/category.css" scoped></style>
