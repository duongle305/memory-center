<template>
    <div>
        <section class="bread-crumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item breadcrumb-home"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page"></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <section class="col-lg-9 order-2 product-colection">
                    <div class="row">
                        <div class="product-colection__title col-6">
                            <h2>USB</h2>
                        </div>
                        <div class="col-6 product-colection__sortby text-right ">
                            <ul class="product-colection__sortby__icon">
                                <li>
                                    <label id="display-list">
                                        <input id="radio" type="radio" name="radio" >
                                        <span class="btn btn-success"><i class="fa fa-th-list"></i></span>

                                    </label></li>
                                <li><label id="display-grid">
                                    <input id="radio1" type="radio" name="radio" checked >
                                    <span class="btn btn-success"><i class="fa fa-th"></i></span>
                                </label></li>
                            </ul>
                            <ul class="product-colection__sortby__list">
                                <li ><span class="val">Tên A - Z</span><i class="ti-angle-down float-right"></i>
                                    <ul class="sortby__list-lv2">
                                        <li class="sortby__list-lv2__item"><a href="">Mặc định</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">A - Z</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">Z - A</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">Giá tăng dần</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">Giá giảm dần</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">Hàng mới nhất</a></li>
                                        <li class="sortby__list-lv2__item"><a href="">Hàng cũ nhất</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="product-colection__container" v-if="isFinish">
                        <div class="row product-colection__list">
                            <span class="alert alert-info" style="width: 100%;" v-if="!products.length">Không có sản phẩm nào</span>
                            <div v-else v-for="(items,index) in products" class="col-6 col-md-4 col-lg-3 product-colection__list__item">
                                <Product v-for="(item,index2) in items" :key="index2"
                                         :title="item.title"
                                         :thumbnail="item.thumbnail"
                                         :price="item.price"
                                         :discount="item.discount"
                                         :stars="item.stars"
                                ></Product>
                            </div>
                        </div>
                    </div>
                </section>
                <aside class="col-lg-3 product-filter">
                    <div class="product-filter__open">
                    <span>
                        <i class="fa fa-align-right"></i>
                    </span>
                    </div>
                    <div class="product-filter__close">
                    <span>
                        <i class="fa fa-times"></i>
                    </span>
                    </div>
                    <div class="aside__filter">
                        <div class="">
                            <h2 class="aside__filter__title">Thương hiệu</h2>
                            <form action="" id="formsearch-category">
                                <input id="searchbox-category" type="search" placeholder="Lọc theo thương hiệu">
                                <button type="submit" id="submit-category" class="btn btn-success"><i class="fas fa-search"></i></button>
                            </form>
                            <ul class="aside__filter__checklist">
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">Corsair</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">Kingstone</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">Lexar</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">Samsung</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">Sandisk</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <h2 class="aside__filter__title">Giá sản phẩm</h2>
                        <div id="slider-range"></div>
                        <div class="aside__filter__price">
                            <input  class="money" id="min-value-filter" type="text" readonly>
                            <i class="ti-minus"></i>
                            <input class="money" id="max-value-filter" type="text" readonly>
                            <button class="aside__filter__price-button">Lọc giá</button>
                        </div>
                        <div class="">
                            <h2 class="aside__filter__title">Dung lượng</h2>

                            <ul class="aside__filter__checklist">
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">16 GB</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">32 GB</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">64 GB</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">128 GB</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">256 GB</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="checklist-item">
                                        <input type="checkbox" class="checkbox" value="Corsair">
                                        <span class="checkmark"></span>
                                        <span class="checktitle">512 GB</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import Product from '@/components/Product';
    import Helpers from '@/helpers/helpers';
    import api from '@/helpers/api';
    export default {
        components:{
            Product
        },
        mounted(){

        },
        created() {
            this.isF = false;
            this.fecthData();
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fecthData'
        },
        data(){
            return {
                categoryProducts:{
                    data:[],
                },
                isF: false,
            };
        },
        computed:{
            ...mapGetters([
                'getCategories',
            ]),
            isFinish(){
                return this.isF;
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
                        this.categoryProducts.data[i].thumbnail = Helpers.imgUrl + this.categoryProducts.data[i].thumbnail;
                        this.categoryProducts.data[i].stars = parseInt(Math.random()*5);
                        twoProducts.push(this.categoryProducts.data[i]);
                        if(twoProducts.length == 2) products.push(twoProducts);
                    }
                }
                return products;
            }
        },
        methods:{
            fecthData(){
                this.apiGetCategoryProducts(this.$route.params.slug).then(resp=>{
                    this.isF = true;
                    Helpers.closeLoading();
                });
            },
            apiGetCategoryProducts(category) {
                this.categoryProducts = {
                    data:[],
                };
                return new Promise((resolve, reject)=>{
                    api.get('/category/'+category).then(resp=>{
                        this.categoryProducts = resp.data;
                        resolve(resp);
                    }).catch(err=>{
                        reject(err);
                    })
                });
            }
        }
    }
</script>
<style src="@/assets/css/category.css"></style>
