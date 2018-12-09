<template>
    <div>
        <section class="bread-crumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item breadcrumb-home"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">What do you want</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div class="container search-title">
            <div class="row">
                <div class="col-12 col-md-8">
                    <h6> Kết quả tìm thấy cho "<span>{{ $route.params.q }}</span>"</h6>
                    <p>Đã tìm thấy <span>{{ products.length }}</span> kết quả</p>
                    <form @submit.prevent="onSearch" id="search-title__form">
                        <input id="search-title__form__input" v-model="keyword" type="search" placeholder="Sản phẩm bạn muốn tìm ...">
                        <button type="submit" id="search-title__form__submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="container pt-3 search-body">
            <div class="row" v-if="isFinish">
                <div class="col-6 col-md-4 col-lg-3" v-for="(product,index) in products">
                    <Product :key="index"
                             :title="product.title"
                             :thumbnail="product.thumbnail"
                             :price="product.price"
                             :discount="product.discount"
                             :stars="product.stars"
                             :slug="product.slug"
                             :id="product.id"
                    ></Product>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Helpers from '@/helpers/helpers';
    import Product from '@/components/Product';
    import api from '@/helpers/api';
    export default {
        components:{
            Product,
        },
        data(){
            return {
                isF: false,
                searchProducts:[],
                keyword:'',
            };
        },
        created(){
            this.isF = false;
            this.fetchData();
        },
        watch:{
            '$route':'fetchData'
        },
        computed:{
            isFinish(){
                return this.isF;
            },
            products(){
                return this.searchProducts.map((item)=>{
                    item.thumbnail = Helpers.imgUrl + item.thumbnail;
                    item.stars = parseInt(Math.random()*5);
                    return item;
                });
            }
        },
        methods:{
            fetchData(){
                this.search(this.$route.params.q).then(resp=>{
                    this.isF = true;
                    Helpers.closeLoading();
                });
            },
            onSearch(){
                this.$router.push({path:'/search/q='+this.keyword});
            },
            search(keyword){
                return new Promise((resolve,reject)=>{
                    api.get('search?keyword='+keyword).then(resp=>{
                        this.searchProducts = resp.data;
                        resolve(resp);
                    }).catch(err=>{
                        reject(err);
                    })
                });
            }
        }
    }
</script>
<style src="@/assets/css/search.css"></style>
