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

                    <div class="product-colection__container">
                        <div class="row product-colection__list">
                            <div class="col-6 col-md-4 col-lg-3 product-colection__list__item">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data(){
            return {

            };
        },
        computed:{
            ...mapGetters([
                'getCategories'
            ]),

        },
        methods:{


        }
    }
</script>
<style src="@/assets/css/category.css"></style>
