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
                                <div class="product-box">
                                    <!-- hinh minh hoa   -->
                                    <div class="product-img">
                                        <img src="http://bizweb.dktcdn.net/thumb/medium/100/329/122/products/micro-kingston-canvas-select-16gb-01.jpg?v=1543294063490" alt="">
                                    </div>
                                    <!-- phan thong tin san pham -->
                                    <div class="product-info">
                                        <!-- ten san pham -->
                                        <h3 class="product-name"><a href="" title="SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW">
                                            SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW
                                        </a>
                                        </h3>
                                        <!-- danhgia san pham -->
                                        <div class="product-review-star">
                                            <i class="fas fa-star" ></i>
                                            <i class="fas fa-star" ></i>
                                            <i class="fas fa-star" ></i>
                                            <i class="fas fa-star" ></i>
                                            <i class="fas fa-star" ></i>
                                        </div>
                                        <!-- gia chi tiet san pham -->
                                        <div class="product-price">
                                            <div class="new-price price">1850000</div>
                                            <div class="old-price price">2000000</div>
                                        </div>
                                        <!-- option san pham -->
                                        <div class="product-action">
                                            <form action="">
                                                <button type="" class="product-action-buy">
                                                    <i class="fa fa-shopping-basket"></i>
                                                    <span>tùy chọn</span>
                                                </button>
                                                <a href="" class="product-action-view"> <i class="fa fa-eye" ></i>
                                                </a>
                                            </form>
                                        </div>
                                        <!-- het option san pham -->
                                    </div>
                                </div>
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
