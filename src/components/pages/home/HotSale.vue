<template>
    <div class="hot-deal">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 hot-deal__title p-3">
                    <h2><b style="color: red;">BIG SALE</b> 10.10</h2>
                </div>
            </div>
            <div class="row">
            <carousel v-if="isFinish" style="width: 100%" :margin="35" :dots="true" :responsiveClass="false" :nav="false" :responsive="{ 0: { items: 2,loop: false},600: {items: 3,loop: false},1000: {items: 4,loop: false},1200: {items: 5}}">
                <Product v-for="(product,index) in saleProducts"
                         :key="index"
                         :title="product.title"
                         :thumbnail="product.thumbnail"
                         :price="product.price"
                         :discount="product.discount"
                         :stars="product.stars"
                         :slug="product.slug"
                         :id="product.id"
                ></Product>
            </carousel>
            </div>
        </div>
    </div>
</template>
<script>
    import carousel from 'vue-owl-carousel'
    import Product from '@/components/Product'
    import {mapGetters,mapActions} from 'vuex';
    import Helpers from '@/helpers/helpers';
    export default {
        components:{
            carousel,
            Product
        },
        mounted(){
            this.$store.dispatch('apiGetSaleProducts').then(resp=>{
                this.isF = true;
            });
        },
        computed:{
            ...mapGetters([
                'getSaleProducts',
            ]),
            isFinish(){
                return this.isF;
            },
            saleProducts(){
                return this.getSaleProducts.map((item)=>{
                    item.thumbnail = Helpers.imgUrl + item.thumbnail;
                    item.stars = parseInt(Math.random()*5);
                    return item;
                });
            }
        },
        methods:{

        },
        data(){
            return{
                isF: false,
            };
        }
    }
</script>
