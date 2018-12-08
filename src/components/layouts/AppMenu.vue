<template>
    <div class="wrap-main text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                    <div class="menu-toogle">
                        <a href="javascript:void(0);" class="menu-toogle-text">
                            <i class="fas fa-bars"></i>
                            <span>Danh mục sản phẩm</span>
                        </a>
                        <div class="list_menu_header menu_all_site col-lg-12">
                            <ul class="ul_menu site-nav-vetical">
                                <CategoryItem v-for="(category,index) in categories" :category="category" :key="index"></CategoryItem>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 d-none d-lg-block">
                    <ul class="nav list-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="#">trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">thanh toán</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">chính sách giao hàng</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">liên hệ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">XGEAR - BY MEMORYZONE
                            </a>
                            <i class="label-new">MỚI</i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import CategoryItem from '@/components/CategoryItem';
    export default {
        components:{
            CategoryItem,
        },
        mounted(){
            this.apiGetCategories();
        },
        computed:{
            ...mapGetters([
                'getCategories'
            ]),
            categories(){
                return this.$store.state.category.categories;
            }
        },
        methods:{
            ...mapActions([
                'apiGetCategories',
            ]),
            apiGetCategoryProducts(category){
                this.$router.push('/category',{slug: category});
                this.$store.dispatch('apiGetCategoryProducts',category);
            },
        },
        data(){
            return {

            };
        }
    }
</script>
<style>
    .cate-normal, .cate-hover{
        display: inline-block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        background-size: contain !important;
        background-repeat: no-repeat !important;
    }
    .cate-hover{
        opacity: 0;
    }
    li.nav_item:hover .cate-normal{
        opacity: 0;
    }
    li.nav_item:hover .cate-hover{
        opacity: 1;
    }
</style>
