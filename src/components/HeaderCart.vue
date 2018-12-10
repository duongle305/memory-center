<template>
    <div class="header__main__hotline cart-infomation">
        <div class="cart-infomation__fluid"></div>
        <span><i class="fas fa-shopping-basket"></i>    </span>
        <div class="header__main__hotline-info">
            <a href="#" id="product-cart"> (<span id="count-product">10</span>) Sản phẩm</a>
            <br>
            <span class="text-cart">Giỏ hàng</span>
        </div>
        <div id="cart-context">
            <div class="cart-list">
                <ul class="cart-list__nav">
                    <li v-if="!getCartProducts.length" class="p-4">Không có sản phẩm nào</li>
                </ul>
                <div class="cart-list__action" v-if="getCartProducts.length">
                    <div class="cart-list-totalprice">
                        <span>Tổng tiền:</span>
                        <span class="price ">0</span>
                    </div>
                    <a href="">
                        <div class="cart-list-paymoney">
                            Tiến hành thanh toán
                        </div>
                    </a>
                    <a href="">
                        <div class="cart-list-gotocart">
                            Đi đế giỏ hàng
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        data(){
            return {

            };
        },
        computed:{
            ...mapGetters([
                'getCartProducts'
            ]),
        }
    }
</script>
