<template>
  <div class="product-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-12 product-show">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="product-show__carousel">
                <product-images :isLoaded="isLoaded"></product-images>
                <product-thumbnail :isLoaded="isLoaded"></product-thumbnail>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="product-show__info">
                <div class="product-info">
                  <!-- ten san pham -->
                  <h3 class="product-name"><a href="" :title="getProductName">
                    {{ getProductName }}
                  </a>
                  </h3>
                  <div class="product-review-star">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="product-status">
                    <span>Thương hiệu:</span>&nbsp;<span v-if="isLoaded" class="product-status__check">{{ getBrand.name }}</span>
                    |
                    <span>Tình trạng:</span>&nbsp;<span class="product-status__check">Còn hàng</span>
                  </div>
                  <!-- gia chi tiet san pham -->
                  <div class="product-price" v-if="getDiscount > 0 && isLoaded">
                    <div class="new-price price">{{ formatPrice(discountPrice(getProductPrice,getDiscount)) }}</div>
                    <div class="old-price price">{{ formatPrice(getProductPrice) }}</div>
                  </div>
                  <div class="product-price" v-else-if="isLoaded">
                    <div class="new-price price">{{ formatPrice(getProductPrice) }}</div>
                  </div>
                  <div class="product-description">
                    <ul>
                      <li>Chuẩn SSD: 2.5 inches</li>
                      <li>Tốc độ đọc: 550 MB/s</li>
                      <li>Tốc độ ghi: 520 MB/s</li>
                      <li>Bảo hành 5 năm 1 đổi 1 </li>
                    </ul>
                  </div>
                  <div class="product-gift">
                    <div class="row no-gutters">
                      <div class="product-gift__list col-12 col-md-6">
                        <div class="product-gift__list__title">
                                               <span>Vui lòng chọn quà tặng:
                                                </span>
                        </div>
                        <ul class="list-gift">
                          <li class="list-gift__item"><a href="#">
                            <img src="image/imgproduct/01-tuot-no-vit2a0e.jpg" alt=""></a>
                            <div class="img-tooltip">Tuốc-nơ-vít 31 đầu</div>
                          </li>
                          <li class="list-gift__item">
                            <a href="#">
                              <img src="image/imgproduct/02-desktop-kit2a0e.jpg" alt="">
                            </a>
                            <div class="img-tooltip">Destop Kit</div>
                          </li>
                        </ul>
                      </div>
                      <div class="product-gift__img col-12 col-md-5">
                        <div id="gift-img">
                          <img id="gift-img-show" src="image/imgproduct/02-desktop-kit2a0e.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-select-number">
                    <h6>Số lượng</h6>
                    <div class="product-select">
                      <button class="product-select__minus">-</button>
                      <input type="number" min="1" maxlength="2" value="1" class="product-select__count">
                      <button class="product-select__plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-show__action">
                <div class="row text-center ">
                  <div class=" col-12 col-lg-6 pr-2">
                    <a href="">
                      <div class="product-show__action--buy">
                        <h6>mua ngay</h6>
                        <p>giao hàng miễn phí tận nơi</p>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-lg-6">
                    <a href="">
                      <div class="product-show__action--callbuy">
                        <h6>gọi đặt hàng</h6>
                        <p>vui lòng gọi ngay (028) 7301 3878</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-show__support">
                <img src="image/imgfiles/giftb03a.png" alt="">&nbsp;Hỗ trợ lắp đặt SSD và Copy hệ điều hành sang ổ cứng mới (Miễn phí).<br>
                <img src="image/imgfiles/discount87b5.png" alt="">&nbsp;<span>Giảm 50.000đ</span> khi mua thêm <span>Caddy Bay </span>hoặc <span>Ram</span>.
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-md-none d-lg-flex right-info">
          <div class="ship-info">
            <div class="ship-info__item">
              <h6>Giao hàng miễn phí toàn quốc</h6>
              <p>cho đơn hàng giá trị từ 300.000đ trở lên
              </p>
            </div>
            <div class="ship-info__item">
              <h6>TP. HCM</h6>
              <p>nhận hàng từ 6 đến 24h sau khi đặt hàng
              </p>
            </div>
            <div class="ship-info__item">
              <h6>HÀ NỘI

              </h6>
              <p>nhận hàng từ 24 đến 48h sau khi đặt hàng
              </p>
            </div>
            <div class="ship-info__item">
              <h6>CÁC TỈNH THÀNH KHÁC</h6>
              <p>nhận hàng từ 24 đến 96h sau khi đặt hàng
              </p>
            </div>
          </div>
          <div class="like-info">
            <div class="like-info__title">Có thể bạn thích</div>
            <ul class="cart-list__nav">
              <li class="cart-list-item">
                <div class="product-box-w">
                  <!-- hinh minh hoa   -->
                  <div class="product-img">
                    <img src="image/imgproduct/860-evo-2-5-inch-06-1da48de5-3e6e-4a8d-8701-c34445584088f269.jpg" alt="">
                  </div>
                  <!-- phan thong tin san pham -->
                  <div class="product-info">
                    <!-- ten san pham -->
                    <h3 class="product-name"><a href="" title="SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW">
                      SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW
                    </a>
                    </h3>

                    <!-- gia chi tiet san pham -->
                    <div class="product-price">
                      <div class="new-price price">1.850.000</div>
                      <div class="old-price price">2.000.000</div>
                    </div>

                  </div>

                </div>
              </li>
              <li class="cart-list-item">
                <div class="product-box-w">
                  <!-- hinh minh hoa   -->
                  <div class="product-img">
                    <img src="image/imgproduct/860-evo-2-5-inch-06-1da48de5-3e6e-4a8d-8701-c34445584088f269.jpg" alt="">
                  </div>
                  <!-- phan thong tin san pham -->
                  <div class="product-info">
                    <!-- ten san pham -->
                    <h3 class="product-name"><a href="" title="SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW">
                      SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW
                    </a>
                    </h3>

                    <!-- gia chi tiet san pham -->
                    <div class="product-price">
                      <div class="new-price price">1.850.000</div>
                      <div class="old-price price">2.000.000</div>
                    </div>
                  </div>

                </div>
                <!-- het 1 san pham -->
              </li><li class="cart-list-item">
              <div class="product-box-w">
                <!-- hinh minh hoa   -->
                <div class="product-img">
                  <img src="image/imgproduct/860-evo-2-5-inch-06-1da48de5-3e6e-4a8d-8701-c34445584088f269.jpg" alt="">
                </div>
                <!-- phan thong tin san pham -->
                <div class="product-info">
                  <!-- ten san pham -->
                  <h3 class="product-name"><a href="" title="SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW">
                    SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW
                  </a>
                  </h3>

                  <!-- gia chi tiet san pham -->
                  <div class="product-price">
                    <div class="new-price price">1.850.000</div>
                    <div class="old-price price">2.000.000</div>
                  </div>

                </div>

              </div>

              <!-- het 1 san pham -->
            </li></ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductImages from '@/components/pages/product/ProductImages';
  import ProductThumbnail from '@/components/pages/product/ProductThumbnail';
  import {mapGetters} from 'vuex';

  export default {
    props:['isLoaded'],
    components:{
      'product-images': ProductImages,
      'product-thumbnail':ProductThumbnail
    },
    computed:{
      ...mapGetters([
        'getBrand',
        'getProductPrice',
        'getDiscount',
        'getProductName'
      ])
    },
    methods:{
      discountPrice(price,discount){
        return price - (price*(discount/100))
      },
      formatPrice(price){
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    }
  }
</script>
