<template>
    <div class="wrap-main text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                    <div class="menu-toogle">
                        <a href="" class="menu-toogle-text">
                            <i class="fas fa-bars"></i>
                            <span>Danh mục sản phẩm</span>
                        </a>
                        <div class="list_menu_header menu_all_site col-lg-12">
                            <ul class="ul_menu site-nav-vetical" v-html="categories">

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
    export default {
        mounted(){
            this.getCategory();
        },
        computed:{
            ...mapGetters([
                'getCategories'
            ]),
            categories(){
                return this.parseCategory(this.$store.state.category.categories);
            }
        },
        methods:{
            ...mapActions([
                'getCategory',
            ]),
            parseCategory(categories){
                let html = ``;
                let index = 0;
                for(let cate of categories){
                    let arrow = '', childClass = '', uppercase = '', icons = '';
                    if(cate.parent_id == null){
                        arrow = '<i class="ti-angle-right drop-icon"></i>';
                        uppercase = 'text-uppercase';
                        if(cate.menu_icons){
                            icons = JSON.parse(cate.menu_icons);
                        }
                    }else{
                        childClass = 'col-lg-3 col-md-3';
                    }
                    html += `<li class="nav_item ${childClass}" >
                                    <span class="cate-normal"  style="background-image: url(${icons.length ? 'http://lar-ecommerce.local/'+icons[0] :''})"></span>
                                    <span class="cate-hover"  style="background-image: url(${icons.length ? 'http://lar-ecommerce.local/'+icons[1] :''})"></span>
                                    <a href="/category/${cate.slug}" class="childClass ${uppercase}">${cate.title}
                                       ${arrow}
                                    </a>
                                    ${cate.children.length > 0 ?'<ul class="row ul_content_right_1">' +this.parseCategory(cate.children) +'</ul>': ''}
                              </li>`;
                }
                return html;
            }
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
