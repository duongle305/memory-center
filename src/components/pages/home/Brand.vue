<template>
    <div class="producer-list">
        <div class="container">
            <div class="row">
                <div class=" col-12 producer-list__title text-center">
                    <span>CÁC NHÃN HIỆU ĐƯỢC ƯA CHUỘNG</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <carousel :margin="30" :responsiveClass="true" :autoWidth="true" :loop="true" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:5},1000:{items:7}}">
                <img src="@/assets/image/imgbrand/brand_1b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_2b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_3b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_4b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_5b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_6b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_7b341.png" alt="">
                <img src="@/assets/image/imgbrand/brand_8b341.png" alt="">
            </carousel>
        </div>
    </div>

</template>
<script>
    import carousel from 'vue-owl-carousel'
    export default {
        components:{carousel}
    }
</script>
