<template>
    <div class="category">
        <div class="container category__list ">
            <div class="section-1">
                <div class="row">
                    <div class="col-12">
                        <div class="category__title">
                            <div class="category__title__name ">SSD</div>
                            <div class="category__title__toogle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="category__title__list ">
                                <ul class="list-category">
                                    <li class="nav_item"><a target="_blank" href="" title="SSD DĐ 120 → 128GB">SSD 120 → 128GB</a></li>
                                    <li class="nav_item about"><a target="_blank" href="" title="Xem tất cả">Xem tất cả</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9  col-12 category__down">
                        <div class="category__down__carousel">
                            <carousel v-if="isFinish">
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
    export default {
        props:{
            category: String,
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
                for(i = 0; i < length; i++){
                    tmp++;
                    if(tmp > 2){
                        tmp = 0;
                        twoProducts = [];
                    }else{
                        twoProducts.push(this.categoryProducts.data[i]);
                        if(twoProducts.length <= 2) products.push(twoProducts);
                    }
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
