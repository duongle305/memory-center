<template>
    <div class="baner">
        <div class="container-fluid">
            <carousel :autoplay="true" :nav="false" :items="1" :dots="false">
                <img src="@/assets/image/slider_4.png" alt="">
                <img src="@/assets/image/slider_1.png" alt="">
            </carousel>
        </div>
        <div class="baner__scale text-center">
            <div class="container">
                <div class="row">
                    <!-- ssd -->
                    <div class=" col-12 col-md-4">
                        <div class="baner__scale__img">
                            <a href="">
                                <img src="@/assets/image/banner_1.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- the nho -->
                    <div class="col-12 col-md-4">
                        <div class="baner__scale__img">
                            <a href="">
                                <img src="@/assets/image/banner_2.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- ram -->
                    <div class="col-12 col-md-4">
                        <div class="baner__scale__right">
                            <div class="col-12">
                                <div class="baner__scale__img">
                                    <a href="">
                                        <img src="@/assets/image/banner_3.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="baner__scale__img">
                                    <a href="">
                                        <img src="@/assets/image/banner_4.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name:'AppBanner',
        components:{ carousel }
    }
</script>
