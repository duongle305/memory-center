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
            parseCategory(categories,parent_id = null){
                let html = ``;
                let index = 0;
                for(let cate of categories){
                    let icon = cate.parent_id == null ? '' : '';
                    if(cate.parent_id == parent_id) index++;
                    html += `<li class="nav_item">
                                    <a class="text-uppercase" target="_blank" href="#" title="${cate.title}">${cate.title}
                                    <i class="ti-angle-right drop-icon"></i>
                                    </a>
                                    ${cate.children.length > 0 ?'<ul class="ul_content_right_1 row">' +this.parseCategory(cate.children, cate.parent_id) +'</ul>': ''}
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
