<template>
    <div class="category">
        <div class="container category__list ">
            <div class="section-1">
                <div class="row">
                    <div class="col-12">
                        <div class="category__title">
                            <div class="category__title__name ">{{ name }}</div>
                            <div class="category__title__toogle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="category__title__list ">
                                <ul class="list-category">
                                    <li class="nav_item about"><router-link :to="{path:'/category/'+category}">Xem tất cả</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9 col-12 category__down order-2">
                        <div class="category__down__carousel">
                            <carousel v-if="isFinish" :navText="['<i class=\'ti-angle-left\'></i>','<i class=\'ti-angle-right\'></i>']" :responsive="{0: {items: 1, nav: false, loop: false}, 600: { items: 2, nav: false, loop: false},  1000: { items: 3, nav: false, loop: false }, 1200: { items: 3, nav: false } }">
                                <TwoProduct :twoProducts="item" v-for="(item, index) in products" :key="index"></TwoProduct>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '@/helpers/api';
    import carousel from 'vue-owl-carousel';
    import TwoProduct from '@/components/TwoProduct';
    import Helpers from '@/helpers/helpers';
    export default {
        props:{
            category: String,
            name:String,
        },
        components:{
            carousel,
            TwoProduct,
        },
        mounted(){
            this.apiGetCategoryProducts().then(resp=>{
                this.isF = true;
                this.$emit('finish');
            });
        },
        computed:{
            isFinish(){
                return this.isF
            },
            products(){
                let products = [];
                let i = 0, length = this.categoryProducts.data.length;
                let tmp = 0;
                let twoProducts = [];
                if(length != 1){
                    for(i = 0; i < length; i++){
                        tmp++;
                        if(tmp > 2){
                            tmp = 0;
                            twoProducts = [];
                        }else{
                            this.categoryProducts.data[i].thumbnail = Helpers.imgUrl + this.categoryProducts.data[i].thumbnail;
                            this.categoryProducts.data[i].stars = parseInt(Math.random()*5);
                            twoProducts.push(this.categoryProducts.data[i]);
                            if(twoProducts.length == 2) products.push(twoProducts);
                        }
                    }
                }
                if(length%2 != 0) {
                    this.categoryProducts.data[length-1].thumbnail = Helpers.imgUrl + this.categoryProducts.data[length-1].thumbnail;
                    this.categoryProducts.data[length-1].stars = parseInt(Math.random()*5);
                    products.push([this.categoryProducts.data[length-1]]);
                }
                return products;
            }
        },
        methods:{
            apiGetCategoryProducts(){
                return new Promise((resolve, reject)=>{
                    api.get('category/'+this.category).then(resp=>{
                        this.categoryProducts = resp.data;
                        resolve(resp);
                    }).catch(err=>{
                        reject(err);
                    });
                });
            }
        },
        data(){
            return{
                categoryProducts:{
                    data:[],
                },
                isF:false,
            };
        }
    }
</script>
